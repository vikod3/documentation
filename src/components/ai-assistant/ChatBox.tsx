import { useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import supportBg from "@/assets/support-bg.png";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const initialMessages: Message[] = [
  { role: "assistant", content: "What can I help you with?" },
];

const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (content: string) => {
    const userMessage: Message = { role: "user", content };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response (replace with real API call when Cloud is enabled)
    setTimeout(() => {
      const assistantMessage: Message = {
        role: "assistant",
        content: "I'm here to help! This is a demo response. Enable Lovable Cloud to connect a real AI backend.",
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div 
      className="flex flex-col w-full max-w-2xl mx-auto rounded-3xl border border-border overflow-hidden"
      style={{
        backgroundImage: `url(${supportBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Messages Area */}
      <div className="flex flex-col gap-4 p-6 min-h-[300px] max-h-[400px] overflow-y-auto">
        {messages.map((message, index) => (
          <ChatMessage key={index} role={message.role} content={message.content} />
        ))}
        {isLoading && (
          <div className="text-left">
            <span className="text-sm text-muted-foreground animate-pulse">
              Searching for answers...
            </span>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-border">
        <ChatInput onSend={handleSend} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default ChatBox;
