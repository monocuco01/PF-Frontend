import axios from "axios";
import {
  POST_PRODUCT,
  GET_PRODUCTS,
  SEARCH_PRODUCT_NAME,
  GET_CATEGORIES,
  SET_FILTERS,
  GET_FILTERED_CATEGORIES,
  POST_REVIEW_PRODUCT,
  DELETE_PRODUCT,
} from "./actions-types";

const URL = "http://localhost:3001";
const REVIEW = "/review";

export const reviewEvent = (reviewE) => {
  return async (dispatch) => {
    console.log(reviewE);
    try {
      const endPoint = `${URL}/${REVIEW}`;
      const { data } = await axios.post(endPoint, reviewE);
      dispatch({
        type: POST_REVIEW_PRODUCT,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://pf-backend-nwu9.onrender.com/products"
      );
      const products = response.data;
      dispatch({ type: GET_PRODUCTS, payload: products });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
};

export const searchProductName = (productName) => {
  return { type: SEARCH_PRODUCT_NAME, payload: productName };
};

export const getcategories = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://pf-backend-nwu9.onrender.com/categories"
      );
      const categories = response.data;
      dispatch({ type: GET_CATEGORIES, payload: categories });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
};
export const setFilters = (filters) => {
  return {
    type: SET_FILTERS,
    filters,
  };
};

export const getFilteredCategories = (filters) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://pf-backend-nwu9.onrender.com/categories`
      );
      if (!response.ok) {
        throw new Error("Error al obtener las categorías");
      }

      const data = await response.json();
      const filteredCategories = applyFilters(data, filters);

      dispatch({
        type: GET_FILTERED_CATEGORIES,
        filteredCategories,
      });
    } catch (error) {
      console.error("Error al obtener categorías filtradas:", error);
    }
  };
};

const applyFilters = (data, filters) => {
  return data.filter((category) => {
    if (filters.name) {
      return category.toLowerCase().includes(filters.name.toLowerCase());
    }
    return true; // Si no hay filtro de nombre, retorna todas las categorías
  });
};

export const postproducct = (productdata) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://pf-backend-nwu9.onrender.com/products",
        productdata
      );
      const postproducct = response.data;
      dispatch({ type: POST_PRODUCT, payload: postproducct });
      alert("new product create");
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
};

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    try {
      await axios.delete(
        `https://pf-backend-nwu9.onrender.com/products/${productId}`
      );
      dispatch({ type: DELETE_PRODUCT, payload: productId });
      alert("Product deleted successfully");
    } catch (error) {
      console.log(productId);
    }
  };
};
