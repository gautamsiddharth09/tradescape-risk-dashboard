
import { useSelector } from "react-redux";
import { calculateCurrentBalance, calculateTotalPnL } from "../utils/calculation";
import "./Overview.css"

function Overview() {
  const { account, trades } = useSelector((state) => state.dashboard);

   const totalPnL = calculateTotalPnL(trades);
 
   const currentBalance = calculateCurrentBalance(
     account.startingBalance,
     totalPnL
   );

  return (
    <>
      <h2>Account Overview</h2>

      <div className="account-grid">

        <div className="account-card">
          <h3> Starting Balance </h3>
          <p>${account.startingBalance}</p>
        </div>

       

      
        <div className="account-card">
          <h3> Current Balance </h3>
          <p>${currentBalance}</p>
        </div>

        {/* <AccountCard title="Current Balance" value={`$${currentBalance}`} /> */}

        
        <div className="account-card">
          <h3> Maximum Drawdown </h3>
          <p>${account.maximumDrawdown}</p>
        </div>
        
        <div className="account-card">
          <h3> Daily Loss Limit </h3>
          <p>${account.dailyLossLimit}</p>
        </div>

      </div>
    </>
  );
}

export default Overview;
























// import { useSelector } from "react-redux";
// import AccountCard from "../components/AccountCard";
// import { calculateCurrentBalance } from "../utils/calculation";

// function Overview() {
//   const { account, trades } = useSelector(
//     (state) => state.dashboard
//   );

//   const currentBalance = calculateCurrentBalance(
//     account.startingBalance,
//     trades
//   );

//   return (
//     <>
//       <h2>Account Overview</h2>

//       <div className="account-grid">

//         <AccountCard
//           title="Starting Balance"
//           value={`$${account.startingBalance}`}
//         />

//         <AccountCard
//           title="Current Balance"
//           value={`$${account.currentBalance}`}
//         />

//         <AccountCard
//           title="Maximum Drawdown"
//           value={`$${account.maximumDrawdown}`}
//         />

//         <AccountCard
//           title="Daily Loss Limit"
//           value={`$${account.dailyLossLimit}`}
//         />

//       </div>
//     </>
//   );
// }

// export default Overview;