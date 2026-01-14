import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

/* ---------------- TYPEWRITER ---------------- */

const TypewriterMyth = ({ onComplete }) => {
  const myths = ["dissolve into nothing.", "are filtered by soil."];
  const [index, setIndex] = useState(0);

  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const displayText = useTransform(rounded, (v) =>
    myths[index].slice(0, v)
  );

  useEffect(() => {
    const controls = animate(count, myths[index].length, {
      duration: 1.2,
      ease: "easeInOut",
      onComplete: () => {
        setTimeout(() => {
          animate(count, 0, {
            duration: 0.6,
            onComplete: () => {
              if (index === myths.length - 1) {
                onComplete();
              } else {
                setIndex((i) => i + 1);
              }
            },
          });
        }, 1000);
      },
    });
    return controls.stop;
  }, [index]);

  return (
    <div className="flex flex-col md:flex-row items-center gap-3 text-center">
      <span>Discarded pills</span>
      <div className="inline-flex items-center min-w-[200px] justify-center">
        <motion.span className="italic text-[#5D1A1A]">
          {displayText}
        </motion.span>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="ml-2 w-[3px] h-[0.7em] bg-[#5D1A1A]"
        />
      </div>
    </div>
  );
};

/* ---------------- MAIN HERO ---------------- */

const SilentShock = () => {
  const [step, setStep] = useState(1);
  const [activeCard, setActiveCard] = useState(null);
  const canvasRef = useRef(null);

  /* ---------------- FLOATING PILLS ---------------- */

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const pills = Array.from({ length: 15 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      w: Math.random() * 16 + 10,
      h: Math.random() * 50 + 30,
      angle: Math.random() * Math.PI * 2,
      vx: (Math.random() - 0.5) * 0.1,
      vy: (Math.random() - 0.5) * 0.1,
      rot: (Math.random() - 0.5) * 0.002,
      color: ["#3E4F3C", "#5D1A1A", "#C05621"][
        Math.floor(Math.random() * 3)
      ],
      type: Math.random() > 0.5 ? "capsule" : "round",
    }));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pills.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.rot;

        if (p.x < -100) p.x = canvas.width + 100;
        if (p.x > canvas.width + 100) p.x = -100;
        if (p.y < -100) p.y = canvas.height + 100;
        if (p.y > canvas.height + 100) p.y = -100;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.globalAlpha = 0.08;
        ctx.fillStyle = p.color;
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 1;

        if (p.type === "capsule") {
          ctx.beginPath();
          ctx.roundRect(-p.w / 2, -p.h / 2, p.w, p.h, p.w / 2);
          ctx.fill();
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.w, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }
        ctx.restore();
      });
      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  /* ---------------- STATS ---------------- */

  const stats = [
    {
      id: 0,
      val: "70%",
      label: "Water Saturation",
      desc:
        "Pharmaceutical residues detected in global water sources.",
      color: "#3E4F3C",
    },
    {
      id: 1,
      val: "30%",
      label: "Resistance Rise",
      desc:
        "Antibiotic resistance increases due to drug pollution.",
      color: "#5D1A1A",
    },
    {
      id: 2,
      val: "50+",
      label: "Species Affected",
      desc:
        "Aquatic species face behavioral and biological disruption.",
      color: "#C05621",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#F9F7F2] text-[#1A1A1A] overflow-hidden flex flex-col items-center justify-center">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />

      <main className="relative z-10 max-w-7xl px-6 w-full flex flex-col items-center">
        {/* HEADLINE */}
        <motion.div
          animate={{ y: step > 1 ? -40 : 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-10"
        >
          <div className="text-3xl md:text-6xl font-medium mb-6">
            {step === 1 ? (
              <TypewriterMyth onComplete={() => setStep(2)} />
            ) : (
              "Unused medicines don’t disappear."
            )}
          </div>

          <AnimatePresence>
            {step >= 2 && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onAnimationComplete={() =>
                  setTimeout(() => setStep(3), 800)
                }
                className="text-xl opacity-60 italic"
              >
                They move through water, soil, and life.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* STATS */}
        <AnimatePresence>
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid md:grid-cols-3 gap-6 w-full"
            >
              {stats.map((s) => (
                <motion.div
                  key={s.id}
                  onHoverStart={() => setActiveCard(s.id)}
                  onHoverEnd={() => setActiveCard(null)}
                  className="rounded-3xl p-8 text-white cursor-pointer"
                  style={{ background: s.color }}
                  animate={{
                    scale: activeCard === s.id ? 1.05 : 1,
                  }}
                >
                  <h3 className="text-5xl mb-2">{s.val}</h3>
                  <p className="uppercase tracking-wide text-xs mb-4">
                    {s.label}
                  </p>
                  <p className="text-sm opacity-80">{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* SCROLL CUE */}
        {step === 3 && (
          <div className="mt-14 opacity-50 text-xs tracking-widest uppercase">
            Scroll to continue ↓
          </div>
        )}
      </main>
    </div>
  );
};

export default SilentShock;
