import { useSelector } from "react-redux";
import "./Performance.css"
import {
  calculateTotalPnL,
  calculateWinningTrades,
  calculateLosingTrades,
  calculateWinRate,
  calculateLargestWin,
  calculateLargestLoss,
} from "../utils/calculation";

function Performance() {
  const { trades } = useSelector((state) => state.dashboard);

  return (
    <>
      <h2>Trading Performance</h2>

      <div className="performance-grid">
        <div className="performance-card">
          <h3>Total P&L</h3>
          <p> {calculateTotalPnL(trades)} </p>
        </div>

        <div className="performance-card">
          <h3>Winning Trades</h3>
          <p> {calculateWinningTrades(trades)} </p>
        </div>

        <div className="performance-card">
          <h3> Losing Trades </h3>
          <p> {calculateLosingTrades(trades)} </p>
        </div>

        <div className="performance-card">
          <h3> Win Rate </h3>
          <p> {`${calculateWinRate(trades)}%`} </p>
        </div>

        <div className="performance-card">
          <h3> Largest Win </h3>
          <p> {calculateLargestWin(trades)} </p>
        </div>

        <div className="performance-card">
          <h3> Largest Loss </h3>
          <p> {calculateLargestLoss(trades)} </p>
        </div>
      </div>
    </>
  );
}

export default Performance;
