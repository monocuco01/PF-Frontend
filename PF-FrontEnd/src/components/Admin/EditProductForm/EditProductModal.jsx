import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct } from "../../../Redux/actions";
import "./Edicito.css";

const EditProductModal = ({ productId, onClose }) => {
  const cloudinaryWidget = useRef(null);
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  const [editedProduct, setEditedProduct] = useState(null);

  useEffect(() => {
    cloudinaryWidget.current = window.cloudinary.createUploadWidget(
      {
        cloudName: "dziwyqnqk",
        uploadPreset: "kifrxmwu",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          const imageUrl = result.info.secure_url;
          setEditedProduct((prevProduct) => ({
            ...prevProduct,
            image: imageUrl,
          }));
        }
      }
    );
    const productToEdit = allProducts.find(
      (product) => product.id === productId
    );

    setEditedProduct(productToEdit);
  }, [allProducts, productId]);

  const openWidget = () => {
    cloudinaryWidget.current.open();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    const arrocito = editedProduct.id;
    try {
      dispatch(updateProduct(arrocito, editedProduct));
      onClose();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleClose = () => {
    onClose();
  };

  if (!editedProduct) {
    return null; // El modal no se muestra hasta que se cargue el producto
  }

  return (
    <div className="edit-modal">
      <div className="edit-content">
        <form className="edit-form">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={editedProduct.title}
            onChange={handleInputChange}
          />
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={editedProduct.price}
            onChange={handleInputChange}
          />
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={editedProduct.description}
            onChange={handleInputChange}
          />
          <div className="botones">
            <button
              type="button"
              className="update-button bg-sky-900"
              onClick={handleUpdate}
            >
              Update
            </button>
            <div className="arrocitoconpollo">
              <button
                type="button"
                className="close-button  bg-sky-900"
                onClick={handleClose}
              >
                x
              </button>
            </div>
          </div>
        </form>{" "}
        <div className="image-section">
          {editedProduct.image && (
            <div className="image-preview">
              <img
                src={editedProduct.image}
                alt="Selected"
                className="selected-image"
              />
            </div>
          )}
          <button
            type="button"
            onClick={openWidget}
            className="update-button bg-sky-900"
          >
            Select Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;
