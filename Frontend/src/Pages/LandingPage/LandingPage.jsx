import React, { useState, useEffect } from "react";

const LandingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSkill, setActiveSkill] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Enhanced event handlers
  const handleButtonHover = (e) => {
    e.target.style.transform = "translate(-3px, -3px)";
    e.target.style.boxShadow = "9px 9px 0px #000";
    e.target.style.backgroundColor = "#7c3aed";
  };

  const handleButtonLeave = (e) => {
    e.target.style.transform = "translate(0, 0)";
    e.target.style.boxShadow = "6px 6px 0px #000";
    e.target.style.backgroundColor = "#8b5cf6";
  };

  const handleButtonMouseDown = (e) => {
    e.target.style.transform = "translate(3px, 3px)";
    e.target.style.boxShadow = "3px 3px 0px #000";
  };

  const handleButtonMouseUp = (e) => {
    e.target.style.transform = "translate(-3px, -3px)";
    e.target.style.boxShadow = "9px 9px 0px #000";
  };

  const handleFeatureHover = (e) => {
    e.currentTarget.style.transform = "translate(-4px, -4px)";
    e.currentTarget.style.boxShadow = "12px 12px 0px #000";
    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
  };

  const handleFeatureLeave = (e) => {
    e.currentTarget.style.transform = "translate(0, 0)";
    e.currentTarget.style.boxShadow = "8px 8px 0px #000";
    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
  };

  const handleFeatureMouseDown = (e) => {
    e.currentTarget.style.transform = "translate(4px, 4px)";
    e.currentTarget.style.boxShadow = "4px 4px 0px #000";
  };

  const handleFeatureMouseUp = (e) => {
    e.currentTarget.style.transform = "translate(-4px, -4px)";
    e.currentTarget.style.boxShadow = "12px 12px 0px #000";
  };

  const handleSkillClick = (skill) => {
    setActiveSkill(skill);
    setInputValue(skill);
    setTimeout(() => setActiveSkill(null), 2000);
  };

  // Styles
  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)",
    position: "relative",
    overflow: "hidden",
  };

  const heroSectionStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "120px 40px 100px",
    textAlign: "center",
    position: "relative",
    zIndex: 5,
  };

  const mainTitleStyle = {
    fontSize: "4.5rem",
    fontWeight: "900",
    color: "#1a1a1a",
    marginBottom: "30px",
    letterSpacing: "-3px",
    lineHeight: "1.1",
    textShadow: "3px 3px 0px rgba(139, 92, 246, 0.1)",
  };

  const subtitleStyle = {
    fontSize: "1.4rem",
    color: "#4a4a4a",
    maxWidth: "750px",
    marginBottom: "60px",
    lineHeight: "1.7",
    fontWeight: "500",
  };

  const ctaButtonStyle = {
    backgroundColor: "#8b5cf6",
    color: "white",
    border: "4px solid #000",
    padding: "18px 45px",
    fontSize: "1.2rem",
    fontWeight: "700",
    borderRadius: "16px",
    cursor: "pointer",
    transition: "all 0.15s ease",
    boxShadow: "6px 6px 0px #000",
    transform: "translate(0, 0)",
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  const inputContainerStyle = {
    display: "flex",
    gap: "20px",
    marginBottom: "30px",
    alignItems: "flex-start",
    flexWrap: "wrap",
    justifyContent: "center",
    minHeight: "80px",
  };

  const inputStyle = {
    padding: "18px 25px",
    fontSize: "1.1rem",
    borderRadius: "16px",
    border: `4px solid ${isInputFocused ? "#8b5cf6" : "#000"}`,
    boxShadow: `6px 6px 0px #000`,
    backgroundColor: "white",
    minWidth: "520px",
    outline: "none",
    transform: "translate(0, 0)",
    transition: "all 0.2s ease",
    fontWeight: "500",
  };

  const skillsContainerStyle = {
    marginBottom: "60px",
    minHeight: "120px",
  };

  const skillButtonsContainerStyle = {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    maxWidth: "900px"
  };

  const getSkillButtonStyle = (skill) => ({
    backgroundColor: activeSkill === skill ? "#8b5cf6" : "#ffffff",
    color: activeSkill === skill ? "white" : "#2d2d2d",
    border: "3px solid #000",
    padding: "12px 24px",
    borderRadius: "12px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "600",
    boxShadow: "4px 4px 0px #000",
    transition: "all 0.2s ease",
    transform: "translate(0, 0)",
    margin: "4px",
  });

  const featuresSectionStyle = {
    backgroundColor: "#1a1a1a",
    color: "white",
    padding: "100px 40px",
    position: "relative",
  };

  const sectionTitleStyle = {
    fontSize: "3.5rem",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: "80px",
    background: "linear-gradient(135deg, #8b5cf6, #06b6d4, #10b981)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    letterSpacing: "-2px",
  };

  const featuresGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "40px",
    maxWidth: "1400px",
    margin: "0 auto",
    alignItems: "start",
  };

  const featureCardStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    color: "#2d2d2d",
    padding: "40px",
    borderRadius: "20px",
    border: "4px solid #000",
    boxShadow: "8px 8px 0px #000",
    transition: "all 0.2s ease",
    transform: "translate(0, 0)",
    margin: "5px",
    position: "relative",
    overflow: "hidden",
  };

  const featureNumberStyle = {
    display: "inline-block",
    width: "50px",
    height: "50px",
    backgroundColor: "#8b5cf6",
    color: "white",
    borderRadius: "50%",
    textAlign: "center",
    lineHeight: "50px",
    fontSize: "1.4rem",
    fontWeight: "900",
    marginBottom: "25px",
    border: "3px solid #000",
    boxShadow: "3px 3px 0px #000",
  };

  const featureTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#8b5cf6",
  };

  const featureDescStyle = {
    lineHeight: "1.7",
    color: "#4a4a4a",
    fontSize: "1.05rem",
  };

  const statsStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "60px",
    marginBottom: "50px",
    flexWrap: "wrap",
  };

  const statItemStyle = {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: "16px",
    border: "3px solid rgba(255, 255, 255, 0.2)",
    minWidth: "150px",
  };

  const statNumberStyle = {
    fontSize: "2.5rem",
    fontWeight: "900",
    color: "#8b5cf6",
    display: "block",
  };

  const statLabelStyle = {
    fontSize: "1rem",
    color: "rgba(255, 255, 255, 0.8)",
    fontWeight: "500",
  };

  // Enhanced star decorations
  const StarDecoration = ({ style }) => (
    <div
      style={{
        position: "absolute",
        fontSize: "2.5rem",
        background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        opacity: 0.8,
        animation: "sparkle 4s ease-in-out infinite",
        pointerEvents: "none",
        ...style,
      }}
    >
      ✦
    </div>
  );

  // Floating shapes
  const FloatingShape = ({ style, children }) => (
    <div
      style={{
        position: "absolute",
        border: "3px solid rgba(139, 92, 246, 0.3)",
        borderRadius: "50%",
        animation: "float 6s ease-in-out infinite",
        pointerEvents: "none",
        ...style,
      }}
    >
      {children}
    </div>
  );

  const features = [
    {
      number: "1",
      title: "Learn From Industry Experts",
      description: "Connect with seasoned professionals and gain practical, real-world knowledge. Master programming languages, creative skills, business strategies, and more through personalized mentorship."
    },
    {
      number: "2", 
      title: "Become a Mentor & Earn",
      description: "Transform your expertise into income while making a difference. Share your knowledge, build your reputation, and create lasting impact in your field of expertise."
    },
    {
      number: "3",
      title: "Collaborative Learning Hub", 
      description: "Join a vibrant community of learners and creators. Participate in group challenges, collaborative projects, and peer-to-peer learning experiences that accelerate growth."
    },
    {
      number: "4",
      title: "Unlimited Learning Paths",
      description: "Explore thousands of skills across technology, creative arts, business, and lifestyle categories. From beginner-friendly basics to advanced masterclasses."
    },
    {
      number: "5",
      title: "Track Your Progress",
      description: "Set goals, monitor achievements, and celebrate milestones. Our intelligent tracking system helps you stay motivated and see your continuous improvement."
    }
  ];

  const skills = [
    "JavaScript", "Photography", "Guitar", "Cooking", "UI/UX Design", 
    "React", "Python", "Video Editing", "Digital Marketing", "Yoga",
    "Data Science", "Blockchain", "Mobile Apps", "Creative Writing"
  ];

  return (
    <div style={containerStyle}>
      {/* Enhanced Decorative Elements */}
      <StarDecoration style={{ top: "8%", left: "8%", animationDelay: "0s" }} />
      <StarDecoration style={{ top: "15%", right: "12%", animationDelay: "1.5s" }} />
      <StarDecoration style={{ top: "70%", left: "3%", animationDelay: "3s" }} />
      <StarDecoration style={{ bottom: "15%", right: "8%", animationDelay: "0.8s" }} />
      
      <FloatingShape style={{ top: "20%", left: "20%", width: "60px", height: "60px", animationDelay: "0s" }} />
      <FloatingShape style={{ top: "60%", right: "25%", width: "40px", height: "40px", animationDelay: "2s" }} />
      <FloatingShape style={{ bottom: "30%", left: "15%", width: "80px", height: "80px", animationDelay: "4s" }} />

      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <h1 style={mainTitleStyle}>
          The Ultimate Platform for{" "}
          <span style={{background: "linear-gradient(135deg, #8b5cf6, #06b6d4, #10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>
            Skill Exchange
          </span>
        </h1>
        <p style={subtitleStyle}>
          Transform your knowledge into opportunities. Learn from experts, teach your skills, 
          and join a thriving community of lifelong learners and innovators.
        </p>
        
        {/* Enhanced Input Section */}
        <div style={inputContainerStyle}>
          <input
            type="text"
            placeholder="What skill would you like to learn or teach?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            style={inputStyle}
          />
          <button 
            style={ctaButtonStyle}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
            onMouseDown={handleButtonMouseDown}
            onMouseUp={handleButtonMouseUp}
          >
            Get Started
          </button>
        </div>

        {/* Enhanced Skills Section */}
        <div style={skillsContainerStyle}>
          <p style={{color: "#4a4a4a", marginBottom: "25px", fontSize: "1.1rem", fontWeight: "600"}}>
            🔥 Trending Skills:
          </p>
          <div style={skillButtonsContainerStyle}>
            {skills.map((skill) => (
              <button
                key={skill}
                style={getSkillButtonStyle(skill)}
                onClick={() => handleSkillClick(skill)}
                onMouseEnter={(e) => {
                  if (activeSkill !== skill) {
                    e.target.style.transform = "translate(-1px, -1px)";
                    e.target.style.boxShadow = "4px 4px 0px #000";
                    e.target.style.backgroundColor = "#f8fafc";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSkill !== skill) {
                    e.target.style.transform = "translate(0, 0)";
                    e.target.style.boxShadow = "3px 3px 0px #000";
                    e.target.style.backgroundColor = "#ffffff";
                  }
                }}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={featuresSectionStyle} id="features">
        {/* Stats Section */}
        <div style={statsStyle}>
          <div style={statItemStyle}>
            <span style={statNumberStyle}>10K+</span>
            <span style={statLabelStyle}>Active Learners</span>
          </div>
          <div style={statItemStyle}>
            <span style={statNumberStyle}>500+</span>
            <span style={statLabelStyle}>Expert Mentors</span>
          </div>
          <div style={statItemStyle}>
            <span style={statNumberStyle}>50+</span>
            <span style={statLabelStyle}>Skill Categories</span>
          </div>
        </div>

        <h2 style={sectionTitleStyle}>WHY CHOOSE SKILL SWAP?</h2>
        <div style={featuresGridStyle}>
          {features.map((feature, index) => (
            <div 
              key={index}
              style={featureCardStyle}
              onMouseEnter={handleFeatureHover}
              onMouseLeave={handleFeatureLeave}
              onMouseDown={handleFeatureMouseDown}
              onMouseUp={handleFeatureMouseUp}
            >
              <div style={featureNumberStyle}>{feature.number}</div>
              <h3 style={featureTitleStyle}>{feature.title}</h3>
              <p style={featureDescStyle}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes sparkle {
          0%, 100% { 
            transform: scale(1) rotate(0deg);
            opacity: 0.8;
          }
          50% { 
            transform: scale(1.3) rotate(180deg);
            opacity: 1;
          }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
          }
          33% { 
            transform: translateY(-20px) rotate(120deg);
          }
          66% { 
            transform: translateY(-10px) rotate(240deg);
          }
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        @media (max-width: 768px) {
          input {
            min-width: 300px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;