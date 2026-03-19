const Hero3D = () => {
  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96" style={{ perspective: "1000px" }}>
      <div
        className="w-full h-full animate-spin-slow"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* 3D Drill / Machine shape using CSS */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Main body */}
            <div
              className="w-32 h-48 md:w-48 md:h-64 rounded-lg bg-secondary border border-border"
              style={{
                background: "linear-gradient(135deg, hsl(0 0% 14%), hsl(0 0% 10%))",
                boxShadow: "0 0 60px hsl(30 100% 50% / 0.1), inset 0 1px 0 hsl(0 0% 100% / 0.05)",
                transform: "rotateX(10deg)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Chuck */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-12 md:w-12 md:h-16 bg-muted rounded-t-full border border-border" />
              {/* Drill bit */}
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-2 h-10 md:w-3 md:h-12 rounded-t-full" style={{ background: "var(--gradient-orange)" }} />
              {/* Handle */}
              <div className="absolute top-1/3 -right-4 md:-right-6 w-10 h-20 md:w-14 md:h-28 bg-secondary rounded-r-xl border border-border" style={{ boxShadow: "inset 0 1px 0 hsl(0 0% 100% / 0.05)" }}>
                {/* Trigger */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-6 md:w-5 md:h-8 bg-primary/20 rounded-sm border border-primary/30" />
              </div>
              {/* Brand mark */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-16 md:w-20 h-1 rounded-full" style={{ background: "var(--gradient-orange)" }} />
              {/* Speed dial */}
              <div className="absolute top-4 left-4 w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-primary/40 flex items-center justify-center">
                <div className="w-1 h-3 bg-primary rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glow ring */}
      <div className="absolute inset-0 rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, hsl(30 100% 50% / 0.3), transparent 70%)" }} />
    </div>
  );
};

export default Hero3D;
