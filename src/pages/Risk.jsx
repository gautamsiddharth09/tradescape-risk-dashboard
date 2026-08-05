import React from "react";
import account from "../data/account";
import "./Risk.css"
import {
  calculateCurrentBalance,
  calculateCurrentDayLoss,
  calculateCurrentDrawdown,
  calculateRemainingDailyLoss,
  calculateRemainingDrawdown,
  calculateTotalPnL,
  getRiskStatus,
} from "../utils/calculation";
import trades from "../data/trades";

function Risk() {
  const totalPnL = calculateTotalPnL(trades);

  const currentBalance = calculateCurrentBalance(
    account.startingBalance,
    totalPnL,
  );

  const currentDrawdown = calculateCurrentDrawdown(
    account.startingBalance,
    currentBalance,
  );

  const remainingDrawdown = calculateRemainingDrawdown(
    account.maximumDrawdown,
    currentDrawdown,
  );

  const currentDayLoss = calculateCurrentDayLoss(trades);

  const remainingDailyLoss = calculateRemainingDailyLoss(
    account.dailyLossLimit,
    currentDayLoss,
  );

  const riskStatus = getRiskStatus(remainingDrawdown, account.maximumDrawdown);
  return (
    <>
      <div className="risk-page">
        <h2>Risk Overview</h2>

        <div className="risk-grid">
          <div className="card">
            <h3>Current Drawdown</h3>
            <p>${currentDrawdown}</p>
          </div>

          <div className="card">
            <h3>Remaining Drawdown</h3>
            <p>${remainingDrawdown}</p>
          </div>

          <div className="card">
            <h3>Today's Loss</h3>
            <p>${currentDayLoss}</p>
          </div>

          <div className="card">
            <h3>Remaining Daily Limit</h3>
            <p>${remainingDailyLoss}</p>
          </div>
        </div>

        <div className="risk-status">
          <h3>Account Status</h3>

          <span
            className={`status ${riskStatus.toLowerCase().replace(/\s/g, "-")}`}
          >
            {riskStatus}
          </span>
        </div>
      </div>
    </>
  );
}

export default Risk;
