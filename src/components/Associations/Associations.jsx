import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Associations.css";

gsap.registerPlugin(ScrollTrigger);

const associations = [
  {
    image: "/images/association-1.webp",
    name: "IGBC",
    description: "Indian Green Building Council",
  },
  {
    image: "/images/association-2.webp",
    name: "CII",
    description: "Confederation of Indian Industry",
  },
  {
    image: "/images/association-3.webp",
    name: "IIA",
    description: "The Indian Institute of Architects",
  },
  {
    image: "/images/association-4.webp",
    name: "CREDAI",
    description:
      "Real Estate Developers' Associations of India",
  },
  {
    image: "/images/association-5.webp",
    name: "ASCE",
    description:
      "American Society of Civil Engineers",
  },
  {
    image: "/images/association-6.webp",
    name: "RICS",
    description: "Regulated by RICS",
  },
];

function Associations() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const marqueeRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const track = trackRef.current;

      if (!section || !track) return;

      const label = section.querySelector(
        ".associations-label"
      );

      const labelLine = section.querySelector(
        ".associations-heading-line"
      );

      const titleLines = section.querySelectorAll(
        ".associations-title-line"
      );

      const titleMasks = section.querySelectorAll(
        ".associations-title-mask"
      );

      const description = section.querySelector(
        ".associations-description"
      );

      const count = section.querySelector(
        ".associations-count"
      );

      const cards = section.querySelectorAll(
        ".association-slide"
      );

      const controls = section.querySelector(
        ".association-controls"
      );

      gsap.set(label, {
        opacity: 0,
        y: 18,
      });

      gsap.set(labelLine, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(titleMasks, {
        overflow: "hidden",
      });

      gsap.set(titleLines, {
        opacity: 0,
        yPercent: 110,
        rotateX: -12,
        transformOrigin: "left bottom",
      });

      gsap.set(description, {
        opacity: 0,
        y: 22,
      });

      gsap.set(count, {
        opacity: 0,
        x: 15,
      });

      gsap.set(cards, {
        opacity: 0,
        y: 35,
        scale: 0.97,
      });

      gsap.set(controls, {
        opacity: 0,
        y: 18,
      });

      const intro = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      intro
        .to(
          labelLine,
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power3.inOut",
          },
          0
        )
        .to(
          label,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          0.15
        )
        .to(
          count,
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          0.25
        )
        .to(
          titleLines,
          {
            opacity: 1,
            yPercent: 0,
            rotateX: 0,
            duration: 1.15,
            stagger: 0.16,
            ease: "power4.out",
          },
          0.35
        )
        .to(
          description,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          0.95
        )
        .to(
          cards,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            stagger: 0.06,
            ease: "power3.out",
          },
          0.75
        )
        .to(
          controls,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          1.35
        );

      const slides = track.querySelectorAll(
        ".association-slide"
      );

      if (!slides.length) return;

      const firstSlide = slides[0];

      const getDistance = () => {
        const slideWidth =
          firstSlide.getBoundingClientRect().width;

        const gap = parseFloat(
          getComputedStyle(track).gap || "0"
        );

        return (
          (slideWidth + gap) *
          associations.length
        );
      };

      let distance = getDistance();

      const marquee = gsap.to(track, {
        x: -distance,
        duration: 10,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((value) => {
            return parseFloat(value) % distance;
          }),
        },
      });

      marqueeRef.current = marquee;

      const handleResize = () => {
        distance = getDistance();

        marquee.progress(0);
      };

      const handleEnter = () => {
        gsap.to(marquee, {
          timeScale: 0.15,
          duration: 0.7,
          ease: "power2.out",
        });
      };

      const handleLeave = () => {
        gsap.to(marquee, {
          timeScale: 1,
          duration: 0.8,
          ease: "power2.out",
        });
      };

      section.addEventListener(
        "mouseenter",
        handleEnter
      );

      section.addEventListener(
        "mouseleave",
        handleLeave
      );

      window.addEventListener(
        "resize",
        handleResize
      );

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      return () => {
        section.removeEventListener(
          "mouseenter",
          handleEnter
        );

        section.removeEventListener(
          "mouseleave",
          handleLeave
        );

        window.removeEventListener(
          "resize",
          handleResize
        );

        marquee.kill();
        marqueeRef.current = null;
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const duplicatedAssociations = [
    ...associations,
    ...associations,
  ];

  return (
    <section
      ref={sectionRef}
      id="associations"
      className="associations"
    >
      <div className="associations-background">
        <div className="associations-grid" />
        <div className="associations-glow" />
      </div>

      <div className="container associations-container">
        <div className="associations-heading">
          <div className="associations-heading-top">
            <div className="associations-label">
              <span className="associations-heading-line" />

              <span>05 / OUR NETWORK</span>
            </div>

            <span className="associations-count">
              06 ASSOCIATIONS
            </span>
          </div>

          <h2 className="associations-title">
            <span className="associations-title-mask">
              <span className="associations-title-line">
                OUR
              </span>
            </span>

            <span className="associations-title-mask">
              <span className="associations-title-line associations-title-emphasis">
                ASSOCIATIONS
              </span>
            </span>
          </h2>

          <div className="associations-title-decoration">
            <span />
          </div>

          <p className="associations-description">
            Building with trusted institutions and
            professional networks that share our
            commitment to excellence.
          </p>
        </div>

        <div className="association-carousel">
          <div
            ref={trackRef}
            className="association-track"
          >
            {duplicatedAssociations.map(
              (association, index) => {
                const originalIndex =
                  index % associations.length;

                return (
                  <div
                    className="association-slide"
                    key={`${association.name}-${index}`}
                  >
                    <article className="association-card">
                      <div className="association-card-top">
                        <span className="association-number">
                          0{originalIndex + 1}
                        </span>

                        <span className="association-category">
                          PARTNER
                        </span>
                      </div>

                      <div className="association-image-wrapper">
                        <img
                          src={association.image}
                          alt={association.name}
                          className="association-image"
                          loading="lazy"
                        />

                        <div className="association-image-overlay" />

                        <span className="association-image-index">
                          MUREC / NETWORK
                        </span>
                      </div>

                      <div className="association-info">
                        <div className="association-copy">
                          <h3>
                            {association.name}
                          </h3>

                          <p>
                            {association.description}
                          </p>
                        </div>

                        <span className="association-arrow">
                          ↗
                        </span>
                      </div>

                      <div className="association-card-line" />
                    </article>
                  </div>
                );
              }
            )}
          </div>
        </div>

        <div className="association-controls">
          <div className="association-progress">
            {associations.map(
              (association, index) => (
                <span
                  key={association.name}
                  className={`progress-line ${
                    index === 0 ? "active" : ""
                  }`}
                />
              )
            )}
          </div>

          <div className="association-status">
            <span>CONTINUOUS</span>

            <span className="status-arrow">
              →
            </span>
          </div>
        </div>
      </div>

      <div className="associations-side-label">
        PROFESSIONAL NETWORK
      </div>

      <div className="associations-index">
        <span>05</span>

        <span className="associations-index-line" />

        <span>06</span>
      </div>
    </section>
  );
}

export default Associations;