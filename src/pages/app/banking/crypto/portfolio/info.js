import CryptoPortfolio from "./crypto/crypto";
import TradingPortfolio from "./trading/trading";

export const tabsInfo = {
	labels: [
		{ label: "Crypto Account" },
		{ label: "Trading Wallet" },
	],
	pannel: [
		{ children : <CryptoPortfolio/> },
		{ children : <TradingPortfolio/> },
	]
}