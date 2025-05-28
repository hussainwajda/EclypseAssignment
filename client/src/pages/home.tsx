import React from "react";
import HeroSection from "../components/home/HeroSection";
import MediaGallery from "../components/home/mediaGallery";
import ProductPage from "../components/home/ProductPages";
import ProductPageSkeleton from "../components/skeleton/productPage";
import Accordion from "../components/home/Accordian";
import TestimonialCarousel from "../components/home/OurCustomer";
import Footer from "../components/layout/footer";
import Preloader from "../components/layout/Preloader";

export default function Home() {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const handleLoad = () => setLoading(false);
        window.addEventListener("load", handleLoad);
        return () => window.removeEventListener("load", handleLoad);
    }, []);
    
    return (
        <main className="bg-black mt-[125px] min-h-screen text-[var(--color-secondary)]">
        <Preloader onLoadingComplete={function (): void {
                throw new Error("Function not implemented.");
            } } />
        <HeroSection />
        <div className="bg-black text-white px-4 md:py-40">
            <div className="max-w-4xl md:ml-15 mr-auto">
                <h2 className="text-2xl md:text-5xl leading-tight font-light tracking-tight">
                Rooted in a philosophy of quiet luxury, our garments are designed to speak
                softly in cut, in movement, in presence.
                </h2>

                <div className="mt-12">
                <a
                    href="#"
                    className="inline-flex items-center border-b border-white text-base tracking-tight pb-1 group"
                >
                    Learn more about Eclypse
                    <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    >
                    <path d="M17 7L7 17" />
                    <path d="M7 7h10v10" />
                    </svg>
                </a>
                </div>
            </div>
            </div>
        <MediaGallery />
        <div className="bg-black text-white px-1 md:px-4 md:py-40 my-25 md:my-5">
            <div className="max-w-4xl md:ml-15 mr-auto">
                <h2 className="text-2xl md:text-5xl text-[Montereal Neue] leading-tight font-light tracking-tight">
                Silhouette No. 1 – Vermilion
                </h2>
            </div>
        </div>
        {loading ? <ProductPageSkeleton /> : <ProductPage />}
        <Accordion />
        <TestimonialCarousel />
        <Footer />
      </main>
    );
  }
  