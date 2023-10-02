import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import './Card.css';


export default function ImgMediaCard(data) {

  return (
    <div className="cardBody">
      {data.data &&
        data.data.map((item) => {
          return (
            <div style={{margin:'10px'}}>
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
                  // maxWidth: 345,
                  // margin: "10px !important",
                  // border: "1px solid red",
                  height:'300px'
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
                  <Button size="small" sx={{border:'1px solid gray'}}>
                    See more
                  </Button>
                  <Button size="small" sx={{border:'1px solid gray'}}>
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
