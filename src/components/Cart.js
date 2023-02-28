import CartItemList from "./CartItemList";

const Cart = ({
  cartItems,
  onCartRemoveClick,
  onCartAddClick,
  numItemsInCart,
}) => {
  const numItemsText =
    numItemsInCart > 0 ? (
      <h6>
        You have {numItemsInCart} item{numItemsInCart > 1 ? "s" : ""} in the
        cart
      </h6>
    ) : (
      <h6>The cart is empty. Return to home to add items to cart.</h6>
    );

  function calcTotalPrice() {
    let total = 0;
    for (let id in cartItems) {
      total += cartItems[id].item.price * cartItems[id].quantity;
    }
    return total;
  }

  return (
    <div className="container">
      <h2 className="my-4">Cart</h2>
      <>{numItemsText}</>
      <div id="cart-item-section">
        <CartItemList
          cartItems={cartItems}
          onCartRemoveClick={onCartRemoveClick}
          onCartAddClick={onCartAddClick}
        />
      </div>
      {numItemsInCart > 0 && (
        <div className="d-flex justify-content-end">
          <p>Total price: {calcTotalPrice().toFixed(2)} &#x20AC;</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
