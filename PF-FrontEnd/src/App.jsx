import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/Footer/Footer";
import { Detail } from "./components/Detail/Detail";
import Store from "./components/store/Store";
import Home from "./components/Home/Home";
import Create from "./components/Create/Create";
import Cart from "./components/Cart/Cart";
import Products from "./components/Admin/Products/Produts";
import NavbarAdmin from "./components/Admin/navbaradmin/NavbarAdmin";
// imports para el login:
/*import { LoginButton } from "./components/Login/Login";
import { LogoutButton } from "./components/Login/Logout";*/


import PaymentSuccess from "./components/Payments/PaymentSuccess";
import Userpart from "./components/Login/Userpart";

import Admin from "./components/Admin/Admin";
import ReviewProducts from "./components/Reviews/ReviewProducts";
import Failure from "./components/Payments/PaymentCancel";
import DashBoar from "./components/Admin/Dashboar/DashBoar";
import EditProductForm from "./components/Admin/EditProductForm/EditProductModal";
function App() {


  return (
    <div className="toditotodito">   
    <Routes>   
        <Route
          path="/detail/:productId"
          element={
            <>
              <Header />
              <HeaderMenu />
              <Detail />
              <Footer />
            </>
          }
        />
        <Route path="/review" element={<ReviewProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payments/success" element={<PaymentSuccess />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/failure" element={<Failure />} />
        <Route
          path="/store"
          element={
            <>
              <Header />
              <HeaderMenu />
              <Store />
              <Footer />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <Header />
              <HeaderMenu />
              <Home />
              <Footer />
            </>
          }
        />
        <Route path="/admin" element={<NavbarAdmin />} />
        <Route
          path="/create"
          element={
            <>
              <Header />
              <HeaderMenu />
              <Create />
              <Footer />
            </>
          }
        />{" "}
        <Route
          path="/admin/products"
          element={
            <div className="mainadmin">
              <NavbarAdmin />
              <Products />
            </div>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <div className="mainadmin">
              <NavbarAdmin />
              <DashBoar />
            </div>
          }
        />
        <Route
          path="/admin/users"
          element={
            <div className="mainadmin">
              <NavbarAdmin /> <div>users</div>
            </div>
          }
        />
        <Route
          path="/admin/create"
          element={
            <div className="mainadmin">
              <NavbarAdmin />
              <Create />
            </div>
          }
        />
        <Route path="/admin/edit" element={<EditProductForm />} />
      </Routes>
    </div>
  );
}

export default App;
