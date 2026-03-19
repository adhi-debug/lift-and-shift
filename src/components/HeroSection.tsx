import { useHeroReveal } from "@/hooks/useAnimations";
import Hero3D from "./Hero3D";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const heroRef = useHeroReveal();

  return (
    <section className="relative min-h-screen flex items-center industrial-grid overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20" style={{ background: "hsl(30 100% 50%)" }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10" style={{ background: "hsl(30 100% 50%)" }} />

      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div ref={heroRef}>
            <div className="flex items-center gap-2 mb-6">
              <Wrench className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
                Industrial Tool Marketplace
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] tracking-tight mb-8">
              <span className="hero-word inline-block overflow-hidden">
                <span className="inline-block">RENT.</span>
              </span>
              <br />
              <span className="hero-word inline-block overflow-hidden text-gradient-orange">
                <span className="inline-block">BUILD.</span>
              </span>
              <br />
              <span className="hero-word inline-block overflow-hidden">
                <span className="inline-block">RETURN.</span>
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-md mb-10 font-body">
              Access premium construction equipment on-demand. No ownership headaches, just pure building power.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/listings">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-orange font-display font-bold gap-2">
                  Browse Equipment <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary font-display font-bold">
                List Your Tools
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-14 pt-8 border-t border-border/50">
              {[
                { value: "2,400+", label: "Tools Listed" },
                { value: "850+", label: "Active Renters" },
                { value: "99.2%", label: "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-display font-black text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 3D Side */}
          <div className="hidden lg:flex items-center justify-center">
            <Hero3D />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
