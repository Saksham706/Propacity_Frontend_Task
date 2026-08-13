import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;

      if (!section) return;

      const eyebrow = section.querySelector(
        ".contact-eyebrow"
      );

      const location = section.querySelector(
        ".contact-location"
      );

      const titleLines = section.querySelectorAll(
        ".contact-title-line"
      );

      const description = section.querySelector(
        ".contact-description"
      );

      const email = section.querySelector(
        ".contact-email"
      );

      const infoItems = section.querySelectorAll(
        ".contact-info-item"
      );

      const line = section.querySelector(
        ".contact-top-line"
      );

      const watermark = section.querySelector(
        ".contact-watermark"
      );

      const footer = section.querySelector(
        ".contact-footer"
      );

      const emailLine = section.querySelector(
        ".contact-email-line"
      );

      gsap.set(eyebrow, {
        opacity: 0,
        y: 20,
      });

      gsap.set(location, {
        opacity: 0,
        x: 15,
      });

      gsap.set(titleLines, {
        yPercent: 110,
        opacity: 0,
      });

      gsap.set(description, {
        opacity: 0,
        y: 25,
      });

      gsap.set(email, {
        opacity: 0,
        y: 25,
      });

      gsap.set(infoItems, {
        opacity: 0,
        y: 25,
      });

      gsap.set(line, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(emailLine, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(watermark, {
        opacity: 0,
        scale: 1.08,
      });

      gsap.set(footer, {
        opacity: 0,
        y: 20,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions:
            "play none none reverse",
        },
      });

      timeline
        .to(
          line,
          {
            scaleX: 1,
            duration: 1,
            ease: "power3.inOut",
          },
          0
        )
        .to(
          watermark,
          {
            opacity: 0.045,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          0
        )
        .to(
          eyebrow,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
          },
          0.15
        )
        .to(
          location,
          {
            opacity: 1,
            x: 0,
            duration: 0.65,
            ease: "power3.out",
          },
          0.2
        )
        .to(
          titleLines,
          {
            opacity: 1,
            yPercent: 0,
            duration: 1,
            stagger: 0.13,
            ease: "power4.out",
          },
          0.3
        )
        .to(
          description,
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
          },
          0.85
        )
        .to(
          email,
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
          },
          1
        )
        .to(
          emailLine,
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power3.inOut",
          },
          1.1
        )
        .to(
          infoItems,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: "power3.out",
          },
          1.15
        )
        .to(
          footer,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          1.45
        );

      gsap.to(watermark, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(
        ".contact-heading",
        {
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );

      gsap.to(
        ".contact-details",
        {
          y: -45,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      className="contact"
      ref={sectionRef}
    >
      <div
        className="contact-background"
        aria-hidden="true"
      >
        <div className="contact-grid" />
        <div className="contact-glow" />
      </div>

      <div
        className="contact-watermark"
        aria-hidden="true"
      >
        07
      </div>

      <div className="contact-side-label">
        MUREC / CONTACT
      </div>

      <div className="contact-index">
        <span>07</span>
        <span className="contact-index-line" />
        <span>07</span>
      </div>

      <div className="container contact-container">
        <div className="contact-top">
          <span className="contact-eyebrow">
            07 / GET IN TOUCH
          </span>

          <span className="contact-location">
            NOIDA · INDIA
          </span>
        </div>

        <div className="contact-top-line" />

        <div className="contact-grid-layout">
          <div className="contact-heading">
            <h2 className="contact-title">
              <span className="contact-title-mask">
                <span className="contact-title-line">
                  LET&apos;S
                </span>
              </span>

              <span className="contact-title-mask">
                <span className="contact-title-line contact-title-emphasis">
                  CONNECT.
                </span>
              </span>
            </h2>

            <div className="contact-title-decoration">
              <span />
            </div>
          </div>

          <div className="contact-details">
            <p className="contact-description">
              Looking to collaborate, invest, or simply
              know more? Reach out and let&apos;s connect.
            </p>

            <a
              href="mailto:info@murec.com"
              className="contact-email"
            >
              <span>info@murec.com</span>

              <span className="contact-email-arrow">
                ↗
              </span>

              <span className="contact-email-line" />
            </a>

            <div className="contact-info">
              <div className="contact-info-item">
                <span className="contact-info-label">
                  ADDRESS
                </span>

                <p>
                  Madhusudan, 2nd Floor,
                  <br />
                  Riana Towers, 51-52,
                  <br />
                  Noida Sector 136,
                  <br />
                  Uttar Pradesh - 201301
                </p>
              </div>

              <div className="contact-info-item">
                <span className="contact-info-label">
                  PHONE
                </span>

                <a href="tel:+919717773229">
                  +91 97177 73229
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <div className="contact-footer-brand">
            MUREC
          </div>

          <div className="contact-footer-copy">
            <span>
              MADHUSUDAN URBAN REAL ESTATE COLLECTION
            </span>

            <span>
              © {new Date().getFullYear()} MUREC
            </span>
          </div>

          <a
            href="#home"
            className="contact-back-top"
          >
            <span>BACK TO TOP</span>

            <span className="contact-back-arrow">
              ↑
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;