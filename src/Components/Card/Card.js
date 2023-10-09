import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Card.css";
import axios from 'axios';

export default function ImgMediaCard({data,search}) {

  // console.log(search);
  // console.log(data);
  // If you want to make a POST request, you can do it here

  function addToCart(product){
    let isLogedIn = sessionStorage.getItem("userId");

    if(isLogedIn)
    {
      addProductToCart(product);
    }
    else
    {
      window.location.href="/login";
    }

  }

  function addProductToCart(product) {
    product["userId"] = sessionStorage.getItem("userId");
    // let user = sessionStorage.getItem("userId");

    if(product)
    {
      
      axios
        .post('http://localhost:8000/cart/', product)
          .then((response) => {
          console.log("POST request successful", response);
          // Redirect or perform any other action as needed
        })
        .catch((error) => {
          // Handle errors from the POST request
          console.error("Error making POST request", error);
        });
        window.location.href="/userCart";
    }
    else
    {
      alert("Error occurred while adding product to the Cart")
    }

  }

  return (
    <div className="cardBody">
      {data &&
        data.filter((item)=>item.title.toLowerCase().includes(search)).map((item)=>{
          return (
            <div style={{ margin: "10px" }}>
            {/* {console.log(search)} */}
            {console.log(item)}

              <Card
                sx={{
                  maxWidth: 300,
                  // margin: "10px !important",
                  // border: "1px solid red",
                  // height: "400px"
                }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  image={item.image}
                  sx={{
                    height: "300px !important",
                    objectFit:"contain",
                    padding: "1rem !important"

                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {/* Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica */}
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" sx={{ border: "1px solid gray" }}>
                    See more
                  </Button>
                  <Button size="small" 
                  sx={{ border: "1px solid gray" }}
                  onClick={( )=> addToCart(item)}
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
