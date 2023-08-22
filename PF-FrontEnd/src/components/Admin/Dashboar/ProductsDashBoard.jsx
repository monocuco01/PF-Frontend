import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../../../Redux/actions";

const ProductsDashBoard = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);

  const visibleProducts = allProducts.slice(0, 4); // Mostrar solo los primeros 4 productos

  const handleDelete = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProduct(productId));
    }
  };

  return (
    <div className="allcontainerProducts">
      <div className="products-containers">
        <table className="products-table">
          <thead >
            <tr > 
              <th >ID</th>
              <th>Nombre</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {visibleProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>${product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsDashBoard;
