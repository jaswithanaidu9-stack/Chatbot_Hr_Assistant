
import {
  ShieldCheck,
  Monitor,
  Server,
  Cloud,
  Database,
  Bot,
  BrainCircuit,
  MessageCircle,
  FileSearch,
  Sparkles,
  Send,
  CheckCircle
} from "lucide-react";

import { useState } from "react";
import ChatBot from "./components/ChatBot";
import "./App.css";

function App() {
  const [chatOpen, setChatOpen] = useState(false);

  // Technology Stack
  const technologies = [
    {
      icon: Monitor,
      title: "React.js",
      description: "Modern and responsive user interface for seamless employee interaction."
    },
    {
      icon: Server,
      title: "Python FastAPI",
      description: "High-performance backend APIs to handle chatbot requests and responses."
    },
    {
      icon: BrainCircuit,
      title: "Strands Agents",
      description: "AI agent orchestration for intelligent HR policy assistance."
    },
    {
      icon: Cloud,
      title: "Amazon Bedrock",
      description: "Generative AI capabilities to understand questions and generate answers."
    },
    {
      icon: Database,
      title: "Amazon S3",
      description: "Secure storage for HR policy documents and knowledge sources."
    },
    {
      icon: FileSearch,
      title: "RAG Knowledge Base",
      description: "Retrieves relevant information from company policies to provide contextual answers."
    }
  ];

  // How It Works
  const steps = [
    {
      icon: MessageCircle,
      number: "01",
      title: "Ask Your Question",
      description: "Employees ask questions about leave, attendance, reimbursement and company benefits."
    },
    {
      icon: FileSearch,
      number: "02",
      title: "Retrieve HR Policies",
      description: "The AI agent retrieves relevant information from the HR policy knowledge base."
    },
    {
      icon: BrainCircuit,
      number: "03",
      title: "AI Processes Your Query",
      description: "The AI agent uses the retrieved policy information to generate a relevant response."
    },
    {
      icon: CheckCircle,
      number: "04",
      title: "Get Instant Answers",
      description: "Employees receive clear and easy-to-understand answers through the chatbot."
    }
  ];

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">

        <div className="brand">
          <ShieldCheck size={30} />
          <span>
            i<span className="brand-highlight">Space</span>
          </span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#technology">Technology</a>
          <a href="#how-it-works">How It Works</a>
        </div>

        <button
          className="nav-chat-button"
          onClick={() => setChatOpen(true)}
        >
          Ask HR Assistant
        </button>

      </nav>

      {/* Hero Section */}
      <main id="home">

        <section className="hero">

          <div className="hero-content">

            <span className="hero-tag">
              YOUR DIGITAL HR ASSISTANT
            </span>

            <h1>
              Your HR Policies,
              <span> Made Simple.</span>
            </h1>

            <p>
              Get instant answers to your HR questions.
              Explore company policies, understand your
              benefits and find the information you need
              with your AI-powered HR assistant.
            </p>

            <button
              className="hero-button"
              onClick={() => setChatOpen(true)}
            >
              <span>Chat with HR Assistant</span>
            </button>

          </div>

          <div className="hero-visual">
            <div className="hero-circle">
              <Bot size={115} strokeWidth={1.2} />
            </div>

            <div className="floating-card">
              <span>✦</span>
              AI Powered HR Support
            </div>
          </div>

        </section>

        {/* Technology Section */}
        <section className="technology-section" id="technology">

          <div className="section-heading">

            <span>OUR TECHNOLOGY</span>

            <h2>Powered by Modern AI Technology</h2>

            <p>
              Built using modern frontend, backend and
              generative AI technologies to deliver
              intelligent HR assistance.
            </p>

          </div>

          <div className="technology-grid">

            {technologies.map((tech, index) => {
              const Icon = tech.icon;

              return (
                <div className="technology-card" key={index}>

                  <div className="technology-icon">
                    <Icon size={27} />
                  </div>

                  <h3>{tech.title}</h3>

                  <p>{tech.description}</p>

                </div>
              );
            })}

          </div>

        </section>

        {/* How It Works Section */}
        <section className="how-it-works" id="how-it-works">

          <div className="section-heading">

            <span>SIMPLE AND INTELLIGENT</span>

            <h2>How Hr Assistant Works</h2>

            <p>
              From asking a question to receiving an answer,
              our AI-powered assistant makes HR information
              easy to access.
            </p>

          </div>

          <div className="steps-grid">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div className="step-card" key={index}>

                  <div className="step-top">
                    <span className="step-number">
                      {step.number}
                    </span>

                    <div className="step-icon">
                      <Icon size={26} />
                    </div>
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>

                </div>
              );
            })}

          </div>

          <div className="how-it-works-button">

            <h3>Have an HR question?</h3>

            <p>
              Your HR assistant is ready to help you.
            </p>

            <button
              className="hero-button"
              onClick={() => setChatOpen(true)}
            >
              <MessageCircle size={17} />
              Start Conversation
            </button>

          </div>

        </section>

      </main>

      {/* Footer */}
      <footer>
        <div className="footer-brand">
          <ShieldCheck size={21} />
          i<span>Space</span>
        </div>

        <p>
          Your intelligent HR policy assistant.
        </p>

        <p className="copyright">
          © 2026 iSpace | HR Policy Assistant
        </p>
      </footer>

      {/* Floating Chatbot */}
      <button
        className="chat-launcher"
        onClick={() => setChatOpen(!chatOpen)}
        aria-label="Open HR Assistant"
      >
        {chatOpen ? "×" : "✦"}
      </button>

      {chatOpen && (
        <ChatBot onClose={() => setChatOpen(false)} />
      )}

    </div>
  );
}

export default App;
