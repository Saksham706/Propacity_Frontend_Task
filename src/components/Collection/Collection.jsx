import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Collection.css";

gsap.registerPlugin(ScrollTrigger);

function Collection() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;

      if (!section) return;

      const background = section.querySelector(
        ".collection-background"
      );

      const image = section.querySelector(
        ".collection-image"
      );

      const overlay = section.querySelector(
        ".collection-image-overlay"
      );

      const content = section.querySelector(
        ".collection-content"
      );

      const label = section.querySelector(
        ".collection-label"
      );

      const titleLines = section.querySelectorAll(
        ".collection-title-line"
      );

      const description = section.querySelector(
        ".collection-description"
      );

      const button = section.querySelector(
        ".collection-button"
      );

      const index = section.querySelector(
        ".collection-index"
      );

      gsap.set(background, {
        scale: 1.12
      });

      gsap.set(image, {
        scale: 1.08
      });

      gsap.set(overlay, {
        opacity: 0.45
      });

      gsap.set(label, {
        y: 30,
        opacity: 0
      });

      gsap.set(description, {
        y: 25,
        opacity: 0
      });

      gsap.set(button, {
        y: 25,
        opacity: 0
      });

      gsap.set(index, {
        opacity: 0
      });

      gsap.set(titleLines, {
        yPercent: 110
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
          toggleActions: "play none none none",
          once: true
        }
      });

      timeline.to(
        background,
        {
          scale: 1,
          duration: 1.8,
          ease: "power3.out"
        },
        0
      );

      timeline.to(
        image,
        {
          scale: 1,
          duration: 1.6,
          ease: "power3.out"
        },
        0
      );

      timeline.to(
        overlay,
        {
          opacity: 0.72,
          duration: 1.2,
          ease: "power2.out"
        },
        0
      );

      timeline.to(
        label,
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out"
        },
        0.25
      );

      timeline.to(
        titleLines,
        {
          yPercent: 0,
          duration: 1,
          stagger: 0.14,
          ease: "power4.out",
          overwrite: "auto"
        },
        0.4
      );

      timeline.to(
        description,
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out"
        },
        0.9
      );

      timeline.to(
        button,
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          ease: "power3.out"
        },
        1.05
      );

      timeline.to(
        index,
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out"
        },
        1.1
      );

      gsap.to(background, {
        yPercent: 7,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      });

      gsap.to(image, {
        yPercent: -4,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      });

      gsap.to(content, {
        y: -25,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="collection"
      className="collection"
      ref={sectionRef}
    >
      <div className="collection-background-wrapper">
        <img
          className="collection-background"
          src="/images/collection-bg.webp"
          alt=""
          aria-hidden="true"
        />
      </div>

      <div className="collection-image-wrapper">
        <img
          className="collection-image"
          src="/images/collection.png"
          alt="The MUREC Collection"
          loading="lazy"
        />

        <div className="collection-image-overlay" />
      </div>

      <div className="collection-vignette" />

      <div className="collection-grain" />

      <div className="container collection-content">
        <div className="collection-label">
          <span className="collection-label-line" />

          <span>
            03 / THE COLLECTION
          </span>
        </div>

        <h2 className="collection-title">
          <span className="collection-title-mask">
            <span className="collection-title-line">
              THE MUREC
            </span>
          </span>

          <span className="collection-title-mask">
            <span className="collection-title-line collection-title-emphasis">
              COLLECTION
            </span>
          </span>
        </h2>

        <p className="collection-description">
          A portfolio shaped by legacy and guided by
          vision, the MUREC Collection is where every
          project reflects our way of building.
        </p>

        <a
          href="#contact"
          className="collection-button"
        >
          <span>
            DISCOVER THE COLLECTION
          </span>

          <span className="collection-button-arrow">
            ↗
          </span>
        </a>
      </div>

      <div className="collection-index">
        <span>03</span>

        <span className="collection-index-line" />

        <span>05</span>
      </div>
    </section>
  );
}

export default Collection;