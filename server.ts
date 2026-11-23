import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  app.use(express.json());

  // Initialize Gemini AI if key is present
  const apiKey = process.env.GEMINI_API_KEY;
  const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

  // API endpoint for AI Smile Consultation
  app.post('/api/ai-consultation', async (req, res) => {
    try {
      const { prompt, concerns, goals } = req.body;
      
      if (!ai) {
        // Fallback simulation if API key is not yet configured
        return res.json({
          success: true,
          analysis: `Based on your goal ("${goals || prompt || 'General smile enhancement'}"), our clinical AI recommends a comprehensive evaluation. Key focus areas include enamel health, bite alignment, and aesthetic contouring. Suggested treatments: Professional Zoom Whitening or Custom Porcelain Veneers for optimal symmetry.`,
          recommendedTreatments: ['Comprehensive Examination', 'Cosmetic Smile Design', 'Professional Ultrasonic Cleaning'],
          estimatedDuration: '1-2 visits',
          confidence: '95%'
        });
      }

      const model = 'gemini-2.5-flash';
      const systemInstruction = `You are an expert AI Dental Consultant for Aura Dental Studio, a luxury modern dental clinic. 
      Analyze the patient's dental goals, concerns, or symptoms provided.
      Provide a professional, reassuring, and medically sound consultation summary, recommended treatments, estimated duration, and clinical advice.
      Always include a polite reminder that this is an AI preliminary estimate and an in-person clinical examination by one of our doctors is required for a definitive treatment plan.
      Return valid JSON in this exact structure:
      {
        "analysis": "string (detailed professional assessment)",
        "recommendedTreatments": ["string"],
        "estimatedDuration": "string",
        "confidence": "string"
      }`;

      const response = await ai.models.generateContent({
        model,
        contents: `Patient concerns/goals: ${prompt || goals || concerns}`,
        config: {
          systemInstruction,
          responseMimeType: 'application/json'
        }
      });

      const resultText = response.text || '{}';
      const data = JSON.parse(resultText);
      res.json({ success: true, ...data });
    } catch (error: any) {
      console.error('Gemini API Error:', error);
      res.status(500).json({ 
        success: false, 
        error: error.message || 'Failed to generate AI consultation.',
        analysis: 'We encountered an error generating your custom AI smile consultation. Our clinical team is ready to evaluate your smile in person during your complimentary consultation!',
        recommendedTreatments: ['Comprehensive Dental Exam'],
        estimatedDuration: '45 mins',
        confidence: '90%'
      });
    }
  });

  // Vite middleware for development
  const isProduction = process.env.NODE_ENV === 'production';
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: process.env.DISABLE_HMR !== 'true' }
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  const port = Number(process.env.PORT || 3000);
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

startServer();
