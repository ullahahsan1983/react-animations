import React from "react";
import Footer from './layout/Footer';
import Header from './layout/Header';
import './App.css';
import Main from './layout/Main';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
