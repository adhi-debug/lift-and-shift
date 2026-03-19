import { useHorizontalScroll, useCardTilt } from "@/hooks/useAnimations";
import { Star, ArrowRight } from "lucide-react";
import toolDrill from "@/assets/tool-drill.png";
import toolSaw from "@/assets/tool-saw.png";
import toolHammer from "@/assets/tool-hammer.png";
import toolGrinder from "@/assets/tool-grinder.png";
import toolExcavator from "@/assets/tool-excavator.png";
import toolLaser from "@/assets/tool-laser.png";

const tools = [
  { id: 1, name: "DeWalt 20V MAX Drill", category: "Power Drills", price: 1500, rating: 4.9, image: toolDrill },
  { id: 2, name: "Milwaukee Circular Saw", category: "Saws", price: 2500, rating: 4.8, image: toolSaw },
  { id: 3, name: "Bosch Rotary Hammer", category: "Hammers", price: 3500, rating: 4.7, image: toolHammer },
  { id: 4, name: "Makita Angle Grinder", category: "Grinders", price: 1800, rating: 4.9, image: toolGrinder },
  { id: 5, name: "Cat Excavator Mini", category: "Heavy Equipment", price: 18000, rating: 5.0, image: toolExcavator },
  { id: 6, name: "Hilti Laser Level", category: "Measuring", price: 2200, rating: 4.6, image: toolLaser },
];

const FeaturedTools = () => {
  const { sectionRef, trackRef } = useHorizontalScroll();
  const { handleMouseMove, handleMouseLeave } = useCardTilt();

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      <div className="absolute top-16 left-6 md:left-12 z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-[2px] bg-primary" />
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary">Featured</span>
        </div>
        <h2 className="text-3xl md:text-6xl font-display font-black text-foreground">
          Popular <span className="text-gradient-orange">Machines</span>
        </h2>
      </div>

      <div ref={trackRef} className="flex items-center h-full gap-8 px-6 pt-28" style={{ width: "max-content" }}>
        {tools.map((tool, i) => (
          <div
            key={tool.id}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="glass-card rounded-2xl p-6 w-72 md:w-80 flex-shrink-0 transition-all duration-500 cursor-pointer group relative overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(circle at 50% 30%, hsl(30 100% 50% / 0.08), transparent 70%)" }} />

            <div className="relative z-10">
              <div className="h-48 mb-6 rounded-xl bg-secondary/30 flex items-center justify-center overflow-hidden group-hover:bg-secondary/50 transition-colors duration-500">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="h-36 w-36 object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                />
              </div>
              <div className="flex items-center gap-1 mb-2">
                <Star className="w-3 h-3 text-primary fill-primary" />
                <span className="text-xs text-muted-foreground">{tool.rating}</span>
                <span className="text-xs text-muted-foreground ml-auto px-2 py-0.5 rounded-full bg-secondary">{tool.category}</span>
              </div>
              <h3 className="font-display font-bold text-foreground text-lg">{tool.name}</h3>
              <div className="mt-4 flex items-end justify-between">
                <span className="text-2xl font-display font-black text-primary">₹{tool.price.toLocaleString("en-IN")}</span>
                <span className="text-xs text-muted-foreground">/day</span>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                <span>View details</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTools;
