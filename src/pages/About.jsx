import React from "react";

const About = () => {
  return (
    <div
      style={{
        width: "100%",
        background:
          "linear-gradient(135deg, rgba(89,89,89,1) 7%,rgba(89,89,89,1) 7%,rgba(89,89,89,1) 10%,rgba(0,0,0,1) 20%,rgba(89,89,89,1) 21%,rgba(0,0,0,1) 24%,rgba(102,102,102,1) 24%,rgba(28,28,28,1) 24%,rgba(28,28,28,1) 24%,rgba(102,102,102,1) 24%,rgba(0,0,0,1) 24%,rgba(19,19,19,1) 33%,rgba(19,19,19,1) 33%,rgba(71,71,71,1) 39%,rgba(44,44,44,1) 50%,rgba(17,17,17,1) 72%,rgba(89,89,89,1) 76%,rgba(89,89,89,1) 76%,rgba(43,43,43,1) 85%)",
      }}
      className="fixed flex flex-col justify-center items-center min-h-screen py-8 px-4"
    >
      <h1 className="text-white text-4xl font-bold mb-8 tracking-wider">
        About Crypto Tracker
      </h1>

      <div
        className="relative flex flex-col justify-between w-[980px] h-[500px] bg-white/16 backdrop-blur-[18px] rounded-[20px] border border-white/30 overflow-hidden
        shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1),inset_0_0_20px_10px_rgba(255,255,255,1)]
        before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px 
        before:bg-gradient-to-r before:from-transparent before:via-white/80 before:to-transparent
        after:content-[''] after:absolute after:top-0 after:left-0 after:w-px after:h-full
        after:bg-gradient-to-b after:from-white/80 after:via-transparent after:to-white/30 p-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full overflow-y-auto custom-scrollbar">
          <div className="space-y-6">
            <div className="bg-black/20 p-6 rounded-xl border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/20 pb-2">
                What the App Does
              </h2>
              <div className="space-y-4 text-white/80">
                <div>
                  <h3 className="text-lg font-medium text-cyan-300 mb-2">
                    Track Cryptocurrencies in Real-Time
                  </h3>
                  <p className="text-sm leading-relaxed">
                    This app fetches live and historical cryptocurrency data
                    from CoinGecko's API, allowing you to monitor prices, market
                    caps, and trading volumes.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-cyan-300 mb-2">
                    Interactive Charts and Analytics
                  </h3>
                  <p className="text-sm leading-relaxed">
                    View detailed price charts, compare different coins, and
                    analyze market movements with clean, responsive
                    visualizations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/20 p-6 rounded-xl border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/20 pb-2">
                API Source (CoinGecko)
              </h2>
              <div className="space-y-4 text-white/80">
                <div>
                  <h3 className="text-lg font-medium text-amber-300 mb-2">
                    Powered by CoinGecko
                  </h3>
                  <p className="text-sm leading-relaxed">
                    This app uses the{" "}
                    <a
                      href="https://www.coingecko.com/en/api"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:underline"
                    >
                      CoinGecko API
                    </a>{" "}
                    — a free, reliable source for cryptocurrency data.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-amber-300 mb-2">
                    Why CoinGecko?
                  </h3>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>
                      <span className="font-medium">Comprehensive Data:</span>{" "}
                      Covers thousands of cryptocurrencies
                    </li>
                    <li>
                      <span className="font-medium">High Accuracy:</span>{" "}
                      Frequent updates ensure real-time precision
                    </li>
                    <li>
                      <span className="font-medium">Developer-Friendly:</span>{" "}
                      Well-documented and easy to integrate
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-black/20 p-6 rounded-xl border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/20 pb-2">
                Developer Credits
              </h2>
              <div className="space-y-4 text-white/80">
                <div>
                  <h3 className="text-lg font-medium text-purple-300 mb-2">
                    Built by Sahil
                  </h3>
                  <p className="text-sm leading-relaxed">
                    A passionate developer exploring blockchain, web apps and
                    financial tools.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-purple-300 mb-2">
                    Tech Stack Used
                  </h3>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>
                      <span className="font-medium">Frontend:</span> React,
                      TailwindCSS, ReactBits, FlowBite, React Spinners
                    </li>
                    <li>
                      <span className="font-medium">API:</span> CoinGecko
                      RESTful API
                    </li>
                    <li>
                      <span className="font-medium">Charts:</span> Chart.js
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-purple-300 mb-2">
                    Connect with me
                  </h3>
                  <div className="flex space-x-4 text-sm">
                    <a
                      href="https://www.linkedin.com/in/sahiltanvi28"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:underline flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      LinkedIn
                    </a>
                    <a
                      href="https://x.com/God_Sahil28"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:underline flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/20 p-6 rounded-xl border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/20 pb-2">
                GitHub Repository
              </h2>
              <div className="space-y-4 text-white/80">
                <div>
                  <h3 className="text-lg font-medium text-emerald-300 mb-2">
                    Open-Source & Contributions Welcome!
                  </h3>
                  <p className="text-sm leading-relaxed mb-4">
                    Check out the code, report issues, or contribute to this
                    project:
                  </p>
                  <a
                    href="https://github.com/Samyra312007/CryptoTracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
