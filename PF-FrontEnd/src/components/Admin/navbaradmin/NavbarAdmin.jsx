  import React from "react";
  import { Link } from "react-router-dom";
  import "./NavBarAdmin.css"; // Asegúrate de tener un archivo de estilos CSS separado
  import Logo from "../../../img/Logo";
  import { useAuth0 } from "@auth0/auth0-react";
  const NavbarAdmin = () => {
    const { logout } = useAuth0();
    return (
      <div className="navbar">
        <div className="logoS">
          <Logo />
        </div>
        <nav className="nav-links">
          <Link to="/admin/dashboard" className="nav-link">
            <i className="arrocitoss bi bi-house"></i>
            Dashboard
          </Link>
          <Link to="/admin/users" className="nav-link">
            <i className="arrocitoss bi bi-person-circle"></i>
            Usuarios
          </Link>
          <Link to="/admin/products" className="nav-link">
            <i className="arrocitoss bi bi-bag"></i>
            Productos
          </Link>
          <Link to="/admin/create" className="nav-link">
            <i className="arrocitoss bi bi-bag-plus"></i>
            Create
          </Link>
        </nav>
        <Link
          onClick={() => logout({ returnTo: window.location.origin })}
          className="nav-link"
        >
          <i className="arrocitoss bi bi-box-arrow-left"></i>
          log out
        </Link>
      </div>
    );
  };

  export default NavbarAdmin;
