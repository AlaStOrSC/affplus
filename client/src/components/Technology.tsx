import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Technology() {
  const { t } = useLanguage();

  return (
    <section id="technology" className="py-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
          >
            {t.technology.titleStart} <span className="text-secondary">{t.technology.titleHighlight}</span>
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.technology.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {t.technology.stack.map((item, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <CheckCircle2 className="h-6 w-6 text-primary group-hover:text-secondary transition-colors" />
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white/50 group-hover:text-white transition-colors cursor-default">
                  {item}
                </h3>
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-secondary">
              <h3 className="text-2xl font-bold text-white mb-4">{t.technology.engineTitle}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t.technology.engineDesc}
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                {t.technology.enginePoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
