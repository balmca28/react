
import React,{ useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MicrogoalSteppers from "./MicrogoalStepper";
import { Grid} from "@material-ui/core";
import SideBar from "../SideBar";
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
  const getSteps = () => {
 
    return [
      {
        name: "step1",
        label: "Overview",
        slabel: "Selected Goal Details"
        
      },
      {
        name: "step2",
        label: "Campagins",
        slabel: "Selected Goal Details"
      },
      {
        name: "step3",
        label: "Launch",
        slabel: "Launch Your Goal"
      }
    ];
  };

const Microgoals = (props) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const [activeGrowz, setActiveGrowz] = useState(true);
    return ( 
    
        <div>
          <Grid container spacing={2} justify="center">
      
          
          <Grid item xs={12} sm={2} spacing={2} justify="center">
          <SideBar activeGrowz={activeGrowz}/>

          </Grid>
          <Grid item container direction="column" xs={12} sm={10} spacing={2} >
          <br/>    <br/>    <br/>    <br/>    <br/>   <br/>    <br/>    <br/>    <br/>    <br/>   
          <MicrogoalSteppers
                    steps={steps}
                    activeStep={activeStep}
                    handleNext={handleNext}
                    handleBack={handleBack}
                    handleReset={handleReset}
                    ></MicrogoalSteppers>
      
          </Grid>
        </Grid>
        
       
        </div>
       
     );
}
 
export default Microgoals;