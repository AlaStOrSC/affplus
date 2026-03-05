import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const navItems = [
    { name: t.nav.whatWeDo, href: "#what-we-do" },
    { name: t.nav.markets, href: "#markets" },
    { name: t.nav.technology, href: "#technology" },
    { name: t.nav.partners, href: "#partners" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-bold tracking-tighter text-white">
          AFFPLUS<span className="text-primary">.IO</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
            >
              {item.name}
            </button>
          ))}
          
          {/* Language Selector */}
          <div className="flex items-center gap-2 border-l border-white/10 pl-6">
            <button 
              onClick={() => setLanguage("es")}
              className={`text-xl hover:scale-110 transition-transform ${language === "es" ? "opacity-100 grayscale-0" : "opacity-50 grayscale"}`}
              title="Español"
            >
              🇪🇸
            </button>
            <button 
              onClick={() => setLanguage("en")}
              className={`text-xl hover:scale-110 transition-transform ${language === "en" ? "opacity-100 grayscale-0" : "opacity-50 grayscale"}`}
              title="English"
            >
              🇺🇸
            </button>
            <button 
              onClick={() => setLanguage("pt")}
              className={`text-xl hover:scale-110 transition-transform ${language === "pt" ? "opacity-100 grayscale-0" : "opacity-50 grayscale"}`}
              title="Português"
            >
              🇧🇷
            </button>
          </div>

          <a href="mailto:connect@bleubull.tech">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 neon-glow ml-4"
            >
              {t.nav.access}
            </Button>
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          {/* Mobile Language Selector */}
          <div className="flex items-center gap-2 mr-2">
            <button 
              onClick={() => setLanguage("es")}
              className={`text-lg ${language === "es" ? "opacity-100" : "opacity-50 grayscale"}`}
            >
              🇪🇸
            </button>
            <button 
              onClick={() => setLanguage("en")}
              className={`text-lg ${language === "en" ? "opacity-100" : "opacity-50 grayscale"}`}
            >
              🇺🇸
            </button>
            <button 
              onClick={() => setLanguage("pt")}
              className={`text-lg ${language === "pt" ? "opacity-100" : "opacity-50 grayscale"}`}
            >
              🇧🇷
            </button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/95 border-l border-white/10">
              <div className="flex flex-col gap-8 mt-10">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-lg font-medium text-white hover:text-primary transition-colors text-left"
                  >
                    {item.name}
                  </button>
                ))}
                <a href="mailto:connect@bleubull.tech" className="w-full">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    {t.nav.access}
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
