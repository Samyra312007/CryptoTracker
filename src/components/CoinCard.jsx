import { ArrowUp, ArrowDown, Star } from "lucide-react";
import { useState } from "react";

const CoinCard = ({
  uuid,
  symbol,
  name,
  iconUrl,
  price,
  change,
  marketCap,
  sparkline,
  onToggleWatchlist,
  isWatchlisted = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 ${
        isHovered ? "scale-[1.02]" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={() => onToggleWatchlist(uuid)}
        className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        aria-label={
          isWatchlisted ? "Remove from watchlist" : "Add to watchlist"
        }
      >
        <Star
          className={`h-5 w-5 ${
            isWatchlisted ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
          }`}
        />
      </button>

      <div className="flex items-center gap-3 mb-4">
        <img
          src={iconUrl}
          alt={`${name} logo`}
          className="w-10 h-10 rounded-full"
          loading="lazy"
        />
        <div className="text-left">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {name}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400 uppercase">
            {symbol}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-500 dark:text-gray-400">Price:</span>
          <span className="font-medium text-gray-900 dark:text-white">
            $
            {parseFloat(price).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 6,
            })}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-500 dark:text-gray-400">24h Change:</span>
          <div
            className={`flex items-center ${
              parseFloat(change) >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {parseFloat(change) >= 0 ? (
              <ArrowUp className="h-4 w-4 mr-1" />
            ) : (
              <ArrowDown className="h-4 w-4 mr-1" />
            )}
            {Math.abs(parseFloat(change)).toFixed(2)}%
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-500 dark:text-gray-400">Market Cap:</span>
          <span className="font-medium text-gray-900 dark:text-white">
            ${(parseFloat(marketCap) / 1000000000).toFixed(2)}B
          </span>
        </div>
      </div>

      {sparkline && sparkline.length > 0 && (
        <div className="mt-4 h-16 w-full">
          <svg viewBox={`0 0 ${sparkline.length} 40`} className="w-full h-full">
            <polyline
              fill="none"
              stroke={parseFloat(change) >= 0 ? "#10B981" : "#EF4444"}
              strokeWidth="2"
              points={sparkline
                .map(
                  (p, i) =>
                    `${i},${
                      40 -
                      (parseFloat(p) / Math.max(...sparkline.map(parseFloat))) *
                        40
                    }`
                )
                .join(" ")}
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default CoinCard;
