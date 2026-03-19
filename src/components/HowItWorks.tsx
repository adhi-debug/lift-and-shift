import { useScrollReveal } from "@/hooks/useAnimations";
import { motion } from "framer-motion";
import { Search, CalendarCheck, Truck, RotateCcw } from "lucide-react";

const steps = [
  { icon: Search, title: "Find Your Tool", desc: "Browse our catalog of premium industrial equipment available near you.", color: "from-primary/20 to-primary/5" },
  { icon: CalendarCheck, title: "Book & Pay", desc: "Select your dates, confirm availability, and pay securely online in ₹.", color: "from-primary/15 to-primary/5" },
  { icon: Truck, title: "Get It Delivered", desc: "We deliver to your job site anywhere across India.", color: "from-primary/20 to-primary/5" },
  { icon: RotateCcw, title: "Return & Review", desc: "Return when done. Leave a review to help the community.", color: "from-primary/15 to-primary/5" },
];

const HowItWorks = () => {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 scroll-reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary">Process</span>
            <div className="w-8 h-[2px] bg-primary" />
          </div>
          <h2 className="text-4xl md:text-7xl font-display font-black text-foreground">
            How It <span className="text-gradient-orange">Works</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-lg font-body">
            From search to return—everything is streamlined for maximum efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[60px] left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="scroll-reveal text-center group"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative mx-auto w-24 h-24 rounded-3xl glass-card flex items-center justify-center mb-8 transition-all duration-500 group-hover:glow-orange overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <step.icon className="w-10 h-10 text-primary relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-display font-bold flex items-center justify-center shadow-lg">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-[250px] mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
