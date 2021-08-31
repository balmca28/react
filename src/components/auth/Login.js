import React from 'react';
import Copyright from './Copyright';
import './Login.css';
import Signupholder from './Signupholder';
import Slogan from './Slogan';
const Login = () => {
    return ( 
    <div id="auth-container" className="container-fluid auth_view">
        <div className="row auth_view">
            <div className="col-lg-4 col-md-4 col-sm-12 auth_view_img">
                <Slogan />
            </div>
            
            <div className="col-lg-8 col-md-8 col-sm-12 auth_view_content">
                <Signupholder/>        

<div className="form_main_content">
    <div className="signup_form_holder">
        <div className="title_reg_right">
            Welcome back
        </div>
        <p className="subtitle_reg_right web_show">Enter your credentials below and sign in to your
            account</p>
        <div className="sigin_link_mob mob_show">Don't have an account?
            <a href="http://app.local.sellerx/register" className="login_acc_link">Create Account</a>
        </div>

        
        <form method="POST" action="http://app.local.sellerx/login" accept-charset="UTF-8">
        <div className="form-group ">
                <label className="form-label">Email Address / Store Name</label>
                <input placeholder="Enter your email" className="email_input form-control" name="email" type="email" />
                
            </div>
            <div className="form-group ">
                <label className="form-label">Password</label>
                <input placeholder="Enter your password" id="password_login" name="password" className="form-control" type="password" value="" />
                <div className="show_password"></div>
                
            </div>
            <p className="text-right"><a href="/forgotpassword" className="forgotPass">Forgot
                    your password?</a></p>
            <input className="btn-success btn-block auth-submit-btn btn" type="submit" value="Sign in" />
        </form>
       
        <div className="diveder_line_auth"><span className="diveder_line_auth_text">Or</span></div>
        <a href='' className="sign-in-with-amazon" type="submit" value="">
            <img src="/assets/images/amazon_login_img.png" alt="amazon sign in" / >    
        </a>
        <Copyright />
    </div>
</div>
            </div>
        </div>
    </div>
     );
}
 
export default Login;