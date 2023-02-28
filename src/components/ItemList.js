import Item from "./Item";

const ItemList = ({ items, onAddToCart }) => {
  return (
    <div>
      <h2 className="text-center my-3">Our products</h2>
      <div className="container">
        <div className="row align-items-stretch">
          {items.map((item, i) => {
            return <Item item={item} key={i} onAddToCart={onAddToCart} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
