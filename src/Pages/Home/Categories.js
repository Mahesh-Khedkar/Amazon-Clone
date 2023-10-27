import React from "react";
import "./Categories.css";
import { Link, useNavigate } from "react-router-dom";

const Categories = () => {

  let navigate = useNavigate();
  return (
    <div className="categoriesBody">
      
        {/* <div className="categoriesCard" style={{backgroundImage: 'url("https://m.media-amazon.com/images/I/71eUwDk8z+L._AC_UL480_FMwebp_QL65_.jpg")'}}> */}
        <div className="categoriesCard" onClick={()=> navigate('/categories/men')}>
          <img src="https://m.media-amazon.com/images/I/71eUwDk8z+L._AC_UL480_FMwebp_QL65_.jpg" />
          <p>Mens</p>
        </div>
      
      
        {/* <div className="categoriesCard" style={{backgroundImage: 'url("https://m.media-amazon.com/images/G/31/img2020/fashion/Jupiter23ATF/SH/Variant_1_978x1256._SY530_QL85_FMpng_.png")'}}> */}
        <div className="categoriesCard" onClick={()=>navigate('/categories/women')}>
          <img src="https://images.meesho.com/images/products/300368241/l2fvs_400.webp" />
          <p>Womens</p>
        </div>
        {/* <div className="categoriesCard" style={{backgroundImage: 'url("https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg")'}}>
        <div className="categoriesCard" onClick={()=>navigate('/categories/tv')}>
          <img src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" />
          <p>Tv's</p>
        </div> */}
        {/* <div className="categoriesCard" style={{backgroundImage: 'url("https://m.media-amazon.com/images/I/51M702Sq3AL._AC_UL480_FMwebp_QL65_.jpg")'}}> */}
        <div className="categoriesCard" onClick={()=>navigate('/categories/jewelery')}>
          <img src="https://m.media-amazon.com/images/I/51M702Sq3AL._AC_UL480_FMwebp_QL65_.jpg" />
          <p>Jewellery</p>
        </div>
        {/* <div className="categoriesCard" style={{backgroundImage: 'url("https://images-eu.ssl-images-amazon.com/images/G/31/Manjula/jupiter2023/newt3/2_PC_QuadCard_372X232_1_6._SY232_CB577454036_.jpg")'}}> */}
        <div className="categoriesCard" onClick={()=>navigate('/categories/electronics')}>
          <img height="50%" src="https://m.media-amazon.com/images/I/41-QPp54D6L._MCnd_AC_.jpg" />
          <p>Electronics & Accessories</p>
        </div>
    </div>
  );
};

export default Categories;
