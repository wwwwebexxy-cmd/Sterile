"use client";

import { useEffect, useState } from "react";

type QualityStage = "material" | "form" | "finish" | "flow";

const stages: Array<{
  id: QualityStage;
  label: string;
  image: string;
  imageAlt: string;
  caption: string;
}> = [
  {
    id: "material",
    label: "Material",
    image: "/images/quality-material.png",
    imageAlt: "Medical-grade plastic pellets, clear sheet material, a molded container and a paper cup cross-section",
    caption: "The base behind dependable care.",
  },
  {
    id: "form",
    label: "Form",
    image: "/images/quality-form.png",
    imageAlt: "Purpose-built medical trays, a basin, a bottle and collection cups arranged as a product shape study",
    caption: "Purpose-built shapes for daily work.",
  },
  {
    id: "finish",
    label: "Finish",
    image: "/images/quality-finish.png",
    imageAlt: "Finished paper cups, printed surfaces and clear lids arranged for a polished presentation",
    caption: "Considered details, ready to represent you.",
  },
  {
    id: "flow",
    label: "Flow",
    image: "/images/quality-flow.png",
    imageAlt: "Medical disposable components moving through forming, inspection and packing on a production line",
    caption: "A clearer path from need to supply.",
  },
];

function ShieldIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 20 6v5c0 5.2-3.4 8.4-8 10-4.6-1.6-8-4.8-8-10V6l8-3Z" />
      <path d="m8.5 12 2.2 2.2 4.8-5" />
    </svg>
  );
}

export function QualityInteractive() {
  const [activeStage, setActiveStage] = useState<QualityStage>("flow");
  const [isPaused, setIsPaused] = useState(false);
  const active = stages.find((stage) => stage.id === activeStage) ?? stages[3];

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActiveStage((currentStage) => {
        const currentIndex = stages.findIndex((stage) => stage.id === currentStage);
        return stages[(currentIndex + 1) % stages.length].id;
      });
    }, 3000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <div
      className="quality-art"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="quality-stamp"><ShieldIcon /><span>Quality<br /><strong>first</strong></span></div>

      <div className="quality-circle" key={active.id}>
        <img src={active.image} alt={active.imageAlt} />
        <span className="quality-circle-shade" />
        <span className="quality-stage-badge" aria-live="polite">{active.label}</span>
      </div>

      <div className="quality-words" role="tablist" aria-label="Sterile quality stages">
        {stages.map((stage) => (
          <button
            className={`quality-word ${stage.id === active.id ? "is-active" : ""}`}
            key={stage.id}
            type="button"
            role="tab"
            aria-selected={stage.id === active.id}
            onClick={() => setActiveStage(stage.id)}
          >
            {stage.label}
          </button>
        ))}
      </div>

      <div className="quality-caption"><span>{active.caption}</span><span aria-hidden="true">→</span></div>
    </div>
  );
}
