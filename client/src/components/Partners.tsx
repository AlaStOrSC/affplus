import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function Partners() {
  const { t } = useLanguage();

  return (
    <section id="partners" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            {t.nav.partners}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Betswatch */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-colors group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                {t.markets.brands.betswatch.name}
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t.markets.brands.betswatch.desc}
            </p>
          </motion.div>

          {/* Slotsbuzz */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-colors group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                {t.markets.brands.slotsbuzz.name}
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t.markets.brands.slotsbuzz.desc}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
