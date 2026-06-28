import { useState, useCallback } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import LoadingScreen from "./components/LoadingScreen";
import CursorGlow from "./components/CursorGlow";
import NeuralCanvas from "./components/NeuralCanvas";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Research from "./sections/Research";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import "./index.css";

function App() {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = useCallback(() => setLoaded(true), []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Abhinav Cheepa — AI/ML Engineer & NLP Researcher</title>
        <meta name="description" content="AI/ML Engineer, NLP Researcher at IIT Bombay. Building intelligent AI systems, publishing multilingual NLP research targeting ACL 2025." />
        <meta property="og:title" content="Abhinav Cheepa — AI/ML Engineer" />
        <meta property="og:description" content="AI/ML Engineer, NLP Researcher at IIT Bombay. ACL 2025 research on Hindi POS Tagging." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="AI, ML, NLP, IIT Bombay, Hindi POS Tagging, MuRIL, Transformers, Deep Learning" />
      </Helmet>

      {!loaded && <LoadingScreen onComplete={handleLoad} />}

      {loaded && (
        <>
          <CursorGlow />
          <NeuralCanvas />
          <div className="relative z-10">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Research />
              <Experience />
              <Contact />
            </main>
            <Footer />
          </div>
        </>
      )}
    </HelmetProvider>
  );
}

export default App;
