import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import heroWorker from "@/assets/hero-worker.png";
import toolDrill from "@/assets/tool-drill.png";
import toolSaw from "@/assets/tool-saw.png";
import toolExcavator from "@/assets/tool-excavator.png";

const AnimatedCounter = ({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const start = Date.now();
          const animate = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref}>{prefix}{count.toLocaleString("en-IN")}{suffix}</div>;
};

const FloatingImage = ({ src, className, delay = 0 }: { src: string; className: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 60, scale: 0.8 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    <motion.img
      src={src}
      alt=""
      className="w-full h-full object-contain drop-shadow-2xl"
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }}
    />
  </motion.div>
);

const Particle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-primary/60"
    initial={{ opacity: 0, y: 0, x: 0 }}
    animate={{
      opacity: [0, 1, 0],
      y: [-20, -100 - Math.random() * 200],
      x: [0, (Math.random() - 0.5) * 100],
    }}
    transition={{ duration: 3 + Math.random() * 2, delay, repeat: Infinity, ease: "easeOut" }}
    style={{ left: `${Math.random() * 100}%`, bottom: `${Math.random() * 30}%` }}
  />
);

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    if (!containerRef.current) return;
    const words = containerRef.current.querySelectorAll(".hero-word");
    gsap.set(words, { y: 140, opacity: 0, rotateX: 40 });
    gsap.to(words, {
      y: 0, opacity: 1, rotateX: 0,
      duration: 1.2, stagger: 0.1, ease: "power4.out", delay: 0.5,
    });

    const subtitle = containerRef.current.querySelector(".hero-subtitle");
    if (subtitle) {
      gsap.fromTo(subtitle, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 1.2, ease: "power3.out" });
    }

    const buttons = containerRef.current.querySelector(".hero-buttons");
    if (buttons) {
      gsap.fromTo(buttons, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 1.5, ease: "power3.out" });
    }
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[110vh] flex items-center overflow-hidden">
      {/* Cinematic BG with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img src={heroBg} alt="" className="w-full h-[120%] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </motion.div>

      {/* Particles */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <Particle key={i} delay={i * 0.3} />
        ))}
      </div>

      {/* Floating tool images - Affinity-style scattered layout */}
      <div className="absolute inset-0 z-[2] pointer-events-none hidden lg:block">
        <FloatingImage src={toolDrill} className="absolute top-[15%] right-[8%] w-32 h-32 xl:w-44 xl:h-44" delay={0.8} />
        <FloatingImage src={toolSaw} className="absolute bottom-[25%] right-[15%] w-28 h-28 xl:w-36 xl:h-36" delay={1.1} />
        <FloatingImage src={toolExcavator} className="absolute top-[55%] right-[5%] w-40 h-40 xl:w-52 xl:h-52" delay={1.4} />
      </div>

      {/* Worker image on right */}
      <motion.div
        className="absolute bottom-0 right-[10%] z-[3] hidden lg:block"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 0.7, x: 0 }}
        transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <img src={heroWorker} alt="" className="h-[70vh] object-contain" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </motion.div>

      {/* Industrial grid overlay */}
      <div className="absolute inset-0 z-[1] industrial-grid opacity-30" />

      {/* Content */}
      <motion.div className="container mx-auto px-6 pt-32 pb-20 relative z-10" style={{ y: textY, opacity }}>
        <div className="max-w-4xl">
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-10 h-[2px] bg-primary" />
            <Wrench className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary">
              India's #1 Tool Marketplace
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-display font-black leading-[0.85] tracking-tighter mb-10" style={{ perspective: "1000px" }}>
            <span className="hero-word inline-block overflow-hidden">
              <span className="inline-block">RENT.</span>
            </span>
            <br />
            <span className="hero-word inline-block overflow-hidden text-gradient-orange">
              <span className="inline-block">BUILD.</span>
            </span>
            <br />
            <span className="hero-word inline-block overflow-hidden">
              <span className="inline-block text-foreground/80">RETURN.</span>
            </span>
          </h1>

          <p className="hero-subtitle text-lg md:text-xl text-muted-foreground max-w-lg mb-12 font-body leading-relaxed opacity-0">
            Access premium construction equipment on-demand across India. No ownership headaches, just pure building power.
          </p>

          <div className="hero-buttons flex flex-wrap gap-4 opacity-0">
            <Link to="/listings">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-orange font-display font-bold gap-2 text-base px-8 py-6 rounded-full">
                Browse Equipment <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-border/50 text-foreground hover:bg-secondary/50 font-display font-bold gap-2 rounded-full px-8 py-6 backdrop-blur-sm">
              <Play className="w-4 h-4" /> Watch Demo
            </Button>
          </div>
        </div>

        {/* Animated Stats Bar */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 pt-10 border-t border-border/30"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          {[
            { target: 2400, suffix: "+", label: "Tools Listed", prefix: "" },
            { target: 850, suffix: "+", label: "Active Renters", prefix: "" },
            { target: 15, suffix: " Cr+", label: "Equipment Value", prefix: "₹" },
            { target: 99, suffix: "%", label: "Satisfaction Rate", prefix: "" },
          ].map((stat) => (
            <div key={stat.label} className="group">
              <div className="text-3xl md:text-4xl font-display font-black text-foreground group-hover:text-primary transition-colors">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <div className="text-xs text-muted-foreground mt-2 tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
