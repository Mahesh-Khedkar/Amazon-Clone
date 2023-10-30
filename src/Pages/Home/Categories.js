import React from "react";
import "./Categories.css";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  let navigate = useNavigate();
  return (
    <div className="categoriesBody">
    
      <div className="forDesktopView">
        <div
          className="categoriesCard"
          onClick={() => navigate("/categories/men")}
        >
          <img src="https://m.media-amazon.com/images/I/71eUwDk8z+L._AC_UL480_FMwebp_QL65_.jpg" />
          <p>Mens</p>
        </div>

        <div
          className="categoriesCard"
          onClick={() => navigate("/categories/women")}
        >
          <img src="https://images.meesho.com/images/products/300368241/l2fvs_400.webp" />
          <p>Womens</p>
        </div>

        <div
          className="categoriesCard"
          onClick={() => navigate("/categories/jewelery")}
        >
          <img src="https://m.media-amazon.com/images/I/51M702Sq3AL._AC_UL480_FMwebp_QL65_.jpg" />
          <p>Jewellery</p>
        </div>

        <div
          className="categoriesCard"
          onClick={() => navigate("/categories/electronics")}
        >
          <img
            height="50%"
            src="https://m.media-amazon.com/images/I/41-QPp54D6L._MCnd_AC_.jpg"
          />
          <p>Electronics & Accessories</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
