import React, { useEffect, useState } from "react";

const UserProfileDropdown = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    // Perform logout logic
    try {
      const response = await fetch("/auth/logout");
      onLogout();
      window.location.href = "/login";
    } catch (error) {
      console.log(error);
    }
    setIsOpen(false);
  };

  const toggleStyle = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: "white",
    border: "3px solid #000",
    borderRadius: "12px",
    padding: "8px 15px",
    boxShadow: "4px 4px 0px #000",
    transition: "all 0.1s ease",
    transform: "translate(0, 0)",
    textDecoration: "none",
    color: "#2d2d2d",
  };

  const avatarStyle = {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    overflow: "hidden",
    marginRight: "10px",
    border: "2px solid #000",
  };

  const dropdownMenuStyle = {
    position: "absolute",
    top: "100%",
    right: "0",
    backgroundColor: "white",
    border: "3px solid #000",
    borderRadius: "12px",
    boxShadow: "6px 6px 0px #000",
    minWidth: "150px",
    zIndex: 1000,
    marginTop: "8px",
    overflow: "hidden",
  };

  const dropdownItemStyle = {
    display: "block",
    width: "100%",
    padding: "12px 20px",
    backgroundColor: "transparent",
    border: "none",
    textAlign: "left",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "500",
    color: "#2d2d2d",
    transition: "all 0.1s ease",
    textDecoration: "none",
  };

  const handleToggleHover = (e) => {
    e.currentTarget.style.transform = "translate(-2px, -2px)";
    e.currentTarget.style.boxShadow = "6px 6px 0px #000";
  };

  const handleToggleLeave = (e) => {
    e.currentTarget.style.transform = "translate(0, 0)";
    e.currentTarget.style.boxShadow = "4px 4px 0px #000";
  };

  const handleToggleMouseDown = (e) => {
    e.currentTarget.style.transform = "translate(2px, 2px)";
    e.currentTarget.style.boxShadow = "2px 2px 0px #000";
  };

  const handleToggleMouseUp = (e) => {
    e.currentTarget.style.transform = "translate(-2px, -2px)";
    e.currentTarget.style.boxShadow = "6px 6px 0px #000";
  };

  const handleItemHover = (e) => {
    e.target.style.backgroundColor = "#8b5cf6";
    e.target.style.color = "white";
  };

  const handleItemLeave = (e) => {
    e.target.style.backgroundColor = "transparent";
    e.target.style.color = "#2d2d2d";
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={toggleStyle}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={handleToggleHover}
        onMouseLeave={handleToggleLeave}
        onMouseDown={handleToggleMouseDown}
        onMouseUp={handleToggleMouseUp}
      >
        <div style={avatarStyle}>
          <img
            src={user?.picture || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"}
            alt="User Avatar"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <span style={{ marginRight: "8px", fontWeight: "600" }}>
          {user?.username || "User"}
        </span>
        <span style={{ fontSize: "0.8rem" }}>▼</span>
      </div>

      {isOpen && (
        <div style={dropdownMenuStyle}>
          <a
            href="#profile"
            style={dropdownItemStyle}
            onClick={() => setIsOpen(false)}
            onMouseEnter={handleItemHover}
            onMouseLeave={handleItemLeave}
          >
            Profile
          </a>
          <button
            style={dropdownItemStyle}
            onClick={handleLogout}
            onMouseEnter={handleItemHover}
            onMouseLeave={handleItemLeave}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

const MobileMenu = ({ isOpen, user, onLogout, discover, onClose }) => {
  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
    opacity: isOpen ? 1 : 0,
    visibility: isOpen ? "visible" : "hidden",
    transition: "all 0.3s ease",
  };

  const menuStyle = {
    position: "fixed",
    top: 0,
    right: 0,
    height: "100vh",
    width: "300px",
    background: "linear-gradient(135deg, #e6e6fa 0%, #d8bfd8 50%, #dda0dd 100%)",
    border: "3px solid #000",
    borderRight: "none",
    boxShadow: "-8px 0px 0px #000",
    padding: "80px 30px 30px",
    transform: isOpen ? "translateX(0)" : "translateX(100%)",
    transition: "transform 0.3s ease",
    zIndex: 1000,
    overflow: "auto",
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "20px",
    right: "20px",
    background: "white",
    border: "3px solid #000",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    cursor: "pointer",
    fontSize: "1.2rem",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "4px 4px 0px #000",
    transition: "all 0.1s ease",
  };

  const mobileLinkStyle = {
    display: "block",
    color: "#2d2d2d",
    textDecoration: "none",
    fontSize: "1.1rem",
    fontWeight: "600",
    padding: "15px 20px",
    margin: "10px 0",
    backgroundColor: "white",
    border: "3px solid #000",
    borderRadius: "12px",
    boxShadow: "4px 4px 0px #000",
    transition: "all 0.1s ease",
    textAlign: "center",
  };

  const handleLinkHover = (e) => {
    e.target.style.transform = "translate(-2px, -2px)";
    e.target.style.boxShadow = "6px 6px 0px #000";
    e.target.style.backgroundColor = "#8b5cf6";
    e.target.style.color = "white";
  };

  const handleLinkLeave = (e) => {
    e.target.style.transform = "translate(0, 0)";
    e.target.style.boxShadow = "4px 4px 0px #000";
    e.target.style.backgroundColor = "white";
    e.target.style.color = "#2d2d2d";
  };

  return (
    <>
      <div style={overlayStyle} onClick={onClose} />
      <div style={menuStyle}>
        <button
          style={closeButtonStyle}
          onClick={onClose}
          onMouseEnter={(e) => {
            e.target.style.transform = "translate(-1px, -1px)";
            e.target.style.boxShadow = "5px 5px 0px #000";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translate(0, 0)";
            e.target.style.boxShadow = "4px 4px 0px #000";
          }}
        >
          ×
        </button>

        <a
          href="/"
          style={mobileLinkStyle}
          onClick={onClose}
          onMouseEnter={handleLinkHover}
          onMouseLeave={handleLinkLeave}
        >
          Home
        </a>

        {user ? (
          <>
            <a
              href="/discover"
              style={mobileLinkStyle}
              onClick={onClose}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Discover
            </a>
            <a
              href="/chats"
              style={mobileLinkStyle}
              onClick={onClose}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Your Chats
            </a>

            {discover && (
              <div style={{ marginTop: "20px" }}>
                <h3 style={{ color: "#2d2d2d", marginBottom: "15px", textAlign: "center" }}>
                  Discover Sections
                </h3>
                {["For You", "Popular", "Web Development", "Machine Learning", "Others"].map((section) => (
                  <a
                    key={section}
                    href={`#${section.toLowerCase().replace(" ", "-")}`}
                    style={{
                      ...mobileLinkStyle,
                      fontSize: "1rem",
                      backgroundColor: "#f0f0f0",
                    }}
                    onClick={onClose}
                    onMouseEnter={handleLinkHover}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translate(0, 0)";
                      e.target.style.boxShadow = "4px 4px 0px #000";
                      e.target.style.backgroundColor = "#f0f0f0";
                      e.target.style.color = "#2d2d2d";
                    }}
                  >
                    {section}
                  </a>
                ))}
              </div>
            )}

            <div style={{ marginTop: "30px", textAlign: "center" }}>
              <UserProfileDropdown user={user} onLogout={onLogout} />
            </div>
          </>
        ) : (
          <>
            <a
              href="/about_us"
              style={mobileLinkStyle}
              onClick={onClose}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              About Us
            </a>
            <a
              href="/#why-skill-swap"
              style={mobileLinkStyle}
              onClick={onClose}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Why SkillSwap
            </a>
            <a
              href="/login"
              style={mobileLinkStyle}
              onClick={onClose}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Login/Register
            </a>
          </>
        )}
      </div>
    </>
  );
};

const Header = () => {
  const [user, setUser] = useState(null);
  const [discover, setDiscover] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Simulate user data - replace with actual user context
    const userData = {
      username: "johndoe",
      picture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
    };
    setUser(userData);
  }, []);

  useEffect(() => {
    const handleUrlChange = () => {
      const temp = window.location.href.split("/");
      const url = temp.pop();
      setDiscover(url.startsWith("discover"));
    };

    handleUrlChange();
    window.addEventListener("popstate", handleUrlChange);

    return () => {
      window.removeEventListener("popstate", handleUrlChange);
    };
  }, []);

  const handleLogout = () => {
    setUser(null);
  };

  const navbarStyle = {
    background: "#fff",
    border: "none",
    borderBottom: "1px solid #000",
    boxShadow: "0px 2px 0px #000",
    padding: "15px 30px",
    position: "relative",
    zIndex: 998,
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const logoStyle = {
    fontSize: "2rem",
    fontWeight: "800",
    textDecoration: "none",
    letterSpacing: "-1px",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
  };

  const brandText1 = {
    color: "#000",
  };

  const brandText2 = {
    color: "#8b5cf6",
  };

  const desktopNavStyle = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  };

  const navLinkStyle = {
    color: "#2d2d2d",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "600",
    padding: "10px 20px",
    backgroundColor: "white",
    border: "3px solid #000",
    borderRadius: "12px",
    boxShadow: "4px 4px 0px #000",
    transition: "all 0.1s ease",
    transform: "translate(0, 0)",
    display: "inline-block",
  };

  const mobileToggleStyle = {
    backgroundColor: "white",
    border: "3px solid #000",
    borderRadius: "12px",
    padding: "10px 15px",
    cursor: "pointer",
    fontSize: "1.2rem",
    fontWeight: "bold",
    boxShadow: "4px 4px 0px #000",
    transition: "all 0.1s ease",
    display: "none",
  };

  const handleNavLinkHover = (e) => {
    e.target.style.transform = "translate(-2px, -2px)";
    e.target.style.boxShadow = "6px 6px 0px #000";
    e.target.style.backgroundColor = "#8b5cf6";
    e.target.style.color = "white";
  };

  const handleNavLinkLeave = (e) => {
    e.target.style.transform = "translate(0, 0)";
    e.target.style.boxShadow = "4px 4px 0px #000";
    e.target.style.backgroundColor = "white";
    e.target.style.color = "#2d2d2d";
  };

  const handleNavLinkMouseDown = (e) => {
    e.target.style.transform = "translate(2px, 2px)";
    e.target.style.boxShadow = "2px 2px 0px #000";
  };

  const handleNavLinkMouseUp = (e) => {
    e.target.style.transform = "translate(-2px, -2px)";
    e.target.style.boxShadow = "6px 6px 0px #000";
  };

  return (
    <>
      <nav style={navbarStyle}>
        <div style={containerStyle}>
          <a href="/" style={logoStyle}>
            <span style={brandText1} className="brandText1">Skill</span>
            <span style={brandText2} className="text1">Swap</span>
          </a>

          {/* Desktop Navigation */}
          <div style={{ ...desktopNavStyle }} className="desktop-nav">
            <a
              href="/"
              style={navLinkStyle}
              onMouseEnter={handleNavLinkHover}
              onMouseLeave={handleNavLinkLeave}
              onMouseDown={handleNavLinkMouseDown}
              onMouseUp={handleNavLinkMouseUp}
            >
              Home
            </a>

            {user ? (
              <>
                <a
                  href="/discover"
                  style={navLinkStyle}
                  onMouseEnter={handleNavLinkHover}
                  onMouseLeave={handleNavLinkLeave}
                  onMouseDown={handleNavLinkMouseDown}
                  onMouseUp={handleNavLinkMouseUp}
                >
                  Discover
                </a>
                <a
                  href="/chats"
                  style={navLinkStyle}
                  onMouseEnter={handleNavLinkHover}
                  onMouseLeave={handleNavLinkLeave}
                  onMouseDown={handleNavLinkMouseDown}
                  onMouseUp={handleNavLinkMouseUp}
                >
                  Your Chats
                </a>
                <UserProfileDropdown user={user} onLogout={handleLogout} />
              </>
            ) : (
              <>
                <a
                  href="/about_us"
                  style={navLinkStyle}
                  onMouseEnter={handleNavLinkHover}
                  onMouseLeave={handleNavLinkLeave}
                  onMouseDown={handleNavLinkMouseDown}
                  onMouseUp={handleNavLinkMouseUp}
                >
                  About Us
                </a>
                <a
                  href="/#why-skill-swap"
                  style={navLinkStyle}
                  onMouseEnter={handleNavLinkHover}
                  onMouseLeave={handleNavLinkLeave}
                  onMouseDown={handleNavLinkMouseDown}
                  onMouseUp={handleNavLinkMouseUp}
                >
                  Why SkillSwap
                </a>
                <a
                  href="/login"
                  style={{
                    ...navLinkStyle,
                    backgroundColor: "#8b5cf6",
                    color: "white",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translate(-2px, -2px)";
                    e.target.style.boxShadow = "6px 6px 0px #000";
                    e.target.style.backgroundColor = "#7c3aed";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translate(0, 0)";
                    e.target.style.boxShadow = "4px 4px 0px #000";
                    e.target.style.backgroundColor = "#8b5cf6";
                  }}
                  onMouseDown={handleNavLinkMouseDown}
                  onMouseUp={handleNavLinkMouseUp}
                >
                  Login/Register
                </a>
              </>
            )}
          </div>

          {/* Mobile Toggle Button */}
          <button
            style={mobileToggleStyle}
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            onMouseEnter={(e) => {
              e.target.style.transform = "translate(-1px, -1px)";
              e.target.style.boxShadow = "5px 5px 0px #000";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translate(0, 0)";
              e.target.style.boxShadow = "4px 4px 0px #000";
            }}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        user={user}
        onLogout={handleLogout}
        discover={discover}
        onClose={() => setMobileMenuOpen(false)}
      />

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          
          .mobile-toggle {
            display: block !important;
          }
        }

        @media (min-width: 769px) {
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;