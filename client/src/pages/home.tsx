import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, User, ArrowRight, Menu, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import thriveLogo from "@assets/thrive-logo-new.png";
import heroWomen from "@assets/hero-women.png";
import womenSmiling from "@assets/women-veterans-group.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [speakerIndex, setSpeakerIndex] = useState(0);

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
    { title: "Elevate Your Career", desc: "Forge powerful connections and discover new opportunities with industry leaders." },
    { title: "Empower Yourself", desc: "Gain invaluable insights from transformative workshops on leadership, finance, and well-being." },
    { title: "Celebrate Sisterhood", desc: "Join a vibrant community of women who share your journey, strength, and ambition." }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-xl shadow-lg" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-primary flex items-center justify-center">
            <img src={thriveLogo} alt="Thrive Logo" className="w-full h-full object-contain p-1" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors">About</a>
            <a href="#speakers" className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors">Speakers</a>
            <a href="#schedule" className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors">Schedule</a>
            <a href="#location" className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors">Location</a>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading uppercase tracking-wider px-6">
              Register Now
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-l border-border">
                <div className="flex flex-col gap-6 mt-10">
                  <a href="#about" className="text-lg font-heading font-semibold hover:text-primary transition-colors">About</a>
                  <a href="#speakers" className="text-lg font-heading font-semibold hover:text-primary transition-colors">Speakers</a>
                  <a href="#schedule" className="text-lg font-heading font-semibold hover:text-primary transition-colors">Schedule</a>
                  <a href="#location" className="text-lg font-heading font-semibold hover:text-primary transition-colors">Location</a>
                  <Button className="bg-primary w-full text-primary-foreground font-semibold">Register Now</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img src={heroWomen} alt="Women Veterans" className="w-full h-full object-cover" />
        </div>

        <div className="container relative z-20 px-4 md:px-6 text-center">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="inline-block px-8 py-3 border-2 border-primary rounded-full bg-black/40 backdrop-blur-sm">
              <span className="text-primary font-heading tracking-[0.2em] text-xs md:text-sm font-bold uppercase">
                June 5-7, 2026 • Tampa, FL
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-tight">
              <span className="block">Honor.</span>
              <span className="block text-primary">Empower.</span>
              <span className="block">Rise.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl font-light">
              The premier summit celebrating the strength, resilience, and leadership of women veterans.
            </p>

            <Button size="lg" className="h-12 md:h-14 px-8 md:px-12 bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-sm md:text-base tracking-widest uppercase mt-4">
              Secure Your Seat
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-card relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 border-3 border-primary/60 z-0 rounded-lg"></div>
              <img src={womenSmiling} alt="Women Veterans" className="relative z-10 w-full rounded-lg shadow-2xl" />
            </div>

            <div>
              <h2 className="text-5xl md:text-6xl font-heading font-bold mb-8 text-primary">
                Stronger <span className="text-foreground/80">Together</span>
              </h2>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6 font-light">
                The <strong className="font-semibold">Thrive Women Veteran Summit</strong> is more than an event; it's a movement. We bring together the finest minds and bravest hearts to foster a community of growth, leadership, and unwavering support.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed mb-10 font-light">
                Experience world-class workshops, inspiring keynotes, and the camaraderie that only sisters-in-arms understand.
              </p>
              
              <div className="grid grid-cols-3 gap-8 border-t border-border pt-8">
                <div className="flex flex-col">
                  <span className="text-4xl font-heading font-bold text-primary">500+</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground mt-2 font-semibold">Attendees</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-heading font-bold text-primary">30+</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground mt-2 font-semibold">Speakers</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-heading font-bold text-primary">3</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground mt-2 font-semibold">Days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 uppercase">Summit Benefits</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-card p-10 rounded-lg border border-border hover:border-primary transition-colors">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4 uppercase">{benefit.title}</h3>
                <p className="text-foreground/80 leading-relaxed font-light">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 uppercase">Distinguished Speakers</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">Learn from industry leaders and military pioneers dedicated to your success.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {speakers.map((speaker, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg mb-6 border-3 border-primary/40 group-hover:border-primary transition-colors">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-2">{speaker.role}</p>
                  <h3 className="text-xl font-heading font-bold mb-3">{speaker.name}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{speaker.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16">
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-center uppercase mb-4">Summit Agenda</h2>
            <p className="text-center text-foreground/70">A curated experience of inspiration and action.</p>
          </div>

          <div className="space-y-6">
            {schedule.map((item, index) => (
              <div key={index} className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-foreground/75 font-light">{item.desc}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-xl font-heading font-bold text-primary/60 whitespace-nowrap">{item.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 uppercase">Location & Details</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-background p-10 rounded-lg border-2 border-primary/40">
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">The Venue</h3>
              <h4 className="text-xl font-heading font-semibold mb-4">Tampa Convention Center</h4>
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <p className="text-foreground/80">333 S Franklin St, Tampa, FL 33602</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-background p-8 rounded-lg border border-border">
                <h4 className="text-xl font-heading font-bold text-primary mb-4 uppercase">Hotel Partner</h4>
                <h5 className="text-lg font-heading font-bold mb-2">JW Marriott Tampa Water Street</h5>
                <p className="text-foreground/80 text-sm mb-4">510 Water St, Tampa, FL 33602</p>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-semibold px-4 py-2">
                  Book with Summit Rate
                </Button>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border">
                <h4 className="text-xl font-heading font-bold text-primary mb-4 uppercase">Getting Around</h4>
                <ul className="space-y-3 text-sm text-foreground/80 font-light">
                  <li className="flex gap-3">
                    <span className="font-semibold min-w-fit">Airport:</span> Tampa International (TPA) - 15 min drive
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold min-w-fit">Parking:</span> Available at convention center & nearby garages
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold min-w-fit">Transit:</span> TECO Line Streetcar to explore downtown
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `url(${heroWomen})`, backgroundSize: 'cover' }}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold text-primary-foreground mb-8">
            Ready to Rise?
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 font-light max-w-2xl mx-auto">
            Don't miss this opportunity to connect with your community and elevate your life.
          </p>
          
          <Button size="lg" className="h-14 md:h-16 px-12 md:px-16 bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-heading font-bold text-lg uppercase tracking-[0.15em]">
            Register for Summit
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="w-24 h-24 rounded-full border-2 border-primary flex items-center justify-center mb-6">
                <img src={thriveLogo} alt="Thrive" className="w-[95%] h-[95%] object-contain" />
              </div>
              <p className="text-foreground/70 max-w-sm mb-6 leading-relaxed font-light">
                Empowering women veterans to find their voice, their purpose, and their community.
              </p>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-6 text-primary uppercase">Quick Links</h4>
              <ul className="space-y-3 text-sm text-foreground/70 font-light">
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#speakers" className="hover:text-primary transition-colors">Speakers</a></li>
                <li><a href="#schedule" className="hover:text-primary transition-colors">Schedule</a></li>
                <li><a href="#location" className="hover:text-primary transition-colors">Location</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-6 text-primary uppercase">Contact</h4>
              <div className="space-y-3 text-sm text-foreground/70 font-light">
                <p>333 S Franklin St<br/>Tampa, FL 33602</p>
                <p>June 5-7, 2026</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-xs text-foreground/50 font-light">
            <p>&copy; 2026 Thrive Women Veteran Summit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
