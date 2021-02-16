import React from "react";

import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import CarouselBanner1 from "../../assets/images/carousel-banner-1.png";
import CarouselBanner2 from "../../assets/images/carousel-banner-2.png";
import CarouselBanner3 from "../../assets/images/carousel-banner-3.png";

import {
  Container,
  TextWrapper,
  ViewMoreButton
} from "./styled";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    imgPath: CarouselBanner1,
  },
  {
    imgPath: CarouselBanner2,
  },
  {
    imgPath: CarouselBanner3,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  img: {
    height: 505,
    display: 'block',
    maxWidth: 870,
    overflow: 'hidden',
    width: '100%',
  },
}));

const CarouselBanner = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

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
      <Container>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step.imgPath} alt={step.label} />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <TextWrapper>
          <p>Control and manage any device with cloud solutions</p>
          <p>Improve business performance and the user experience with the right mix of IoT technology and processes</p>
          <ViewMoreButton>VIEW MORE</ViewMoreButton>
          <MobileStepper
            variant="dots"
            steps={3}
            position="absolute"
            activeStep={activeStep}

            nextButton={
              <Button size="small" onClick={handleNext} disabled={activeStep === 2}>
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              </Button>
            }
          />
        
        </TextWrapper>
      </Container>
    );
  };
  
  export default CarouselBanner;