import React from "react";
import Analist from "./Analist";
import ProductsDashBoard from "./ProductsDashBoard";

const DashBoar = () => {
  return (
    <div className=" text-300 p-8 w-full">
      <div>
        <h1 className=" text-3xl font-bold">Dashboard</h1>
      </div>
      <Analist />
      <ProductsDashBoard />
    </div>
  );
};

export default DashBoar;
