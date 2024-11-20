"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";



export default function Header() {
  const menuItems = [
    { name: "Home", href: "/", key: 1 },
    { name: "Projects", href: "/projects", key: 2 },
    { name: "Skills", href: "/skills", key: 3 },
    { name: "Contact", href: "/contact", key: 4 },
    { name: "Blog", href: "/blogs", key: 5 },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    setIsScroll(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeDrawer = () => setIsMenuOpen(false);

  // Determine the color of the hamburger icon
  const hamburgerColor = pathname === "/" && !isScroll ? "bg-white" : "bg-teal-600";

  return (
    <header
      className={`${
        pathname === "/" ? "fixed top-0 bg-transparent" : "relative"
      } w-full z-50 transition-all duration-300 ${
        isScroll ? "bg-white/40 backdrop-blur-sm shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex justify-between items-center transition-transform duration-300">
        <div
          className="flex justify-center transition-transform duration-300"
          style={{ transform: isScroll ? "scale(0.7)" : "scale(1)" }}
        >
          <Link href="/">
            <Image src="/logo1.png" alt="SQL Developer Logo" width={70} height={200} className="w-[35px] h-[70px]" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex space-x-6 text-base font-medium">
          {menuItems.map((menu, index) => (
            <Link
              key={index}
              href={menu.href}
              className={`hover:text-teal-600 transition ${
                pathname === menu.href ? "text-teal-600" : "text-gray-500"
              }`}
            >
              {menu.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            <motion.span
              className={`block w-6 h-0.5 ${hamburgerColor} mb-1`}
              animate={isMenuOpen ? { rotate: 45, translateY: 7 } : { rotate: 0, translateY: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            <motion.span
              className={`block w-6 h-0.5 ${hamburgerColor}`}
              animate={isMenuOpen ? { rotate: -45, translateY: -4 } : { rotate: 0, translateY: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <motion.div
        className={`fixed inset-0 z-50 ${isMenuOpen ? "flex" : "hidden"} items-center justify-center`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ backgroundColor: "rgba(250, 250, 250, 0.95)" }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center h-screen space-y-6 text-center bg-white">
          {/* Close Icon */}
          <button onClick={closeDrawer} aria-label="Close Menu" className="absolute top-6 left-6 text-2xl">
            &times;
          </button>

          {/* Logo in Drawer */}
          <Image src="/logo/sql-logo.png" alt="SQL Developer Logo" width={120} height={100} className="mb-28" />

          {/* Navigation Links */}
          <nav className="space-y-8 text-lg text-gray-800">
            {menuItems.map((menu, index) => (
              <Link
                key={index}
                href={menu.href}
                className="block text-xl font-medium hover:text-teal-600 transition duration-300"
                onClick={closeDrawer}
              >
                {menu.name}
              </Link>
            ))}
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-8">
            <Link href="https://linkedin.com/in/sql-developer" aria-label="LinkedIn" className="text-gray-600 hover:text-teal-600">
              <FaLinkedin size={24} />
            </Link>
            <Link href="https://github.com/sql-developer" aria-label="GitHub" className="text-gray-600 hover:text-teal-600">
              <FaGithub size={24} />
            </Link>
            <Link href="https://stackoverflow.com/users/sql-developer" aria-label="Stack Overflow" className="text-gray-600 hover:text-teal-600">
              <FaStackOverflow size={24} />
            </Link>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
