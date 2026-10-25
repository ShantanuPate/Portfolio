import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { Button } from "../app/components/ui/button";

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollToSection = (id: string) => {
    if (isHome) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-stone-300 bg-stone-100/90 backdrop-blur-md"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-14">
        <Link to="/" className="group font-serif text-xl tracking-tight text-stone-950">
          Shantanu Pate<span className="text-emerald-800 transition-colors duration-300">.</span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-5 font-mono text-xs uppercase tracking-wider text-stone-600 sm:gap-8">
          <Link to="/work" aria-current={location.pathname === "/work" ? "page" : undefined} className="transition-colors hover:text-emerald-800 aria-[current=page]:text-emerald-800">Work</Link>
          <Link to="/about" aria-current={location.pathname === "/about" ? "page" : undefined} className="transition-colors hover:text-emerald-800 aria-[current=page]:text-emerald-800">About</Link>
          {isHome && (
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="h-auto rounded-none p-0 font-mono text-xs uppercase tracking-wider hover:bg-transparent hover:text-emerald-800"
            >
              Contact
            </Button>
          )}
        </nav>
      </div>
    </motion.header>
  );
}
