import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Slider2 = () => {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  ////////////////////////
  useEffect(() => {
    // Automatically change the active step after 3 seconds
    const intervalId = setInterval(() => {
      handleNext();
    }, 10000);

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, [activeStep]);

  ///////////////////////

  useEffect(() => {
    // Define the API URL you want to fetch data from
    const apiUrl = "http://localhost:8000/offers";
    // Use Axios to fetch data from the API
    axios
      .get(apiUrl)
      .then((response) => {
        // Set the data in state
        setImages(response.data);
        setLoading(false);
      })
      .catch((err) => {
        // Handle errors
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="cardSection">
      <Box
        sx={{
          width: "100%",
          flexGrow: 1,
          // border: "1px solid black",
          position: "relative", // Add this line
        }}
      >
        {loading ? (
          <Loader />
        ) : (
          <>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: "90%",
                        display: "block",
                        overflow: "hidden",
                        width: "100%",
                        // border: "1px solid red"
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            {/* <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                </Button>
              }
            /> */}
          </>
        )}
      </Box>
    </div>
  );
};

export default Slider2;
