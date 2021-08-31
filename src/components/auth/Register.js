import Copyright from "./Copyright"
import Signupholder from "./Signupholder"
import Slogan from "./Slogan"

const Register = () => {
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
                                Create Your Free Account
                            </div>
                            <p className="subtitle_reg_right web_show">SellerGeni is free for first 45 days</p>
                            <div className="sigin_link_mob mob_show">Already a member?
                                <a href="https://app.sellergeni.com/login" className="login_acc_link">Sign in</a>
                            </div>
                    
                            
                            <form method="POST" action="https://app.sellergeni.com/register" accept-charset="UTF-8">
                             
                            <div className="form-group ">
                                <label className="form-label">Store Name</label>
                                <input placeholder="Enter your store name" className="store_name_input form-control" name="store_name" type="text" />
                                
                            </div>
                            <div className="form-group ">
                                <label className="form-label">Email</label>
                                <input placeholder="Enter your email" className="email_input form-control" name="email" type="email" />
                                
                            </div>
                            <div className="form-group ">
                                <label className="form-label">Mobile</label>
                                <input placeholder="Enter your mobile number" className="number_input form-control" name="mobile" type="text" />
                                
                            </div>
                            <div className="form-group ">
                                <label className="form-label">Password</label>
                                <input placeholder="Enter your password" className="pass_input form-control" name="password" type="password" value="" />
                                
                            </div>
                            <div className="form-group ">
                                <label className="form-label">Confirm Password</label>
                                <input placeholder="Confirm password" className="pass_input form-control" name="password_confirmation" type="password" value="" />
                                
                            </div>
                            <div className="form-group ">
                                  <input id="user_agreeterms" className="checkbox_agreeterms" name="terms" type="checkbox" value="1" />
                                    <label for="user_agreeterms" className="user_agreeterms_label">
                                        I have read and agree to the SellerGeni's <a target="_blank" href="https://sellergeni.com/terms-and-privacy">Terms &amp; Privacy</a>,
                                    </label>
                                  
                            </div>
                            <div className="form-group ">
                                  <input id="user_agreepromotionals" className="checkbox_agreepromotionals" name="promotionals" type="checkbox" value="1" />
                                    <label for="user_agreepromotionals" className="user_agreepromotionals_label">
                                        Allow us to send updates related to your account, Performance reports etc..
                                    </label>
                                  
                            </div>
                            <input className="btn-success btn-block auth-submit-btn btn" type="submit" value="Create Account" />
                            </form>
                            
                            <div className="diveder_line_auth"><span className="diveder_line_auth_text">Or</span></div>
                            <a href="https://app.sellergeni.com/amazon/signin" className="sign-in-with-amazon" type="submit" value="">
                                <img src="/assets/images/amazon_login_img.png" alt="amazon sign in" />    
                            </a>
                           <Copyright />
                        </div>
                    </div>
                    </div>
        
            </div>
        </div>
  
     
    );
}
 
export default Register;