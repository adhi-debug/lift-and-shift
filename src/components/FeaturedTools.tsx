import { useHorizontalScroll, useCardTilt } from "@/hooks/useAnimations";
import { Star } from "lucide-react";

const tools = [
  { id: 1, name: "DeWalt 20V MAX Drill", category: "Power Drills", price: 25, rating: 4.9, image: "🔧" },
  { id: 2, name: "Milwaukee Circular Saw", category: "Saws", price: 40, rating: 4.8, image: "⚙️" },
  { id: 3, name: "Bosch Rotary Hammer", category: "Hammers", price: 55, rating: 4.7, image: "🔨" },
  { id: 4, name: "Makita Angle Grinder", category: "Grinders", price: 30, rating: 4.9, image: "⚡" },
  { id: 5, name: "Cat Excavator Mini", category: "Heavy Equipment", price: 280, rating: 5.0, image: "🏗️" },
  { id: 6, name: "Hilti Laser Level", category: "Measuring", price: 35, rating: 4.6, image: "📐" },
];

const FeaturedTools = () => {
  const { sectionRef, trackRef } = useHorizontalScroll();
  const { handleMouseMove, handleMouseLeave } = useCardTilt();

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      <div className="absolute top-16 left-6 md:left-12 z-10">
        <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">Featured</span>
        <h2 className="text-3xl md:text-5xl font-display font-black mt-2 text-foreground">
          Popular Machines
        </h2>
      </div>

      <div ref={trackRef} className="flex items-center h-full gap-8 px-6 pt-24" style={{ width: "max-content" }}>
        {tools.map((tool) => (
          <div
            key={tool.id}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="glass-card rounded-xl p-6 w-72 md:w-80 flex-shrink-0 transition-all duration-300 cursor-pointer group"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="text-6xl mb-6 text-center py-8 rounded-lg bg-secondary/50 group-hover:bg-secondary transition-colors">
              {tool.image}
            </div>
            <div className="flex items-center gap-1 mb-2">
              <Star className="w-3 h-3 text-primary fill-primary" />
              <span className="text-xs text-muted-foreground">{tool.rating}</span>
              <span className="text-xs text-muted-foreground ml-auto">{tool.category}</span>
            </div>
            <h3 className="font-display font-bold text-foreground">{tool.name}</h3>
            <div className="mt-3 flex items-end justify-between">
              <span className="text-2xl font-display font-black text-primary">${tool.price}</span>
              <span className="text-xs text-muted-foreground">/day</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTools;
