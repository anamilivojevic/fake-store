import { useState } from "react";
import "./item.css";

const Item = ({ item, onAddToCart }) => {
  const [numItemsInCart, setNumItemsInCart] = useState(0);

  function handleAddToCartButton() {
    console.log("Adding to cart from Item");
    setNumItemsInCart(numItemsInCart + 1);
    onAddToCart(item);
  }
  return (
    <div className="col-12 col-md-4 col-lg-3 mb-4">
      <div className="card h-100">
        <div className="p-3">
          <img
            src={item.image}
            className="card-img-top"
            alt={item.title + "image"}
          />
        </div>
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h6 className="card-title">{item.title}</h6>
            <p className="card-text ">
              {item.description.length > 120
                ? item.description.slice(0, 120) + "..."
                : item.description}
            </p>
          </div>
          <div className="mt-3">
            <p className="text-muted">{item.price} &#x20AC;</p>
            {numItemsInCart > 0 && <p>{numItemsInCart} in cart</p>}
            <button className="btn btn-success" onClick={handleAddToCartButton}>
              <i className="fa fa-shopping-cart"></i>&nbsp;&nbsp;Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
