import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
    box: {
      height: 100,
      display: "flex",
      border: "1px solid black",
      padding: 8
    },
    topLeftBox: {
      justifyContent: "flex-start",
      alignItems: "flex-start"
    },
    centerBox: {
      justifyContent: "center",
      alignItems: "center"
    },
    bottomRightBox: {
      justifyContent: "flex-end",
      alignItems: "flex-end"
    },
    spreadBox: {
      justifyContent: "space-between",
      alignItems: "center"
    }
  }));

  const MicrogoalStep1 = () => {
    const classes = useStyles();
    return ( 
        <div>
        <h1>Microgoals Step1</h1>
        <Box
        component="span"
        m={1} //margin
        className={`${classes.topLeftBox} ${classes.box}`} >
        
      </Box> </div>
     );
}
 
export default MicrogoalStep1;