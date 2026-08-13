import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Legacy.css";

gsap.registerPlugin(ScrollTrigger);

function Legacy() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;

      if (!section) return;

      const media = section.querySelector(".legacy-media");
      const imageLayer = section.querySelector(".legacy-image-layer");
      const overlay = section.querySelector(".legacy-overlay");
      const content = section.querySelector(".legacy-content");
      const eyebrow = section.querySelector(".legacy-eyebrow");
      const eyebrowLine = section.querySelector(".legacy-eyebrow-line");
      const titleLines = section.querySelectorAll(".legacy-title-line");
      const description = section.querySelector(".legacy-description");
      const button = section.querySelector(".legacy-button");
      const watermark = section.querySelector(".legacy-watermark");
      const scrollIndicator = section.querySelector(".legacy-scroll");

      gsap.set(media, {
        scale: 1.12,
        force3D: true,
      });

      gsap.set(imageLayer, {
        opacity: 0,
      });

      gsap.set(overlay, {
        opacity: 0.72,
      });

      gsap.set(content, {
        y: 60,
        opacity: 0,
      });

      gsap.set(eyebrow, {
        y: 25,
        opacity: 0,
      });

      gsap.set(eyebrowLine, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(titleLines, {
        y: 80,
        opacity: 0,
        force3D: true,
      });

      gsap.set(description, {
        y: 25,
        opacity: 0,
      });

      gsap.set(button, {
        y: 20,
        opacity: 0,
      });

      gsap.set(watermark, {
        scale: 1.15,
        opacity: 0,
        y: 60,
        force3D: true,
      });

      gsap.set(scrollIndicator, {
        opacity: 0,
      });

      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      intro
        .to(
          media,
          {
            scale: 1,
            duration: 2.2,
            ease: "power3.out",
          },
          0
        )
        .to(
          imageLayer,
          {
            opacity: 1,
            duration: 1.8,
            ease: "power2.out",
          },
          0
        )
        .to(
          overlay,
          {
            opacity: 0.45,
            duration: 1.8,
            ease: "power2.out",
          },
          0
        )
        .to(
          watermark,
          {
            opacity: 0.08,
            scale: 1,
            y: 0,
            duration: 1.7,
            ease: "power4.out",
          },
          0.15
        )
        .to(
          content,
          {
            y: 0,
            opacity: 1,
            duration: 1.3,
            ease: "power4.out",
          },
          0.25
        )
        .to(
          eyebrowLine,
          {
            scaleX: 1,
            duration: 0.7,
            ease: "power3.inOut",
          },
          0.65
        )
        .to(
          eyebrow,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          0.72
        )
        .to(
          titleLines,
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            stagger: 0.13,
            ease: "power4.out",
          },
          0.9
        )
        .to(
          description,
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
          },
          1.55
        )
        .to(
          button,
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
          },
          1.75
        )
        .to(
          scrollIndicator,
          {
            opacity: 1,
            duration: 0.6,
          },
          1.95
        );

      gsap.to(media, {
        yPercent: 8,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(watermark, {
        y: -120,
        x: 35,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      gsap.to(content, {
        y: -45,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(scrollIndicator, {
        y: -35,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "45% center",
          end: "bottom center",
          scrub: 1,
        },
      });

      gsap.to(overlay, {
        opacity: 0.65,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "55% center",
          end: "bottom top",
          scrub: 1,
        },
      });

      const refresh = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener("load", refresh);
      requestAnimationFrame(refresh);

      return () => {
        window.removeEventListener("load", refresh);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const goToHistory = () => {
    document.getElementById("principles")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="legacy"
      className="legacy"
      ref={sectionRef}
    >
      <div className="legacy-media-wrapper">
        <video
          className="legacy-media"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/02-logo-reveal.jpg"
        >
          <source
            src="/videos/02-logo-reveal.mp4"
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>
      </div>

      <div className="legacy-image-layer"></div>

      <div className="legacy-overlay"></div>

      <div className="legacy-vignette"></div>

      <div
        className="legacy-watermark"
        aria-hidden="true"
      >
        <span>M</span>
      </div>

      <div className="legacy-content">
        <div className="legacy-eyebrow">
          <span className="legacy-eyebrow-line"></span>

          <span>01 / OUR LEGACY</span>
        </div>

        <h2 className="legacy-title">
          <span className="legacy-title-mask">
            <span className="legacy-title-line">
              THE LEGACY
            </span>
          </span>

          <span className="legacy-title-mask">
            <span className="legacy-title-line legacy-title-emphasis">
              BEYOND COMPARE
            </span>
          </span>
        </h2>

        <p className="legacy-description">
          For over seven decades, we stood for
          perseverance, integrity, and nation-building
          through enterprise. Every step was guided by
          one oath: quality before profit, trust before
          everything.
        </p>

        <button
          type="button"
          className="legacy-button"
          onClick={goToHistory}
        >
          <span>OUR HISTORY</span>

          <span className="legacy-button-arrow">
            ↗
          </span>
        </button>
      </div>

      <div className="legacy-scroll">
        <span className="legacy-scroll-text">
          CONTINUE
        </span>

        <span className="legacy-scroll-track">
          <span className="legacy-scroll-line"></span>
        </span>
      </div>

      <div className="legacy-index">
        <span>01</span>
        <span>/</span>
        <span>06</span>
      </div>
    </section>
  );
}

export default Legacy;