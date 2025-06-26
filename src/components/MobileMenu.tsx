"use client";

import { NAV_LINKS } from "@/const";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type MobileMenuProps = {
  isDark: boolean;
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({
  isDark,
  isOpen,
  onClose,
}: MobileMenuProps) {
  const [show, setShow] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShow(true), 10);
    } else {
      setShow(false);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50">
      <div
        className={`
                transition-transform duration-300 ease-out 
                transform 
                ${show ? "translate-y-0" : "-translate-y-full"}
                text-white p-6 bg-[#00000066]/40 backdrop-blur-[75px] shadow-[0_0_4px_rgba(0,0,0,0.04)]
                h-full
                `}
      >
        <div className="flex justify-between items-center">
          <div className="relative w-28 h-8">
            <Image
              src={`/images/${
                isDark ? "AmorLogo.png" : "AmorLogoAboutAmor.png"
              }`}
              alt="AMOR Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <button
            onClick={onClose}
            className={`text-3xl ${isDark ? "text-white" : "text-black"}`}
          >
            &times;
          </button>
        </div>

        <nav
          className={`flex flex-col gap-7 ${
            isDark ? "text-white" : "text-black"
          } items-center mt-10 text-lg font-semibold`}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`uppercase ${
                pathname === href ? "font-bold" : "font-normal"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
