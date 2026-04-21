import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import PartnerMarquee from "@/components/partnerMarquee";
import Categories from "@/components/categories";
import HowItWorks from "@/components/howItWorks";
import TopSellers from "@/components/topSellers";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PartnerMarquee />
      <Categories />
      <HowItWorks />
      <TopSellers />
      <Footer />
    </main>
  );
}