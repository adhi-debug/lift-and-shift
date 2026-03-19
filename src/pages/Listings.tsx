import { useState } from "react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useCardTilt } from "@/hooks/useAnimations";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { Star, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import toolDrill from "@/assets/tool-drill.png";
import toolSaw from "@/assets/tool-saw.png";
import toolHammer from "@/assets/tool-hammer.png";
import toolGrinder from "@/assets/tool-grinder.png";
import toolExcavator from "@/assets/tool-excavator.png";
import toolLaser from "@/assets/tool-laser.png";

const allTools = [
  { id: 1, name: "DeWalt 20V MAX Drill", category: "Power Drills", price: 1500, rating: 4.9, image: toolDrill },
  { id: 2, name: "Milwaukee Circular Saw", category: "Saws", price: 2500, rating: 4.8, image: toolSaw },
  { id: 3, name: "Bosch Rotary Hammer", category: "Hammers", price: 3500, rating: 4.7, image: toolHammer },
  { id: 4, name: "Makita Angle Grinder", category: "Grinders", price: 1800, rating: 4.9, image: toolGrinder },
  { id: 5, name: "Cat Excavator Mini", category: "Heavy Equipment", price: 18000, rating: 5.0, image: toolExcavator },
  { id: 6, name: "Hilti Laser Level", category: "Measuring", price: 2200, rating: 4.6, image: toolLaser },
  { id: 7, name: "Stihl Concrete Saw", category: "Saws", price: 4200, rating: 4.8, image: toolSaw },
  { id: 8, name: "Honda Generator 3000W", category: "Power", price: 5000, rating: 4.7, image: toolDrill },
  { id: 9, name: "Husqvarna Plate Compactor", category: "Compaction", price: 6000, rating: 4.5, image: toolHammer },
];

const categories = ["All", ...new Set(allTools.map((t) => t.category))];

type Tool = (typeof allTools)[number];

const Listings = () => {
  useSmoothScroll();
  const { handleMouseMove, handleMouseLeave } = useCardTilt();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  const filtered = selectedCategory === "All" ? allTools : allTools.filter((t) => t.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <BookingModal tool={selectedTool} onClose={() => setSelectedTool(null)} />

      <section className="pt-28 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-[2px] bg-primary" />
                <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary">Catalog</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-black text-foreground">Browse Equipment</h1>
            </div>
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{filtered.length} tools</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <Button
                key={cat}
                size="sm"
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className={
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground font-display font-bold rounded-full"
                    : "border-border text-muted-foreground hover:text-foreground hover:bg-secondary font-display rounded-full"
                }
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((tool, i) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => setSelectedTool(tool)}
                className="glass-card rounded-2xl p-6 cursor-pointer transition-all duration-500 group relative overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(circle at 50% 30%, hsl(30 100% 50% / 0.06), transparent 70%)" }} />
                <div className="relative z-10">
                  <div className="h-48 rounded-xl bg-secondary/30 flex items-center justify-center mb-4 group-hover:bg-secondary/50 transition-colors">
                    <img src={tool.image} alt={tool.name} className="h-32 w-32 object-contain group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-3 h-3 text-primary fill-primary" />
                    <span className="text-xs text-muted-foreground">{tool.rating}</span>
                    <span className="text-xs text-muted-foreground ml-auto px-2 py-0.5 rounded-full bg-secondary">{tool.category}</span>
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg">{tool.name}</h3>
                  <div className="mt-3 flex items-end justify-between">
                    <span className="text-2xl font-display font-black text-primary">₹{tool.price.toLocaleString("en-IN")}</span>
                    <span className="text-xs text-muted-foreground">/day</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Listings;
