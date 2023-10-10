import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

const Categories = () => {

  return (
    <div className="categoriesBody">
          <Link className="link" to="/categories/Men">
            <div className="categoriesCard" style={{backgroundImage: 'url("https://m.media-amazon.com/images/I/71eUwDk8z+L._AC_UL480_FMwebp_QL65_.jpg")'}}>
              <h1>Mens</h1>
            </div>
          </Link>
          <Link className="link" to="/categories/women">
            <div className="categoriesCard" style={{backgroundImage: 'url("https://m.media-amazon.com/images/G/31/img2020/fashion/Jupiter23ATF/SH/Variant_1_978x1256._SY530_QL85_FMpng_.png")'}}>
              <h1>Womens</h1>
            </div>
            </Link>
            <Link className="link" to="/categories/tv">
            <div className="categoriesCard" style={{backgroundImage: 'url("https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg")'}}>
              <h1>Tv's</h1>
            </div>
            </Link>
            <Link className="link" to="/categories/jewelery">
              <div className="categoriesCard" style={{backgroundImage: 'url("https://m.media-amazon.com/images/I/51M702Sq3AL._AC_UL480_FMwebp_QL65_.jpg")'}}>
                <h1>Jewellery</h1>
              </div>
            </Link>
            <Link className="link" to="/categories/electronics">
            <div className="categoriesCard" style={{backgroundImage: 'url("https://images-eu.ssl-images-amazon.com/images/G/31/Manjula/jupiter2023/newt3/2_PC_QuadCard_372X232_1_6._SY232_CB577454036_.jpg")'}}>
              <h2>Laptops & Accessories</h2>
            </div>
            </Link>
    </div>
  );
};

export default Categories;
