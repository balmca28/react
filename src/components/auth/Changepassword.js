import Copyright from "./Copyright"
import Slogan from "./Slogan";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import './Login.css';
import { makeStyles } from '@material-ui/core/styles';
import Signupholder from './Signupholder';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    slogancolor: {
        backgroundColor: '#5533FF',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },

    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#5cb85c"
    }
}));
const Changepassword = () => {
    const classes = useStyles();
    return (
        <Grid container component="main" className={classes.root} >

            <Grid xs={4} className="auth_view_img">
                <Slogan />
            </Grid>
            <Grid xs={8}  >
                <Signupholder />
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h5">
                        Change Your Password
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Confirmpassword"
                            label="Confirm Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Reset password
                        </Button>



                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </Container>
            </Grid>
        </Grid>
    );
}

export default Changepassword;