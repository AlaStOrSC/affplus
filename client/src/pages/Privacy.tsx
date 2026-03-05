import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary">
      <Navbar />
      
      <main className="pt-32 pb-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {t.privacy.title}
          </h1>
          <p className="text-muted-foreground mb-12 border-b border-white/10 pb-8">
            {t.privacy.lastUpdated}
          </p>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-8">
              {t.privacy.intro}
            </p>

            <div className="space-y-12">
              {t.privacy.sections.map((section, index) => (
                <div key={index} className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
