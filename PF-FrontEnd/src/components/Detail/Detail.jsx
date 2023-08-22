import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Detail.css";
import Rating from "react-rating-stars-component";
import { CartContext } from "../Cart/CartContext";


export const Detail = () => {
  const { cartItems, addToCart,  } = useContext(CartContext);
  const [notification, setNotification] = useState(false);
  const { productId } = useParams();
  const products = useSelector((state) => state.products);

 

  const product = products.find((p) => p.id === productId);

  // const handleRatingChange = (newRating) => {
  //   console.log(`El usuario ha revisado con ${newRating} estrellas`);
  // };
  const handleAddToCart = () => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      addToCart({ ...product, quantity: existingItem.quantity + 1 });
    } else {
      addToCart({ ...product, quantity: 1 });
    }
    setNotification(true); // Activamos la notificación
  };
  if (!product) {
    return <div className="detail-container">Producto no encontrado</div>;
  }

  return (
    <div className="tusabe">
      <div className="detail-container">
        <div className="container-img">
          <img
            className="detail-image"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="container-content-detail">
          <h2 className="detail-title">{product.title}</h2>
          <p className="detail-price">Price: ${product.price}</p>
          <div className="card-footer">
             {/* <Rating
              count={5}
              value={product.rating.rate}
              size={24}
              onChange={handleRatingChange}
              a11y={true}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />  */}
            <Link to="/review">
        Hacer reseña de este articulo
       </Link>
          </div>
          <p className="detail-description">{product.description}</p>
          
          <div className="botoncitoaquel">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAddToCart}
            >
              add to cart
              <i className="bis bi-bag-plus"></i>
            </button>
            {notification && (
              <p className="notification">Producto añadido al carrito</p>
            )}
          </div>
        </div>
      </div>
       <Link to="/review">
        Hacer reseña de este articulo
       </Link>
    </div>
  );
};
