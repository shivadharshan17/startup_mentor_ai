
import React, { useState, useEffect, useRef } from 'react';
import { MentorshipResponse, Mentor } from '../types';
import { streamMentorChat } from '../services/geminiService';

interface Message {
  id: string;
  sender: 'user' | 'mentor';
  type: 'text' | 'roadmap' | 'tech' | 'growth' | 'wisdom' | 'chat' | 'slide';
  content: string | any;
  timestamp: string;
  slideData?: {
    problem: string;
    solution: string;
  };
}

interface MentorResponseProps {
  response: MentorshipResponse | null;
  mentor: Mentor;
  userPitch: string;
}

/**
 * MentorResponse provides a high-fidelity chat interface for real-time strategic mentorship sessions.
 * It utilizes streaming from Gemini to provide a responsive, persona-driven experience.
 */
const MentorResponse: React.FC<MentorResponseProps> = ({ mentor }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState('');
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'model'; parts: { text: string }[] }[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const getTimestamp = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim() || isTyping) return;

    const userMessageText = inputText.trim();
    setInputText('');

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      type: 'chat',
      content: userMessageText,
      timestamp: getTimestamp(),
    };

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    const mentorMsgId = (Date.now() + 1).toString();
    const mentorMsg: Message = {
      id: mentorMsgId,
      sender: 'mentor',
      type: 'chat',
      content: '',
      timestamp: getTimestamp(),
    };
    setMessages(prev => [...prev, mentorMsg]);

    let fullResponse = '';
    try {
      await streamMentorChat(
        userMessageText,
        mentor,
        chatHistory,
        (chunk) => {
          fullResponse += chunk;
          setMessages(prev => 
            prev.map(msg => 
              msg.id === mentorMsgId ? { ...msg, content: fullResponse } : msg
            )
          );
        }
      );

      setChatHistory(prev => [
        ...prev,
        { role: 'user', parts: [{ text: userMessageText }] },
        { role: 'model', parts: [{ text: fullResponse }] }
      ]);
    } catch (error) {
      console.error("Mentorship Session Error:", error);
      setMessages(prev => 
        prev.map(msg => 
          msg.id === mentorMsgId ? { ...msg, content: "The mentor is currently reviewing other portfolios. Please try again in a moment." } : msg
        )
      );
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 relative overflow-hidden">
      {/* Scrollable Conversation History */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-8 pb-36 scrollbar-hide"
      >
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-8 py-12 animate-in fade-in duration-1000">
            <div className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${mentor.accentColor} p-1 shadow-2xl overflow-hidden`}>
              <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="max-w-md space-y-4">
              <h4 className="text-3xl font-black text-[#1F2933] tracking-tight">Consult with {mentor.name}</h4>
              <p className="text-slate-500 font-medium leading-relaxed px-4">
                Share your core vision, technical hurdles, or scaling strategy. {mentor.name.split(' ')[0]} is ready to provide high-fidelity feedback.
              </p>
              <div className="flex justify-center gap-2 pt-4">
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[9px] font-black text-slate-400 uppercase tracking-widest">Physics First</span>
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[9px] font-black text-slate-400 uppercase tracking-widest">Global Scale</span>
              </div>
            </div>
          </div>
        )}

        {messages.map((msg) => (
          <div 
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-4 duration-500`}
          >
            <div className={`max-w-[90%] lg:max-w-[80%] rounded-[2.5rem] px-8 py-6 shadow-sm border ${
              msg.sender === 'user' 
                ? 'bg-[#1A73E8] text-white border-[#1A73E8] rounded-br-none' 
                : 'bg-white border-slate-100 text-slate-700 rounded-bl-none shadow-xl shadow-slate-200/50'
            }`}>
              <div className="text-sm lg:text-base font-medium leading-relaxed whitespace-pre-wrap">
                {typeof msg.content === 'string' ? msg.content : JSON.stringify(msg.content)}
              </div>
              <div className={`flex items-center gap-3 mt-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <span className={`text-[9px] font-black uppercase tracking-[0.2em] ${msg.sender === 'user' ? 'text-blue-200' : 'text-[#1A73E8]'}`}>
                  {msg.sender === 'user' ? 'Founder' : mentor.name}
                </span>
                <span className={`text-[9px] font-black uppercase tracking-widest opacity-40 ${msg.sender === 'user' ? 'text-blue-200' : 'text-slate-400'}`}>
                  {msg.timestamp}
                </span>
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-100 rounded-[2.5rem] rounded-bl-none px-8 py-6 shadow-sm">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 bg-[#1A73E8]/20 rounded-full animate-bounce"></div>
                <div className="w-2.5 h-2.5 bg-[#1A73E8]/20 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2.5 h-2.5 bg-[#1A73E8]/20 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Strategy Input Area */}
      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 bg-gradient-to-t from-slate-50 via-slate-50/90 to-transparent pointer-events-none">
        <form 
          onSubmit={handleSendMessage}
          className="max-w-4xl mx-auto relative group pointer-events-auto"
        >
          <textarea
            ref={inputRef}
            rows={1}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            placeholder={`Message ${mentor.name}...`}
            className="w-full bg-white border border-slate-200 rounded-[2rem] py-6 pl-10 pr-20 text-base text-[#1F2933] placeholder:text-slate-400 focus:ring-4 focus:ring-[#1A73E8]/5 focus:border-[#1A73E8] transition-all outline-none resize-none shadow-2xl"
          />
          <button
            type="submit"
            disabled={!inputText.trim() || isTyping}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 w-14 h-14 bg-[#1A73E8] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 disabled:opacity-50 disabled:bg-slate-300 transition-all active:scale-95 group/btn"
          >
            <svg className="w-7 h-7 rotate-90 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
        <div className="mt-4 flex justify-center gap-6 opacity-0 group-focus-within:opacity-100 transition-opacity">
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">Encrypted Session</p>
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">•</p>
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">Google technology</p>
        </div>
      </div>
    </div>
  );
};

export default MentorResponse;
