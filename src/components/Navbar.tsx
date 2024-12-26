"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./theme-btn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-background text-foreground px-4 py-2 w-full z-10 shadow-sm">
      <div className="container mx-auto flex items-center justify-between max-w-screen-xl">
        {/* Left Section */}
        <Link href="/" className="text-2xl font-bold font-custom">
          HezziBlogs
        </Link>

        {/* Middle Section */}
        <ul className="hidden md:flex items-center gap-8">
          <li className="group">
            <Link href="/" className="relative hover:text-primary transition">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="group">
            <Link
              href="/about"
              className="relative hover:text-primary transition"
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="group">
            <Link
              href="/contact"
              className="relative hover:text-primary transition"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="group">
            <Link
              href="/blogpost"
              className="relative hover:text-primary transition"
            >
              Blog
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        {/* Right Section - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline">Login</Button>
          <Button>Sign Up</Button>
          <ModeToggle />
        </div>

        {/* Hamburger Icon */}
        <Button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          <RiMenu3Fill className={`h-6 w-6 ${isOpen ? "rotate-180" : ""}`} />
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          fixed top-[3.5rem] right-0 w-64 h-[calc(100vh-3.5rem)] bg-background shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
      >
        <ul className="flex flex-col items-center gap-4 p-4">
          <li className="w-full">
            <Link
              href="/"
              className="relative text-lg block w-full hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-primary transition-all duration-300 ease-out hover:w-full"></span>
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="/about"
              className="relative text-lg block w-full hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-primary transition-all duration-300 ease-out hover:w-full"></span>
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="/contact"
              className="relative text-lg block w-full hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-primary transition-all duration-300 ease-out hover:w-full"></span>
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="/blogpost"
              className="relative text-lg block w-full hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Blog
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-primary transition-all duration-300 ease-out hover:w-full"></span>
            </Link>
          </li>
        </ul>

        <div className="flex flex-row text-xs items-center gap-4 p-4">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Button>
          <Button className="w-full" onClick={() => setIsOpen(false)}>
            Sign Up
          </Button>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
