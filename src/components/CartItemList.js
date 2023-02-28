import CartItem from "./CartItem";

function CartItemList({ cartItems, onCartRemoveClick, onCartAddClick }) {
  return (
    <div>
      {Object.entries(cartItems).map((kv, i) => {
        return (
          <CartItem
            cartItem={kv[1].item}
            key={i}
            onCartRemoveClick={onCartRemoveClick}
            onCartAddClick={onCartAddClick}
            quantity={kv[1].quantity}
          />
        );
      })}
    </div>
  );
}

export default CartItemList;
