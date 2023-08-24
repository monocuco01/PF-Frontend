import React from "react";
import Analist from "./Analist";
import ProductsDashBoard from "./ProductsDashBoard";
import UsersDashboar from "./UsersDashboar";
import "./analist.css"
const DashBoar = () => {
  return (
    <div className="sube text-300 p-8 w-full flex-row ">
      <div className="">
        <h1 className=" text-3xl font-bold">Dashboard</h1>

        <Analist />
        <ProductsDashBoard />
      </div>
      <div>
        <UsersDashboar />
      </div>
    </div>
  );
};

export default DashBoar;
