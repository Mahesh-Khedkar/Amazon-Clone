import React from "react";
import "./Search.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import SearchCard from "./SearchCard/SearchCard";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Search = ({ products }) => {
  let { name } = useParams();

  let [searchData, setSearchData] = useState([]);

  useEffect(() => {
    // Filter the products based on the search query (name)
    const filteredData = products.filter((item) =>
      item.title.toLowerCase().includes(name.toLowerCase())
    );
    setSearchData(filteredData);
  }, [name, products]);

  return (
    <div className="searchBody">
      <div>
        <Navbar />
      </div>
      <div className="searchContent">
        <div className="searchContentSortBar">
          <div>
            <p>1-48 of over 40,000 results for "shoes"</p>
          </div>
          <div>
            <select>
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Avg. Customer Review</option>
              <option>Newest Arrivals</option>
            </select>
          </div>
        </div>
        <div className="searchContentContainers">
          <div className="filters">
            <div className="Delivery">
              <p>
                <b>Delivery Day</b>
              </p>
              <p>
                <input type="checkbox"/>
                Get It Today
              </p>
              <p>
                <input type="checkbox"/>
                Get It Tomorrow
              </p>
              <p>
                <input type="checkbox"/>
                Get It in 2 Days
              </p>
            </div>
            <div className="Delivery">
              <p>
                <b>Category</b>
              </p>
              <p>Shoes</p>
              <div style={{paddingLeft:'10px'}}>
                <p>Men's Running Shoes</p>
                <p>Men's Sneakers</p>
                <p>Men's Walking Shoes</p>
                <p>Women's Running Shoes</p>
                <p>Women's Sneakers</p>
                <p>Men's Formal Shoes</p>
                <p>Boys' Sports & Outdoor Shoes</p>
                <p>Girls' Sports & Outdoor Shoes</p>
                <p>Men's Sports & Outdoor Shoes</p>
                <p>Women's Sports & Outdoor Shoes</p>
                <p>Men's Shoes</p>
              </div>
              <div>

              </div>
            </div>
            <div className="Delivery">
              <p>
                <b>Customer Review</b>
              </p>
              <p>⭐⭐⭐⭐ & Up</p>              
              <p>⭐⭐⭐& Up</p>
              <p>⭐⭐& Up</p>
              <p>⭐& Up</p>
            </div>
            <div className="Delivery">
              <p>
                <b>Brand</b>
              </p> 
              <p>
                <input type="checkbox"/>
                Puma
              </p>          
              <p>
                <input type="checkbox"/>
                Campus
              </p>
              <p>
                <input type="checkbox"/>
                Sparx
              </p>
              <p>
                <input type="checkbox"/>
                Asian
              </p>
              <p>
                <input type="checkbox"/>
                Adidas
              </p>
              <p>
                <input type="checkbox"/>
                Red Tape
              </p>
              <p>
                <input type="checkbox"/>
                Reebok
              </p>
              <p style={{textAlign:'laft',color:'rgb(63, 101, 101)'}}><ArrowDropDownIcon/> See more</p>
            </div>
            <div className="Delivery">
              <p>
                <b>Price</b>
              </p>   
              <p>Under ₹500</p>  
              <p>₹500 - ₹1000</p>          
              <p>₹1000 - ₹2500</p>          
              <p>₹2500 - ₹5000</p> 
              <p>Over ₹5000</p>                   
            </div>
          </div>
          <div className="searchedCards">
            <SearchCard data={searchData} />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Search;
