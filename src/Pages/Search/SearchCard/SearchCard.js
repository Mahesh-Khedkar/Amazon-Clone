import React, { useState, useEffect } from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../../../Components/Card/Card.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './SearchCard.css';

const SearchCard = ({data}) => {

    let navigate = useNavigate();

// Get all products from the cart of the current user
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = `http://localhost:8000/cart?userId=${sessionStorage.getItem(
      "userId"
    )}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setCartData(response.data);
        sessionStorage.setItem("cartLength", response.data.length);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);


  // Function to add a product to the cart
  function addToCart(product) {
    product["quantity"] = 1;
    const isLoggedIn = sessionStorage.getItem("userId");

    if (isLoggedIn) {
      // Check if the product is already in the cart
      const isProductInCart = cartData.some((item) => item.pId === product.pId);

      if (isProductInCart) {
        alert("Product already exists in your cart...!");
        window.location.href = "/shoppingCart";
      }
       else 
       {
        product.userId = sessionStorage.getItem("userId");
        axios
          .post("http://localhost:8000/cart/", product)
          .then((response) => {
            console.log("POST request successful", response);
            // Redirect or perform any other action as needed
            window.location.href = "/shoppingCart";
          })
          .catch((error) => {
            console.error("Error making POST request", error);
          });
      }
    } else {
      window.location.href = "/login";
    }
  }


  return (
    <div className="cardBody">
      {data &&
        data.map((item) => {
          return (
            <div style={{ margin: "10px" }} key={item.pId}>
              <Card
                className='Card'
                sx={{
                  // maxWidth: 300,
                  // height: "450px",
                  // border: "1px solid red"
                }}
              >
                <CardMedia
                  className='CardMedia'
                  component="img"
                  alt="green iguana"
                  image={item.image}
                  sx={{
                    // height: "230px !important",
                    objectFit: "contain",
                    // padding: "1rem !important",
                    // cursor: "pointer",
                    // border: "1px solid red"
                  }}
                  onClick={()=>navigate('/productdetails',{state : {item}})}
                />
                <CardContent className='CardContent' onClick={()=>navigate('/productdetails',{state : {item}})}>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title.slice(0, 18)}
                  </Typography>
                  <Typography className='CardContent' variant="body2" color="text.secondary">
                    {item.description.slice(0, 50) + " ....."}
                  </Typography>
                </CardContent>
                <Typography sx={{marginLeft:'20px'}} gutterBottom variant="h5" component="div">
                    ₹{item.price}
                  </Typography>
                <CardActions className='cardActions'>
                  {/* <Button size="small" sx={{ border: "1px solid gray" }}>
                    See more
                  </Button> */}
                  <button className='addToCartBtn'
                    size="small"
                    onClick={() => addToCart(item)}
                  >
                    Add to cart
                  </button>
                </CardActions>
              </Card>
            </div>
          );
        })}
    </div>
  )
}

export default SearchCard
