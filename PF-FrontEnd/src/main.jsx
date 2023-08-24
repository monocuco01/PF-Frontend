import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from './Redux/store.js'
import { Provider } from "react-redux";
import { CartContext, CartProvider } from "./components/Cart/CartContext.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51Ndg6vIUVtBugw8yOoYOz6giRotimePeE4rTiW4JO0VFq5bYyWROyX9LkLiElZiv6Qu51dQyraYzXiP82tYbt06y00g1JpCWJk");


ReactDOM.createRoot(document.getElementById("root")).render(

  <PersistGate persistor={persistor}>
  <Provider store={store}>
  <BrowserRouter>
    <CartProvider>
    <Elements stripe={stripePromise}>
        <App />
      </Elements>
      </CartProvider>
  </BrowserRouter>
  </Provider>
  </PersistGate>

);
