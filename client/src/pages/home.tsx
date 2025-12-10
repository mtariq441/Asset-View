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

import thriveLogo from "@assets/thrive-logo-new.png";
import heroWomen from "@assets/hero-women.png";
import womenSmiling from "@assets/women-veterans-group.jpg";

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
    <div className="min-h-screen bg-thrive-plum font-sans overflow-x-hidden text-thrive-ivory">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[hsl(275,57%,10%)]/98 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] shadow-gold py-1" : "bg-transparent py-2"}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-thrive-gold flex items-center justify-center shadow-gold transition-all duration-300 hover:shadow-[0_0_30px_rgba(217,164,65,0.5)]">
              <img 
                src={thriveLogo}
                alt="Thrive Summit Logo" 
                className="w-[110%] h-[110%] object-contain"
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium transition-colors uppercase tracking-wide text-thrive-ivory hover:text-thrive-gold drop-shadow-md">About</a>
            <a href="#speakers" className="text-sm font-medium transition-colors uppercase tracking-wide text-thrive-ivory hover:text-thrive-gold drop-shadow-md">Speakers</a>
            <a href="#schedule" className="text-sm font-medium transition-colors uppercase tracking-wide text-thrive-ivory hover:text-thrive-gold drop-shadow-md">Schedule</a>
            <a href="#location" className="text-sm font-medium transition-colors uppercase tracking-wide text-thrive-ivory hover:text-thrive-gold drop-shadow-md">Location</a>
            <Button className="bg-thrive-gold hover:bg-[hsl(39,67%,65%)] text-thrive-plum font-heading uppercase tracking-wider rounded-none px-6 border border-thrive-gold transition-all duration-300 shadow-[0_0_15px_rgba(217,164,65,0.3)]">
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
              <SheetContent side="right" className="bg-thrive-plum border-l border-thrive-gold/30">
                <div className="flex flex-col gap-6 mt-10">
                  <div className="flex justify-center mb-6">
                    <div className="w-48 h-48 rounded-full border-2 border-thrive-gold flex items-center justify-center">
                      <img 
                        src={thriveLogo}
                        alt="Thrive Summit Logo" 
                        className="w-[95%] h-[95%] object-contain"
                      />
                    </div>
                  </div>
                  <a href="#about" className="text-lg font-heading font-semibold text-thrive-ivory hover:text-thrive-gold transition-colors">About</a>
                  <a href="#speakers" className="text-lg font-heading font-semibold text-thrive-ivory hover:text-thrive-gold transition-colors">Speakers</a>
                  <a href="#schedule" className="text-lg font-heading font-semibold text-thrive-ivory hover:text-thrive-gold transition-colors">Schedule</a>
                  <a href="#location" className="text-lg font-heading font-semibold text-thrive-ivory hover:text-thrive-gold transition-colors">Location</a>
                  <Button className="bg-thrive-gold w-full mt-4 text-thrive-plum font-semibold hover:bg-[hsl(39,67%,65%)]">Register Now</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[hsl(272,60%,22%)] via-[hsl(272,62%,30%)] to-[hsl(272,65%,18%)]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[hsl(272,60%,22%)]/40 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(272,60%,22%)] via-transparent to-transparent z-10"></div>
          <img 
            src={heroWomen}
            alt="Women Veterans" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-20 px-4 md:px-6 text-center">
          <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
            <div className="inline-block px-6 md:px-8 py-2 md:py-3 border-2 border-[hsl(39,67%,55%)]/80 rounded-full bg-[hsl(272,60%,22%)]/40 backdrop-blur-sm">
              <span className="text-thrive-gold font-heading tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm font-bold uppercase drop-shadow-lg">
                June 5-7, 2026 • Tampa, FL
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-snug tracking-tight drop-shadow-2xl" style={{ textShadow: '0 4px 20px rgba(217,164,65,0.4), 0 0 40px rgba(217,164,65,0.2)' }}>
              <span className="block">Honor.</span>
              <span className="block text-gold-gradient">Empower.</span>
              <span className="block">Rise.</span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-[hsl(40,41%,94%)]/95 max-w-2xl font-light leading-relaxed drop-shadow-lg">
              The premier summit celebrating the strength, resilience, and leadership of women veterans.
            </p>

            <Button size="lg" className="h-12 md:h-14 px-8 md:px-12 bg-gradient-to-b from-[hsl(39,67%,60%)] to-[hsl(39,67%,50%)] hover:from-[hsl(39,67%,65%)] hover:to-[hsl(39,67%,55%)] text-thrive-plum font-heading font-bold text-sm md:text-base tracking-widest uppercase rounded-lg shadow-[0_10px_40px_rgba(217,164,65,0.6)] border-2 border-[hsl(39,67%,70%)] hover:border-white/60 mt-2" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
              Secure Your Seat
            </Button>
          </div>
        </div>
      </section>

      {/* About / Mission Section */}
      <section id="about" className="py-40 bg-[hsl(272,60%,20%)] relative overflow-hidden border-t-2 border-thrive-gold/30 backdrop-premium">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[hsl(272,65%,48%)]/15 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[hsl(39,67%,55%)]/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="relative group">
                <div className="absolute -inset-6 border-3 border-[hsl(39,67%,55%)]/60 z-0 rounded-lg"></div>
                <div className="absolute -inset-3 border-2 border-[hsl(273,51%,34%)]/30 z-0 rounded-lg"></div>
                <img 
                  src={womenSmiling}
                  alt="Women Veterans Smiling" 
                  className="relative z-10 w-full rounded-lg shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>

            <div>
              <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight" style={{ background: 'linear-gradient(135deg, hsl(39,67%,55%) 0%, hsl(39,67%,65%) 50%, hsl(39,67%,55%) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textShadow: '0 4px 15px rgba(217,164,65,0.3)' }}>
                Stronger <br/><span className="italic font-serif">Together</span>
              </h2>
              <p className="text-thrive-ivory/80 text-lg leading-relaxed mb-6 font-light">
                The <strong className="text-thrive-gold font-semibold">Thrive Women Veteran Summit</strong> is more than an event; it's a movement. We bring together the finest minds and bravest hearts to foster a community of growth, leadership, and unwavering support.
              </p>
              <p className="text-thrive-ivory/80 text-lg leading-relaxed mb-10 font-light">
                Experience world-class workshops, inspiring keynotes, and the camaraderie that only sisters-in-arms understand. This is your time to be honored for your past and empowered for your future.
              </p>
              
              <div className="grid grid-cols-3 gap-8 border-t border-thrive-gold/20 pt-8">
                <div className="flex flex-col">
                  <span className="text-5xl font-heading font-bold text-thrive-gold">500+</span>
                  <span className="text-xs uppercase tracking-widest text-thrive-ivory/60 mt-2 font-semibold">Attendees</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-5xl font-heading font-bold text-thrive-gold">30+</span>
                  <span className="text-xs uppercase tracking-widest text-thrive-ivory/60 mt-2 font-semibold">Speakers</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-5xl font-heading font-bold text-thrive-gold">3</span>
                  <span className="text-xs uppercase tracking-widest text-thrive-ivory/60 mt-2 font-semibold">Days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-40 bg-gradient-to-b from-[hsl(272,60%,20%)] to-[hsl(272,62%,18%)] text-thrive-ivory relative border-t-2 border-thrive-gold/30 backdrop-premium">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[hsl(272,65%,35%)] to-[hsl(272,60%,22%)] opacity-30"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white">Distinguished Speakers</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[hsl(39,67%,55%)] to-transparent mx-auto mb-8"></div>
            <p className="text-thrive-orchid/80 max-w-2xl mx-auto text-lg font-light">
              Learn from industry leaders, military pioneers, and wellness experts dedicated to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {speakers.map((speaker, index) => (
              <div key={index}>
                <Card className="bg-[hsl(272,55%,22%)] border-2 border-[hsl(39,67%,55%)]/40 rounded-lg overflow-hidden group shadow-[0_15px_35px_rgba(0,0,0,0.3)]">
                  <div className="aspect-[3/4] overflow-hidden relative mb-6">
                    <div className="absolute inset-0 border-3 border-[hsl(39,67%,55%)]/0 group-hover:border-[hsl(39,67%,55%)]/80 z-20 pointer-events-none inset-x-3 inset-y-3 rounded-lg"></div>
                    <div className="absolute inset-0 bg-[hsl(273,51%,34%)]/40 group-hover:bg-transparent z-10"></div>
                    <img 
                      src={speaker.image} 
                      alt={speaker.name} 
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="text-center px-4 pb-6">
                    <p className="text-thrive-gold text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ textShadow: '0 2px 8px rgba(217,164,65,0.3)' }}>{speaker.role}</p>
                    <h3 className="text-2xl font-heading font-bold text-white mb-3">{speaker.name}</h3>
                    <p className="text-thrive-ivory/70 text-sm leading-relaxed max-w-xs mx-auto">{speaker.bio}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button variant="outline" className="h-14 px-8 border-thrive-gold text-thrive-gold hover:bg-thrive-gold hover:text-thrive-plum uppercase tracking-widest font-heading text-sm bg-transparent transition-all">
              View All Speakers
            </Button>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-40 bg-[hsl(272,60%,21%)] relative border-t-2 border-thrive-gold/30 backdrop-premium">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-thrive-gold/20 pb-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-thrive-gold mb-4">Summit Agenda</h2>
              <p className="text-thrive-ivory/60 text-lg">A curated experience of inspiration and action.</p>
            </div>
            <Button className="bg-thrive-gold hover:bg-[hsl(39,67%,65%)] text-thrive-plum px-8 h-12 uppercase tracking-wider font-medium text-xs font-semibold">Download Full PDF</Button>
          </div>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-thrive-gold/50 via-thrive-gold/20 to-transparent hidden md:block"></div>
            
            <div className="space-y-16">
              {schedule.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-1/2 flex md:justify-end justify-start md:px-16">
                    <div className={`bg-[hsl(272,55%,22%)] p-8 md:p-10 rounded-lg shadow-[0_15px_35px_rgba(0,0,0,0.4)] w-full max-w-lg border-2 border-[hsl(39,67%,55%)]/40 group relative overflow-hidden ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-thrive-gold to-[#e8c06e]"></div>
                      <h3 className="text-2xl font-heading font-bold text-thrive-gold mb-3">{item.title}</h3>
                      <p className="text-thrive-ivory/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-thrive-gold shadow-[0_0_0_8px_hsl(272,60%,21%)] z-10"></div>
                  
                  <div className={`w-full md:w-1/2 flex md:justify-end justify-start md:px-16 ${index % 2 === 0 ? 'md:justify-start' : ''}`}>
                    <span className="text-3xl font-heading font-bold text-thrive-gold/50">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-48 bg-gradient-to-b from-[hsl(272,60%,22%)] via-[hsl(272,65%,35%)] to-[hsl(272,62%,28%)] relative overflow-hidden border-t-2 border-thrive-gold/50">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(39,67%,55%)]/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(272,65%,48%)]/8 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block mb-12">
              <div className="w-24 h-24 rounded-full border-3 border-thrive-gold flex items-center justify-center mx-auto bg-gradient-to-br from-thrive-gold/20 to-thrive-gold/5 shadow-[0_0_30px_rgba(217,164,65,0.4)]">
                <Star className="w-14 h-14 text-thrive-gold fill-current" style={{ filter: 'drop-shadow(0 0 8px rgba(217,164,65,0.6))' }} />
              </div>
            </div>
            
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-thrive-gold mb-8 leading-tight" style={{ textShadow: '0 4px 20px rgba(217,164,65,0.4), 0 0 40px rgba(217,164,65,0.2)' }}>
              Ready to Rise?
            </h2>
            
            <p className="text-lg md:text-xl text-thrive-ivory/85 mb-16 font-light leading-relaxed">
              Don't miss this opportunity to connect with your community and elevate your life.
            </p>
            
            <Button size="lg" className="h-16 md:h-18 px-12 md:px-16 bg-gradient-to-b from-thrive-gold to-[#d4a355] hover:from-[#f0e3b8] hover:to-[#e8c06e] text-thrive-plum font-heading font-bold text-lg md:text-xl uppercase tracking-[0.15em] rounded-xl shadow-[0_15px_50px_rgba(217,164,65,0.5)] border-2 border-thrive-gold/70 hover:border-white/40 transition-all duration-300" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.2)' }}>
              Register for Summit
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(272,60%,12%)] text-thrive-ivory py-24 border-t-2 border-thrive-gold/40 backdrop-premium">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-16">
            <div className="col-span-1 md:col-span-2">
              <div className="w-28 h-28 rounded-full border-2 border-thrive-gold flex items-center justify-center mb-8 shadow-gold">
                <img 
                  src={thriveLogo}
                  alt="Thrive Summit Logo" 
                  className="w-[95%] h-[95%] object-contain"
                />
              </div>
              <p className="text-thrive-orchid/60 max-w-sm mb-8 leading-relaxed font-light">
                Empowering women veterans to find their voice, their purpose, and their community. A celebration of service and sisterhood.
              </p>
              <div className="flex gap-4">
                {['Twitter', 'Facebook', 'LinkedIn', 'Instagram'].map((social, i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-thrive-gold hover:text-thrive-plum transition-all duration-300 cursor-pointer border border-white/10 hover:border-thrive-gold shadow-[0_4px_12px_rgba(217,164,65,0.0)] hover:shadow-[0_8px_20px_rgba(217,164,65,0.3)]">
                    <User size={20} />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-8 text-thrive-gold tracking-wider">Quick Links</h4>
              <ul className="space-y-5 text-sm text-thrive-ivory/60 font-light">
                <li><a href="#" className="hover:text-thrive-gold transition-all duration-300 flex items-center gap-2 group"><ArrowRight size={14} className="text-thrive-gold group-hover:translate-x-1 transition-transform"/> About Us</a></li>
                <li><a href="#" className="hover:text-thrive-gold transition-all duration-300 flex items-center gap-2 group"><ArrowRight size={14} className="text-thrive-gold group-hover:translate-x-1 transition-transform"/> Speakers</a></li>
                <li><a href="#" className="hover:text-thrive-gold transition-all duration-300 flex items-center gap-2 group"><ArrowRight size={14} className="text-thrive-gold group-hover:translate-x-1 transition-transform"/> Schedule</a></li>
                <li><a href="#" className="hover:text-thrive-gold transition-all duration-300 flex items-center gap-2 group"><ArrowRight size={14} className="text-thrive-gold group-hover:translate-x-1 transition-transform"/> Sponsorship</a></li>
                <li><a href="#" className="hover:text-thrive-gold transition-all duration-300 flex items-center gap-2 group"><ArrowRight size={14} className="text-thrive-gold group-hover:translate-x-1 transition-transform"/> Contact</a></li>
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
          
          <div className="border-t border-thrive-gold/20 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-light tracking-wide">
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
