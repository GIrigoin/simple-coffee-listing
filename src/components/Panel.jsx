import Cards from "./Cards";
import Header from "./Header";

const Panel = () => {
  return (
    <div className="flex max-w-[63rem] flex-col items-center justify-start overflow-x-hidden rounded-2xl bg-panel-bg px-9 pb-16 pt-4 md:px-16">
      <Header />
      <Cards />
    </div>
  );
};

export default Panel;
