import { useState } from "react";
import { Plus, Mic, ArrowUp } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
}

const ChatInput = ({ onSend, isLoading }: ChatInputProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSend(input.trim());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar-gradient-border bg-black rounded-xl">
      <div className="flex items-center gap-3 px-4 py-3">
        {/* Plus Button - Bordered */}
        <button
          type="button"
          className="flex items-center justify-center w-8 h-8 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-colors"
        >
          <Plus className="w-4 h-4" />
        </button>

        {/* Input */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
          disabled={isLoading}
        />

        {/* Mic Button - Bordered */}
        <button
          type="button"
          className="flex items-center justify-center w-8 h-8 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-colors"
        >
          <Mic className="w-4 h-4" />
        </button>

        {/* Send Button - White bg rounded-xl */}
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#FFFFFF] text-[#000000] disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
