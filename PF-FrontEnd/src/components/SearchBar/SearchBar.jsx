import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProductName } from "../../Redux/actions";

import "./searchBar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Term before dispatch:", searchTerm);
    dispatch(searchProductName(searchTerm));
  };

  console.log("Search Term in SearchBar:", searchTerm);

  return (
    <div className="search-bar">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control py-1"
          placeholder="Search..."
          aria-label="Search..."
          aria-describedby="basic-addon2"
          value={searchTerm}
          onChange={handleChange}
        />
        <span className="input-group-text py-2" id="basic-addon2" onClick={handleSearch}>
          <FaSearch />
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
