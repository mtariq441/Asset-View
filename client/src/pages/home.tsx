import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, User, ArrowRight, Menu, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import thriveLogo from "@assets/thrive-logo-new.png";
import heroWomen from "@assets/hero-women.png";
import womenSmiling from "@assets/women-veterans-group.jpg";

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

  const benefits = [
    { title: "Elevate Your Career", desc: "Forge powerful connections and discover new opportunities with industry leaders and fellow veterans." },
    { title: "Empower Yourself", desc: "Gain invaluable insights from transformative workshops on leadership, finance, and well-being." },
    { title: "Celebrate Sisterhood", desc: "Join a vibrant community of women who share your journey, strength, and ambition." }
  ];

  return (
    <div className="min-h-screen bg-[hsl(275,57%,16%)] text-foreground font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-[hsl(275,57%,16%)] border-b border-[hsl(39,67%,55%)]/20" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <motion.div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[hsl(39,67%,55%)] flex items-center justify-center" whileHover={{ scale: 1.05 }}>
            <img src={thriveLogo} alt="Thrive Logo" className="w-full h-full object-contain p-1" />
          </motion.div>

          <div className="hidden md:flex items-center gap-10">
            {["About", "Speakers", "Schedule", "Location"].map((item) => (
              <motion.a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium uppercase tracking-wider text-[hsl(40,41%,94%)] hover:text-[hsl(39,67%,55%)] transition-colors relative group" whileHover={{ y: -2 }}>
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[hsl(39,67%,55%)] group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button className="bg-[hsl(39,67%,55%)] hover:bg-[hsl(39,67%,60%)] text-[hsl(275,57%,16%)] font-heading uppercase tracking-wider px-8 py-2 rounded-lg">
                Register Now
              </Button>
            </motion.div>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[hsl(275,57%,16%)] border-l border-[hsl(39,67%,55%)]/30">
                <div className="flex flex-col gap-6 mt-10">
                  {["About", "Speakers", "Schedule", "Location"].map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-heading font-semibold hover:text-[hsl(39,67%,55%)] transition-colors">{item}</a>
                  ))}
                  <Button className="bg-[hsl(39,67%,55%)] w-full text-[hsl(275,57%,16%)] font-semibold">Register Now</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24 min-h-screen">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-[hsl(275,57%,16%)]/85 z-10"></div>
          <img src={heroWomen} alt="Women Veterans" className="w-full h-full object-cover" />
        </div>

        <div className="container relative z-20 px-4 md:px-6 text-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-center justify-center gap-6 md:gap-10">
            <motion.div className="inline-block px-8 py-3 md:px-10 md:py-4 border-2 border-[hsl(39,67%,55%)] rounded-lg bg-[hsl(275,57%,16%)]/40" whileHover={{ scale: 1.05 }}>
              <span className="text-[hsl(39,67%,55%)] font-heading tracking-[0.2em] text-xs md:text-sm font-bold uppercase">
                June 5-7, 2026 • Tampa, FL
              </span>
            </motion.div>
            
            <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-tight" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}>
              <span className="block">Honor.</span>
              <span className="block text-[hsl(39,67%,55%)]">Empower.</span>
              <span className="block">Rise.</span>
            </motion.h1>

            <motion.p className="text-lg md:text-2xl text-white/95 max-w-3xl font-light leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
              The premier summit celebrating the strength, resilience, and leadership of women veterans.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} whileHover={{ scale: 1.08 }}>
              <Button size="lg" className="h-14 md:h-16 px-10 md:px-12 bg-[hsl(39,67%,55%)] hover:bg-[hsl(39,67%,60%)] text-[hsl(275,57%,16%)] font-heading font-bold text-base md:text-lg tracking-widest uppercase rounded-lg">
                Secure Your Seat
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative group order-2 md:order-1">
              <div className="rounded-lg overflow-hidden border-2 border-[hsl(39,67%,55%)]/40">
                <img src={womenSmiling} alt="Women Veterans" className="w-full h-auto object-cover rounded-lg" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="order-1 md:order-2 pt-8 md:pt-0">
              <h2 className="text-5xl md:text-6xl font-heading font-black mb-6 leading-tight">
                <span className="text-[hsl(39,67%,55%)]">Stronger</span>
                <br/>
                <span className="text-[hsl(40,41%,94%)]">Together</span>
              </h2>
              
              <p className="text-[hsl(40,41%,94%)]/85 text-base md:text-lg leading-relaxed mb-5 font-light">
                The <strong className="font-bold text-[hsl(39,67%,55%)]">Thrive Women Veteran Summit</strong> is more than an event; it's a movement that transforms lives and builds legacies. We bring together the finest minds and bravest hearts to foster a community of growth, leadership, and unwavering support.
              </p>
              
              <p className="text-[hsl(40,41%,94%)]/80 text-base md:text-lg leading-relaxed mb-10 font-light">
                Experience world-class workshops, inspiring keynotes, and the camaraderie that only sisters-in-arms understand. This is your time to be honored for your past and empowered for your future.
              </p>
              
              <div className="grid grid-cols-3 gap-4 md:gap-6">
                {[
                  { num: "500+", label: "Attendees" },
                  { num: "30+", label: "Speakers" },
                  { num: "3", label: "Days" }
                ].map((stat, i) => (
                  <motion.div key={i} className="group bg-[hsl(273,50%,20%)] p-5 md:p-6 rounded-lg border border-[hsl(39,67%,55%)]/20 hover:border-[hsl(39,67%,55%)]/60 transition-all text-center" whileHover={{ scale: 1.05, y: -5 }}>
                    <span className="text-3xl md:text-4xl font-heading font-black text-[hsl(39,67%,55%)] block">{stat.num}</span>
                    <span className="text-xs md:text-sm uppercase tracking-widest text-[hsl(40,41%,94%)]/60 mt-2 md:mt-3 font-bold block">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-heading font-black mb-6 text-[hsl(39,67%,55%)]">Summit Benefits</h2>
            <div className="w-32 h-1 bg-[hsl(39,67%,55%)] mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group relative" whileHover={{ y: -10, scale: 1.02 }}>
                <div className="relative bg-[hsl(273,50%,20%)] p-10 rounded-lg border border-[hsl(39,67%,55%)]/30 hover:border-[hsl(39,67%,55%)]/70 transition-all">
                  <div className="w-12 h-12 bg-[hsl(39,67%,55%)] rounded-lg flex items-center justify-center mb-6">
                    <Star className="w-6 h-6 text-[hsl(275,57%,16%)] fill-current" />
                  </div>
                  <h3 className="text-2xl font-heading font-black text-[hsl(39,67%,55%)] mb-4 uppercase">{benefit.title}</h3>
                  <p className="text-[hsl(40,41%,94%)]/80 leading-relaxed font-light">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-heading font-black mb-6 text-[hsl(39,67%,55%)]">Distinguished Speakers</h2>
            <p className="text-[hsl(40,41%,94%)]/70 max-w-2xl mx-auto text-lg font-light">Learn from industry leaders and military pioneers dedicated to your success.</p>
            <div className="w-32 h-1 bg-[hsl(39,67%,55%)] mx-auto mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {speakers.map((speaker, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group">
                <div className="relative overflow-hidden rounded-lg mb-8 h-96">
                  <div className="relative rounded-lg overflow-hidden h-full border-2 border-[hsl(39,67%,55%)]/40 group-hover:border-[hsl(39,67%,55%)]/80 transition-all">
                    <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                      <p className="text-white/90 text-sm font-light">{speaker.bio}</p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-[hsl(39,67%,55%)] text-xs font-bold uppercase tracking-[0.3em] mb-3">{speaker.role}</p>
                  <h3 className="text-2xl font-heading font-black mb-2 text-[hsl(40,41%,94%)]">{speaker.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-heading font-black mb-6 text-[hsl(39,67%,55%)]">Summit Agenda</h2>
            <p className="text-[hsl(40,41%,94%)]/70 max-w-2xl mx-auto text-lg font-light">A curated experience of inspiration and action.</p>
            <div className="w-32 h-1 bg-[hsl(39,67%,55%)] mx-auto mt-6"></div>
          </motion.div>

          <div className="space-y-6">
            {schedule.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="group relative">
                <div className="relative bg-[hsl(273,50%,20%)] p-8 rounded-lg border border-[hsl(39,67%,55%)]/30 hover:border-[hsl(39,67%,55%)]/70 transition-all">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-black text-[hsl(39,67%,55%)] mb-3">{item.title}</h3>
                      <p className="text-[hsl(40,41%,94%)]/75 font-light text-lg">{item.desc}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="text-2xl font-heading font-black text-[hsl(39,67%,55%)]/60 whitespace-nowrap">{item.time}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-heading font-black mb-6 text-[hsl(39,67%,55%)]">Location & Details</h2>
            <div className="w-32 h-1 bg-[hsl(39,67%,55%)] mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative group">
              <div className="relative bg-[hsl(273,50%,20%)] p-8 rounded-lg border border-[hsl(39,67%,55%)]/30 hover:border-[hsl(39,67%,55%)]/70 transition-all h-full">
                <h3 className="text-2xl font-heading font-black text-[hsl(39,67%,55%)] mb-6">The Venue</h3>
                <h4 className="text-lg font-heading font-bold mb-4 text-[hsl(40,41%,94%)]">Tampa Convention Center</h4>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[hsl(39,67%,55%)] shrink-0 mt-0.5" />
                  <p className="text-[hsl(40,41%,94%)]/85 text-sm">333 S Franklin St, Tampa, FL 33602</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative group">
              <div className="relative bg-[hsl(273,50%,20%)] p-8 rounded-lg border border-[hsl(39,67%,55%)]/30 hover:border-[hsl(39,67%,55%)]/70 transition-all h-full flex flex-col">
                <h4 className="text-2xl font-heading font-black text-[hsl(39,67%,55%)] mb-4 uppercase">Hotel Partner</h4>
                <h5 className="text-lg font-heading font-bold mb-2 text-[hsl(40,41%,94%)]">JW Marriott Tampa Water Street</h5>
                <p className="text-[hsl(40,41%,94%)]/80 text-sm mb-6 flex-grow">510 Water St, Tampa, FL 33602</p>
                <Button className="bg-[hsl(39,67%,55%)] hover:bg-[hsl(39,67%,60%)] text-[hsl(275,57%,16%)] text-xs font-bold px-6 py-2 rounded-lg w-full">
                  Book with Summit Rate
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative group">
              <div className="relative bg-[hsl(273,50%,20%)] p-8 rounded-lg border border-[hsl(39,67%,55%)]/30 hover:border-[hsl(39,67%,55%)]/70 transition-all h-full">
                <h4 className="text-2xl font-heading font-black text-[hsl(39,67%,55%)] mb-6 uppercase">Getting Around</h4>
                <ul className="space-y-3 text-xs text-[hsl(40,41%,94%)]/80">
                  <li className="font-medium"><strong className="text-[hsl(39,67%,55%)]">✈️ Airport:</strong> Tampa International (TPA) - 15 min drive</li>
                  <li className="font-medium"><strong className="text-[hsl(39,67%,55%)]">🅿️ Parking:</strong> Available at convention center & nearby garages</li>
                  <li className="font-medium"><strong className="text-[hsl(39,67%,55%)]">🚊 Transit:</strong> TECO Line Streetcar to explore downtown</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[hsl(39,67%,55%)]"></div>
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `url(${heroWomen})`, backgroundSize: 'cover' }}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto">
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-heading font-black text-[hsl(275,57%,16%)] mb-8 leading-tight">
              Ready to Rise?
            </h2>
            
            <p className="text-xl md:text-2xl text-[hsl(275,57%,16%)]/90 mb-12 font-light">
              Don't miss this extraordinary opportunity to connect with your community and elevate your life.
            </p>
            
            <motion.div whileHover={{ scale: 1.08 }}>
              <Button size="lg" className="h-16 md:h-18 px-16 bg-[hsl(275,57%,16%)] hover:bg-[hsl(275,57%,20%)] text-[hsl(39,67%,55%)] font-heading font-black text-xl uppercase tracking-[0.2em] rounded-lg">
                Register for Summit
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(272,60%,12%)] border-t border-[hsl(39,67%,55%)]/40 py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="w-24 h-24 rounded-full border-2 border-[hsl(39,67%,55%)] flex items-center justify-center mb-8">
                <img src={thriveLogo} alt="Thrive" className="w-[95%] h-[95%] object-contain" />
              </div>
              <p className="text-[hsl(40,41%,94%)]/70 max-w-sm mb-8 leading-relaxed font-light">
                Empowering women veterans to find their voice, their purpose, and their community.
              </p>
            </div>

            <div>
              <h4 className="font-heading font-black text-lg mb-8 text-[hsl(39,67%,55%)] uppercase">Quick Links</h4>
              <ul className="space-y-4 text-sm text-[hsl(40,41%,94%)]/70 font-light">
                {["About Us", "Speakers", "Schedule", "Location"].map((link) => (
                  <li key={link}><a href="#" className="hover:text-[hsl(39,67%,55%)] transition-colors font-medium">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-black text-lg mb-8 text-[hsl(39,67%,55%)] uppercase">Contact</h4>
              <div className="space-y-4 text-sm text-[hsl(40,41%,94%)]/70 font-light">
                <p>333 S Franklin St<br/>Tampa, FL 33602</p>
                <p>June 5-7, 2026</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[hsl(39,67%,55%)]/20 pt-10 text-center text-xs text-[hsl(40,41%,94%)]/50 font-light">
            <p>&copy; 2026 Thrive Women Veteran Summit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
