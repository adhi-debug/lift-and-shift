import { useScrollReveal } from "@/hooks/useAnimations";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Server, Shield } from "lucide-react";

const CTASection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full blur-[200px] opacity-15" style={{ background: "hsl(30 100% 50%)" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="scroll-reveal glass-card rounded-3xl p-12 md:p-20 text-center border border-border/50">
          <h2 className="text-4xl md:text-6xl font-display font-black text-foreground leading-tight">
            Ready to <span className="text-gradient-orange">Build</span>?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-lg font-body">
            Join thousands of contractors and builders who trust EquipShare for reliable tool access.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-orange font-display font-bold gap-2">
              Get Started Free <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary font-display font-bold">
              Contact Sales
            </Button>
          </div>
        </div>

        {/* Backend buttons section */}
        <div className="scroll-reveal mt-20">
          <div className="text-center mb-10">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">Infrastructure</span>
            <h3 className="text-2xl md:text-3xl font-display font-black text-foreground mt-2">
              Backend & Services
            </h3>
            <p className="text-muted-foreground mt-2 text-sm">Connect your backend services to power EquipShare.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <button className="glass-card rounded-xl p-6 text-center transition-all duration-300 hover:glow-orange group cursor-pointer">
              <Database className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-display font-bold text-sm text-foreground block">Connect Database</span>
              <span className="text-xs text-muted-foreground mt-1 block">PostgreSQL, storage & auth</span>
            </button>
            <button className="glass-card rounded-xl p-6 text-center transition-all duration-300 hover:glow-orange group cursor-pointer">
              <Server className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-display font-bold text-sm text-foreground block">API Functions</span>
              <span className="text-xs text-muted-foreground mt-1 block">Serverless edge functions</span>
            </button>
            <button className="glass-card rounded-xl p-6 text-center transition-all duration-300 hover:glow-orange group cursor-pointer">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-display font-bold text-sm text-foreground block">Authentication</span>
              <span className="text-xs text-muted-foreground mt-1 block">User auth & roles</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
