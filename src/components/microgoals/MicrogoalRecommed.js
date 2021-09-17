import SideBar from "../SideBar";
import { Button, Grid } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = (muiBaseTheme) => ({
    card: {
        maxWidth: 500,
        margin:"25px",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        borderRadius: "10px",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
    },
    media: {
        paddingTop: "100%"
    },
    content: {
        textAlign: "left",
        color: "blue",
        padding: muiBaseTheme.spacing.unit * 3
    },
    heading: {
        fontWeight: "bold"
    },
    subheading: {
        lineHeight: 1.8
    }
});
function CardShow({ classes }) {
    return (
        <div>

            <Grid container spacing={2} justify="center">


                <Grid item xs={12} sm={2} spacing={2} justify="center">
                    <SideBar />

                </Grid>
                <Grid item container direction="row" xs={12} sm={10} spacing={2} >
                    <br />    <br />    <br />    <br />    <br />   <br />    <br />    <br />    <br />    <br />
                    <Grid item container xs={12} sm={12} spacing={2} justify="center">
                    <h1>Headline</h1>
                    
                    </Grid>
                    <Grid item container xs={12} sm={12} spacing={2} justify="left">
                    <h3>Recommented Goals for You</h3>
                    </Grid>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image={
                                "https://i.pinimg.com/originals/61/f9/62/61f962ee16a7b537efa701d3863ee1fc.jpg"
                            }
                        />
                        <CardContent className={classes.content}>
                            <Typography className={"heading"} variant={"h4"} gutterBottom>
                            text Data
                            </Typography>
                            <Typography className={"subheading"} variant={"h6"}>
                            text Data
                            </Typography>
                          
                        </CardContent>
                        <Button variant="contained" color="primary">Button</Button>
                    </Card>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image={
                                "https://i.pinimg.com/originals/61/f9/62/61f962ee16a7b537efa701d3863ee1fc.jpg"
                            }
                        />
                        <CardContent className={classes.content}>
                            <Typography className={"heading"} variant={"h4"} gutterBottom>
                               text Data
                            </Typography>
                            <Typography className={"subheading"} variant={"h6"}>
                            text Data
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </div>);
}
const MicrogoalRecommed = withStyles(styles)(CardShow);

export default MicrogoalRecommed;