import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Tool {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
}

interface BookingModalProps {
  tool: Tool | null;
  onClose: () => void;
}

const BookingModal = ({ tool, onClose }: BookingModalProps) => {
  return (
    <AnimatePresence>
      {tool && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md glass-card border-l border-border/50 overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-display font-bold text-xl text-foreground">Book Equipment</h2>
                <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
                  <X size={24} />
                </button>
              </div>

              {/* Tool preview */}
              <div className="glass-card rounded-xl p-6 mb-8">
                <div className="text-5xl text-center py-6 mb-4 rounded-lg bg-secondary/50">{tool.image}</div>
                <h3 className="font-display font-bold text-foreground text-lg">{tool.name}</h3>
                <p className="text-sm text-muted-foreground">{tool.category}</p>
                <div className="mt-3 text-2xl font-display font-black text-primary">${tool.price}<span className="text-sm text-muted-foreground font-body font-normal">/day</span></div>
              </div>

              {/* Form */}
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    <Calendar className="w-3 h-3 inline mr-1" /> Start Date
                  </label>
                  <input type="date" className="w-full rounded-lg bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    <Calendar className="w-3 h-3 inline mr-1" /> End Date
                  </label>
                  <input type="date" className="w-full rounded-lg bg-secondary border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    <MapPin className="w-3 h-3 inline mr-1" /> Delivery Address
                  </label>
                  <input type="text" placeholder="Job site address..." className="w-full rounded-lg bg-secondary border border-border px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-orange font-display font-bold py-6 text-base mt-4">
                  Confirm Booking
                </Button>
                <p className="text-xs text-muted-foreground text-center">No payment required until owner confirms.</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
