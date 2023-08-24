/* eslint-disable react/prop-types */
/* Filters.jsx */
import React, { useEffect, useState } from "react";
import "./Filters.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/actions";

const Filters = ({ onSelectCategory, onPriceRangeChange }) => {
  
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });

  const handleCategoryClick = (category) => {
    console.log("Selected category:", category);
    onSelectCategory(category);
  };

  

  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  const searchProduct = useSelector((state) => state.searchProduct);
  // const [currentPage, setCurrentPage] = useState(1);
  

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // const searchTerm = searchProduct.trim().toLowerCase();
  // const filteredProductsBySearch = searchTerm
  //   ? allProducts.filter((product) =>
  //       product.title.toLowerCase().includes(searchTerm)
  //     )
  //   : allProducts;

  // const productsInPriceRange =
  //   priceRange.min !== null || priceRange.max !== null
  //     ? filteredProductsBySearch.filter(
  //         (product) =>
  //           product.price >= priceRange.min && product.price <= priceRange.max
  //       )
  //     : filteredProductsBySearch;

  //     const filteredProductsByCategory = selectedCategory
  //     ? productsInPriceRange.filter((product) => {
  //         const isMatchingCategory = product.categories.includes(selectedCategory);
  //         console.log(
  //           "Product:", product.title,
  //           "Selected Category:", selectedCategory,
  //           "Is Matching Category:", isMatchingCategory
  //         );
  //         return isMatchingCategory;
  //       })
  //     : productsInPriceRange;
    
  
  //   console.log("Filtered Products By Category:", filteredProductsByCategory)
    
  //   const filteredProductsByCategor = selectedCategory
  //     ? allProducts.filter(
  //         (product) =>
  //           product.category &&
  //           product.category.localeCompare(selectedCategory, undefined, {
  //             sensitivity: "base",
  //           }) === 0
  //       )
  //     : allProducts;

  // const itemsPerPage = 15;
  // const totalItems = filteredProductsByCategor.length;
  // const totalPages = Math.ceil(totalItems / itemsPerPage);

  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const visibleProducts = filteredProductsByCategory.slice(
  //   startIndex,
  //   endIndex
  // );

  // const handleMinPriceChange = (event) => {
  //   const minValue =
  //     event.target.value === "" ? null : parseFloat(event.target.value);
  //   setPriceRange({ ...priceRange, min: minValue });
  //   onPriceRangeChange({ ...priceRange, min: minValue });
  // };

  // const handleMaxPriceChange = (event) => {
  //   const maxValue =
  //     event.target.value === "" ? null : parseFloat(event.target.value);
  //   setPriceRange({ ...priceRange, max: maxValue });
  //   onPriceRangeChange({ ...priceRange, max: maxValue });
  // };

  // const handleRatingChange = (newRating) => {
  //   console.log(`El usuario ha revisado con ${newRating} estrellas`);
  // };

  // const goToPreviousPage = () => {
  //   setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  // };

  // const goToNextPage = () => {
  //   setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  // };

 


  return (
    <div className="conainer">
      <div className="filter-cards mb-3">
        <h3 className="filter-title">Shop by categories</h3>
        <ul className="ps-0">
          <li onClick={() => handleCategoryClick("watch")}>Watch</li>
          <li onClick={() => handleCategoryClick("TV")}>TV</li>
          <li onClick={() => handleCategoryClick("Cameras")}>Cameras</li>
          <li onClick={() => handleCategoryClick("Laptops")}>Laptops</li>
          <li onClick={() => handleCategoryClick("socks")}>Socks</li>
          <li onClick={() => handleCategoryClick("women's clothing")}>
            womens clothing
          </li>
        </ul>
      </div>

      <p>Price</p>
      <div className="container-price">
        
        <input
          type="number"
          className="form-control"
          id="maxPrice"
          placeholder="Min"
          // value={priceRange.min}
          // onChange={handleMinPriceChange}
        />
      </div>
      <label htmlFor="maxPrice">To</label>
      <div className="container-price">
        <div className="to">
           
        </div>
        <input
          type="number"
          className="form-control "
          id="maxPrice"
          placeholder="Max"
          // value={priceRange.max}
          // onChange={handleMaxPriceChange}
        />
      </div>
    </div>
  );
};

export default Filters;
