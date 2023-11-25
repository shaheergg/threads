import React from "react";
import Header from "../components/Header";

function AppLayout({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}

export default AppLayout;
