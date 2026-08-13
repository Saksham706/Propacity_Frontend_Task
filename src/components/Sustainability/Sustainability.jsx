import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Sustainability.css";

gsap.registerPlugin(ScrollTrigger);

function Sustainability() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;

      if (!section) return;

      const imageWrapper = section.querySelector(
        ".sustainability-image-wrapper"
      );

      const image = section.querySelector(
        ".sustainability-image"
      );

      const imageOverlay = section.querySelector(
        ".sustainability-image-overlay"
      );

      const copy = section.querySelector(
        ".sustainability-copy"
      );

      const label = section.querySelector(
        ".sustainability-label"
      );

      const labelLine = section.querySelector(
        ".sustainability-label-line"
      );

      const titleLines = section.querySelectorAll(
        ".sustainability-title-line"
      );

      const paragraphs = section.querySelectorAll(
        ".sustainability-description"
      );

      const button = section.querySelector(
        ".sustainability-link"
      );

      const badge = section.querySelector(
        ".sustainability-badge"
      );

      const badgeLine = section.querySelector(
        ".sustainability-badge-line"
      );

      const caption = section.querySelector(
        ".sustainability-image-caption"
      );

      const index = section.querySelector(
        ".sustainability-index"
      );

      const backgroundGlow = section.querySelector(
        ".sustainability-background-glow"
      );

      gsap.set(imageWrapper, {
        clipPath: "inset(0 0 100% 0)",
      });

      gsap.set(image, {
        scale: 1.14,
        force3D: true,
      });

      gsap.set(imageOverlay, {
        opacity: 0.15,
      });

      gsap.set(copy, {
        opacity: 0,
        y: 45,
      });

      gsap.set(label, {
        opacity: 0,
        y: 20,
      });

      gsap.set(labelLine, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(titleLines, {
        opacity: 0,
        y: 65,
        force3D: true,
      });

      gsap.set(paragraphs, {
        opacity: 0,
        y: 20,
      });

      gsap.set(button, {
        opacity: 0,
        y: 20,
      });

      gsap.set(badge, {
        opacity: 0,
        scale: 0.82,
      });

      gsap.set(badgeLine, {
        scaleY: 0,
        transformOrigin: "top center",
      });

      gsap.set(caption, {
        opacity: 0,
        y: 10,
      });

      gsap.set(index, {
        opacity: 0,
      });

      gsap.set(backgroundGlow, {
        opacity: 0,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      timeline
        .to(
          backgroundGlow,
          {
            opacity: 1,
            duration: 1.8,
            ease: "power2.out",
          },
          0
        )
        .to(
          imageWrapper,
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.8,
            ease: "power4.inOut",
          },
          0
        )
        .to(
          image,
          {
            scale: 1,
            duration: 2.2,
            ease: "power3.out",
          },
          0
        )
        .to(
          imageOverlay,
          {
            opacity: 0.56,
            duration: 1.4,
            ease: "power2.out",
          },
          0.25
        )
        .to(
          copy,
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power4.out",
          },
          0.2
        )
        .to(
          labelLine,
          {
            scaleX: 1,
            duration: 0.7,
            ease: "power3.inOut",
          },
          0.45
        )
        .to(
          label,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          0.55
        )
        .to(
          titleLines,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.out",
          },
          0.72
        )
        .to(
          paragraphs,
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
          },
          1.35
        )
        .to(
          button,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          1.65
        )
        .to(
          caption,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          1.25
        )
        .to(
          badge,
          {
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: "back.out(1.3)",
          },
          1.35
        )
        .to(
          badgeLine,
          {
            scaleY: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          1.5
        )
        .to(
          index,
          {
            opacity: 1,
            duration: 0.6,
          },
          1.8
        );

      gsap.to(image, {
        yPercent: -7,
        scale: 1.045,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(copy, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(badge, {
        y: -20,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.8,
        },
      });

      gsap.to(backgroundGlow, {
        xPercent: 10,
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      gsap.to(index, {
        y: -18,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      const handleEnter = () => {
        gsap.to(image, {
          scale: 1.035,
          duration: 1.2,
          ease: "power3.out",
        });

        gsap.to(imageOverlay, {
          opacity: 0.42,
          duration: 0.8,
          ease: "power2.out",
        });
      };

      const handleLeave = () => {
        gsap.to(image, {
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        });

        gsap.to(imageOverlay, {
          opacity: 0.56,
          duration: 0.8,
          ease: "power2.out",
        });
      };

      imageWrapper.addEventListener(
        "mouseenter",
        handleEnter
      );

      imageWrapper.addEventListener(
        "mouseleave",
        handleLeave
      );

      const refresh = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener("load", refresh);
      requestAnimationFrame(refresh);

      return () => {
        window.removeEventListener("load", refresh);

        imageWrapper.removeEventListener(
          "mouseenter",
          handleEnter
        );

        imageWrapper.removeEventListener(
          "mouseleave",
          handleLeave
        );
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleNavigation = (event) => {
    event.preventDefault();

    const contact = document.getElementById("contact");

    if (contact) {
      contact.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="sustainability"
      className="sustainability"
      ref={sectionRef}
    >
      <div className="sustainability-background">
        <div className="sustainability-background-glow" />

        <div className="sustainability-grid-overlay" />

        <div className="sustainability-background-line sustainability-background-line-one" />
        <div className="sustainability-background-line sustainability-background-line-two" />
      </div>

      <div className="container sustainability-grid">
        <div className="sustainability-copy">
          <div className="sustainability-label">
            <span className="sustainability-label-line" />

            <span>04 / RESPONSIBLE BY DESIGN</span>
          </div>

          <h2 className="sustainability-title">
            <span className="sustainability-title-mask">
              <span className="sustainability-title-line">
                DESIGNING
              </span>
            </span>

            <span className="sustainability-title-mask">
              <span className="sustainability-title-line">
                FOR A
              </span>
            </span>

            <span className="sustainability-title-mask">
              <span className="sustainability-title-line sustainability-title-highlight">
                BETTER
              </span>
            </span>

            <span className="sustainability-title-mask">
              <span className="sustainability-title-line">
                TOMORROW
              </span>
            </span>
          </h2>

          <div className="sustainability-text">
            <p className="sustainability-description">
              The first MUREC collection is envisioned
              to align with the IGBC certification
              standards, reflecting a commitment to
              responsible development.
            </p>

            <p className="sustainability-description">
              From efficient resource planning to
              healthier living environments,
              sustainability is integrated as a core
              design principle.
            </p>
          </div>

          <a
            href="#contact"
            className="sustainability-link"
            onClick={handleNavigation}
          >
            <span className="sustainability-link-label">
              DISCOVER OUR APPROACH
            </span>

            <span className="sustainability-link-arrow">
              ↗
            </span>
          </a>
        </div>

        <div className="sustainability-image-wrapper">
          <img
            className="sustainability-image"
            src="/images/sustainability.png"
            alt="MUREC sustainable architecture"
            loading="lazy"
          />

          <div className="sustainability-image-overlay" />

          <div className="sustainability-image-caption">
            MUREC / RESPONSIBLE DEVELOPMENT
          </div>

          <div className="sustainability-image-number">
            04
          </div>

          <div className="sustainability-badge">
            <span className="sustainability-badge-line" />

            <div className="sustainability-badge-content">
              <span className="sustainability-badge-title">
                IGBC
              </span>

              <span className="sustainability-badge-subtitle">
                CERTIFIED
              </span>

              <small>
                RESPONSIBLE
                <br />
                DEVELOPMENT
              </small>
            </div>
          </div>
        </div>
      </div>

      <div className="sustainability-index">
        <span>04</span>

        <span className="sustainability-index-line" />

        <span>05</span>
      </div>

      <div className="sustainability-side-label">
        SUSTAINABILITY
      </div>
    </section>
  );
}

export default Sustainability;