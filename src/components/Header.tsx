'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 768) {
            setIsMenuOpen(false);
          }
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    return (
      <>
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent px-8 py-6 flex justify-between items-center">
            <div className="relative w-30 h-8">
                <Image
                src="/images/AmorLogo.png"
                alt="AMOR Logo"
                layout="fill"
                objectFit="contain"
                priority
                />
            </div>
            <nav className="hidden md:flex gap-15 text-sm uppercase tracking-[0.02em]">
            <a className='text-white font-bold' href="#">Trang chủ</a>
            <a className='text-white font-bold' href="#">Về Amor</a>
            <a className='text-white font-bold' href="#">Menu</a>
            <a className='text-white font-bold' href="#">Doanh nghiệp</a>
            </nav>
            <div className="hidden md:flex text-xl"></div>
            
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(true)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.25 6C3.25 5.58579 3.58579 5.25 4 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H4C3.58579 6.75 3.25 6.41421 3.25 6ZM3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H11C11.4142 11.25 11.75 11.5858 11.75 12C11.75 12.4142 11.4142 12.75 11 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12ZM4 17.25C3.58579 17.25 3.25 17.5858 3.25 18C3.25 18.4142 3.58579 18.75 4 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H4Z" fill="white"></path>
                </svg>
            </button>
        </header>

        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </>

    );
  }
  