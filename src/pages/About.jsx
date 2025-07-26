import React from "react";

const About = () => {
  return (
    <div
      style={{
        width: "100%",
        background:
          "linear-gradient(135deg, rgba(89,89,89,1) 7%,rgba(89,89,89,1) 7%,rgba(89,89,89,1) 10%,rgba(0,0,0,1) 20%,rgba(89,89,89,1) 21%,rgba(0,0,0,1) 24%,rgba(102,102,102,1) 24%,rgba(28,28,28,1) 24%,rgba(28,28,28,1) 24%,rgba(102,102,102,1) 24%,rgba(0,0,0,1) 24%,rgba(19,19,19,1) 33%,rgba(19,19,19,1) 33%,rgba(71,71,71,1) 39%,rgba(44,44,44,1) 50%,rgba(17,17,17,1) 72%,rgba(89,89,89,1) 76%,rgba(89,89,89,1) 76%,rgba(43,43,43,1) 85%)",
      }}
      className="fixed flex flex-col justify-center items-center min-h-screen"
    >
      <h1 className="text-white relative top-0 mb-1">About</h1>
      <div
        className="relative flex justify-center items-center w-[980px] h-[500px] bg-white/16 backdrop-blur-[18px] rounded-[20px] border border-white/30 overflow-hidden
        shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1),inset_0_0_20px_10px_rgba(255,255,255,1)]
        before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px 
        before:bg-gradient-to-r before:from-transparent before:via-white/80 before:to-transparent
        after:content-[''] after:absolute after:top-0 after:left-0 after:w-px after:h-full
        after:bg-gradient-to-b after:from-white/80 after:via-transparent after:to-white/30"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div>
              <h2>What the app does</h2>
              <span>
                <h3>Track Cryptocurrencies in Real-Time</h3>
                This app fetches live and historical cryptocurrency data from
                CoinGecko's API.
                <h3>Interactive Charts and Analytics</h3>
                View detailed price charts, compare different coins, and analyze
                market movements with clean, responsive visualizations.
              </span>
            </div>
            <div>
              <h2>API Source (CoinGecko)</h2>
              <span>
                <h3>📌Powered by CoinGecko</h3>
                This app uses the CoinGecko-API a free reliable source for
                cryptocurrency data.
                <h3>Why CoinGecko?</h3>
                Comprehensive Data: Covers thousands of cryptocurrencies. High
                Accuracy: Frequent updates ensure real-time precision.
                Developer-Friendly: Well-documented and easy to integrate.
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div>
              <h2>Developer Credits</h2>
              <span>
                <h3>Built by Sahil</h3>A passionate developer exploring
                blockchain, web apps and financial tools.
                <h3>TechStack Used</h3>
                Frontend: React, TailwindCSS API: CoinGecko RESTful API Charts:
                Charts.js
                <h3>Connect with me</h3>
                <a href="www.linkedin.com/in/sahiltanvi28">LinkedIn</a>
                <a href="https://x.com/God_Sahil28">Twitter</a>
              </span>
            </div>
            <div>
              <h2>Github Repo Link</h2>
              <span>
                <h3>💻 Open-Source & Contributions Welcome!</h3>
                Check out the code, report issues, or contribute to this project: <a href="/">GitHub Repo</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
