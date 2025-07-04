import React from "react";
import { useNavigate } from "react-router-dom";
export default function LandingPage() {
  const navigate = useNavigate();
  function handleGetStarted() {
    navigate("/login");
  }
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      {/* Header with white background */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo aligned left */}
          <img
            src="/Ooredoo_logo.svg.png"
            alt="Ooredoo Logo"
            className="h-12 w-auto"
          />

          {/* Login button aligned right */}
          <button
            onClick={handleGetStarted}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-5 rounded-lg transition"
          >
            Get started &rarr;
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow max-w-4xl mx-auto px-6 py-16 space-y-12">
        <section>
          <h1 className="text-4xl font-bold mb-4">Welcome to Ooredoo</h1>
          <p className="text-lg leading-relaxed max-w-prose">
            Ooredoo is a leading telecommunications company dedicated to
            connecting people and businesses with innovative and reliable
            communication solutions. Our mission is to empower communities and
            drive digital transformation across the regions we serve.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-3">
            Ooredoo Security Camera System
          </h2>
          <p className="text-lg leading-relaxed max-w-prose">
            The Ooredoo Security Camera System offers advanced surveillance
            solutions to ensure safety across all Ooredoo facilities. Featuring
            real-time monitoring, intelligent alerts, and remote access
            capabilities, it provides a robust layer of security tailored to
            meet modern needs.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6">
        © 2025 Ooredoo. All rights reserved.
      </footer>
    </div>
  );
}
