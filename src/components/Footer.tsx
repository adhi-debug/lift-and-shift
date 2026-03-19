import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/50 py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "var(--gradient-orange)" }}>
            <span className="font-display font-black text-[10px] text-primary-foreground">E</span>
          </div>
          <span className="font-display font-bold text-foreground">
            Equip<span className="text-primary">Share</span>
          </span>
        </Link>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link to="/listings" className="hover:text-primary transition-colors">Browse</Link>
          <span className="hover:text-primary transition-colors cursor-pointer">About</span>
          <span className="hover:text-primary transition-colors cursor-pointer">Contact</span>
          <span className="hover:text-primary transition-colors cursor-pointer">Terms</span>
        </div>
        <span className="text-xs text-muted-foreground">© 2026 EquipShare</span>
      </div>
    </div>
  </footer>
);

export default Footer;
