import "../styles/iteminfo/iteminfo.css";

const ItemInfo = ({ item, addToCart }) => {
  //console.log(item);
  const description = item.description.replace(/(<([^>]+)>)/gi, "");

  return (
    <div>
      <p>{item.name}</p>
      <img src={item.media.source} alt={item.name} />
      <p>{item.price.formatted_with_symbol}</p>
      <p>{description}</p>
      <button onClick={() => addToCart(item.id, 1)}>Add to Cart</button>
    </div>
  );
};

export default ItemInfo;
