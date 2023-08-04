import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from './Redux/store.js'
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(

  <PersistGate persistor={persistor}>
    <Provider store={store}>
  <BrowserRouter>
    
      <App />
    
  </BrowserRouter>
  </Provider>
  </PersistGate>
);
