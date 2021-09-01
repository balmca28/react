import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Copyright from './Copyright';
import './Login.css';
import Signupholder from './Signupholder';
import Slogan from './Slogan';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
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
        backgroundColor:"#5cb85c"
    }
}));
const Login = () => {

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
                    Welcome back
                    </Typography>
                    <p>Enter your credentials below and sign in to your account</p>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address / Store Name"
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
                        <Grid container>
                            <Grid item xs>
                               
                            </Grid>
                            <Grid item>
                            <Link href="/forgotpassword" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        

                        <div className="diveder_line_auth"><span className="diveder_line_auth_text">Or</span></div>
                        <Grid container justifyContent="center">
                            <Link href="#">
                                <img src="/assets/images/amazon_login_img.png" alt="amazon sign in" />
                            </Link>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </Container>
            </Grid>




        </Grid>
    );
}

export default Login;