
import { ShieldCheck, CalendarDays, Clock, Wallet, HeartPulse } from "lucide-react";
import { useState } from "react";
import ChatBot from "./components/ChatBot";
import "./App.css";

function App() {
  const [chatOpen, setChatOpen] = useState(false);

  const policies = [
    {
      icon: CalendarDays,
      title: "Leave Policy",
      description: "Understand leave types, eligibility, balances and approvals."
    },
    {
      icon: Clock,
      title: "Attendance Policy",
      description: "Find working hours, attendance rules and regularization details."
    },
    {
      icon: Wallet,
      title: "Reimbursement",
      description: "Learn how to submit expense claims and track approvals."
    },
    {
      icon: HeartPulse,
      title: "Employee Benefits",
      description: "Explore insurance, allowances and employee benefits."
    }
  ];

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="brand">
          <ShieldCheck size={30} />
          <span>i<span className="brand-highlight">Space</span></span>
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

        </section>

        {/* Policy Section */}
        <section className="policies" id="policies">
        </section>
      </main>

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
