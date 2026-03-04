import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Coffee, 
  Utensils, 
  ArrowRight,
  Menu as MenuIcon,
  X,
  Star,
  Check,
  ChevronRight,
  ShieldCheck,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const TiffinItems = [
  { name: 'Chapati', desc: 'Soft & Fresh', icon: '🫓' },
  { name: 'Sukhi Bhaji', desc: 'Dry Veggie', icon: '🥦' },
  { name: 'Patal Bhaji', desc: 'Gravy Curry', icon: '🍲' },
  { name: 'Varan', desc: 'Dal Tadka', icon: '🥣' },
  { name: 'Bhat', desc: 'Steamed Rice', icon: '🍚' },
  { name: 'Salad', desc: 'Fresh Greens', icon: '🥗' },
];

const Features = [
  { title: 'Home Taste', desc: '100% Homemade', icon: <Heart className="w-4 h-4" /> },
  { title: 'Hygienic', desc: 'Clean & Safe', icon: <ShieldCheck className="w-4 h-4" /> },
  { title: 'Affordable', desc: 'Best Value', icon: <Star className="w-4 h-4" /> },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "919623176581"; // Adding country code for India
    const text = `*New Inquiry from Swami Samarth Mess Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen font-sans bg-white overflow-x-hidden">
      {/* Header */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-9 h-9 md:w-11 md:h-11 bg-brand rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-200 shrink-0">
                <Utensils className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-base md:text-xl font-extrabold tracking-tight leading-none text-ink">SWAMI SAMARTH</span>
                <span className="text-[9px] md:text-[10px] font-bold text-brand uppercase tracking-widest mt-0.5">Mess & Breakfast</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 lg:gap-10">
              <a href="#menu" className="text-sm font-bold text-gray-600 hover:text-brand transition-colors">Menu</a>
              <a href="#about" className="text-sm font-bold text-gray-600 hover:text-brand transition-colors">About</a>
              <a href="#contact" className="text-sm font-bold text-gray-600 hover:text-brand transition-colors">Contact</a>
              <a href="tel:9623176581" className="bg-brand text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-orange-100 hover:bg-brand-dark transition-all active:scale-95 flex items-center gap-2">
                <Phone className="w-4 h-4" /> Order Now
              </a>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden p-2 text-ink hover:bg-gray-100 rounded-lg transition-colors" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm z-50 bg-white shadow-2xl md:hidden flex flex-col p-8"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-extrabold text-brand tracking-tighter">NAVIGATION</span>
                <button onClick={closeMenu} className="p-2 bg-gray-50 rounded-full"><X className="w-5 h-5" /></button>
              </div>
              <div className="flex flex-col gap-8">
                <a href="#menu" onClick={closeMenu} className="text-3xl font-bold text-ink hover:text-brand transition-colors">Menu</a>
                <a href="#about" onClick={closeMenu} className="text-3xl font-bold text-ink hover:text-brand transition-colors">About</a>
                <a href="#contact" onClick={closeMenu} className="text-3xl font-bold text-ink hover:text-brand transition-colors">Contact</a>
              </div>
              <div className="mt-auto pt-10 border-t border-gray-100">
                <a href="tel:9623176581" className="bg-brand text-white w-full py-5 rounded-2xl flex items-center justify-center gap-3 font-bold text-lg shadow-xl shadow-orange-100">
                  <Phone className="w-5 h-5" /> Call to Order
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-28 md:pt-40 lg:pt-48 pb-16 md:pb-24 overflow-hidden bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-brand text-[10px] md:text-xs font-extrabold uppercase tracking-wider mb-6">
                <Star className="w-3 h-3 fill-brand" /> Best Tiffin in Loni Kalbhor
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-ink leading-[1.1] mb-6">
                Taste of <span className="text-brand">Home</span> <br className="hidden sm:block" />
                Away From Home.
              </h1>
              <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                Fresh, hygienic, and delicious Maharashtrian meals prepared daily. Join our monthly mess or order an urgent tiffin today!
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a href="tel:9623176581" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand text-white px-10 py-4 md:py-5 rounded-2xl font-bold text-lg shadow-xl shadow-orange-200 hover:bg-brand-dark transition-all group">
                  Order Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="w-full sm:w-auto flex items-center justify-center gap-4 px-8 py-4 md:py-5 bg-white rounded-2xl border border-gray-200 shadow-sm">
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="text-2xl md:text-3xl font-black text-brand leading-none">₹70</span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Per Tiffin</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 md:mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8">
                {Features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">{f.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative px-4 sm:px-10 lg:px-0"
            >
              <div className="relative z-10 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white aspect-square sm:aspect-video lg:aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1000&auto=format&fit=crop" 
                  alt="Authentic Indian Thali" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 text-white">
                  <h3 className="text-xl md:text-3xl font-bold leading-tight">Authentic Homemade Tiffin</h3>
                </div>
              </div>
              {/* Abstract shapes - Hidden on very small screens */}
              <div className="hidden sm:block absolute -top-12 -right-12 w-48 h-48 md:w-64 md:h-64 bg-orange-200 rounded-full blur-3xl opacity-40 -z-0"></div>
              <div className="hidden sm:block absolute -bottom-12 -left-12 w-48 h-48 md:w-64 md:h-64 bg-yellow-100 rounded-full blur-3xl opacity-40 -z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4">Our Daily <span className="text-brand">Menu</span></h2>
            <p className="text-gray-500 font-medium max-w-xl mx-auto text-sm md:text-base">A complete and balanced meal that tastes just like your mother's cooking.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
            {TiffinItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-muted p-5 md:p-8 rounded-3xl text-center border border-transparent hover:border-brand/20 hover:bg-white hover:shadow-xl hover:shadow-orange-100 transition-all group"
              >
                <div className="text-3xl md:text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-bold text-ink text-sm md:text-base mb-1">{item.name}</h3>
                <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-tighter">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Bento */}
      <section id="about" className="py-20 md:py-28 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-brand rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-orange-200 group">
              <div className="relative z-10">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold mb-6 leading-tight">Monthly Mess Subscription</h3>
                <p className="text-base md:text-lg opacity-90 mb-8 md:mb-12 max-w-md font-medium">
                  The most convenient way to eat healthy every day. Perfect for students and working professionals in Loni Kalbhor.
                </p>
                <a href="tel:9623176581" className="inline-flex items-center gap-3 bg-white text-brand px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all text-sm md:text-base">
                  Inquire Now <ChevronRight className="w-5 h-5" />
                </a>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/4 -translate-y-1/4 blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
            </div>

            <div className="md:col-span-4 bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 text-brand rounded-2xl flex items-center justify-center mb-6">
                  <Coffee className="w-7 h-7 md:w-9 md:h-9" />
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold mb-4">Breakfast Center</h3>
                <p className="text-gray-500 font-medium text-sm md:text-base">
                  Start your morning with fresh Tea, Coffee, and traditional snacks.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-50">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Available From</span>
                <p className="font-bold text-ink text-lg">7:00 AM Daily</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-ink rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 lg:p-24 text-white grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold mb-8 leading-tight">
                Hungry? <br />
                <span className="text-brand">Give us a call.</span>
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-5 md:gap-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-brand" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base md:text-lg mb-1">Address</h4>
                    <p className="text-gray-400 font-medium text-sm md:text-base">Shrinath Residency, Near Hanuman Mandir, Loni Kalbhor, Pune</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 md:gap-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-brand" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base md:text-lg mb-1">Phone Numbers</h4>
                    <p className="text-gray-400 font-medium text-sm md:text-base">Anil Karche: 9623176581</p>
                    <p className="text-gray-400 font-medium text-sm md:text-base">Contact: 7666010596</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-white/10">
              <h3 className="text-xl md:text-2xl font-bold mb-8">Quick Inquiry</h3>
              <form className="space-y-4 md:space-y-5" onSubmit={handleWhatsAppSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/10 border border-white/10 rounded-xl md:rounded-2xl px-5 py-4 focus:outline-none focus:border-brand transition-all placeholder:text-gray-600 text-sm" 
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/10 border border-white/10 rounded-xl md:rounded-2xl px-5 py-4 focus:outline-none focus:border-brand transition-all placeholder:text-gray-600 text-sm" 
                  />
                </div>
                <textarea 
                  rows={3} 
                  placeholder="Your Message" 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/10 border border-white/10 rounded-xl md:rounded-2xl px-5 py-4 focus:outline-none focus:border-brand transition-all placeholder:text-gray-600 text-sm"
                ></textarea>
                <button type="submit" className="w-full bg-brand text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-xl shadow-orange-900/20 hover:bg-brand-dark transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/30 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center text-white">
              <Utensils className="w-4 h-4" />
            </div>
            <span className="font-extrabold tracking-tight text-ink text-sm md:text-base">SWAMI SAMARTH MESS</span>
          </div>
          <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">© {new Date().getFullYear()} — Loni Kalbhor, Pune</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-brand transition-colors font-bold text-[10px] md:text-xs uppercase tracking-widest">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-brand transition-colors font-bold text-[10px] md:text-xs uppercase tracking-widest">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
