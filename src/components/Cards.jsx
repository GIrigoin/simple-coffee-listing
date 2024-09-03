import Card from "./Card";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Cards = () => {
  const [coffeeList, setCofeeList] = useState([]);
  const [displayList, setDisplayList] = useState([]);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    const getList = async () => {
      const URL =
        "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";
      try {
        const { data } = await axios(URL);
        setCofeeList(data);
        setDisplayList(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getList();
  }, []);

  useEffect(() => {
    if (filter) {
      const filteredList = coffeeList.filter((item) => item.available);
      setDisplayList((prev) => filteredList);
    } else setDisplayList(coffeeList);
  }, [filter]);

  const handleFilterChange = (event) => {
    console.log(event.target.name);
    const { value } = event.target;
    value === "Available" ? setFilter(true) : setFilter(false);
  };

  return (
    <div className="flex w-full flex-col items-center">
      <section className="my-6">
        <label className="mx-2" htmlFor="all">
          <input
            className="peer/all appearance-none"
            type="radio"
            name="filter"
            value="All"
            id="all"
            onChange={handleFilterChange}
            checked={!filter}
          />
          <span className="px-4 py-2 text-label font-semibold text-main-text peer-checked/all:rounded-lg peer-checked/all:bg-secondary-text">
            All Products
          </span>
        </label>
        <label className="mx-2" htmlFor="available">
          <input
            className="peer/available appearance-none"
            type="radio"
            name="filter"
            value="Available"
            id="available"
            onChange={handleFilterChange}
            checked={filter}
          />
          <span className="px-4 py-2 text-label font-semibold text-main-text peer-checked/available:rounded-lg peer-checked/available:bg-secondary-text">
            Available Now
          </span>
        </label>
      </section>
      <section className="flex flex-row flex-wrap justify-start align-top">
        {displayList.length > 0 ? (
          displayList.map((element) => {
            return <Card key={element.id} info={{ ...element }} />;
          })
        ) : (
          <div>Loading</div>
        )}
      </section>
    </div>
  );
};

export default Cards;
