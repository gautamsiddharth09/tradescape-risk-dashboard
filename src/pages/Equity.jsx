import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import trades from "../data/trades";
import account from "../data/account";
import { calculateEquityCurve } from "../utils/calculation";
import "./Equity.css";

function Equity() {
  const equityData = calculateEquityCurve(trades, account.startingBalance);

  return (
    <div className="equity-page">
      <h2>Equity Curve</h2>
      <p>Track your account balance after each trade.</p>

      <div className="chart-card">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart
            data={equityData}
            margin={{
              top: 20,
              right: 20,
              left: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid stroke="#e5e7eb" strokeDasharray="5 5" />

            <XAxis dataKey="trade" />

            <YAxis
              domain={[(dataMin) => dataMin - 500, (dataMax) => dataMax + 500]}
            />

            <Tooltip
              formatter={(value) => [`$${value.toLocaleString()}`, "Balance"]}
            />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#2563eb"
              strokeWidth={4}
              dot={{
                r: 4,
                fill: "#fff",
                stroke: "#2563eb",
                strokeWidth: 2,
              }}
              activeDot={{
                r: 7,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Equity;
