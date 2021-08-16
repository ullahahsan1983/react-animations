import React, { useState } from "react";
import LayoutProvider from "../libs/layouts/LayoutProvider";
import Footer from './layout/Footer';
import Header from './layout/Header';
import Sidebar from "./layout/Sidebar";
import Main from './layout/Main';
import UnderConstruction from "./layout/UnderConstruction";

import './App.css';

const App = () => {
  const [example, selectExample] = useState();
  
  return (
    <LayoutProvider className="App" variant="classic">
      <LayoutProvider.Section name="header"><Header /></LayoutProvider.Section>
      <LayoutProvider.Section name="left">
        <Sidebar onNavigate={(e) => selectExample(e) } />
      </LayoutProvider.Section>
      <LayoutProvider.Section name="main">
        <Main example={example} />
      </LayoutProvider.Section>
      <LayoutProvider.Section name="footer">
        <Footer />
      </LayoutProvider.Section>
      <LayoutProvider.Section name="right">
        <UnderConstruction />
      </LayoutProvider.Section>
    </LayoutProvider>
  );
}

export default App;