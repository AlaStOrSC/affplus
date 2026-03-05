import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section id="partners" className="py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663285532608/aZdybFrZt93JMY96sMXhQy/hero-bg_ebdef7a6.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
            {t.cta.titleStart} <br />
            <span className="text-primary">{t.cta.titleHighlight}</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t.cta.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="mailto:connect@bleubull.tech" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 h-16 rounded-full neon-glow w-full"
              >
                {t.cta.primary}
              </Button>
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
