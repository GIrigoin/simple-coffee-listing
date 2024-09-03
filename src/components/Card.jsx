const Card = ({ info }) => {
  return (
    <div className="relative mx-4 mb-12 w-[16.25rem]">
      {info.popular && (
        <p className="absolute left-1 top-2 mx-2 w-16 rounded-full bg-popular-bg py-1 text-center text-small font-semibold text-page-bg">
          Popular
        </p>
      )}
      <img className="mb-2 rounded-lg" src={info.image} alt={info.name} />
      <section className="flex flex-row justify-between">
        <p className="text-body font-bold text-main-text">{info.name}</p>
        <p>{info.price}</p>
      </section>
      <section>
        <div></div>
        {!info.available && <p>Sold out</p>}
      </section>
    </div>
  );
};

export default Card;
