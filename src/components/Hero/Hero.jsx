import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      intro
        .from(".hero-video", {
          scale: 1.12,
          duration: 2.4,
          ease: "power2.out",
        })
        .from(
          ".hero-brand",
          {
            y: 20,
            opacity: 0,
            duration: 1,
          },
          "-=1.6"
        )
        .from(
          ".hero-eyebrow",
          {
            y: 25,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.55"
        )
        .from(
          ".hero-title-line",
          {
            yPercent: 110,
            opacity: 0,
            duration: 1.1,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.45"
        )
        .from(
          ".hero-description",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".hero-explore",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.55"
        )
        .from(
          ".hero-scroll-indicator",
          {
            opacity: 0,
            duration: 0.8,
          },
          "-=0.3"
        );

      gsap.to(".hero-video", {
        scale: 1.04,
        yPercent: 5,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-content", {
        yPercent: -12,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "70% top",
          scrub: true,
        },
      });

      gsap.to(".hero-overlay", {
        opacity: 0.55,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-scroll-indicator", {
        opacity: 0,
        y: 25,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "20% top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollDown = () => {
    const legacySection = document.getElementById("legacy");

    if (legacySection) {
      legacySection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className="hero"
      ref={heroRef}
    >
      <div className="hero-media">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/01-home-hero.jpg"
        >
          <source
            src="/videos/01-home-hero.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="hero-black-fade"></div>

      <div className="hero-overlay"></div>

      <div className="hero-vignette"></div>

      <div className="hero-content">
        <div className="hero-brand">
          <span className="hero-brand-symbol">M</span>

          <span className="hero-brand-name">
            MUREC
          </span>
        </div>

        <div className="hero-main">
          <p className="hero-eyebrow">
            MADHUSUDAN URBAN REAL ESTATE COLLECTION
          </p>

          <h1 className="hero-title">
            <span className="hero-title-mask">
              <span className="hero-title-line">
                THE LEGACY
              </span>
            </span>

            <span className="hero-title-mask">
              <span className="hero-title-line hero-title-highlight">
                BEYOND COMPARE
              </span>
            </span>
          </h1>

          <p className="hero-description">
            Seven decades of perseverance, integrity,
            <br />
            and nation-building through enterprise.
          </p>

          <button
            type="button"
            className="hero-explore"
            onClick={scrollDown}
            aria-label="Explore MUREC legacy"
          >
            <span className="hero-explore-label">
              EXPLORE
            </span>

            <span className="hero-explore-arrow">
              <span>↗</span>
            </span>
          </button>
        </div>
      </div>

      <button
        type="button"
        className="hero-scroll-indicator"
        onClick={scrollDown}
        aria-label="Scroll to legacy section"
      >
        <span className="hero-scroll-text">
          SCROLL TO EXPLORE
        </span>

        <span className="hero-scroll-line">
          <span className="hero-scroll-dot"></span>
        </span>
      </button>

      <div className="hero-location">
        <span className="hero-location-dot"></span>
        <span>INDIA</span>
      </div>
    </section>
  );
}

export default Hero;