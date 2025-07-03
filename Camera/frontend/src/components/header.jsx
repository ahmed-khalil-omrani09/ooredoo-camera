import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, User, Moon, Sun } from "lucide-react"; // added Moon and Sun icons
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Icon() {
  return <img src="/Ooredoo_logo.svg.png" alt="Logo" width={247} height={24} />;
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "manage Nvc", href: "/offers" },
  { label: "manage Site", href: "/orders" },
  { label: "manage Accounts  ", href: "/aboutus" },
];

function SiteHeader() {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize from localStorage or system preference
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "dark") return true;
      if (saved === "light") return false;
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });
  const handleClick = () => {
    navigate("/login");
  };
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <header className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur border-b shadow-sm dark:bg-gray-900/80 dark:border-gray-700">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <span>
            <span role="img" aria-label="cupcake">
              <Icon name="Logo" width={24} height={24} />
            </span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 ml-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-md font-medium text-gray-700 hover:text-red-600 transition-colors dark:text-gray-300 dark:hover:text-red-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            title="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <Sun className="h-6 w-6 text-yellow-400" />
            ) : (
              <Moon className="h-6 w-6 text-gray-700" />
            )}
          </Button>

          {/* Cart Icon with Badge */}

          {/* Sign In */}
          <Button
            variant="outline"
            className="hidden md:inline-flex"
            onClick={handleClick}
          >
            <User className="mr-2 h-4 w-4" />
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
