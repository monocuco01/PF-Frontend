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
    default:
      return state;
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
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
    
        
      
  }
};

export default rootReducer;
