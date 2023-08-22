import React from "react";
import HomePage from "../HomePage/HomePage";
import SecondLayer from "../SecondLayer/SecondLayer";
import Categories from "../Categories/Categories";
import "./home.css";

const Home = () => {
  return (
    <div className="containertodito">
      <HomePage />
      <SecondLayer />
      <Categories />
    </div>
  );
};

export default Home;
