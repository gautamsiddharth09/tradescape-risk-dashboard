import React from "react";
import { useSelector } from "react-redux";
import "./Trades.css"
function Trades() {
  const { account, trades } = useSelector((state) => state.dashboard);

  return (
    <>
      <div className="table-wrapper">
        {trades.length === 0 ? (
          <p>No trades found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Asset</th>
                <th>Type</th>
                <th>P&L</th>
              </tr>
            </thead>

           <tbody>
  {trades.map((trade) => (
    <tr key={trade.id}>
      <td data-label="Asset">{trade.asset}</td>

      <td data-label="Type">{trade.type}</td>

      <td
        data-label="P&L"
        className={trade.pnl >= 0 ? "profit" : "loss"}
      >
        {trade.pnl >= 0
          ? `+$${trade.pnl}`
          : `-$${Math.abs(trade.pnl)}`}
      </td>
    </tr>
  ))}
</tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default Trades;
