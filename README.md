# Trader Risk Dashboard

A simple and responsive Trader Risk Dashboard built using **Java Script**, **React**, **Redux Toolkit**,**Recharts** and **CSS**. The dashboard helps traders monitor their account performance, trading statistics, and risk status using mock trading data.

---


##  What I Built

- Account Overview section
- Trading Performance summary
- Risk Indicator (Safe / Approaching Limit / At Risk)
- Trade History Table
- Equity Curve chart
- Responsive dashboard using reusable React components
- All calculations (P&L, Win Rate, Drawdown, etc.) are derived from the trade data instead of being hardcoded.

---

## Additional Feature

I added an **Equity Curve** to show how the account balance changes after each trade. It gives traders a quick visual overview of their trading performance and makes it easier to understand account growth over time.


## Product Questions

### 1. What is drawdown in trading?

Drawdown is the amount of money an account has lost from its highest value. It helps traders understand how much they have gone down during trading.

### 2. Why would a trader care about their remaining drawdown rather than just their current P&L?

Current P&L only shows whether the trader is in profit or loss. Remaining drawdown shows how much loss is still allowed before breaking the account rules, so it helps the trader manage risk better.

### 3. If you had another day to work on this dashboard, what would you improve?

I would add trade filters, real-time data updates, and more charts like asset-wise performance. I would also improve the UI to make the dashboard easier to use.

## Future Improvements

- API Integration
- Authentication
- Real-time updates
- Trade filtering

<img src="./assets/dashboard.png" alt="Dashboard" width="900" />

##  How to Run the Project

1. Clone the repository

```bash
git clone https://github.com/gautamsiddharth09/tradescape-risk-dashboard.git
```

2. Go to the project folder

```bash
cd tradescape-risk-dashboard
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

5. Open your browser and visit:

```text
http://localhost:5173
```

---