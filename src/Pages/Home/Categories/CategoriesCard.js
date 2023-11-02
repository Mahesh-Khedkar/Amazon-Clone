import React from "react";
import './CategoriesCard.css';

const CategoriesCard = ({ category, products }) => {

  return (
    <div className="cards">
      {products &&
        products
          .filter((item) => {
            const itemCategory = item.category.toLowerCase();
            const categoryToMatch = category.toLowerCase();
            const includesCategory = itemCategory.includes(categoryToMatch);
            return includesCategory;
          })
          .slice(0, 4)
          .map((item) => {
            return (
              <div className="randomPicsCard">
                <img src={item.image}/>
              </div>
            );
          })}
    </div>
  );
};

export default CategoriesCard;
