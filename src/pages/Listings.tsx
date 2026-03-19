import { useState } from "react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useCardTilt } from "@/hooks/useAnimations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { Star, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const allTools = [
  { id: 1, name: "DeWalt 20V MAX Drill", category: "Power Drills", price: 25, rating: 4.9, image: "🔧" },
  { id: 2, name: "Milwaukee Circular Saw", category: "Saws", price: 40, rating: 4.8, image: "⚙️" },
  { id: 3, name: "Bosch Rotary Hammer", category: "Hammers", price: 55, rating: 4.7, image: "🔨" },
  { id: 4, name: "Makita Angle Grinder", category: "Grinders", price: 30, rating: 4.9, image: "⚡" },
  { id: 5, name: "Cat Excavator Mini", category: "Heavy Equipment", price: 280, rating: 5.0, image: "🏗️" },
  { id: 6, name: "Hilti Laser Level", category: "Measuring", price: 35, rating: 4.6, image: "📐" },
  { id: 7, name: "Stihl Concrete Saw", category: "Saws", price: 65, rating: 4.8, image: "🪚" },
  { id: 8, name: "Honda Generator 3000W", category: "Power", price: 75, rating: 4.7, image: "🔋" },
  { id: 9, name: "Husqvarna Plate Compactor", category: "Compaction", price: 90, rating: 4.5, image: "🏗️" },
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
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">Catalog</span>
              <h1 className="text-4xl md:text-5xl font-display font-black text-foreground mt-2">Browse Equipment</h1>
            </div>
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{filtered.length} tools</span>
            </div>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <Button
                key={cat}
                size="sm"
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className={
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground font-display font-bold"
                    : "border-border text-muted-foreground hover:text-foreground hover:bg-secondary font-display"
                }
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((tool) => (
              <div
                key={tool.id}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => setSelectedTool(tool)}
                className="glass-card rounded-xl p-6 cursor-pointer transition-all duration-300 group"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="text-5xl text-center py-10 rounded-lg bg-secondary/50 group-hover:bg-secondary transition-colors mb-4">
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Listings;
