import React from "react";
import "./ShopByCategories";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Card from "../../Components/Card/Card";
import { useParams } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const ShopByCategories = () => {

  let { categoryName } = useParams();

//Fetch data for specific category
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //For search functionality
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Define the API URL you want to fetch data from
    const apiUrl = `http://localhost:8000/products?q=${categoryName}`;
    // Use Axios to fetch data from the API
    axios
      .get(apiUrl)
      .then((response) => {
        // Set the data in state
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="ShopByCategoriesBody">
      <div>
        <Navbar />
      </div>
      <div className="categoryTag">
        <h1 style={{marginLeft:'30px',color:'orange',textShadow:'1px 1px 0px solid black'}}>{categoryName +"'s "} Collection</h1>
        <Card data={data} categoryName={categoryName}/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ShopByCategories;
