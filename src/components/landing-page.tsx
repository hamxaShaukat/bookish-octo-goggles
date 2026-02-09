import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <h1 className="text-xl font-bold">Brand.</h1>

        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:opacity-60 transition">Features</a>
          <a href="#" className="hover:opacity-60 transition">About</a>
          <a href="#" className="hover:opacity-60 transition">Contact</a>
        </div>

        <button className="border border-black px-4 py-2 hover:bg-black hover:text-white transition">
          Sign In
        </button>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Simple design.<br />Powerful impact.
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            A minimal landing page built with React and Tailwind CSS.
            Clean. Fast. Focused.
          </p>

          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-3 hover:opacity-80 transition">
              Get Started
            </button>
            <button className="border border-black px-6 py-3 hover:bg-black hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
            alt="Hero"
            className="w-full h-100 object-cover grayscale"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-3">Minimal</h3>
            <p className="text-gray-600">
              Focused layout with no distractions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Fast</h3>
            <p className="text-gray-600">
              Built with modern React and Tailwind.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Responsive</h3>
            <p className="text-gray-600">
              Looks great on every device.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGES SECTION */}
      <section className="max-w-7xl mx-auto px-8 pb-20 grid md:grid-cols-2 gap-8">
        <img
          src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
          alt="Feature 1"
          className="w-full h-75 object-cover grayscale"
        />
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Feature 2"
          className="w-full h-75 object-cover grayscale"
        />
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        © 2026 Brand. All rights reserved.
      </footer>
    </div>
  );
}
