import Header from "@/components/header/Header";
import "./home.css";
import Hero from "@/components/hero/Hero";
import Trustees from "@/components/trustees/Trustees";
import Offer from "@/components/offer/Offer";
import Features from "@/components/features/Features";
import Solutions from "@/components/solutions/Solutions";
import Testimonials from "@/components/testimonials/Testimonials";
import Faqs from "@/components/faqs/Faqs";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="home">
      <div className="home-bg">
        <Header />
        <Hero />
      </div>
      <Trustees />
      <Offer />
      <Features />
      <Solutions />
      <Testimonials />
      <Faqs />
      <Footer />
    </div>
  );
}
