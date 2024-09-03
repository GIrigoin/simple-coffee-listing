const Header = () => {
  return (
    <>
      <section className="mt-2 flex max-w-[32rem] flex-col items-center justify-center bg-heading-bg bg-right-top bg-no-repeat px-9 pt-16">
        <h1 className="text-heading font-semibold text-main-text">
          Our Collection
        </h1>
        <p className="text-center text-body font-medium text-secondary-text">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
      </section>
    </>
  );
};

export default Header;
