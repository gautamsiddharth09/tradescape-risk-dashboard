import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

import "./Layout.css";

function Layout() {
  return (
    <div className="layout">

      <Sidebar />

      <main className="main-content">

        <Header />

        <div className="page-content">
          <Outlet />
        </div>

      </main>

    </div>
  );
}

export default Layout;