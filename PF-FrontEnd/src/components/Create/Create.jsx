import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcategories, postproducct } from "../../Redux/actions";
import "./create.css";

const Create = () => {
  const cloudinaryWidget = useRef(null);

  useEffect(() => {
    cloudinaryWidget.current = window.cloudinary.createUploadWidget(
      {
        cloudName: "dziwyqnqk",
        uploadPreset: "kifrxmwu",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          const imageUrl = result.info.secure_url;
          setFormData((prevData) => ({
            ...prevData,
            image: imageUrl,
          }));
        }
      }
    );
  }, []);

  const openWidget = () => {
    cloudinaryWidget.current.open();
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcategories());
  }, [dispatch]);
  const categories = useSelector((state) => state.categories);

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    rating: "",
    category: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postproducct(formData));
  };

  return (
    <div className="completo">
      <h1 className="create">create </h1>
      <div className="form-container">
        <form className="product-form" onSubmit={handleSubmit}>
          <div className="input-section">
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter product title"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                step="0.01"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Enter product price"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter product description"
                rows="4"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating:</label>
              <input
                type="number"
                step="0.1"
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                min="0"
                max="10"
                placeholder="Enter product rating"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                className="form-input"
              >
                <option value="">Select category</option>
                {categories.map((cate) => (
                  <option key={cate}>{cate}</option>
                ))}
              </select>
            </div>
            <div className="button-container">
              <button type="submit" className="create-btn">
                Create Product
              </button>
            </div>
          </div>
          <div className="image-section">
            {formData.image && (
              <div className="image-preview">
                <img
                  src={formData.image}
                  alt="Selected"
                  className="selected-image"
                />
              </div>
            )}
            <button
              type="button"
              onClick={openWidget}
              className="select-image-btn"
            >
              Select Image
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
