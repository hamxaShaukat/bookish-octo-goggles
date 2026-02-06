import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-300 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="shrink-0">
            <span className="text-lg font-semibold text-gray-900">
              YourBrand
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">
              Services
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="space-y-1 px-4 py-3">
            <a href="#" className="block text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">
              Services
            </a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
