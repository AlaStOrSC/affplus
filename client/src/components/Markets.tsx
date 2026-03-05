import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function Markets() {
  const { t } = useLanguage();

  const colors = [
    "from-red-500 to-purple-600",    // USA
    "from-green-400 to-green-600", // LatAm
    "from-yellow-400 to-green-500", // Brazil
    "from-blue-400 to-indigo-600"  // Rest of World
  ];

  const renderDescriptionWithLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)|([a-zA-Z0-9-]+\.[a-zA-Z]{2,})/g;
    const parts = text.split(urlRegex);
    const matches = text.match(urlRegex) || [];
    
    let matchIndex = 0;
    return parts.map((part, i) => {
      if (!part) return null;
      // Check if this part matches one of our URLs
      if (matches[matchIndex] === part) {
        const url = part.startsWith('http') ? part : `https://${part}`;
        matchIndex++;
        return (
          <a 
            key={i} 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary hover:underline hover:text-primary/80 transition-colors"
          >
            {part}
          </a>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <section id="markets" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block"
            >
              {t.markets.badge}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-white mb-8"
            >
              {t.markets.titleStart} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">{t.markets.titleHighlight}</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mb-10"
            >
              {t.markets.description}
            </motion.p>

            <div className="space-y-6">
              {t.markets.cards.map((market, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                >
                  <div className={`w-2 h-12 rounded-full bg-gradient-to-b ${colors[index]} shrink-0`} />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{market.region}</h3>
                    <span className="text-xs font-mono text-primary uppercase tracking-wider mb-2 block">{market.focus}</span>
                    <p className="text-muted-foreground text-sm">
                      {renderDescriptionWithLinks(market.desc)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square max-w-md mx-auto"
            >
              {/* Abstract Globe Representation */}
              <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-white/5 animate-[spin_40s_linear_infinite_reverse]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center backdrop-blur-md bg-black/40 p-6 rounded-xl border border-white/10">
                  <span className="text-4xl font-bold text-white block">4+</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-widest">{t.markets.stat}</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
