import Cards from "./Cards";

const Panel = () => {
  return (
    <div className="w-[63rem] bg-panel-bg">
      <section>
        <h1>Our Collection</h1>
        <p>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <section>
          <label htmlFor="">
            <input type="radio" name="" id="" />
            All Products
          </label>
          <label htmlFor="">
            <input type="radio" name="" id="" />
            Available Now
          </label>
        </section>
      </section>
      <Cards />
    </div>
  );
};

export default Panel;
