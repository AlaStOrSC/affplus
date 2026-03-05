import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Activity, Layers, Target, Zap } from "lucide-react";

export default function WhatWeDo() {
  const { t } = useLanguage();

  const icons = [
    <Layers className="h-10 w-10 text-primary" />,
    <Target className="h-10 w-10 text-secondary" />,
    <Activity className="h-10 w-10 text-primary" />,
    <Zap className="h-10 w-10 text-secondary" />
  ];

  return (
    <section id="what-we-do" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
          >
            {t.whatWeDo.titleStart} <span className="text-primary">{t.whatWeDo.titleHighlight}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            {t.whatWeDo.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whatWeDo.cards.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="mb-6 p-4 rounded-full bg-white/5 w-fit group-hover:bg-primary/20 transition-colors">
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
