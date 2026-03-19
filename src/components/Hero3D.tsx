import { motion } from "framer-motion";
import toolDrill from "@/assets/tool-drill.png";

const Hero3D = () => {
  return (
    <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]" style={{ perspective: "1200px" }}>
      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ background: "radial-gradient(circle, hsl(30 100% 50% / 0.15), transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Rotating rings */}
      <motion.div
        className="absolute inset-4 rounded-full border border-primary/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/60" />
      </motion.div>

      <motion.div
        className="absolute inset-12 rounded-full border border-primary/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-primary/40" />
      </motion.div>

      {/* Center tool image with 3D rotation */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          rotateY: [0, 15, 0, -15, 0],
          rotateX: [0, -5, 0, 5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.img
          src={toolDrill}
          alt="Industrial Drill"
          className="w-48 h-48 md:w-72 md:h-72 object-contain drop-shadow-[0_0_60px_hsl(30_100%_50%/0.3)]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Floating particles around */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <motion.div
          key={angle}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/50"
          style={{
            top: `${50 + 42 * Math.sin((angle * Math.PI) / 180)}%`,
            left: `${50 + 42 * Math.cos((angle * Math.PI) / 180)}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

export default Hero3D;
