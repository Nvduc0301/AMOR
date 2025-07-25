"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { usePathname, useRouter } from "next/navigation";
import { NAV_LINKS } from "@/const";
import Link from "next/link";

type HeaderProps = {
  variant: "dark" | "light";
};

export default function Header({ variant }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = variant === "dark";

  return (
    <>
      <header
        className={`
            fixed top-0 left-0 right-0 z-50 transition-all duration-300
            md:px-8 md:py-6 p-0 flex justify-between items-center
            ${
              scrolled
                ? isDark
                  ? "bg-[#000000]/40  shadow-md"
                  : "bg-white/20  shadow-md"
                : "bg-transparent " + (isDark ? "text-white" : "text-black")
            }
            `}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="relative w-30 h-8">
              <Image
                src={`/images/${
                  isDark ? "AmorLogo.png" : "AmorLogoAboutAmor.png"
                }`}
                alt="AMOR Logo"
                layout="fill"
                objectFit="contain"
                priority
                onClick={() => router.push("/")}
              />
            </div>
            <nav
              className={`hidden md:flex gap-15 ${
                isDark ? "text-white" : "text-[#2E333D]"
              } text-sm uppercase tracking-[0.02em]`}
            >
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`uppercase ${
                    pathname === href ? "font-bold" : "font-normal text-sm"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="hidden md:flex text-xl"></div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(true)}
            >
              {isDark ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.25 6C3.25 5.58579 3.58579 5.25 4 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H4C3.58579 6.75 3.25 6.41421 3.25 6ZM3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H11C11.4142 11.25 11.75 11.5858 11.75 12C11.75 12.4142 11.4142 12.75 11 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12ZM4 17.25C3.58579 17.25 3.25 17.5858 3.25 18C3.25 18.4142 3.58579 18.75 4 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H4Z"
                    fill="white"
                  ></path>
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.25 6C3.25 5.58579 3.58579 5.25 4 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H4C3.58579 6.75 3.25 6.41421 3.25 6ZM3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H11C11.4142 11.25 11.75 11.5858 11.75 12C11.75 12.4142 11.4142 12.75 11 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12ZM4 17.25C3.58579 17.25 3.25 17.5858 3.25 18C3.25 18.4142 3.58579 18.75 4 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H4Z"
                    fill="#2E333D"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isDark={isDark}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
