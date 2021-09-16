import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import { Grid} from "@material-ui/core";
import MicrogoalStep1 from "./MicrogoalStep1";
import MicrogoalStep2 from "./MicrogoalStep2";
import MicrogoalStep3 from "./MicrogoalStep3";
const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%"
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    actionsContainer: {
      marginBottom: theme.spacing(2)
    },
    resetContainer: {
      padding: theme.spacing(3)
    }
  }));

const MicrogoalSteppers = (props) => {
    const classes = useStyles();

  const {
    steps,
    activeStep,
    handleNext,
    handleBack,
    handleReset
    // handleSubmit
  } = props;
 // console.log(activeStep)
    return ( 
      <>
    <Grid container spacing={2} justify="center">
      
       
      <Grid item xs={12} sm={3} spacing={2} justify="center">
      <div className={classes.root}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
              <StepLabel>{step.label}< br/>{step.slabel}</StepLabel>
               </Step>
            ))}
          </Stepper>
          </div>
        </Grid>
      <Grid item container direction="column" xs={12} sm={9} spacing={2}>
                {(() => {
              if (activeStep ===0) {
                return (
                 
                  <div>
                    
                     <MicrogoalStep1/>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                )
              } else if (activeStep ===1) {
                return (
                  <div>
                  <MicrogoalStep2/>
                   <Button
                     disabled={activeStep === 0}
                     onClick={handleBack}
                     className={classes.button}
                   >
                     Back
                   </Button>
                   <Button
                     variant="contained"
                     color="primary"
                     onClick={handleNext}
                     className={classes.button}
                   >
                     {activeStep === steps.length - 1 ? "Finish" : "Next"}
                   </Button>
                 </div>
                )
              } else {
                return (
                  <div>
                  <MicrogoalStep3/>
                   <Button
                     disabled={activeStep === 0}
                     onClick={handleBack}
                     className={classes.button}
                   >
                     Back
                   </Button>
                   <Button
                    disabled={activeStep === 3}
                     variant="contained"
                     color="primary"
                     onClick={handleNext}
                     className={classes.button}
                   >
                     {activeStep === steps.length - 1 ? "NEXT" : "Finish"}
                   </Button>
                 </div>
                )
              }
            })()}


          </Grid>
      
    </Grid>
        
      </>
     );
}
 
export default MicrogoalSteppers;