"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import Image from "next/image";
import LogoImage from "@/Images/chatbot_logo.png";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat();
  const isLoading = status === "submitted" || status === "streaming";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput("");
  };
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 w-80 md:w-96 h-[500px] max-h-[80vh] bg-black/90 backdrop-blur-xl border border-red-600/30 rounded-2xl shadow-[0_0_30px_rgba(220,38,38,0.15)] flex flex-col z-50 overflow-hidden font-mono"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-red-600/30 bg-red-950/20">
              <div className="flex items-center gap-2">
                <Image src={LogoImage} alt="Bot" className="w-6 h-6 object-contain" />
                <span className="text-white font-bold tracking-widest text-sm uppercase">BTX Oracle System</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white hover:bg-red-600/20 p-1 rounded-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 custom-scrollbar">
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-50 space-y-4">
                  <Image src={LogoImage} alt="Bot" className="w-14 h-14 object-contain animate-pulse" />
                  <p className="text-xs text-red-500 uppercase tracking-widest font-bold">Signal Established.</p>
                  <p className="text-xs text-gray-400 font-sans">Ask me about the schedule, tracks, or the bounties.</p>
                </div>
              )}

              {messages.map((m: any) => (
                <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-xl px-4 py-2 text-sm font-sans flex items-start gap-2 ${
                      m.role === "user"
                        ? "bg-red-600 text-white shadow-[0_0_10px_rgba(220,38,38,0.4)] rounded-tr-sm"
                        : "bg-zinc-900 border border-red-900/40 text-gray-200 rounded-tl-sm"
                    }`}
                  >
                    {m.role === "assistant" && <Image src={LogoImage} alt="Bot" className="w-5 h-5 mt-0.5 shrink-0 object-contain" />}
                    <div className="leading-relaxed whitespace-pre-wrap flex-1">{m.content || m.display}</div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-zinc-900 border border-red-900/40 text-red-500 rounded-xl rounded-tl-sm px-4 py-3 text-sm flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce"></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-red-600/30 bg-black/60">
              <div className="relative flex items-center">
                <input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Transmit message..."
                  className="w-full bg-zinc-900/80 border border-red-900/50 text-white placeholder-gray-500 text-sm rounded-lg pl-4 pr-10 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all font-sans"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 p-1.5 bg-red-600 hover:bg-red-500 text-white rounded-md disabled:opacity-50 disabled:hover:bg-red-600 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-red-600 text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:shadow-[0_0_30px_rgba(220,38,38,0.8)] transition-shadow z-50 group border-2 border-red-400/20"
      >
        <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
        {isOpen ? <X className="w-6 h-6" /> : <Image src={LogoImage} alt="Chat" className="w-8 h-8 object-contain" />}
      </motion.button>
    </>
  );
}
