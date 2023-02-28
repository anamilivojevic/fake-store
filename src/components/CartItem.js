function CartItem({ cartItem, onCartRemoveClick, onCartAddClick, quantity }) {
  //const [] = useState(0);

  function handleRemoveFromCart() {
    onCartRemoveClick(cartItem.id);
  }

  function handleAddToCart() {
    onCartAddClick(cartItem.id);
  }

  return (
    <div>
      <div className="row border border-secondary rounded w-md-75 p-3 ps-xs-0 mb-3 mx-sm-2 mx-md-4">
        <div
          className="col-xs-12 col-3 col-md-1 p-0 d-flex justify-content-center"
          style={{ maxHeight: "60px" }}>
          <img
            src={cartItem.image}
            alt={cartItem.title + "image"}
            style={{
              objectFit: "contain",
              maxHeight: "100%",
              maxWidth: "60px",
            }}
          />
        </div>
        <div className="col-xs-12 col-9 col-md-11 ps-md-3">
          <div className="d-flex justify-content-between">
            <div>
              <p className="fw-bold">{cartItem.title}</p>
              <p className="mb-0">{cartItem.price * quantity} &#x20AC;</p>
            </div>

            <div>
              <span>Quantity:</span>
              <div>
                <button
                  className="btn btn-sm btn-success"
                  onClick={handleRemoveFromCart}>
                  -
                </button>
                <span className="mx-2">{quantity}</span>
                <button
                  className="btn btn-sm btn-success"
                  onClick={handleAddToCart}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
