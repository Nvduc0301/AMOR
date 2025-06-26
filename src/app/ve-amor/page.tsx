import Header from "@/components/Header";
import BannerSection from "@/feature/ve-amor/BannerSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Về Chúng Tôi | AMOR",
  description: "Trang giới thiệu AMOR Thảo Mộc - chăm sóc sắc đẹp từ gốc.",
};
export default function AboutAmorPage() {
  return (
    <main className="min-h-screen bg-[#FFEEE2]">
      <Header variant="light" />
      <BannerSection />
      <div className="h-[2000px]" />
    </main>
  );
}
