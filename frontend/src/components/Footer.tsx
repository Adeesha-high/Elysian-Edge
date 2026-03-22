import { Facebook, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/share/1DUbsGTVzv/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/elysian_edge_events?igsh=Y3JlaW4xMHphZWc2", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@elysianedgeevents", label: "YouTube" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/elysian-edge-events-5b91a93b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/elysianedge", label: "X (Twitter)" },
];

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <p className="font-heading text-xl font-bold text-gradient-gold">ELYSIAN EDGE EVENTS</p>

          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Elysian Edge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
