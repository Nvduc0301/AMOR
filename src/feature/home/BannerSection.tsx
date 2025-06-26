import Image from 'next/image';

export default function BannerSection() {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center text-white">
      <Image
        src="/images/Banner.png"
        alt="banner background"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/30 z-10" />
      <div className="z-20 text-center px-6">
        <h2 className="text-xl md:text-[48px] font-normal text-center text-white mb-12 md:mb-16">
          AMOR THẢO MỘC <br />
          <span className="block mt-2">NƠI LƯU GIỮ BÌNH YÊN</span>
        </h2>
      </div>
    </section>
  );
}