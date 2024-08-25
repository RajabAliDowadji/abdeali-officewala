"use client";
import { useState } from "react";
import Link from "next/link";
import { STATIC_VALUES } from "@constants/string";

function Header() {
  const { SCREEN } = STATIC_VALUES.COMMON;
  const { NAVIGATION } = STATIC_VALUES.COMMON.HEADER;

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full sticky top-0 z-50">
      <div className="flex items-center justify-between min-h-20 bg-primary">
        <Link href={SCREEN.HOME}>
          <p className="text-primary font-primary text-2xl hidden md:block cursor-pointer">
            {STATIC_VALUES.COMMON.LOGO.WEB}
          </p>
          <p className="text-primary font-primary text-2xl block md:hidden cursor-pointer">
            {STATIC_VALUES.COMMON.LOGO.MOBILE}
          </p>
        </Link>
        <button
          className={`md:hidden ${
            isMobileMenuOpen ? "hidden" : "block"
          } text-primary focus:outline-none"`}
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <nav className="hidden md:flex space-x-4">
          <a
            href={SCREEN.HOME}
            className="hover:text-secondary px-3 font-primary tracking-widest text-primary rounded"
          >
            {NAVIGATION.HOME}
          </a>
          <a
            href={SCREEN.PROJECTS}
            className="hover:text-secondary px-3 font-primary tracking-widest text-primary rounded"
          >
            {NAVIGATION.PROJECTS}
          </a>
          <a
            href={SCREEN.ABOUT}
            className="hover:text-secondary px-3 font-primary tracking-widest text-primary rounded"
          >
            {NAVIGATION.ABOUT}
          </a>
          <a
            href={SCREEN.CONTACT}
            className="hover:text-secondary px-3 font-primary tracking-widest text-primary rounded"
          >
            {NAVIGATION.CONTACT}
          </a>
        </nav>
        <div
          className={`fixed top-0 right-0 w-screen h-2/4 z-50 bg-dark_primary text-black transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="flex justify-between p-4 border-b-2 border-custom-border">
            <p className="text-black font-primary text-2xl block md:hidden">
              {STATIC_VALUES.COMMON.LOGO.MOBILE}
            </p>
            <button className="text-black text-2xl" onClick={toggleMobileMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-center mt-10 space-y-4">
            <a
              href={SCREEN.HOME}
              className="hover:text-secondary text-xl font-primary tracking-widest rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              {NAVIGATION.HOME}
            </a>
            <a
              href={SCREEN.PROJECTS}
              className="hover:text-secondary text-xl font-primary tracking-widest rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              {NAVIGATION.PROJECTS}
            </a>
            <a
              href={SCREEN.ABOUT}
              className="hover:text-secondary text-xl font-primary tracking-widest rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              {NAVIGATION.ABOUT}
            </a>
            <a
              href={SCREEN.CONTACT}
              className="hover:text-secondary text-xl font-primary tracking-widest rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              {NAVIGATION.CONTACT}
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
