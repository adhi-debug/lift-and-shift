import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useAnimations";
import { TrendingUp, Users, MapPin, Shield } from "lucide-react";

const AnimatedNumber = ({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        const dur = 2500;
        const s = Date.now();
        const tick = () => {
          const p = Math.min((Date.now() - s) / dur, 1);
          setCount(Math.floor((1 - Math.pow(1 - p, 4)) * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{prefix}{count.toLocaleString("en-IN")}{suffix}</span>;
};

const stats = [
  { icon: TrendingUp, value: 50, suffix: " Cr+", prefix: "₹", label: "Total Rentals Value", desc: "Worth of equipment rented" },
  { icon: Users, value: 12000, suffix: "+", prefix: "", label: "Registered Users", desc: "Across 28 states" },
  { icon: MapPin, value: 150, suffix: "+", prefix: "", label: "Cities Covered", desc: "Pan-India network" },
  { icon: Shield, value: 99, suffix: "%", prefix: "", label: "Uptime Guarantee", desc: "Equipment availability" },
];

const StatsSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[200px] opacity-10" style={{ background: "hsl(30 100% 50%)" }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[180px] opacity-8" style={{ background: "hsl(20 100% 45%)" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary">Impact</span>
            <div className="w-8 h-[2px] bg-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-foreground">
            Numbers That <span className="text-gradient-orange">Matter</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="scroll-reveal glass-card rounded-2xl p-8 text-center group hover:glow-orange transition-all duration-500 relative overflow-hidden"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(circle at 50% 0%, hsl(30 100% 50% / 0.06), transparent 70%)" }} />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-display font-black text-foreground mb-2 group-hover:text-primary transition-colors">
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <div className="font-display font-bold text-sm text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
