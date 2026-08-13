import { useLayoutEffect, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Partners.css";

gsap.registerPlugin(ScrollTrigger);

const partners = [
  {
    name: "Malchand",
    image: "/images/partner-1.png",
    quote:
      "The scale model for Murec will serve as a tangible representation of the proposed development.",
  },
  {
    name: "Bobby Mukherrji",
    image: "/images/partner-2.png",
    quote:
      "We are engaged to conceptualize the interiors for Murec’s clubhouse and tower lobbies, with a focus on refined luxury and strong spatial identity.",
  },
  {
    name: "Goonmeet Ji",
    image: "/images/partner-3.png",
    quote:
      "We are engaged to sculpt the architectural vision for Murec as a contemporary residential landmark—an address conceived for refined urban living.",
  },
  {
    name: "Shivam Patodia",
    image: "/images/partner-4.png",
    quote:
      "Propacity is proud to partner with MUREC as its mandate-led growth partner, reflecting strategic thinking, strong execution, and a shared vision.",
  },
];

function Partners() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const quoteRef = useRef(null);
  const nameRef = useRef(null);
  const eyebrowRef = useRef(null);
  const timerRef = useRef(null);

  const [active, setActive] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState(1);

  const current = partners[active];

  const changePartner = (
    nextIndex,
    newDirection = 1
  ) => {
    if (nextIndex === active) return;

    setDirection(newDirection);

    const image = imageRef.current;
    const quote = quoteRef.current;
    const name = nameRef.current;
    const eyebrow = eyebrowRef.current;

    if (!image || !quote || !name || !eyebrow) {
      setActive(nextIndex);
      return;
    }

    gsap.killTweensOf([
      image,
      quote,
      name,
      eyebrow,
    ]);

    gsap.to(
      [image, quote, name, eyebrow],
      {
        opacity: 0,
        x: newDirection > 0 ? -30 : 30,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setActive(nextIndex);
        },
      }
    );
  };

  useEffect(() => {
    const image = imageRef.current;
    const quote = quoteRef.current;
    const name = nameRef.current;
    const eyebrow = eyebrowRef.current;

    if (!image || !quote || !name || !eyebrow) {
      return;
    }

    gsap.fromTo(
      image,
      {
        opacity: 0,
        x: direction > 0 ? 30 : -30,
        scale: 1.05,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      [eyebrow, quote, name],
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.08,
      }
    );
  }, [active, direction]);

  const next = () => {
    const nextIndex =
      active === partners.length - 1
        ? 0
        : active + 1;

    changePartner(nextIndex, 1);
  };

  const previous = () => {
    const previousIndex =
      active === 0
        ? partners.length - 1
        : active - 1;

    changePartner(previousIndex, -1);
  };

  useEffect(() => {
    if (!isVisible) {
      clearInterval(timerRef.current);
      return;
    }

    clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      const nextIndex =
        active === partners.length - 1
          ? 0
          : active + 1;

      changePartner(nextIndex, 1);
    }, 3000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [active, isVisible]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const label = section.querySelector(
        ".partners-label"
      );

      const labelLine = section.querySelector(
        ".partners-label-line"
      );

      const counter = section.querySelector(
        ".partners-counter"
      );

      const titleLines = section.querySelectorAll(
        ".partners-title-line"
      );

      const description = section.querySelector(
        ".partners-description"
      );

      const imageWrapper = section.querySelector(
        ".partner-image-wrapper"
      );

      const content = section.querySelector(
        ".partner-content"
      );

      const progress = section.querySelector(
        ".partners-progress"
      );

      gsap.set(label, {
        opacity: 0,
        y: 15,
      });

      gsap.set(labelLine, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(counter, {
        opacity: 0,
        x: 15,
      });

      gsap.set(titleLines, {
        opacity: 0,
        yPercent: 100,
        rotateX: -8,
      });

      gsap.set(description, {
        opacity: 0,
        y: 20,
      });

      gsap.set(imageWrapper, {
        opacity: 0,
        y: 35,
        clipPath: "inset(5% 0 5% 0)",
      });

      gsap.set(content, {
        opacity: 0,
        y: 30,
      });

      gsap.set(progress, {
        opacity: 0,
        y: 15,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions:
            "play none none reverse",
        },
      });

      timeline
        .to(
          labelLine,
          {
            scaleX: 1,
            duration: 0.7,
            ease: "power3.inOut",
          },
          0
        )
        .to(
          label,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          0.1
        )
        .to(
          counter,
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          0.15
        )
        .to(
          titleLines,
          {
            opacity: 1,
            yPercent: 0,
            rotateX: 0,
            duration: 0.9,
            stagger: 0.1,
            ease: "power4.out",
          },
          0.25
        )
        .to(
          description,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          0.7
        )
        .to(
          imageWrapper,
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "power4.out",
          },
          0.35
        )
        .to(
          content,
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power4.out",
          },
          0.55
        )
        .to(
          progress,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          1
        );

      gsap.to(imageWrapper, {
        yPercent: -3,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(content, {
        y: -20,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isVisible) return;

      if (event.key === "ArrowRight") {
        next();
      }

      if (event.key === "ArrowLeft") {
        previous();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [active, isVisible]);

  return (
    <section
      id="partners"
      className="partners"
      ref={sectionRef}
    >
      <div className="partners-background">
        <div className="partners-grid" />
        <div className="partners-glow" />
      </div>

      <div className="container partners-container">
        <div className="partners-header">
          <div className="partners-header-top">
            <div className="partners-label">
              <span className="partners-label-line" />

              <span>
                06 / FROM OUR PARTNERS
              </span>
            </div>

            <div className="partners-counter">
              <span>
                0{active + 1}
              </span>

              <i>/</i>

              <span>
                0{partners.length}
              </span>
            </div>
          </div>

          <h2 className="partners-title">
            <span className="partners-title-mask">
              <span className="partners-title-line">
                FROM
              </span>
            </span>

            <span className="partners-title-mask">
              <span className="partners-title-line partners-title-emphasis">
                OUR PARTNERS
              </span>
            </span>
          </h2>

          <div className="partners-title-line-decoration" />

          <p className="partners-description">
            Collaboration with exceptional minds
            and trusted partners shaping the
            MUREC vision.
          </p>
        </div>

        <div className="partner-slider">
          <div className="partner-image-wrapper">
            <div className="partner-image-number">
              0{active + 1}
            </div>

            <img
              ref={imageRef}
              className="partner-image"
              src={current.image}
              alt={current.name}
            />

            <div className="partner-image-overlay" />

            <div className="partner-image-caption">
              MUREC
              <span>COLLECTION</span>
            </div>

            <div className="partner-image-corner">
              PARTNER
            </div>
          </div>

          <div className="partner-content">
            <span
              ref={eyebrowRef}
              className="partner-eyebrow"
            >
              PARTNER / 0{active + 1}
            </span>

            <div className="partner-line" />

            <blockquote ref={quoteRef}>
              “{current.quote}”
            </blockquote>

            <div className="partner-bottom">
              <div
                ref={nameRef}
                className="partner-name"
              >
                <span>
                  IN PARTNERSHIP WITH
                </span>

                <h3>
                  {current.name}
                </h3>
              </div>

              <div className="partner-controls">
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous partner"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next partner"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="partners-progress">
          <div className="partners-progress-track">
            {partners.map(
              (partner, index) => (
                <button
                  key={partner.name}
                  type="button"
                  className={
                    index === active
                      ? "partner-progress active"
                      : "partner-progress"
                  }
                  onClick={() =>
                    changePartner(
                      index,
                      index > active ? 1 : -1
                    )
                  }
                  aria-label={`Show ${partner.name}`}
                />
              )
            )}
          </div>

          <div className="partners-status">
            <span>AUTOPLAY</span>

            <span className="partners-status-arrow">
              →
            </span>
          </div>
        </div>
      </div>

      <div className="partners-side-label">
        COLLABORATION
      </div>

      <div className="partners-index">
        <span>06</span>

        <span className="partners-index-line" />

        <span>06</span>
      </div>
    </section>
  );
}

export default Partners;