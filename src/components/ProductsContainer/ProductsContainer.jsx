import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard";

export default function ProductsContainer({
  products = [],
  handleAddToCart = () => {},
  handleRemoveFromCart = () => {},
  cart = [],
}) {
  function findCartStatus(product = {}) {
    return cart.some((d) => d.id === product.id); // Use a unique identifier like id
  }

  return (
    <section className="container" id="products-container">
      <div className="container-fluid p-5">
        <div className="row">
          {products.map((data, index) => (
            <ProductCard
              key={`${data.id}-${index}`}
              data={data}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
              isAddedToCart={findCartStatus(data)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

ProductsContainer.propTypes = {
  products: PropTypes.array,
  handleAddToCart: PropTypes.func,
  handleRemoveFromCart: PropTypes.func,
  cart: PropTypes.array,
};
