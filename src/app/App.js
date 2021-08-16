import React from "react";
import Footer from './layout/Footer';
import Header from './layout/Header';
import './App.css';
import Main from './layout/Main';
import LayoutProvider from "../libs/layouts/LayoutProvider";

const App = () => {
  return (
    <LayoutProvider className="App" variant="classic">
      <LayoutProvider.Section name="header"><Header /></LayoutProvider.Section>
      <LayoutProvider.Section name="main"><Main /></LayoutProvider.Section>
      <LayoutProvider.Section name="footer"><Footer /></LayoutProvider.Section>
    </LayoutProvider>
  );
}

export default App;