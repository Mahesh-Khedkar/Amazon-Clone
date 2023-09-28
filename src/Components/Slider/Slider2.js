import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
    'https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/v2/KSD_PC_Hero_EN_2X._CB576823215_.jpg',
  },
  {
    label: 'Bird',
    imgPath:
    'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/vinambia/KSDN55v2/D98490209_WLD---Jupiter23--realmeNarzoN55----Design-SIM_cricket-fever_DesktopTallHero_3000x1200_BAU._CB576817822_.jpg',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
    'https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Builders/PC_Hero/3000x1200_Builders_V2._CB578740120_.jpg',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
    'https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/BRANDCAMPAIGN/PC/XCM-Sep-PC_Hero_3000x1200._CB578347354_.jpg',
  },
  {
    label: 'Goč1, Serbia',
    imgPath:
    'https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/Homepage_DesktopHeroTemplate_3000x1200v3._CB592770274_.jpg',
  },
  {
    label: 'Goč2, Serbia',
    imgPath:
    'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Grocery/BreakfastStore/Sept/Tallhero_1_2x._CB578784568_.jpg',
  },
  {
    label: 'Goč3, Serbia',
    imgPath:
    'https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/July2023/Monsoongd/September/GW/hero-Pc-Rec_3000x1200._CB576951536_.jpg',
  },
  {
    label: 'Goč4, Serbia',
    imgPath:
    'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Madhav/september/Nokia/Sale/D95803781-_Desktop_3000x1200._CB577853410_.jpg',
  },
];

function Slider2() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
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

  return (
    <Box sx={{ width: '100%', flexGrow: 1, border: '1px solid black', }}>

      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
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
                  height: '90%',
                  display: 'block',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
}

export default Slider2;