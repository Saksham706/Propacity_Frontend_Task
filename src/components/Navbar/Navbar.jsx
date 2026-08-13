import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavigation = (id) => {
    setMenuOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <header
        className={`murec-navbar ${
          scrolled ? "murec-navbar-scrolled" : ""
        } ${menuOpen ? "murec-navbar-menu-open" : ""}`}
      >
        <div className="murec-navbar-container">
          <button
            className={`murec-menu-button ${
              menuOpen ? "murec-menu-active" : ""
            }`}
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
          </button>

          <nav className="murec-navbar-left">
            <button onClick={() => handleNavigation("legacy")}>
              <span>01</span>
              Legacy
            </button>

            <button onClick={() => handleNavigation("collection")}>
              <span>02</span>
              Collection
            </button>
          </nav>

          <button
            className="murec-navbar-logo"
            onClick={() => handleNavigation("home")}
            aria-label="MUREC home"
          >
            <span className="murec-logo-main">MUREC</span>
            <span className="murec-logo-sub">EST. 2026</span>
          </button>

          <nav className="murec-navbar-right">
            <button onClick={() => handleNavigation("principles")}>
              Principles
              <span>03</span>
            </button>

            <button onClick={() => handleNavigation("contact")}>
              Contact
              <span>04</span>
            </button>
          </nav>

          <div className="murec-navbar-status">
            <span></span>
            <p>Dubai · UAE</p>
          </div>
        </div>
      </header>

      <div
        className={`murec-mobile-menu ${
          menuOpen ? "murec-mobile-menu-open" : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="murec-mobile-menu-background"></div>

        <div className="murec-mobile-menu-inner">
          <div className="murec-mobile-menu-top">
            <span>Navigation</span>
            <span>MUREC / 2026</span>
          </div>

          <nav className="murec-mobile-navigation">
            <button onClick={() => handleNavigation("home")}>
              <span>01</span>
              <strong>Home</strong>
            </button>

            <button onClick={() => handleNavigation("legacy")}>
              <span>02</span>
              <strong>Legacy</strong>
            </button>

            <button onClick={() => handleNavigation("collection")}>
              <span>03</span>
              <strong>Collection</strong>
            </button>

            <button onClick={() => handleNavigation("principles")}>
              <span>04</span>
              <strong>Principles</strong>
            </button>

            <button onClick={() => handleNavigation("sustainability")}>
              <span>05</span>
              <strong>Sustainability</strong>
            </button>

            <button onClick={() => handleNavigation("contact")}>
              <span>06</span>
              <strong>Contact</strong>
            </button>
          </nav>

          <div className="murec-mobile-menu-bottom">
            <div>
              <span>LOCATION</span>
              <p>Dubai, United Arab Emirates</p>
            </div>

            <div>
              <span>CONTACT</span>
              <p>hello@murec.com</p>
            </div>

            <div className="murec-mobile-menu-mark">
              MUREC
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;