import axios from "axios";
import {
  POST_PRODUCT,
  GET_PRODUCTS,
  SEARCH_PRODUCT_NAME,
  GET_CATEGORIES,
  SET_FILTERS,
  GET_FILTERED_CATEGORIES,
  POST_REVIEW_PRODUCT,
  SEND_NEWSLETTER_REQUEST,
  SEND_NEWSLETTER_SUCCESS,
  SEND_NEWSLETTER_FAILURE,
  GET_ACTIVE_PRODUCTS,
  UPDATE_PRODUCT,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  AUTH_ERROR,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./actions-types";

const URL = "http://localhost:3001";
const REVIEW = "/review";
const RUTA = "/register";
// const URL= "https://pf-backend-nwu9.onrender.com"

export const sendNewsletter = (email) => async (dispatch) => {
  try {
    console.log("Enviando correo electrónico:", email);
    dispatch({ type: SEND_NEWSLETTER_REQUEST });

    const response = await axios.post(`${URL}${RUTA}`, { email });

    if (response.status === 200) {
      console.log("Correo electrónico enviado exitosamente:", email);
      dispatch({ type: SEND_NEWSLETTER_SUCCESS });
    } else {
      console.error("Error en la respuesta del servidor:", response.data);
      dispatch({
        type: SEND_NEWSLETTER_FAILURE,
        error: "Error al enviar el correo electrónico",
      });
    }
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
    dispatch({
      type: SEND_NEWSLETTER_FAILURE,
      error: "Error al enviar el correo electrónico",
    });
  }
};

export const reviewEvent = (reviewE) => {
  return async (dispatch) => {
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

      const activeProducts = await response.data.filter(
        (product) => product.isActive
      );

      await dispatch({ type: GET_ACTIVE_PRODUCTS, payload: activeProducts });
    } catch (error) {
      console.error("Error fetching active products:", error);
    }
  };
};

export const searchProductName =(productName) => {
  return  { type: SEARCH_PRODUCT_NAME, payload: productName };
};

export const getcategories = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://pf-backend-nwu9.onrender.com/categories"
      );
      const categories = await response.data;

     await dispatch({ type: GET_CATEGORIES, payload: categories });
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
      const filteredCategories = await applyFilters(data, filters);

      await dispatch({
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
      const postproducct = await response.data;
      dispatch({ type: POST_PRODUCT, payload: postproducct });
      alert("new product create");
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
};

export const deactivateProduct = (productId) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `https://pf-backend-nwu9.onrender.com/products/${productId}`,
        { isActive: false }
      );

      console.log(response.data);
    } catch (error) {
      console.log("Error deactivating product:", error);
    }
  };
};

export const fetchActiveProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://pf-backend-nwu9.onrender.com/products"
      );

      const activeProducts = await response.data.filter(
        (product) => product.isActive
      );

      await dispatch({ type: GET_ACTIVE_PRODUCTS, payload: activeProducts });
    } catch (error) {
      console.error("Error fetching active products:", error);
    }
  };
};

export const updateProduct = (productId, updatedProductData) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `https://pf-backend-nwu9.onrender.com/products/${productId}`,
        updatedProductData
      );

      // Dispatch action to update the state in Redux
      console.log(response.data);
      dispatch({ type: UPDATE_PRODUCT, payload: response.data });

      // You might want to dispatch a fetchProducts or fetchActiveProducts
      // action here to update the products list after updating.
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };
};

export const registerSuccess = (userData) => {
  return {
    type: REGISTER_SUCCESS,
    payload: userData,
  };
};

export const loginSuccess = (userData) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userData,
  };
};

export const authError = (error) => {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
};

export const register = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://pf-backend-nwu9.onrender.com/auth/register",
      userData
    );
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(authError(error.response.data.error));
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://pf-backend-nwu9.onrender.com/auth/login",
      userData
    );
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(authError(error.response.data.error));
  }
};
export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://pf-backend-nwu9.onrender.com/users"
      );

      await dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_USERS_FAILURE, error: error.message });
      console.log(response.data);
    }
  };
};
