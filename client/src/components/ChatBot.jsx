
import { useState } from "react";
import axios from "axios";
import {
  Bot,
  X,
  Send,
  User,
  RotateCcw
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function ChatBot({ onClose }) {

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello! 👋 Welcome to ispace hr assistant. I'm your HR Policy Assistant. How can I help you today?"
    }
  ]);

  const suggestions = [
    "What is the leave policy?",
    "How do I mark attendance?",
    "How can I claim reimbursement?",
    "What are my employee benefits?"
  ];

  const sendMessage = async (text = message) => {

    const question = text.trim();

    if (!question || loading) return;

    setMessages(prev => [
      ...prev,
      { role: "user", text: question }
    ]);

    setMessage("");
    setLoading(true);

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/api/chat",
        {
          message: question
        }
      );

      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          text: response.data.answer
        }
      ]);

    } catch (error) {

      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          text: "I'm unable to connect to the HR service right now. Please try again."
        }
      ]);

    } finally {
      setLoading(false);
    }
  };

  const resetChat = () => {
    setMessages([
      {
        role: "assistant",
        text: "Hello! 👋 ispace hr assistant. How can I help you?"
      }
    ]);
  };

  return (
    <div className="chat-window">

      {/* Chat Header */}
      <div className="chat-header">

        <div className="chat-profile">
          <div className="bot-avatar">
            <Bot size={23} />
          </div>

          <div>
            <h3>HR Policy Assistant</h3>
            <span>● Online</span>
          </div>
        </div>

        <div className="chat-actions">
          <button onClick={resetChat} title="New chat">
            <RotateCcw size={17} />
          </button>

          <button onClick={onClose} title="Close chat">
            <X size={21} />
          </button>
        </div>

      </div>

      {/* Messages */}
      <div className="chat-body">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={`chat-message ${msg.role}`}
          >

            <div className="message-avatar">
              {msg.role === "assistant"
                ? <Bot size={18} />
                : <User size={18} />
              }
            </div>

            <div className="message-text">
  {msg.role === "assistant" ? (
    <ReactMarkdown remarkPlugins={[remarkGfm]}>
      {msg.text}
    </ReactMarkdown>
  ) : (
    msg.text
  )}
</div>

          </div>

        ))}

        {loading && (
          <div className="typing">
            <span></span>
            <span></span>
            <span></span>
            Searching HR policies...
          </div>
        )}

        {/* Suggested Questions */}
        {messages.length === 1 && !loading && (
          <div className="suggestions">
            <p>Suggested questions</p>

            {suggestions.map((item, index) => (
              <button
                key={index}
                onClick={() => sendMessage(item)}
              >
                {item}
              </button>
            ))}
          </div>
        )}

      </div>

      {/* Chat Input */}
      <div className="chat-footer">

        <input
          type="text"
          placeholder="Ask your HR question..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
          disabled={loading}
        />

        <button
          onClick={() => sendMessage()}
          disabled={!message.trim() || loading}
          aria-label="Send message"
        >
          <Send size={19} />
        </button>

      </div>

      <div className="chat-disclaimer">
        AI responses are based on available HR policy documents.
      </div>

    </div>
  );
}

export default ChatBot;
