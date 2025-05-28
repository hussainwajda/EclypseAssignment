import { Link } from "react-router-dom"
import { ArrowUp, ArrowUpRight } from "lucide-react"
import PageScroll from "../PageScroll"

export default function Footer() {

  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Link to="/" className="text-3xl font-light inline-flex tracking-wide">
            Eclypse<ArrowUpRight className="h-3 w-3 align-super"/>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Navigation Links */}
          <div className="space-y-6">
            <nav className="flex flex-wrap items-center gap-x-2 gap-y-3 text-sm">
                
              <Link to="/" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
              <span className="text-gray-600">/</span>
              <Link to="/about" className="hover:text-gray-300 transition-colors">
                About
              </Link>
              <span className="text-gray-600">/</span>
              <Link to="/buy" className="hover:text-gray-300 transition-colors">
                Buy
              </Link>
              <span className="text-gray-600">/</span>
            </nav>

            <nav className="flex flex-col space-y-2 text-sm">
              <Link to="/customers" className="hover:text-gray-300 transition-colors">
                Our Customers
              </Link>
              <Link to="/contacts" className="hover:text-gray-300 transition-colors">
                Contacts
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xs text-gray-400 uppercase tracking-wider mb-2">Contact</h3>
              <p className="text-white">+91 123-456-7890</p>
            </div>

            <div>
              <h3 className="text-xs text-gray-400 uppercase tracking-wider mb-2">Email</h3>
              <a href="mailto:eclypse@gmail.com" className="text-white hover:text-gray-300 transition-colors">
                eclypse@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-right">
          <p className="text-xs text-gray-400">© Eclypse 2025</p>
        </div>

        <PageScroll />
      </div>
    </footer>
  )
}
