import trades from "../data/trades"

export const calculateTotalPnL = (trades) => {
  return trades.reduce((total, trade) => total + trade.pnl, 0);
};

export const calculateCurrentBalance = (
  startingBalance,
  totalPnL
) => {
  return startingBalance + totalPnL;
};


export const calculateWinningTrades = (trades) => {
  return trades.filter((trade) => trade.pnl > 0).length;
};


export const calculateLosingTrades = (trades) => {
  return trades.filter((trade) => trade.pnl < 0).length;
};


export const calculateWinRate = (trades) => {
  if (trades.length === 0) return 0;

  const wins = calculateWinningTrades(trades);

  return ((wins / trades.length) * 100).toFixed(2);
};


export const calculateLargestWin = (trades) => {
  const winningTrades = trades.filter((trade) => trade.pnl > 0);

  if (winningTrades.length === 0) return 0;

  return Math.max(...winningTrades.map((trade) => trade.pnl));
};


export const calculateLargestLoss = (trades) => {
  const losingTrades = trades.filter((trade) => trade.pnl < 0);

  if (losingTrades.length === 0) return 0;

  return Math.min(...losingTrades.map((trade) => trade.pnl));
};

// current drawdown
export const calculateCurrentDrawdown = (
  startingBalance,
  currentBalance
) => {
  return Math.max(0, startingBalance - currentBalance);
};

// remaining drawdown
export const calculateRemainingDrawdown = (
  maximumDrawdown,
  currentDrawdown
) => {
  return maximumDrawdown - currentDrawdown;
};

// current day loss
export const calculateCurrentDayLoss = (trades) => {
  return trades
    .filter((trade) => trade.pnl < 0)
    .reduce((total, trade) => total + Math.abs(trade.pnl), 0);
};


export const calculateRemainingDailyLoss = (
  dailyLossLimit,
  currentLoss
) => {
  return dailyLossLimit - currentLoss;
};

// risk status logic
export const getRiskStatus = (
  remainingDrawdown,
  maximumDrawdown
) => {
  const percentage =
    (remainingDrawdown / maximumDrawdown) * 100;

  if (percentage <= 20) {
    return "At Risk";
  }

  if (percentage <= 50) {
    return "Approaching Limit";
  }

  return "Safe";
};


// curve
export const calculateEquityCurve = (
  trades,
  startingBalance
) => {
  let balance = startingBalance;

  return trades.map((trade) => {
    balance += trade.pnl;

    return {
      trade: `${trade.asset} ${trade.type}`,
      balance,
    };
  });
};


// format currency
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
};