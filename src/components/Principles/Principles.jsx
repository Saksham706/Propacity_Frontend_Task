import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Principles.css";

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    number: "01",
    title: "TRUST",
    description:
      "Building relationships that last through honesty, accountability, and consistency.",
  },
  {
    number: "02",
    title: "QUALITY",
    description:
      "Quality before profit. Every detail is approached with purpose and precision.",
  },
  {
    number: "03",
    title: "TRANSPARENCY",
    description:
      "Clarity in every decision, creating confidence across every relationship.",
  },
  {
    number: "04",
    title: "INNOVATION",
    description:
      "Embracing new ideas and technologies to create what comes next.",
  },
];

function Principles() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;

      if (!section) return;

      const video = videoRef.current;
      const content = section.querySelector(".principles-content");
      const heading = section.querySelector(".principles-heading");
      const label = section.querySelector(".principles-label");
      const titleLines = section.querySelectorAll(
        ".principles-title-line"
      );
      const intro = section.querySelector(".principles-intro");
      const items = section.querySelectorAll(".principle-item");
      const watermark = section.querySelector(
        ".principles-watermark"
      );
      const topLine = section.querySelector(
        ".principles-top-line"
      );
      const index = section.querySelector(".principles-index");

      gsap.set(video, {
        scale: 1.1,
        force3D: true,
      });

      gsap.set(content, {
        opacity: 0,
        y: 45,
      });

      gsap.set(heading, {
        x: -35,
        opacity: 0,
      });

      gsap.set(label, {
        y: 20,
        opacity: 0,
      });

      gsap.set(titleLines, {
        y: 70,
        opacity: 0,
      });

      gsap.set(intro, {
        y: 20,
        opacity: 0,
      });

      gsap.set(items, {
        x: 45,
        opacity: 0,
      });

      gsap.set(watermark, {
        scale: 1.1,
        opacity: 0,
      });

      gsap.set(topLine, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(index, {
        opacity: 0,
      });

      const introTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      introTimeline
        .to(
          video,
          {
            scale: 1,
            duration: 2.1,
            ease: "power3.out",
          },
          0
        )
        .to(
          watermark,
          {
            opacity: 1,
            scale: 1,
            duration: 1.6,
            ease: "power4.out",
          },
          0
        )
        .to(
          content,
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power4.out",
          },
          0.15
        )
        .to(
          topLine,
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power3.inOut",
          },
          0.35
        )
        .to(
          heading,
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
          },
          0.4
        )
        .to(
          label,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          },
          0.55
        )
        .to(
          titleLines,
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.12,
            ease: "power4.out",
          },
          0.7
        )
        .to(
          intro,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          1.25
        )
        .to(
          items,
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          },
          0.85
        )
        .to(
          index,
          {
            opacity: 1,
            duration: 0.6,
          },
          1.5
        );

      gsap.to(video, {
        yPercent: 8,
        scale: 1.04,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(watermark, {
        y: -100,
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
        y: -35,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
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

  const changeActive = (index) => {
    if (index === active) return;

    setActive(index);

    const items =
      sectionRef.current?.querySelectorAll(".principle-item");

    if (!items) return;

    items.forEach((item, itemIndex) => {
      const number = item.querySelector(".principle-number");
      const title = item.querySelector(".principle-title");
      const description = item.querySelector(
        ".principle-description"
      );
      const arrow = item.querySelector(".principle-arrow");
      const line = item.querySelector(".principle-line");

      if (itemIndex === index) {
        gsap.to(item, {
          x: 10,
          duration: 0.45,
          ease: "power3.out",
        });

        gsap.to(number, {
          color: "#b18b62",
          duration: 0.35,
        });

        gsap.to(title, {
          color: "#eeeae2",
          x: 5,
          duration: 0.4,
          ease: "power3.out",
        });

        gsap.to(description, {
          color: "rgba(238,234,226,0.72)",
          opacity: 1,
          duration: 0.4,
        });

        gsap.to(arrow, {
          x: 5,
          y: -5,
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
        });

        gsap.to(line, {
          scaleX: 1,
          duration: 0.5,
          ease: "power3.out",
        });
      } else {
        gsap.to(item, {
          x: 0,
          duration: 0.4,
          ease: "power3.out",
        });

        gsap.to(number, {
          color: "rgba(177,139,98,0.55)",
          duration: 0.35,
        });

        gsap.to(title, {
          color: "rgba(238,234,226,0.48)",
          x: 0,
          duration: 0.4,
        });

        gsap.to(description, {
          color: "rgba(238,234,226,0.38)",
          opacity: 0.65,
          duration: 0.4,
        });

        gsap.to(arrow, {
          x: 0,
          y: 0,
          opacity: 0.35,
          duration: 0.4,
        });

        gsap.to(line, {
          scaleX: 0,
          duration: 0.4,
        });
      }
    });
  };

  return (
    <section
      id="principles"
      className="principles"
      ref={sectionRef}
    >
      <div className="principles-media">
        <video
          ref={videoRef}
          className="principles-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/03-principles-reflection.jpg"
        >
          <source
            src="/videos/03-principles-reflection.mp4"
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>
      </div>

      <div className="principles-overlay" />
      <div className="principles-vignette" />

      <div
        className="principles-watermark"
        aria-hidden="true"
      >
        <span>M</span>
      </div>

      <div className="principles-content">
        <div className="principles-heading">
          <div className="principles-top-line" />

          <span className="principles-label">
            02 / OUR VALUES
          </span>

          <h2 className="principles-title">
            <span className="principles-title-mask">
              <span className="principles-title-line">
                LIVING BY
              </span>
            </span>

            <span className="principles-title-mask">
              <span className="principles-title-line principles-title-emphasis">
                PRINCIPLES
              </span>
            </span>
          </h2>

          <p className="principles-intro">
            MUREC is guided by values that shape every
            decision—building trust, delivering quality,
            practicing transparency, and embracing
            innovation as the foundation of everything
            we create.
          </p>
        </div>

        <div className="principles-list">
          {principles.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={`principle-item ${
                active === index ? "active" : ""
              }`}
              onMouseEnter={() => changeActive(index)}
              onFocus={() => changeActive(index)}
              onClick={() => changeActive(index)}
            >
              <span className="principle-number">
                {item.number}
              </span>

              <span className="principle-main">
                <strong className="principle-title">
                  {item.title}
                </strong>

                <span className="principle-description">
                  {item.description}
                </span>
              </span>

              <span
                className="principle-arrow"
                aria-hidden="true"
              >
                ↗
              </span>

              <span className="principle-line">
                <span></span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="principles-index">
        <span>02</span>

        <span className="principles-index-line"></span>

        <span>04</span>
      </div>
    </section>
  );
}

export default Principles;