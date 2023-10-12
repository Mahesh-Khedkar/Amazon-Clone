import React, { useState, useEffect } from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Card.css";
import axios from "axios";

export default function ImgMediaCard({ data, search }) {
  // console.log(search);
  // console.log(data);
  // If you want to make a POST request, you can do it here

  //Get all products from cart of current user---------------------

  const [cartData, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = `http://localhost:8000/cart?userId=${sessionStorage.getItem(
      "userId"
    )}`;

    axios
      .get(apiUrl)
      .then((response) => {
        // Set the data in state
        setData(response.data);
        sessionStorage.setItem("cartLength", response.data.length);
        console.log(response.data);
        setLoading(false);
      })
      .catch((err) => {
        // Handle errors
        setError(err);
        setLoading(false);
      });
  }, []);
  console.log(cartData);

// Authentication of Add product to cart------------

  function addToCart(product) {
    let isLogedIn = sessionStorage.getItem("userId");

    if (isLogedIn) {
      addProductToCart(product);
    } else {
      window.location.href = "/login";
    }
  }

// Add product to cart------------

  function addProductToCart(product) {
    product["userId"] = sessionStorage.getItem("userId");
    // let user = sessionStorage.getItem("userId");

    if (product) {

      cartData.map((item)=>{
        if(item.pId === product.pId)
        {
          axios
          .post("http://localhost:8000/cart/", product)
          .then((response) => {
            console.log("POST request successful", response);
            // Redirect or perform any other action as needed
          })
          .catch((error) => {
            // Handle errors from the POST request
            console.error("Error making POST request", error);
          });
          window.location.href = "/userCart";
        }
        else
        {
          alert("Product already exist in your cart...!");
        }
        return; // Exit the function early
      })
    } 
    else {
      alert("Error occurred while adding product to the Cart");
    }
  }

  return (
    <div className="cardBody">
      {data &&
        data.map((item) => {
          return (
            <div style={{ margin: "10px" }}>
              <Card
                sx={{
                  maxWidth: 300,
                }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  image={item.image}
                  sx={{
                    height: "300px !important",
                    objectFit: "contain",
                    padding: "1rem !important",
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title.slice(0, 30)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description.slice(0, 50) + " ....."}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" sx={{ border: "1px solid gray" }}>
                    See more
                  </Button>
                  <Button
                    size="small"
                    sx={{ border: "1px solid gray" }}
                    onClick={() => addToCart(item)}
                  >
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
    </div>
  );
}
