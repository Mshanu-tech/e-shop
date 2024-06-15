import * as React from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';



export default function DotsMobileStepper() {

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
    <h1>heloo</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis praesentium explicabo neque nisi. Reprehenderit nostrum quos quam ad sed, sit fugit commodi minus, laborum, harum dolorem sapiente doloribus libero recusandae.</p>
    </>
  );
}
