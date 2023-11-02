import React, { useEffect, useState } from "react";
import "./RandomPics.css";
import CategoriesCard from "./CategoriesCard";
import { useNavigate } from "react-router-dom";

const RandomPics = ({ products }) => {

  let navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (products) {
      const uniqueCategories = [
        ...new Set(products.map((item) => item.category)),
      ];
      setCategories(uniqueCategories);
    }
  }, [products]);

  return (
    <div className="randomPicsBody">
      {categories &&
        categories.map((item) => {
          return (
            <div className="randomPicsCardContainer" 
            onClick={() => navigate(`/categories/${item}`)}
            >
              <h3 style={{paddingLeft:'20px'}}>{item}</h3>
              <CategoriesCard category={item} products={products}/>
            </div>
          );
        })}
    </div>
  );
};

export default RandomPics;
