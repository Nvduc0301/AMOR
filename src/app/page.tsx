import Header from '@/components/Header';
import BannerSection from '@/feature/home/BannerSection';

export default function HomePage() {
  return (
    <main className='min-h-screen bg-[#FFEEE2]'>
      <Header />
      <BannerSection />
      <div className="h-[2000px]" />

    </main>
  );
}
