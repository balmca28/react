import Copyright from "./Copyright"
import Signupholder from "./Signupholder"
import Slogan from "./Slogan";

const Forgotpassword = () => {
    return ( 
<div id="auth-container" className="container-fluid auth_view">
        <div className="row auth_view">
            <div className="col-lg-4 col-md-4 col-sm-12 auth_view_img">
                <Slogan/>
            </div>
           
            <div className="col-lg-8 col-md-8 col-sm-12 auth_view_content">
                <Signupholder/>
                    <div className="form_main_content">
                        <div className="signup_form_holder">
                            <div className="title_reg_right">Forgot your password?</div>
                            <p className="subtitle_reg_right web_show">Enter your e-mail address below, we will send you
                                password reset link.</p>
                            <div className="sigin_link_mob mob_show">Don't have an account?
                                <a href="https://app.sellergeni.com/register" className="login_acc_link">Create Account</a>
                            </div>
                            
                            <form method="POST" action="https://app.sellergeni.com/password/email" accept-charset="UTF-8">
                            
                            <div className="form-group ">
                                <label className="form-label">Email Address</label>
                                <input placeholder="Enter your email" className="email_input form-control" name="email" type="email" />
                                
                            </div>

                            <div className="forgotpass_btn_holder">
                                <div className="forgotpass_btn_holder_left">
                                    <a href="https://app.sellergeni.com/login" className="forgot_cancelBtn">Cancel</a>
                                </div>
                                <div className="forgotpass_btn_holder_right">
                                    <input className="btn-success btn-block auth-submit-btn btn" type="submit" value="Send Me Reset Link" />
                                    
                                </div>
                            </div></form>
                            <Copyright/>
                        </div>
                    </div>

           
        </div>
    </div>
</div>
     );
}
 
export default Forgotpassword;