import React from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
// import Footer from "./components/Footer/Footer"; // <--- COMENTE

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Card />
      {/* <Footer /> */}  {/* COMENTE */}
    </>
  );
}

export default App;
