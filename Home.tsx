import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Learning Design", path: "/learning-design" },
  { name: "AI & Bots", path: "/ai-bots" },
  { name: "Tools & Support", path: "/tools-support" },
  { name: "Research × Design", path: "/research-design" },
  { name: "Studio Projects", path: "/studio-projects" },
];

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF9F6]/80 backdrop-blur-md border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl font-medium tracking-tight text-stone-900">
          Sofia Zhang
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors relative py-2",
                  isActive ? "text-stone-900" : "text-stone-500 hover:text-stone-900"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-stone-900"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="ml-4 px-5 py-2.5 text-sm font-medium text-white bg-stone-900 rounded-full hover:bg-stone-800 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-stone-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-[#FAF9F6] border-b border-stone-200 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-base font-medium py-2",
                location.pathname === link.path ? "text-stone-900" : "text-stone-500"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 px-5 py-3 text-center text-sm font-medium text-white bg-stone-900 rounded-full"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
