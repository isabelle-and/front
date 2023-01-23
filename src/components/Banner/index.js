import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import "./styles.scss";
import { Button } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    title: 'Queima de estoque NIKE' +String.fromCodePoint('0x1F525'),
    description: 'bla bla bla',
    actionButton: 'Saiba mais',
    image:
      'https://cdnv2.moovin.com.br/belinhacalcados/imagens/produtos/det/tenis-nike-943306-404-revolution-4-gs-b1d89c98bebca22f99f63506292fa35d.png',
  },
  {
    title: 'Ultimas unidades NIKE',
    description: 'bla bla bla',
    actionButton: 'Saiba mais',
    image:
      'https://w7.pngwing.com/pngs/291/406/png-transparent-nike-air-max-97-air-force-1-sneakers-nike-white-outdoor-shoe-sneakers.png',
  },
  {
    title: 'Promoção NIKE',
    description: 'bla bla bla',
    actionButton: 'Saiba mais',
    image:
      'https://e7.pngegg.com/pngimages/342/654/png-clipart-air-jordan-nike-air-max-sneakers-quai-54-nike-white-orange.png',
  },
  {
    title: 'Adidas em promoção',
    description: 'bla bla bla',
    actionButton: 'Saiba mais',
    image:
      'https://www.pngall.com/wp-content/uploads/2/White-Sneakers-PNG-Clipart.png',
  },
];

export default function Banner() {
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
    <Box sx={{ flexGrow: 1 }}>
      
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.title}>
            {Math.abs(activeStep - index) <= 2 ? (
              <section className="carousel">
                <div>
                    <h1>{step.title}</h1>
                    <p>{step.description}</p>

                    <Button color="primary" variant="contained">
                        {step.actionButton}
                    </Button>
                </div>
                <div>
                    <img src={step.image}/>
                </div>
              </section>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        style={{justifyContent: 'center'}}
      />
    </Box>
  );
}

