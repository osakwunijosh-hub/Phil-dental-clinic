import React, { useState, useEffect } from 'react';
import { 
  Phone, Calendar, Clock, MapPin, Shield, Star, Award, CheckCircle, 
  Sparkles, Stethoscope, Users, ChevronRight, X, Menu, AlertCircle, 
  Heart, ArrowRight, Check, Smile, DollarSign, Search, MessageSquare,
  Activity, HelpCircle, FileText, ChevronDown, CheckSquare
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('Scaling and Polishing');
  const [serviceModal, setServiceModal] = useState<any>(null);
  const [activeTabBeforeAfter, setActiveTabBeforeAfter] = useState('whitening');

  // Booking Wizard State
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: 'Scaling and Polishing',
    doctor: 'Dr. Philip & Specialist Team',
    date: '2026-11-25',
    time: '10:00 AM',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [bookingSuccessId, setBookingSuccessId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const randomId = 'PHIL-' + Math.floor(100000 + Math.random() * 900000);
    setBookingSuccessId(randomId);
    setBookingStep(5);
  };

  const servicesList = [
    {
      id: 'whitening',
      title: 'Teeth Whitening',
      subtitle: 'Advanced professional whitening to lift deep stains and brighten your radiant smile.',
      icon: <Sparkles className="w-6 h-6 text-teal-600" />,
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce6395?auto=format&fit=crop&q=80&w=800',
      duration: '45 - 60 Mins',
      recovery: 'None',
      details: 'Safe, fast, and effective in-office whitening treatment that removes years of staining and brightened smiles instantly.'
    },
    {
      id: 'cleaning',
      title: 'Scaling and Polishing',
      subtitle: 'Thorough ultrasonic plaque and tartar removal for healthy gums and fresh breath.',
      icon: <Shield className="w-6 h-6 text-teal-600" />,
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
      duration: '30 - 45 Mins',
      recovery: 'None',
      details: 'Essential preventive care to eliminate stubborn calculus, prevent periodontal disease, and polish teeth to a smooth shine.'
    },
    {
      id: 'extraction',
      title: 'Tooth Extraction',
      subtitle: 'Painless, gentle extractions performed under local anesthesia with utmost care.',
      icon: <Activity className="w-6 h-6 text-teal-600" />,
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
      duration: '30 - 45 Mins',
      recovery: '1 - 3 Days',
      details: 'Safe removal of severely decayed, fractured, or impacted teeth with expert post-op guidance for swift healing.'
    },
    {
      id: 'filling',
      title: 'Tooth Filling',
      subtitle: 'Tooth-colored composite restorations to repair cavities and restore tooth integrity.',
      icon: <Stethoscope className="w-6 h-6 text-teal-600" />,
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
      duration: '30 Mins',
      recovery: 'Immediate',
      details: 'Durable aesthetic composite fillings matched perfectly to your natural tooth shade, restoring strength and appearance.'
    },
    {
      id: 'crowns',
      title: 'Crowns',
      subtitle: 'Custom dental caps designed to restore damaged, weakened, or root-treated teeth.',
      icon: <Smile className="w-6 h-6 text-teal-600" />,
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800',
      duration: '2 Visits',
      recovery: 'None',
      details: 'High-strength porcelain or zirconia crowns that cover and protect compromised teeth while looking completely natural.'
    },
    {
      id: 'bridges',
      title: 'Bridges',
      subtitle: 'Fixed dental prosthetics to seamlessly replace one or more missing teeth.',
      icon: <Shield className="w-6 h-6 text-teal-600" />,
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
      duration: '2-3 Visits',
      recovery: '1 Day',
      details: 'Restore your complete chewing function and beautiful smile alignment with reliable, custom-crafted dental bridges.'
    },
    {
      id: 'ortho',
      title: 'Orthodontic Treatment (Braces)',
      subtitle: 'Metal and ceramic braces to align crooked teeth and correct misaligned bites.',
      icon: <Sparkles className="w-6 h-6 text-teal-600" />,
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
      duration: '12 - 24 Months',
      recovery: 'None',
      details: 'Comprehensive orthodontic correction for children and adults to achieve harmonious facial symmetry and perfect dental alignment.'
    },
    {
      id: 'consultation',
      title: 'Special Consultation',
      subtitle: 'Comprehensive clinical evaluation, diagnosis, and personalized treatment planning.',
      icon: <Users className="w-6 h-6 text-teal-600" />,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
      duration: '30 Mins',
      recovery: 'None',
      details: 'One-on-one expert consultation with our lead dental surgeons to examine your oral health and discuss the ideal care roadmap.'
    },
    {
      id: 'rootcanal',
      title: 'Root Canal Therapy',
      subtitle: 'Painless endodontic treatment to save infected or severely damaged teeth.',
      icon: <Activity className="w-6 h-6 text-teal-600" />,
      image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=800',
      duration: '1 - 2 Visits',
      recovery: '1 - 2 Days',
      details: 'Advanced root canal therapy removes infected pulp painlessly, relieving toothache and preserving your natural tooth structure.'
    }
  ];

  const beforeAfterData: any = {
    whitening: {
      title: 'Professional Teeth Whitening',
      beforeImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
      afterImg: 'https://images.unsplash.com/photo-1606811841689-23dfddce6395?auto=format&fit=crop&q=80&w=800',
      description: 'Removed heavy coffee and tea stains in a single 60-minute in-office whitening session.'
    },
    ortho: {
      title: 'Orthodontic Braces Alignment',
      beforeImg: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
      afterImg: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
      description: 'Corrected crowded lower and upper teeth with fixed braces, achieving a picture-perfect bite.'
    },
    crowns: {
      title: 'Porcelain Crown Restoration',
      beforeImg: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800',
      afterImg: 'https://images.unsplash.com/photo-1606811841689-23dfddce6395?auto=format&fit=crop&q=80&w=800',
      description: 'Restored a fractured molar with a high-durability, natural-looking ceramic crown.'
    }
  };

  const reviewsList = [
    {
      name: 'Oluwaseun Adebayo',
      rating: 5,
      date: '1 week ago',
      text: 'Phil Dental Clinic at Ikeja is simply the best! I went in for scaling and polishing, and the dentist was extremely gentle and professional. The clinic is neat, serene, and very welcoming.',
      treatment: 'Scaling & Polishing'
    },
    {
      name: 'Chinyere Okonkwo',
      rating: 5,
      date: '3 weeks ago',
      text: 'Had a painless tooth extraction here. Dr. Philip explained every single step and made me feel at ease. Highly recommend them to anyone looking for quality dental care in Ikeja, Lagos.',
      treatment: 'Tooth Extraction'
    },
    {
      name: 'Babatunde Adeleke',
      rating: 5,
      date: '1 month ago',
      text: 'Wonderful experience getting my teeth whitened before my wedding. The results are phenomenal and everyone has been complimenting my smile! Thank you Phil Dental Clinic.',
      treatment: 'Teeth Whitening'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-teal-500 selection:text-white">
      
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-slate-900 text-slate-200 px-4 py-2 text-xs md:text-sm font-medium flex flex-col sm:flex-row justify-between items-center gap-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="bg-teal-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider animate-pulse">Open Today</span>
          <span>Phil Dental Clinic | Ste B1 Lagos Airport Hotel, Ekiti Plaza, Ikeja</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:08066310546" className="flex items-center gap-1 hover:text-teal-400 transition">
            <Phone className="w-3.5 h-3.5 text-teal-400" />
            <span>0806 631 0546</span>
          </a>
          <span className="hidden md:inline text-slate-600">|</span>
          <a 
            href="https://wa.me/2348066310546?text=Hello%20Phil%20Dental%20Clinic,%20I%20would%20like%20to%20book%20an%20appointment." 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition font-semibold"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Chat</span>
          </a>
        </div>
      </div>

      {/* HEADER / NAVBAR */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* LOGO */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/20 group-hover:scale-105 transition">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-slate-900 block leading-none">PHIL DENTAL</span>
              <span className="text-[10px] tracking-[0.25em] font-semibold text-teal-600 uppercase block mt-0.5">Clinic • Ikeja Lagos</span>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-teal-600 transition">Services</a>
            <a href="#gallery" className="hover:text-teal-600 transition">Smile Gallery</a>
            <a href="#reviews" className="hover:text-teal-600 transition">Reviews</a>
            <a href="#contact" className="hover:text-teal-600 transition">Contact & Location</a>
          </nav>

          {/* RIGHT CTA BUTTONS */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="https://wa.me/2348066310546?text=Hello%20Phil%20Dental%20Clinic,%20I%20would%20like%20to%20book%20an%20appointment." 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3.5 py-2.5 rounded-xl transition border border-emerald-200"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
            <button 
              onClick={() => { setBookingStep(1); setBookingModalOpen(true); }}
              className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-lg shadow-teal-600/20 hover:shadow-teal-600/30 transition transform hover:-translate-y-0.5 flex items-center gap-2 text-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 text-slate-700 hover:bg-slate-100 rounded-xl transition"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl py-6 px-6 flex flex-col gap-4 animate-fadeIn">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 hover:text-teal-600 py-1 border-b border-slate-100"
            >
              Services
            </a>
            <a 
              href="#gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 hover:text-teal-600 py-1 border-b border-slate-100"
            >
              Smile Gallery
            </a>
            <a 
              href="#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 hover:text-teal-600 py-1 border-b border-slate-100"
            >
              Reviews
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 hover:text-teal-600 py-1"
            >
              Contact & Location
            </a>
            <div className="pt-2 flex flex-col gap-3">
              <a 
                href="https://wa.me/2348066310546?text=Hello%20Phil%20Dental%20Clinic,%20I%20would%20like%20to%20book%20an%20appointment." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 text-white font-medium py-3 rounded-xl shadow-lg flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp (08066310546)</span>
              </a>
              <button 
                onClick={() => { setMobileMenuOpen(false); setBookingStep(1); setBookingModalOpen(true); }}
                className="w-full bg-teal-600 text-white font-medium py-3 rounded-xl shadow-lg flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Online</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION WITH IMAGE */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-gradient-to-b from-teal-50/55 via-slate-50 to-slate-100">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-teal-200/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-teal-100/80 text-teal-800 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>Premier Dental Care in Ikeja, Lagos</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.15]">
                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600 font-serif italic">Phil Dental Clinic</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Your trusted destination for painless tooth extractions, professional teeth whitening, scaling & polishing, braces, root canals, and comprehensive oral care at Lagos Airport Hotel.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button 
                  onClick={() => { setBookingStep(1); setBookingModalOpen(true); }}
                  className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-medium px-8 py-4 rounded-2xl shadow-xl shadow-slate-900/10 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-3 text-base"
                >
                  <Calendar className="w-5 h-5 text-teal-400" />
                  <span>Book Appointment</span>
                </button>
                <a 
                  href="https://wa.me/2348066310546?text=Hello%20Phil%20Dental%20Clinic,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-4 rounded-2xl shadow-xl shadow-emerald-600/20 transition flex items-center justify-center gap-2 text-base group"
                >
                  <MessageSquare className="w-5 h-5 group-hover:scale-110 transition" />
                  <span>WhatsApp: 08066310546</span>
                </a>
              </div>

              {/* Address Quick Badge */}
              <div className="pt-6 border-t border-slate-200/80 flex items-center justify-center lg:justify-start gap-3 text-slate-600 text-xs sm:text-sm">
                <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Ste B1 Lagos Airport Hotel, Ekiti Plaza, 111 Awolowo Way, Ikeja, Lagos</span>
              </div>

            </div>

            {/* HERO IMAGE */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-600 to-emerald-500 rounded-3xl blur-xl opacity-35"></div>
                <div className="relative bg-white p-3 rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=900" 
                    alt="Phil Dental Clinic Interior" 
                    className="rounded-2xl object-cover w-full h-[380px] sm:h-[440px]"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold">
                        <Stethoscope className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900">Expert Dental Surgeons</div>
                        <div className="text-[11px] text-slate-500">Gentle & Painless Care</div>
                      </div>
                    </div>
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full">Open Now</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-teal-600 text-xs font-bold uppercase tracking-widest bg-teal-100 px-3.5 py-1 rounded-full">Our Treatments</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Comprehensive Dental Services in Ikeja, Lagos
            </h2>
            <p className="text-slate-600 text-base">
              From routine cleaning to advanced root canal therapy and orthodontic braces, we provide gentle, expert care for you and your family.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-200/80 hover:shadow-2xl hover:border-teal-500/40 transition duration-300 flex flex-col group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2.5 rounded-2xl shadow-md text-teal-600">
                    {service.icon}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-teal-600 transition">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-xs text-slate-500 font-medium">
                      Duration: <span className="text-slate-900 font-semibold">{service.duration}</span>
                    </div>
                    <button 
                      onClick={() => setServiceModal(service)}
                      className="text-teal-600 hover:text-teal-700 font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition"
                    >
                      <span>Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BEFORE & AFTER SMILE GALLERY */}
      <section id="gallery" className="py-24 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-teal-600 text-xs font-bold uppercase tracking-widest bg-teal-100 px-3.5 py-1 rounded-full">Patient Transformations</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Before & After Smile Gallery
            </h2>
            <p className="text-slate-600 text-base">
              Real results from our patients at Phil Dental Clinic, Lagos.
            </p>
            
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {[
                { id: 'whitening', label: 'Teeth Whitening' },
                { id: 'ortho', label: 'Braces Alignment' },
                { id: 'crowns', label: 'Crown Restoration' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabBeforeAfter(tab.id)}
                  className={`px-5 py-2.5 rounded-xl font-medium text-sm transition ${activeTabBeforeAfter === tab.id ? 'bg-teal-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 max-w-5xl mx-auto shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-100 px-3 py-1 rounded-full">Phil Dental Case</span>
                <h3 className="font-serif text-2xl font-bold text-slate-900">{beforeAfterData[activeTabBeforeAfter].title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {beforeAfterData[activeTabBeforeAfter].description}
                </p>
                <div className="pt-4 flex items-center gap-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span>Painless Procedure</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span>Expert Dental Surgeons</span>
                  </div>
                </div>
                <div className="pt-4">
                  <button 
                    onClick={() => { setBookingStep(1); setBookingModalOpen(true); }}
                    className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3 rounded-xl transition flex items-center gap-2 text-sm"
                  >
                    <span>Book Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <img src={beforeAfterData[activeTabBeforeAfter].beforeImg} alt="Before Treatment" className="w-full h-64 object-cover" />
                  <span className="absolute bottom-3 left-3 bg-slate-900/80 text-white text-xs font-bold px-3 py-1 rounded-lg backdrop-blur-sm">Before</span>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <img src={beforeAfterData[activeTabBeforeAfter].afterImg} alt="After Treatment" className="w-full h-64 object-cover" />
                  <span className="absolute bottom-3 left-3 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-lg">After</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PATIENT REVIEWS */}
      <section id="reviews" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-teal-600 text-xs font-bold uppercase tracking-widest bg-teal-100 px-3.5 py-1 rounded-full">Patient Testimonials</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Trusted by Patients Across Lagos
            </h2>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
              ))}
              <span className="ml-2 font-bold text-slate-900">4.9 / 5.0</span>
              <span className="text-slate-500 ml-1">(Verified Ikeja Reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviewsList.map((rev, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full">{rev.treatment}</span>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{rev.name}</div>
                    <div className="text-xs text-slate-400">Ikeja, Lagos • {rev.date}</div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LOCATION & CONTACT SECTION */}
      <section id="contact" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-teal-600 text-xs font-bold uppercase tracking-widest bg-teal-100 px-3.5 py-1 rounded-full">Visit Our Clinic</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Phil Dental Clinic, Ikeja
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Conveniently located at Lagos Airport Hotel premises with secure parking and welcoming patient care.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Full Address</h4>
                    <p className="text-slate-600 text-sm">Ste B1 Lagos Airport Hotel, Ekiti Plaza<br />111 Awolowo Way, Ikeja, Lagos</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Opening Hours</h4>
                    <p className="text-slate-600 text-sm">Monday – Saturday: 8:30 AM – 6:00 PM<br />Sunday: Emergency & By Appointment</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Phone & WhatsApp</h4>
                    <p className="text-slate-600 text-sm">0806 631 0546<br />
                      <a href="https://wa.me/2348066310546?text=Hello%20Phil%20Dental%20Clinic," target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-semibold hover:underline">
                        Click to chat on WhatsApp
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* QUICK INQUIRY FORM */}
            <div className="lg:col-span-6 bg-slate-900 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden space-y-6">
              <h3 className="font-serif text-2xl font-bold text-white">Book or Inquire via WhatsApp</h3>
              <p className="text-slate-400 text-sm">Send us a direct message for immediate appointment booking or inquiries.</p>

              <form onSubmit={(e) => { 
                e.preventDefault(); 
                alert('Redirecting to WhatsApp chat with Phil Dental Clinic...');
                window.open('https://wa.me/2348066310546?text=Hello%20Phil%20Dental%20Clinic,%20I%20would%20like%20to%20book%20an%20appointment.', '_blank');
              }} className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    required 
                    placeholder="Your Full Name" 
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="tel" 
                    required 
                    placeholder="Phone Number / WhatsApp" 
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500"
                  />
                  <select 
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3.5 text-white text-sm focus:outline-none focus:border-teal-500"
                  >
                    <option>Scaling and Polishing</option>
                    <option>Teeth Whitening</option>
                    <option>Tooth Extraction</option>
                    <option>Tooth Filling</option>
                    <option>Crowns & Bridges</option>
                    <option>Orthodontic Braces</option>
                    <option>Root Canal Therapy</option>
                    <option>Special Consultation</option>
                  </select>
                </div>
                <div>
                  <textarea 
                    rows={3} 
                    required 
                    placeholder="Describe your dental needs..." 
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl transition shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Send via WhatsApp (08066310546)</span>
                </button>
              </form>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            <div className="space-y-4 md:col-span-1">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="font-serif text-xl font-bold text-white tracking-tight">PHIL DENTAL</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ste B1 Lagos Airport Hotel, Ekiti Plaza, 111 Awolowo Way, Ikeja, Lagos. Professional, gentle, and reliable dental care.
              </p>
            </div>

            <div>
              <h5 className="text-white font-bold text-sm mb-4">Core Services</h5>
              <ul className="space-y-2 text-xs">
                <li><a href="#services" className="hover:text-teal-400 transition">Teeth Whitening</a></li>
                <li><a href="#services" className="hover:text-teal-400 transition">Scaling and Polishing</a></li>
                <li><a href="#services" className="hover:text-teal-400 transition">Tooth Extraction</a></li>
                <li><a href="#services" className="hover:text-teal-400 transition">Root Canal Therapy</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold text-sm mb-4">More Services</h5>
              <ul className="space-y-2 text-xs">
                <li><a href="#services" className="hover:text-teal-400 transition">Orthodontic Braces</a></li>
                <li><a href="#services" className="hover:text-teal-400 transition">Crowns & Bridges</a></li>
                <li><a href="#services" className="hover:text-teal-400 transition">Tooth Filling</a></li>
                <li><a href="#services" className="hover:text-teal-400 transition">Special Consultation</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold text-sm mb-4">WhatsApp Contact</h5>
              <p className="text-xs text-slate-400 mb-3">Instant booking & enquiries on WhatsApp:</p>
              <a href="https://wa.me/2348066310546?text=Hello%20Phil%20Dental%20Clinic," target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-emerald-700 transition">
                <MessageSquare className="w-4 h-4" />
                <span>0806 631 0546</span>
              </a>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <div>© 2026 Phil Dental Clinic, Ikeja Lagos. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400 transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* SERVICE DETAIL MODAL */}
      {serviceModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl animate-scaleUp">
            <div className="relative h-48">
              <img src={serviceModal.image} alt={serviceModal.title} className="w-full h-full object-cover" />
              <button 
                onClick={() => setServiceModal(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 sm:p-8 space-y-4">
              <h3 className="font-serif text-2xl font-bold text-slate-900">{serviceModal.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{serviceModal.details}</p>
              
              <div className="grid grid-cols-2 gap-4 py-3 border-y border-slate-100 text-xs text-slate-600">
                <div>Typical Duration: <span className="font-bold text-slate-900">{serviceModal.duration}</span></div>
                <div>Recovery Time: <span className="font-bold text-slate-900">{serviceModal.recovery}</span></div>
              </div>

              <div className="pt-2 flex gap-3">
                <button 
                  onClick={() => {
                    setSelectedServiceForBooking(serviceModal.title);
                    setServiceModal(null);
                    setBookingStep(1);
                    setBookingModalOpen(true);
                  }}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-xl transition text-sm flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book This Service</span>
                </button>
                <button 
                  onClick={() => setServiceModal(null)}
                  className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl text-sm transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* APPOINTMENT BOOKING WIZARD MODAL */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl my-8 animate-scaleUp">
            
            <div className="bg-slate-900 text-white p-6 flex items-center justify-between">
              <div>
                <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">Phil Dental Clinic • Ikeja</span>
                <h3 className="font-serif text-xl font-bold">Appointment Booking Wizard</h3>
              </div>
              <button 
                onClick={() => setBookingModalOpen(false)}
                className="p-2 text-slate-400 hover:text-white rounded-xl transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {bookingStep < 5 && (
              <div className="px-6 pt-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                <div className={`pb-3 border-b-2 ${bookingStep === 1 ? 'border-teal-600 text-teal-600 font-bold' : 'border-transparent'}`}>1. Service</div>
                <div className={`pb-3 border-b-2 ${bookingStep === 2 ? 'border-teal-600 text-teal-600 font-bold' : 'border-transparent'}`}>2. Date & Time</div>
                <div className={`pb-3 border-b-2 ${bookingStep === 3 ? 'border-teal-600 text-teal-600 font-bold' : 'border-transparent'}`}>3. Patient Info</div>
              </div>
            )}

            <div className="p-6 sm:p-8">
              
              {bookingStep === 1 && (
                <div className="space-y-4">
                  <h4 className="font-serif text-lg font-bold text-slate-900">Select Service</h4>
                  <div className="grid grid-cols-1 gap-3 max-h-72 overflow-y-auto pr-1">
                    {[
                      'Teeth Whitening',
                      'Scaling and Polishing',
                      'Tooth Extraction',
                      'Tooth Filling',
                      'Crowns',
                      'Bridges',
                      'Orthodontic Treatment (Braces)',
                      'Special Consultation',
                      'Root Canal Therapy'
                    ].map((srv, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setBookingData({ ...bookingData, service: srv })}
                        className={`p-4 rounded-2xl border text-left font-medium text-sm transition flex items-center justify-between ${bookingData.service === srv ? 'border-teal-600 bg-teal-50/50 text-teal-900' : 'border-slate-200 hover:border-slate-300 text-slate-700'}`}
                      >
                        <span>{srv}</span>
                        {bookingData.service === srv && <CheckCircle className="w-5 h-5 text-teal-600" />}
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={() => setBookingStep(2)}
                      className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 rounded-xl transition text-sm flex items-center gap-2"
                    >
                      <span>Next: Date & Time</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {bookingStep === 2 && (
                <div className="space-y-4">
                  <h4 className="font-serif text-lg font-bold text-slate-900">Select Date & Time Slot</h4>
                  
                  <div className="space-y-3">
                    <label className="text-xs font-semibold text-slate-600 uppercase">Appointment Date</label>
                    <input 
                      type="date" 
                      value={bookingData.date}
                      onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3.5 text-slate-800 font-medium text-sm focus:outline-none focus:border-teal-500"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-semibold text-slate-600 uppercase">Available Time Slots</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['09:00 AM', '10:30 AM', '12:00 PM', '02:00 PM', '03:30 PM', '05:00 PM'].map((slot, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setBookingData({ ...bookingData, time: slot })}
                          className={`py-3 rounded-xl border text-xs font-semibold transition ${bookingData.time === slot ? 'bg-teal-600 text-white border-teal-600' : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'}`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      onClick={() => setBookingStep(1)}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium px-5 py-3 rounded-xl text-sm transition"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setBookingStep(3)}
                      className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 rounded-xl transition text-sm flex items-center gap-2"
                    >
                      <span>Next: Patient Info</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {bookingStep === 3 && (
                <form onSubmit={handleCompleteBooking} className="space-y-4">
                  <h4 className="font-serif text-lg font-bold text-slate-900">Patient Details</h4>
                  
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={bookingData.name}
                      onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                      placeholder="Oluwaseun Adebayo"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3.5 text-slate-800 text-sm focus:outline-none focus:border-teal-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={bookingData.email}
                        onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                        placeholder="oluwaseun@example.com"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3.5 text-slate-800 text-sm focus:outline-none focus:border-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">WhatsApp / Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        value={bookingData.phone}
                        onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                        placeholder="08066310546"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3.5 text-slate-800 text-sm focus:outline-none focus:border-teal-500"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setBookingStep(2)}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium px-5 py-3 rounded-xl text-sm transition"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold px-8 py-3.5 rounded-xl transition shadow-lg text-sm flex items-center gap-2"
                    >
                      <Check className="w-5 h-5" />
                      <span>Confirm Appointment</span>
                    </button>
                  </div>
                </form>
              )}

              {bookingStep === 5 && (
                <div className="text-center space-y-6 py-6">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-serif text-2xl font-bold text-slate-900">Appointment Confirmed!</h4>
                    <p className="text-slate-600 text-sm">
                      Thank you, <span className="font-bold text-slate-900">{bookingData.name}</span>. Your booking at Phil Dental Clinic has been recorded.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between"><span className="text-slate-500">Reference ID:</span> <span className="font-bold text-teal-600">{bookingSuccessId}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">Service:</span> <span className="font-semibold text-slate-900">{bookingData.service}</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">Location:</span> <span className="font-semibold text-slate-900">Ste B1 Lagos Airport Hotel, Ekiti Plaza, Ikeja</span></div>
                    <div className="flex justify-between"><span className="text-slate-500">Date & Time:</span> <span className="font-semibold text-slate-900">{bookingData.date} at {bookingData.time}</span></div>
                  </div>

                  <a 
                    href={`https://wa.me/2348066310546?text=Hello%20Phil%20Dental%20Clinic,%20my%20booking%20reference%20is%20${bookingSuccessId}%20for%20${bookingData.service}%20on%20${bookingData.date}%20at%20${bookingData.time}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl text-sm transition flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Send Details to WhatsApp (08066310546)</span>
                  </a>

                  <button
                    onClick={() => {
                      setBookingModalOpen(false);
                      setBookingStep(1);
                    }}
                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2.5 rounded-xl text-xs transition"
                  >
                    Close Window
                  </button>
                </div>
              )}

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
