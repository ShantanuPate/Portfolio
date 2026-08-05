import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { clsx } from "clsx";

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
      className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200"
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-stone-900 group">
          Shantanu Pate<span className="text-orange-700 transition-colors duration-300">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <>
              <Link to="/work" className="hover:text-orange-700 transition-colors">Work</Link>
              <Link to="/about" className="hover:text-orange-700 transition-colors">About</Link>
              {isHome && (
                <button onClick={() => scrollToSection("contact")} className="hover:text-orange-700 transition-colors">Contact</button>
              )}
            </>
        </nav>
      </div>
    </motion.header>
  );
}
