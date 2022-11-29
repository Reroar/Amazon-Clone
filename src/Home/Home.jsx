import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/711egQ1CAmL._SX3000_.jpg"
          alt="home__image"
        />

        <div className="home__row">
          <Product
            id={1}
            title="ASUS Zenbook 13 OLED, 13.3-inch (33.78 cms) FHD OLED, Intel EVO Core i7-1165G7 11th Gen, Thin and Light..."
            price={74990}
            rating={4}
            img="https://m.media-amazon.com/images/I/7136Z-mu+JL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product 
            id={2}
            title="Samsung 138 cm (55 inches) Crystal 4K Neo Series Ultra HD Smart LED TV UA55AUE65AKXXL (Black)..."
            price={47990}
            rating={4}
            img="https://m.media-amazon.com/images/I/71RhIMc2TBL._SX679_.jpg"
          />
          <Product />
        </div>

        <div className="home__row">
          <Product />
          <Product />
        </div>

        <div className="home__row">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
