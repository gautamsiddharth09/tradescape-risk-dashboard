import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="mobile-header">
        <h2 className="mobile-logo">Tradescape</h2>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰ 
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <h2 className="logo">Tradescape</h2>

        <nav>
          <NavLink to="/" end onClick={closeMenu}>
            Overview
          </NavLink>

          <NavLink to="/performance" onClick={closeMenu}>
            Performance
          </NavLink>

          <NavLink to="/risk" onClick={closeMenu}>
            Risk
          </NavLink>

          <NavLink to="/equity" onClick={closeMenu}>
            Equity Curve
          </NavLink>

          <NavLink to="/trades" onClick={closeMenu}>
            Trade History
          </NavLink>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;