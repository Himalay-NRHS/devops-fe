import React from "react";

export default function App() {
  return (
    <div style={styles.container}>
      {/* Navbar */}
      <nav style={styles.nav}>
        <h1 style={styles.logo}>My Portfolio</h1>
        <div style={styles.navLinks}>
          <a href="#about" style={styles.link}>About</a>
          <a href="#projects" style={styles.link}>Projects</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <h2>Hello, I'm Jane Doe</h2>
        <p>Frontend Developer | React Enthusiast | UI Designer</p>
      </section>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <h2>About Me</h2>
        <p>
          Passionate about building beautiful, user-friendly web applications
          with React and modern JavaScript.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" style={styles.section}>
        <h2>Projects</h2>
        <div style={styles.projectGrid}>
          <div style={styles.projectCard}>
            <h3>Portfolio Website</h3>
            <p>A personal portfolio built with React.</p>
          </div>
          <div style={styles.projectCard}>
            <h3>Weather App</h3>
            <p>Real-time weather data using OpenWeather API.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={styles.section}>
        <h2>Contact</h2>
        <p>Email: jane@example.com</p>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 Jane Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Updated Inline Styles
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    color: "#fff", // white text on blue
    lineHeight: "1.6",
    backgroundColor: "#007BFF", // blue background
    minHeight: "100vh", // full-screen height
    display: "flex",
    flexDirection: "column",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    background: "rgba(0,0,0,0.2)", // slight transparent overlay on blue
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    margin: 0,
  },
  navLinks: {
    display: "flex",
    gap: "1rem",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontWeight: "bold",
  },
  hero: {
    padding: "3rem 2rem",
    textAlign: "center",
    flex: 1, // take available space
  },
  section: {
    padding: "2rem",
    textAlign: "center",
  },
  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1rem",
    marginTop: "1rem",
  },
  projectCard: {
    padding: "1rem",
    border: "1px solid rgba(255,255,255,0.3)",
    borderRadius: "5px",
    background: "rgba(255,255,255,0.1)",
  },
  footer: {
    textAlign: "center",
    padding: "1rem",
    background: "rgba(0,0,0,0.2)",
  },
};
