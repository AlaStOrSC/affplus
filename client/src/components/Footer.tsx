import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-display font-bold tracking-tighter text-white mb-6 block">
                AFFPLUS<span className="text-primary">.IO</span>
            </Link>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-display font-bold mb-6 uppercase tracking-widest text-sm">{t.footer.legalTitle}</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">{t.footer.privacy}</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">{t.footer.terms}</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">{t.footer.cookies}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-display font-bold mb-6 uppercase tracking-widest text-sm">{t.footer.contactTitle}</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">connect@bluebull.tech</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">{t.footer.support}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} AffPlus.io. {t.footer.rights}
          </p>
          <p className="text-xs text-muted-foreground">
            {t.footer.designed}
          </p>
        </div>
      </div>
    </footer>
  );
}
