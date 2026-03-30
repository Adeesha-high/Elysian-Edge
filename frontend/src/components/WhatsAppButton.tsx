import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <>
      <style>{`
        @keyframes pulse-whatsapp {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
          }
        }
        .whatsapp-pulse {
          animation: pulse-whatsapp 2s infinite;
        }
      `}</style>
      <a
        href="https://wa.me/+94742656390"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 group"
      >
        <span className="bg-[#25D366] text-white text-sm font-body font-semibold px-5 py-3 rounded-full shadow-2xl opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
          Let's Chat on WhatsApp
        </span>
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-110 shrink-0 whatsapp-pulse"
          style={{ backgroundColor: "#25D366" }}
        >
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
      </a>
    </>
  );
};

export default WhatsAppButton;
