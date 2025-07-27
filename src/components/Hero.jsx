import React from 'react'
import { ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import CoinDetails from '../pages/CoinDetails';


const Hero = () => {
  const navigate = useNavigate();
  const movetoCoin = () => {
    navigate("/coin")
    CoinDetails()
  }
  return (
    <div>
      <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center p-6">
        <div className="max-w-4xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-400">
              Live Market Data
            </span>
          </div>


          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
            Track Crypto Like a Pro
          </h1>

          <p className="text-xl md:text-2xl font-medium text-gray-400 mb-6">
            Your Gateway to Digital Assets
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Monitor, analyze, and manage your cryptocurrency portfolio with
            real-time data, advanced analytics, and professional-grade tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button onClick={movetoCoin} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Real-time Tracking",
                description: "Live price updates and market data",
              },
              {
                title: "Secure & Private",
                description: "Bank-level security for your data",
              },
              {
                title: "Lightning Fast",
                description: "Instant portfolio updates and alerts",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <h3 className="font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero
