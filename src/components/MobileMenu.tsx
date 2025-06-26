'use client';

import Image from 'next/image';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu( { isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) {
    return null;
  }
  return (
    <div
      className={`
        fixed inset-0 z-50 bg-black/40 backdrop-blur-2xl
        transition-all duration-300 ease-in-out
        transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
        text-white p-6
      `}
    >
    {/* <div className="fixed inset-0 z-50 bg-[#00000066]/40 backdrop-blur-[75px] shadow-[0px_4px_4px_0px_#0000000A] text-white p-6"> */}
      <div className="flex justify-between items-center">
        <div className="relative w-28 h-8">
          <Image
            src="/images/AmorLogo.png"
            alt="AMOR Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <button onClick={onClose} className="text-3xl">&times;</button>
      </div>

      <nav className="flex flex-col gap-7 items-center mt-10 text-sm uppercase tracking-[0.02em]">
        <a href="#" className="uppercase">Trang chủ</a>
        <a href="#" className="uppercase">Về Amor</a>
        <a href="#" className="uppercase">Menu</a>
        <a href="#" className="uppercase">Khởi nghiệp</a>
      </nav>
    </div>
  );
}
