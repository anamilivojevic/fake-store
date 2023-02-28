import ItemList from "./components/ItemList";
import { getProducts } from "./api";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [numItemsInCart, setNumItemsInCart] = useState(0);

  function addItemToCart(newItem) {
    const key = newItem.id;
    if (key in cartItems) {
      cartItems[key].quantity++;
    } else {
      cartItems[key] = {
        item: { ...newItem },
        quantity: 1,
      };
    }
    setCartItems(cartItems);
    setNumItemsInCart(numItemsInCart + 1);
    console.log(cartItems);
  }

  function addAnotherItemToCart(key) {
    console.log("Adding another item to cart" + key);
    if (key in cartItems) {
      cartItems[key].quantity++;
    }
    setCartItems(cartItems);
    setNumItemsInCart(numItemsInCart + 1);
    console.log(cartItems);
  }

  function removeItemFromCart(key) {
    console.log("Removing item from cart" + key);
    if (key in cartItems) {
      cartItems[key].quantity--;
    }
    if (cartItems[key].quantity === 0) {
      delete cartItems[key];
    }
    
    setCartItems(cartItems);
    setNumItemsInCart(numItemsInCart - 1);
    console.log(cartItems);
  }

  function toggleCartSection() {
    setCartOpen(!cartOpen);
  }

  const loadData = async () => {
    const result = await getProducts();
    setData(result);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container justify-content-between">
            <a className="navbar-brand" href="index.html">
              Fake Store
            </a>
            {!cartOpen ? (
              <button className="btn btn-success" onClick={toggleCartSection}>
                <i className="fa fa-shopping-cart"></i>
                &nbsp;&nbsp;Cart&nbsp;&nbsp;
                <span className="badge bg-light text-dark rounded-pill">
                  {numItemsInCart}
                </span>
              </button>
            ) : (
              <button className="btn btn-warning" onClick={toggleCartSection}>
                <i className="fa fa-home"></i>&nbsp;&nbsp;Back to home
              </button>
            )}
          </div>
        </nav>
      </header>
      <main>
        {!cartOpen ? (
          <ItemList items={data} onAddToCart={addItemToCart} />
        ) : (
          <Cart
            cartItems={cartItems}
            onCartRemoveClick={removeItemFromCart}
            onCartAddClick={addAnotherItemToCart}
            numItemsInCart={numItemsInCart}
          />
        )}
      </main>
      <footer className="bg-dark text-light text-center mt-auto">
        <div className="p-3">
          <p className="m-0">Contact us for any suggestions</p>
        </div>
      </footer>
    </>
  );
}

export default App;
