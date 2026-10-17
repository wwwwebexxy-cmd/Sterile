"use client";

import { useEffect, useState } from "react";

type HeroSlide = {
  src: string;
  alt: string;
  eyebrow: string;
  caption: string;
  detail: string;
};

type HeroCarouselProps = {
  slides: HeroSlide[];
};

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="hero-carousel" aria-live="polite">
      <img
        key={activeSlide.src}
        className="hero-carousel-image"
        src={activeSlide.src}
        alt={activeSlide.alt}
      />
      <div className="image-caption">
        <span>{activeSlide.caption}<br /><small>{activeSlide.detail}</small></span>
        <span className="caption-arrow">→</span>
      </div>
      <div className="hero-carousel-controls" aria-label="Product image slides">
        {slides.map((slide, index) => (
          <button
            type="button"
            key={slide.src}
            className={index === activeIndex ? "is-active" : ""}
            aria-label={`Show ${slide.eyebrow}`}
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
