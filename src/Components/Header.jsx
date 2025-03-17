import { Search, Mic, Menu, X } from "react-feather";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <div className="header-container">
        {/* Hamburger Icon */}
        <button className="hamburger-btn" onClick={toggleMenu}>
          {isOpen ? <X size="35" /> : <Menu size="35" />}
        </button>
        <div className="logo">
          <img
            src="https://www.drikpanchang.com/images/logo/2x/xdrikpanchang.png.pagespeed.ic.7cOCBLZG5-.webp"
            alt="Drik Panchang Logo"
          />
        </div>
        <div className="header-icons">
          <div className="search-container none">
            <Search size="18" />
            <input
              type="text"
              placeholder="Search Drik Panchang"
              aria-label="Search Drik Panchang"
            />
            <Mic size="18" />
          </div>
          <div className="show mob_icons">
            <div>
              <Search size="18" />
            </div>

            <div>En</div>
            <div className="mob_img">
              <img
                src="https://www.drikpanchang.com/images/promotion/google.svg"
                alt="playstore"
                className="header-icon"
              />
            </div>
            <div className="mob_img">
              <img
                src="https://www.drikpanchang.com/images/promotion/apple.svg"
                alt="apple"
                className="header-icon"
              />
            </div>
            <div className="mob_img">
              <img
                src="https://www.drikpanchang.com/images/logobar/clock/clock.svg"
                alt="clock"
                className="header-icon"
              />
            </div>
          </div>
          <button class="dpIcon custom-button none">En</button>
          <button className="dpIcon custom-button none">
            <img
              src="https://www.drikpanchang.com/images/promotion/google.svg"
              alt="playstore"
              className="header-icon"
            />
          </button>
          <button className="dpIcon custom-button none">
            <img
              src="https://www.drikpanchang.com/images/promotion/apple.svg"
              alt="apple"
              className="header-icon"
            />
          </button>
          <button className="dpIcon custom-button settings-btn none">⚙️</button>
          <div className="time none">
            <strong>07:30:55</strong>
            <br />
            <p className="date">Fri Mar 14, 2025</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`nav-bar ${isOpen ? "open" : ""}`}>
        <button className="nav-item">Home</button>
        <button className="nav-item">Panchang</button>
        <button className="nav-item">Calendars</button>
        <button className="nav-item">Muhurat</button>
        <button className="nav-item">Vrat & Upavas</button>
        <button className="nav-item">Festivals</button>
        <button className="nav-item">Jyotish</button>
        <button className="nav-item">Planets</button>
        <button className="nav-item">Lyrics</button>
        <button className="nav-item">Gallery</button>
        <button className="nav-item">Others</button>
      </nav>
    </header>
  );
};

export default Header;
