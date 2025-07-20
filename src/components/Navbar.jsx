"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBarcode, FaWarehouse, FaUser } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  if (pathname === "/login") {
    return null;
  }

  // Fungsi untuk mengecek apakah di halaman beranda
  const isHomePage = pathname === "/";

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-background/90 backdrop-blur-md shadow-md"
          : "bg-transparent backdrop-blur-none"
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold"
            onClick={closeMenu}
          >
            <FaWarehouse className="text-primary" />
            <span className="text-foreground">JNE Warehouse</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="hover:text-primary transition-colors text-foreground"
                
            >
              Beranda
            </Link>
            <Link
              href="/#workflow"
              className="hover:text-primary transition-colors text-foreground"
            >
              Alur Kerja
            </Link>
            <Link
              href="/#features"
              className="hover:text-primary transition-colors text-foreground"
            >
              Fitur
            </Link>
            <Link
              href="/#contact"
              className="hover:text-primary transition-colors text-foreground"
            >
              Kontak
            </Link>
            <Link
              href="/login"
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <FaUser /> Login
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1">
              <span
                className={`h-0.5 bg-foreground transition-all ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`h-0.5 bg-foreground transition-all ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`h-0.5 bg-foreground transition-all ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed top-16 left-0 right-0 bg-background shadow-lg transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-screen py-4" : "max-h-0"
          }`}
        >
          <div className="container mx-auto px-6 flex flex-col gap-4">
            <Link
              href="/"
              className={`py-2 hover:text-primary transition-colors ${
                isHomePage ? "text-primary font-medium" : "text-foreground"
              }`}
              onClick={closeMenu}
            >
              Beranda
            </Link>
            <Link
              href="/#workflow"
              className="py-2 hover:text-primary transition-colors text-foreground"
              onClick={closeMenu}
            >
              Alur Kerja
            </Link>
            <Link
              href="/#features"
              className="py-2 hover:text-primary transition-colors text-foreground"
              onClick={closeMenu}
            >
              Fitur
            </Link>
            <Link
              href="/#contact"
              className="py-2 hover:text-primary transition-colors text-foreground"
              onClick={closeMenu}
            >
              Kontak
            </Link>
            <Link
              href="/login"
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors mt-2"
              onClick={closeMenu}
            >
              <FaUser /> Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}