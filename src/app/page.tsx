import Header from "@/components/Header";
import BannerSection from "@/feature/home/BannerSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trang chủ | AMOR",
  description: "Trang giới thiệu AMOR Thảo Mộc - chăm sóc sắc đẹp từ gốc.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FFEEE2]">
      <Header variant="dark" />
      <BannerSection />
      <div className="h-[2000px]" />
    </main>
  );
}
