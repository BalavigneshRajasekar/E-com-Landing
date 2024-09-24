/* eslint-disable no-unused-vars */
import React from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import Products from "./Products";

function Home() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
}

export default Home;
