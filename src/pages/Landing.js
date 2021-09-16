import ItemInfo from "../components/ItemInfo";

const Landing = ({ clothing, addToCart }) => {
  return (
    <main className="landing-main">
      <h1>THIS IS HOME</h1>
      {clothing.map((item) => (
        <ItemInfo key={item.id} item={item} addToCart={addToCart} />
      ))}
    </main>
  );
};

export default Landing;
