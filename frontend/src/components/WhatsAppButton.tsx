import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+94742656390"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      <span className="bg-background/90 backdrop-blur-sm text-foreground text-sm font-body font-medium px-4 py-2 rounded-full border border-border shadow-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
        Let's Chat
      </span>
      <span
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 shrink-0"
        style={{ backgroundColor: "hsl(142, 70%, 45%)" }}
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </span>
    </a>
  );
};

export default WhatsAppButton;
