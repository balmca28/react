import Copyright from "./Copyright"
import Slogan from "./Slogan";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import './Login.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Signinholder from "./Signinholder";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
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

const Register = () => {
    const classes = useStyles();
    return (
        <Grid container component="main" className={classes.root} >

            <Grid xs={4} className="auth_view_img">
                <Slogan />
            </Grid>
            <Grid xs={8}  >
                <Signinholder />
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h5">
                        Create Your Free Account
                    </Typography>
                    <p className="subtitle_reg_right web_show">SellerGeni is free for first 45 days</p>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="storeName"
                            label="Enter Your Store name"
                            name="storeName"
                            autoComplete="StoreName"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Enter Your Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="mobile"
                            label="Enter your Mobile number"
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
                            label="Enter Your Password"
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
                            label="Enter Your Confirm Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="I have read and agree to the SellerGeni's Terms and Privacy,"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Allow us to send updates related to your account, Performance reports etc.."
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Create Account
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

export default Register;