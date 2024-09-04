import starImg from "../assets/Star.svg";
import starFilledImg from "../assets/Star_fill.svg";

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
        <p className="w-12 rounded bg-price-bg py-1 text-center text-price font-bold text-page-bg">
          {info.price}
        </p>
      </section>
      <section className="my-2 flex flex-row justify-between">
        <div className="flex flex-row justify-start">
          {info.votes === 0 ? (
            <img className="mr-1" src={starImg} alt="No Ratings" />
          ) : (
            <img className="mr-1" src={starFilledImg} alt={info.rating} />
          )}
          {info.votes === 0 ? (
            <p className="text-body font-bold text-secondary-text">
              No ratings
            </p>
          ) : (
            <p className="text-body font-bold text-main-text">
              {info.rating}
              <span className="text-secondary-text">{` (${info.votes} votes)`}</span>
            </p>
          )}
        </div>
        {!info.available && (
          <p className="text-label font-bold text-sold-out">Sold out</p>
        )}
      </section>
    </div>
  );
};

export default Card;
