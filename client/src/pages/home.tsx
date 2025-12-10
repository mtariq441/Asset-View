import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, User, ArrowRight, Menu, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const speakers = [
    {
      name: "Col. Sarah McKenzie",
      role: "Keynote Speaker",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      bio: "Retired US Air Force Colonel and advocate for women veterans' healthcare."
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "Workshop Leader",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
      bio: "Expert in transition psychology and career development for military personnel."
    },
    {
      name: "Capt. Jessica Chen",
      role: "Panelist",
      image: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&q=80&w=800",
      bio: "Navy veteran turned tech entrepreneur, empowering women in STEM."
    }
  ];

  const schedule = [
    { time: "08:00 AM", title: "Registration & Breakfast", desc: "Check-in and network with fellow attendees." },
    { time: "09:30 AM", title: "Opening Ceremony", desc: "Presentation of Colors and Welcome Address." },
    { time: "10:30 AM", title: "Keynote: Breaking Barriers", desc: "Col. Sarah McKenzie shares her inspiring journey." },
    { time: "12:00 PM", title: "Networking Luncheon", desc: "Gourmet lunch with guided networking sessions." },
    { time: "01:30 PM", title: "Workshops: Career & Wellness", desc: "Interactive sessions focused on professional growth and personal health." },
    { time: "04:00 PM", title: "Closing Remarks", desc: "Reflections on the day and looking forward." }
  ];

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img 
              src="/attached_assets/thrive-logo.png" 
              alt="Thrive Summit Logo" 
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className={`text-sm font-medium transition-colors uppercase tracking-wide hover:text-thrive-gold ${isScrolled ? "text-thrive-plum" : "text-white drop-shadow-md"}`}>About</a>
            <a href="#speakers" className={`text-sm font-medium transition-colors uppercase tracking-wide hover:text-thrive-gold ${isScrolled ? "text-thrive-plum" : "text-white drop-shadow-md"}`}>Speakers</a>
            <a href="#schedule" className={`text-sm font-medium transition-colors uppercase tracking-wide hover:text-thrive-gold ${isScrolled ? "text-thrive-plum" : "text-white drop-shadow-md"}`}>Schedule</a>
            <a href="#location" className={`text-sm font-medium transition-colors uppercase tracking-wide hover:text-thrive-gold ${isScrolled ? "text-thrive-plum" : "text-white drop-shadow-md"}`}>Location</a>
            <Button className="bg-thrive-gold hover:bg-white hover:text-thrive-plum text-thrive-plum font-heading uppercase tracking-wider rounded-none px-6 border border-white transition-all duration-300">
              Register Now
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={isScrolled ? "text-thrive-plum" : "text-white"}>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-thrive-ivory">
                <div className="flex flex-col gap-6 mt-10">
                  <div className="flex justify-center mb-6">
                    <img 
                      src="/attached_assets/thrive-logo.png" 
                      alt="Thrive Summit Logo" 
                      className="h-24 w-auto object-contain"
                    />
                  </div>
                  <a href="#about" className="text-lg font-heading font-semibold text-thrive-plum">About</a>
                  <a href="#speakers" className="text-lg font-heading font-semibold text-thrive-plum">Speakers</a>
                  <a href="#schedule" className="text-lg font-heading font-semibold text-thrive-plum">Schedule</a>
                  <a href="#location" className="text-lg font-heading font-semibold text-thrive-plum">Location</a>
                  <Button className="bg-thrive-purple w-full mt-4 text-white">Register Now</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[hsl(275,57%,16%)]/70 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(275,57%,16%)] via-transparent to-transparent z-10"></div>
          <img 
            src="/attached_assets/hero-women.png" 
            alt="Women Veterans" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-20 px-4 md:px-6 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex flex-col items-center"
          >
            <div className="inline-block mb-6 border-b border-[hsl(39,67%,55%)]/60 pb-2">
              <span className="text-thrive-gold font-heading tracking-[0.3em] text-sm md:text-base font-bold uppercase drop-shadow-md">
                June 5-7, 2026 • Tampa, FL
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-heading font-bold text-white mb-8 leading-tight tracking-tight drop-shadow-2xl">
              <span className="block mb-2">Honor.</span>
              <span className="block text-gold-gradient mb-2">Empower.</span>
              <span className="block">Rise.</span>
            </h1>

            <p className="text-lg md:text-2xl text-[hsl(40,41%,94%)]/90 max-w-3xl mb-12 font-light leading-relaxed drop-shadow-md">
              The premier summit celebrating the strength, resilience, and leadership of women veterans.
            </p>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="h-16 px-12 bg-gradient-to-r from-[hsl(39,67%,55%)] via-[#e8c06e] to-[hsl(39,67%,55%)] hover:via-white text-[hsl(275,57%,16%)] font-heading font-bold text-xl tracking-widest uppercase rounded-sm shadow-[0_0_30px_rgba(217,164,65,0.4)] transition-all border border-white/20">
                Secure Your Seat
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About / Mission Section */}
      <section id="about" className="py-32 bg-thrive-ivory relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[hsl(275,54%,78%)]/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[hsl(39,67%,55%)]/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative group">
                <div className="absolute -inset-4 border-2 border-[hsl(39,67%,55%)]/30 z-0 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                <div className="absolute -inset-4 border border-[hsl(273,51%,34%)]/10 z-0 -translate-x-4 -translate-y-4 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"></div>
                <img 
                  src="/attached_assets/women-smiling.png" 
                  alt="Women Veterans Smiling" 
                  className="relative z-10 w-full rounded-sm shadow-2xl"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-thrive-purple text-5xl md:text-6xl font-heading font-bold mb-8 leading-tight">
                Stronger <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(39,67%,55%)] to-[#bfa060] italic font-serif">Together</span>
              </h2>
              <p className="text-thrive-plum/80 text-lg leading-relaxed mb-6 font-light">
                The <strong className="text-thrive-purple font-semibold">Thrive Women Veteran Summit</strong> is more than an event; it's a movement. We bring together the finest minds and bravest hearts to foster a community of growth, leadership, and unwavering support.
              </p>
              <p className="text-thrive-plum/80 text-lg leading-relaxed mb-10 font-light">
                Experience world-class workshops, inspiring keynotes, and the camaraderie that only sisters-in-arms understand. This is your time to be honored for your past and empowered for your future.
              </p>
              
              <div className="grid grid-cols-3 gap-8 border-t border-[hsl(39,67%,55%)]/20 pt-8">
                <div className="flex flex-col">
                  <span className="text-5xl font-heading font-bold text-thrive-purple">500+</span>
                  <span className="text-xs uppercase tracking-widest text-thrive-plum/60 mt-2 font-semibold">Attendees</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-5xl font-heading font-bold text-thrive-purple">30+</span>
                  <span className="text-xs uppercase tracking-widest text-thrive-plum/60 mt-2 font-semibold">Speakers</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-5xl font-heading font-bold text-thrive-purple">3</span>
                  <span className="text-xs uppercase tracking-widest text-thrive-plum/60 mt-2 font-semibold">Days</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-32 bg-thrive-plum text-thrive-ivory relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4a236e] to-[hsl(275,57%,16%)] opacity-50"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white">Distinguished Speakers</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[hsl(39,67%,55%)] to-transparent mx-auto mb-8"></div>
            <p className="text-thrive-orchid/80 max-w-2xl mx-auto text-lg font-light">
              Learn from industry leaders, military pioneers, and wellness experts dedicated to your success.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-10"
          >
            {speakers.map((speaker, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="bg-transparent border-0 rounded-none overflow-hidden group">
                  <div className="aspect-[3/4] overflow-hidden relative mb-6">
                    <div className="absolute inset-0 border-2 border-[hsl(39,67%,55%)]/0 group-hover:border-[hsl(39,67%,55%)]/100 transition-all duration-500 z-20 pointer-events-none inset-x-4 inset-y-4"></div>
                    <div className="absolute inset-0 bg-[hsl(273,51%,34%)]/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img 
                      src={speaker.image} 
                      alt={speaker.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-thrive-gold text-xs font-bold uppercase tracking-[0.2em] mb-3">{speaker.role}</p>
                    <h3 className="text-2xl font-heading font-bold text-white mb-3">{speaker.name}</h3>
                    <p className="text-thrive-ivory/60 text-sm leading-relaxed max-w-xs mx-auto">{speaker.bio}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-16">
            <Button variant="outline" className="h-14 px-8 border-thrive-gold text-thrive-gold hover:bg-thrive-gold hover:text-thrive-plum uppercase tracking-widest font-heading text-sm bg-transparent transition-all">
              View All Speakers
            </Button>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-gray-100 pb-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-thrive-purple mb-4">Summit Agenda</h2>
              <p className="text-thrive-plum/60 text-lg">A curated experience of inspiration and action.</p>
            </div>
            <Button className="bg-thrive-plum hover:bg-[hsl(273,51%,34%)] text-white px-8 h-12 uppercase tracking-wider font-medium text-xs">Download Full PDF</Button>
          </div>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[hsl(39,67%,55%)]/30 hidden md:block"></div>
            
            <div className="space-y-16">
              {schedule.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-1/2 flex md:justify-end justify-start md:px-16">
                    <div className={`bg-thrive-ivory/50 p-8 md:p-10 rounded-sm hover:shadow-lg transition-all duration-300 w-full max-w-lg border border-transparent hover:border-[hsl(39,67%,55%)]/20 group relative overflow-hidden ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <div className="absolute top-0 left-0 w-1 h-full bg-thrive-gold transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                      <h3 className="text-2xl font-heading font-bold text-thrive-purple mb-3 group-hover:text-thrive-gold transition-colors">{item.title}</h3>
                      <p className="text-thrive-plum/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-thrive-gold shadow-[0_0_0_8px_white] z-10"></div>
                  
                  <div className={`w-full md:w-1/2 flex md:justify-end justify-start md:px-16 ${index % 2 === 0 ? 'md:justify-start' : ''}`}>
                    <span className="text-3xl font-heading font-bold text-[hsl(39,67%,55%)]/40">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-thrive-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(39,67%,55%)] via-[#e8c06e] to-[hsl(39,67%,55%)] opacity-90"></div>
        
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Star className="w-16 h-16 text-thrive-plum mx-auto mb-8 fill-current" />
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-thrive-plum mb-8 max-w-5xl mx-auto leading-tight">
              Ready to Rise?
            </h2>
            <p className="text-2xl text-thrive-plum/80 mb-12 max-w-2xl mx-auto font-medium">
              Don't miss this opportunity to connect with your community and elevate your life.
            </p>
            <Button size="lg" className="h-20 px-16 bg-thrive-plum text-white hover:bg-[hsl(273,51%,34%)] hover:scale-105 transition-all duration-300 font-heading text-xl uppercase tracking-[0.2em] shadow-2xl border-2 border-transparent hover:border-[hsl(275,54%,78%)]/30">
              Register for Summit
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a0b2e] text-thrive-ivory py-20 border-t border-[hsl(39,67%,55%)]/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-16">
            <div className="col-span-1 md:col-span-2">
              <div className="font-heading font-bold text-3xl tracking-widest text-white mb-8">
                THRIVE
              </div>
              <p className="text-thrive-orchid/60 max-w-sm mb-8 leading-relaxed font-light">
                Empowering women veterans to find their voice, their purpose, and their community. A celebration of service and sisterhood.
              </p>
              <div className="flex gap-4">
                {['Twitter', 'Facebook', 'LinkedIn', 'Instagram'].map((social, i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-thrive-gold hover:text-thrive-plum transition-all duration-300 cursor-pointer border border-white/10 hover:border-thrive-gold">
                    <User size={20} />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-8 text-thrive-gold tracking-wider">Quick Links</h4>
              <ul className="space-y-5 text-sm text-thrive-ivory/60 font-light">
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-thrive-gold"/> About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-thrive-gold"/> Speakers</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-thrive-gold"/> Schedule</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-thrive-gold"/> Sponsorship</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-thrive-gold"/> Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-8 text-thrive-gold tracking-wider">Contact</h4>
              <ul className="space-y-6 text-sm text-thrive-ivory/60 font-light">
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-thrive-gold shrink-0 mt-1" />
                  <span>Tampa Convention Center<br/>333 S Franklin St<br/>Tampa, FL 33602</span>
                </li>
                <li className="flex items-center gap-4">
                  <Calendar className="w-5 h-5 text-thrive-gold shrink-0" />
                  <span>June 5-7, 2026</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 font-light tracking-wide">
            <p>&copy; 2026 Thrive Women Veteran Summit. All rights reserved.</p>
            <div className="flex gap-8 mt-6 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
