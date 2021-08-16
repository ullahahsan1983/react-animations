import React from "react";
import About from "../../favorites/About/About";
import Topbar from "./Topbar";

const Header = ()  => {
  return (
    <header className="header">
      <Topbar />
      <About variant="classic" />
    </header>
  );
}

export default Header;
