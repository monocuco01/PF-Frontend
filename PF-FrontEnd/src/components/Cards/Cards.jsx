/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import "./Cards.css";
import Rating from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../Redux/actions";

const Cards = ({ selectedCategory, priceRange }) => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  // const searchProduct = useSelector((state) => state.searchProduct);
  const [currentPage, setCurrentPage] = useState(1);
  // const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });

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

  // const filteredProductsByCategory = selectedCategory
  // ? productsInPriceRange.filter((product) => {
  //     const isMatchingCategory = product.categories.includes(selectedCategory);
  //     console.log(
  //       "Product:", product.title,
  //       "Selected Category:", selectedCategory,
  //       "Is Matching Category:", isMatchingCategory
  //     );
  //     return isMatchingCategory;
  //   })
  // : productsInPriceRange;

  // const filteredProductsByCategor = selectedCategory
  //   ? allProducts.filter(
  //       (product) =>
  //         product.category &&
  //         product.category.localeCompare(selectedCategory, undefined, {
  //           sensitivity: "base",
  //         }) === 0
  //     )
  //   : allProducts;

  const itemsPerPage = 15;
  const totalItems = allProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleProducts = allProducts.slice(startIndex, endIndex);

  const handleRatingChange = (newRating) => {
    console.log(`El usuario ha revisado con ${newRating} estrellas`);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // const handleMinPriceChange = (event) => {
  //   const minValue =
  //     event.target.value === "" ? null : parseFloat(event.target.value);
  //   setPriceRange({ ...priceRange, min: minValue });
  // };

  // const handleMaxPriceChange = (event) => {
  //   const maxValue =
  //     event.target.value === "" ? null : parseFloat(event.target.value);
  //   setPriceRange({ ...priceRange, max: maxValue });
  // };

  return (
    <>
      {/* <div className="filter-container">
        <h3>Price</h3>
        <input
          type="number"
          className=""
          id="maxPrice"
          placeholder="Precio mínimo"
          value={priceRange.min}
          onChange={handleMinPriceChange}
        />
      </div>
      <div className="filter-container2">
        <div className="to">
          <label htmlFor="maxPrice">To</label>
        </div>
        <input
          type="number"
          className=" "
          id="maxPrice"
          placeholder="Precio máximo"
          value={priceRange.max}
          onChange={handleMaxPriceChange}
        />
      </div> */}

      <div className="containertodosconstrella">
        <div className="cards-container">
          {visibleProducts.length === 0 ? (
            <div className="no-results">No se encontraron productos.</div>
          ) : (
            visibleProducts.map((product) => (
              <div key={product.id} className="card">
                <Link to={`/detail/${product.id}`} className="card-link">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-image"
                  />
                </Link>
                <h3 className="card-title">{product.title}</h3>
                <span className="card-price">${product.price}</span>
                <div className="card-footer">
                  <Rating
                    count={5}
                    value={product.rating.rate}
                    size={24}
                    onChange={handleRatingChange}
                    a11y={true}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                </div>
              </div>
            ))
          )}
        </div>
        <div className="pagination">
          <button
            className="page-button"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`page-button ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="page-button"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            Siguiente
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;
