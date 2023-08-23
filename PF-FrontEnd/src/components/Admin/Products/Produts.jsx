import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchActiveProducts, deactivateProduct } from "../../../Redux/actions";
import EditProductModal from "../EditProductForm/EditProductModal"; // Asegúrate de que la ruta sea correcta
import "./products.css"; // Asegúrate de que el archivo de estilos CSS esté correctamente vinculado

const Products = () => {
  const [editProductId, setEditProductId] = useState(null);
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);

  const [visibleProducts, setVisibleProducts] = useState([]);

  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = allProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    dispatch(fetchActiveProducts());
  }, [dispatch]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setVisibleProducts(allProducts.slice(startIndex, endIndex));
  }, [allProducts, currentPage]);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handleDelete = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deactivateProduct(productId));
      setVisibleProducts(
        visibleProducts.filter((product) => product.id !== productId)
      );
    }
  };
  const handleEdit = (productId) => {
    setEditProductId(productId);
    console.log(productId); // Asegúrate de que productId sea el ID numérico del producto
  };
  const handleCloseEditModal = () => {
    setEditProductId(null);
  };

  return (
    <div className="allcontainerProducts">
      <div>
        <h1 className="ml-10 mt-10 text-3xl font-bold">Products</h1>
      </div>
      <div className="products-container">
        {visibleProducts.length === 0 ? (
          <p>No hay productos para mostrar.</p>
        ) : (
          <>
            <table className="products-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {visibleProducts.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>${product.price}</td>
                    <td>
                      <button
                        className="edit-button"
                        onClick={() => handleEdit(product.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => handleDelete(product.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              <button
                className="page-button"
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
              >
                Anterior
              </button>
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  className={`page-button ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              <button
                className="page-button"
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
              >
                Siguiente
              </button>
            </div>
          </>
        )}

        {editProductId !== null && (
          <EditProductModal
            productId={editProductId}
            onClose={handleCloseEditModal}
          />
        )}
      </div>
    </div>
  );
};

export default Products;
