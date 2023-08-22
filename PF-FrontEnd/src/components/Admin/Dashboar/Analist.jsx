import React, { useEffect } from "react";
import "./analist.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, deleteProduct } from "../../../Redux/actions";

const Analist = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const totalProducts = allProducts.length; // Calculating the total number of products

  return (
    <div className="flex">
      <div className="rounded-lg w-96 bg-[#597091] h-52 shadow-mi-sombra mt-10 mr-20 flex flex-col p-3 justify-evenly items-start">
        <div className="w-12 h-12 text-white rounded-full bg-[#7678DC] p-1 text-center">
          <span className="text-3xl material-symbols-sharp">
            <i class="bi bi-people-fill personita"></i>
          </span>
        </div>
        <h2 className="text-gray-300 font-">Total Users</h2>
        <h1 className="text-2xl text-gray-300 font-extrabold"></h1>
      </div>
      <div className="rounded-lg w-96 bg-[#597091] h-52 shadow-mi-sombra mt-10 mr-10 flex flex-col p-3 justify-evenly items-start">
        <div className="w-12 h-12 text-white rounded-full bg-[#F66986] p-1 text-center">
          <span className="material-symbols-sharp text-3xl">
            <i class="bi bi-minecart-loaded personita"></i>
          </span>
        </div>
        <h2 className="text-gray-300 font-medium">Total products</h2>
        <h1 className="text-2xl text-gray-300 font-extrabold">{totalProducts}</h1>
      </div>
    </div>
  );
};

export default Analist;
