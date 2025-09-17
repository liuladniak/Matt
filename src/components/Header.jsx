import React, { useEffect, useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    if (window.location.pathname === "/" && window.location.hash === "#home") {
      window.history.replaceState(null, "", "/");
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  useEffect(() => {
    const sectionIds = ["home", "about", "work", "contact"];

    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false);
      const scrollY = window.scrollY + 150;
      let currentId = "";
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && scrollY >= section.offsetTop) {
          currentId = sectionIds[i];
          break;
        }
      }
      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <header className="home-header-wrp">
      <div className="home-header">
        <a href="/" className="home-frame82">
          <img
            src="/external/image23012-uhmx-200w.png"
            alt="image23012"
            className="home-image21"
          />
          <span className="home-text10">
            <span className="home-text11">Matt</span>
            <span className="home-text12"> Zaim</span>
          </span>
        </a>

        <div className="mobile-nav">
          <a href="/#home" className="mobile-home">
            Home
          </a>
          <button
            className="hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <img
              src="/external/menu3012-vzx9-200h.png"
              alt="Menu3012"
              className="home2-menu"
            />
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-menu">
            <a href="/#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a
              href="/#work"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              Work
            </a>
            <a href="/#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="/#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>
        )}

        <nav className="home-nav-bar desktop-nav">
          <a
            href="/#home"
            className={`home-text13 nav-link ${
              activeId === "home" ? "active" : ""
            }`}
          >
            Home
          </a>
          <a
            href="/#work"
            className={`home-text13 nav-link ${
              activeId === "work" ? "active" : ""
            }`}
          >
            Work
          </a>
          <a
            href="/#about"
            className={`home-text13 nav-link ${
              activeId === "about" ? "active" : ""
            }`}
          >
            About
          </a>
          <a
            href="/#contact"
            className={`home-text13 nav-link ${
              activeId === "contact" ? "active" : ""
            }`}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
