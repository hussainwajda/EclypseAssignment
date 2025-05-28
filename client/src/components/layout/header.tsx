import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.jpg";

export default function Header() {
  const location = useLocation();
  const isCheckoutPage = location.pathname === "/checkout";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 pt-2 left-0 right-0 z-50 h-[75px] transition-all duration-300 ease-in-out ${
        isScrolled || isCheckoutPage
          ? isCheckoutPage
            ? "bg-white/80 backdrop-blur-md border-b border-black/10"
            : "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-[50px] h-[50px] flex items-center justify-center">
              <div className={`w-[50px] h-[50px] ${isCheckoutPage ? "bg-white" : "bg-black"} rounded-full`}>
                <Link to="/"><img src={logo} alt="logo" className="w-full h-full object-cover rounded-sm" /></Link>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-16">
            <a
              href="#about"
              className={`${
                isCheckoutPage ? "text-black" : "text-[var(--color-secondary)]"
              } hover:text-gray-600 transition-colors duration-200 text-lg font-[Helvetica Neue]`}
            >
              About Us
            </a>
            <a
              href="#waitlist"
              className={`${
                isCheckoutPage ? "text-black" : "text-white"
              } hover:text-gray-600 transition-colors duration-200 text-lg font-[Helvetica Neue]`}
            >
              Waitlist
            </a>
            <a
              href="#cart"
              className={`${
                isCheckoutPage ? "text-black border-b-2 border-solid border-black" : "text-white"
              } hover:text-gray-600 transition-colors duration-200 text-lg font-[Helvetica Neue] flex items-center space-x-1`}
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Cart</span>
            </a>

            {/* ❌ Hide Buy button on Checkout */}
            {!isCheckoutPage && (
              <button className="bg-white w-[113px] h-[53px] text-black my-2 px-6 rounded-lg text-lg font-[Helvetica Neue] hover:bg-[var(--color-btn-red)] hover:text-white cursor-pointer transition-colors duration-200">
                Buy
              </button>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className={`${
                isCheckoutPage ? "text-black" : "text-white"
              } hover:text-gray-600 transition-colors duration-200`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
