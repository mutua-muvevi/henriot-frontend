import ResearchMarket from "./market/market";
import ResearchNews from "./news/news";
import ResearchScreener from "./screener/screener";
import ResearchWatchlist from "./watchlist/watchlist";

export const tabsInfo = {
	labels: [
		{ label: "Market" },
		{ label: "News" },
		{ label: "Watchlist" },
		{ label: "Screener" },
	],
	pannel:[
		{ children: <ResearchMarket/> },
		{ children: <ResearchNews/> },
		{ children: <ResearchWatchlist/> },
		{ children: <ResearchScreener/> },
	]
}