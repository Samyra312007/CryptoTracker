import { useState, useEffect } from "react";
import CoinCard from "../components/CoinCard";

const CoinDetails = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [watchlist, setWatchlist] = useState([]);

  const API_KEY = "coinrankingbad38ebb3df00a1df60d96e2cb5912196559c92a410b5463";

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch("https://api.coinranking.com/v2/coins", {
          headers: {
            "x-access-token": API_KEY,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setCoins(result.data.coins);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

  const toggleWatchlist = (coinId) => {
    setWatchlist((prev) =>
      prev.includes(coinId)
        ? prev.filter((id) => id !== coinId)
        : [...prev, coinId]
    );
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 text-lg">{error}</div>
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Cryptocurrency Tracker
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {coins.map((coin) => (
          <CoinCard
            key={coin.uuid}
            uuid={coin.uuid}
            symbol={coin.symbol}
            name={coin.name}
            iconUrl={coin.iconUrl}
            price={coin.price}
            change={coin.change}
            marketCap={coin.marketCap}
            sparkline={coin.sparkline}
            onToggleWatchlist={toggleWatchlist}
            isWatchlisted={watchlist.includes(coin.uuid)}
          />
        ))}
      </div>
    </div>
  );
};

export default CoinDetails;
