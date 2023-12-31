import {
  GET_CATEGORIES,
  GET_PRODUCTS,
  SEARCH_PRODUCT_NAME,
  POST_PRODUCT,
  SET_FILTERS,
  GET_FILTERED_CATEGORIES,
  SEND_EMAIL_REQUEST,
  CREATE_CHECKOUT_SESSION,
  PAYMENT_SUCCESSFUL,
  PAYMENT_FAILED,
  POST_REVIEW_PRODUCT,
  SEND_NEWSLETTER_REQUEST,
  SEND_NEWSLETTER_SUCCESS,
  SEND_NEWSLETTER_FAILURE,
  GET_ACTIVE_PRODUCTS,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./actions-types";

const initialState = {
  products: [],
  isLoading: false,
  searchProduct: " ",
  categories: [],
  postproduct: [],
  filters: {},
  filteredCategories: [],
  sendingEmail: false,
  emailSent: false,
  error: null,
  checkoutSession: null,
  paymentSuccess: false,
  paymentError: null,
  reviewEvent: {},
  sending: false,
  success: false,
  users: [],
  loading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      console.log("Products received in reducer:", action.payload);
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case SEARCH_PRODUCT_NAME:
      return {
        ...state,
        searchProduct: action.payload.toLowerCase(),
      };
    case "persist/REHYDRATE":
      return {
        ...state,
        ...(action.payload && action.payload.root), // Usar la clave específica, en este caso, 'root'
      };
    // default:
    //   return state;
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case POST_REVIEW_PRODUCT:
      return {
        ...state,
        eventReview: action.payload,
        error: null,
      };
    case POST_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case SET_FILTERS:
      return {
        ...state,
        filters: action.filters,
      };
    case GET_FILTERED_CATEGORIES:
      return {
        ...state,
        filteredCategories: action.filteredCategories,
      };

    case SEND_EMAIL_REQUEST:
      return { ...state, sendingEmail: true };

    case CREATE_CHECKOUT_SESSION:
      return {
        ...state,
        checkoutSession: action.payload,
        paymentSuccess: false,
        paymentError: null,
      };
    case PAYMENT_SUCCESSFUL:
      return {
        ...state,
        paymentSuccess: true,
        paymentError: null,
      };
    case PAYMENT_FAILED:
      return {
        ...state,
        paymentSuccess: false,
        paymentError: action.payload,
      };
    case SEND_NEWSLETTER_REQUEST:
      return {
        ...state,
        sending: true,
        success: false,
        error: null,
      };
    case SEND_NEWSLETTER_SUCCESS:
      return {
        ...state,
        sending: false,
        success: true,
        error: null,
      };
    case SEND_NEWSLETTER_FAILURE:
      return {
        ...state,
        sending: false,
        success: false,
        error: action.error,
      };

    case FETCH_USERS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: action.error };

    case GET_ACTIVE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case UPDATE_PRODUCT:
      const updatedProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      if (updatedProductIndex !== -1) {
        // Create a new array with the updated product at the correct index
        const updatedProducts = [
          ...state.products.slice(0, updatedProductIndex),
          action.payload,
          ...state.products.slice(updatedProductIndex + 1),
        ];

        return { ...state, products: updatedProducts };
      }
  }
};

export default rootReducer;
