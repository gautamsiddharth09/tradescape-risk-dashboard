import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Overview from "./pages/Overview";
import Performance from "./pages/Performance";
import Risk from "./pages/Risk";
import Equity from "./pages/Equity";
import Trades from "./pages/Trades";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="performance" element={<Performance />} />
          <Route path="risk" element={<Risk />} />
          <Route path="equity" element={<Equity />} />
          <Route path="trades" element={<Trades />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
