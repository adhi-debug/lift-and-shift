import { useScrollReveal } from "@/hooks/useAnimations";
import { Search, CalendarCheck, Truck, RotateCcw } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find Your Tool",
    desc: "Browse our catalog of premium industrial equipment available near you.",
  },
  {
    icon: CalendarCheck,
    title: "Book & Pay",
    desc: "Select your dates, confirm availability, and pay securely online.",
  },
  {
    icon: Truck,
    title: "Get It Delivered",
    desc: "We deliver to your job site or pick it up from the nearest depot.",
  },
  {
    icon: RotateCcw,
    title: "Return & Review",
    desc: "Return when done. Leave a review to help the community.",
  },
];

const HowItWorks = () => {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 scroll-reveal">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">Process</span>
          <h2 className="text-4xl md:text-6xl font-display font-black mt-3 text-foreground">
            How It Works
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto font-body">
            From search to return—everything is streamlined for maximum efficiency on your job site.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="scroll-reveal text-center group">
              <div className="relative mx-auto w-20 h-20 rounded-2xl glass-card flex items-center justify-center mb-6 transition-all duration-300 group-hover:glow-orange">
                <step.icon className="w-8 h-8 text-primary" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-display font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
