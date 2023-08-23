import React, { useState } from "react";
import Filters from "../filters/Filters";
import "./Store.css";
import Cards from "../Cards/Cards";
import ReviewProducts from "../Reviews/ReviewProducts";

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [rangePrice, setRangePrice] = useState({ min: 0, max: Infinity });


  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceRangeChange = (priceRange) => {
    setRangePrice(priceRange);
  };

 
  return (
    <div className="store-wrapper home-wrapper-2 py-5">
      <div className="pruebitaFlex container-xxl">
        <div className="row">
          <div className="arrozconfiltros">
            <Filters onSelectCategory={setSelectedCategory}  onPriceRangeChange={handlePriceRangeChange} />
          </div>
          <div className="arrozconpollito">
            <Cards selectedCategory={selectedCategory} priceRange={rangePrice} />
          </div>
        </div>
      </div>
     
    </div>
    
  );
};

export default Store;
