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

import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(

  <Auth0Provider
  domain="dev-u6hiopxdrljtzv40.us.auth0.com"
  clientId="7LeWkCj1tzO3OJeSRVyyJd5opoi3Z8aW"
  redirectUri={window.location.origin}>
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
  </Auth0Provider>

);
