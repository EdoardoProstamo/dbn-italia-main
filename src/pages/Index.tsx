import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Centro from "@/components/home/Centro";
import ServicesPreview from "@/components/home/ServicesPreview";
import HowWeWork from "@/components/home/HowWeWork";
import Reviews from "@/components/home/Reviews";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Centro />
        <ServicesPreview />
        <HowWeWork />
        <Reviews />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
