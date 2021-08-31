import Copyright from "./Copyright"
import Slogan from "./Slogan";

const Changepassword = () => {
    return ( 
        <div id="auth-container" className="container-fluid auth_view">
            <div className="row auth_view">
                <div className="col-lg-4 col-md-4 col-sm-12 auth_view_img">
                    <Slogan/>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 auth_view_content">
                <div className="form_main_content">
    <div className="signup_form_holder">
        <div className="title_reg_right">Change your Password</div> 
        <p className="subtitle_reg_right web_show"></p> 
        <form method="POST" action="http://app.local.sellerx/password/reset">
                <div className="form-group">
                <label for="email" className="form-label">Email</label>
 
                <input id="email" type="email" className="form-control " name="email" value="" required="" autocomplete="email" autofocus="" />
                 
            </div>

            <div className="form-group ">
                <label for="password" className="form-label">Password</label>
 
                <input id="password" type="password" className="form-control " name="password" required="" autocomplete="new-password" placeholder="Enter new password" />

                 
            </div>

            <div className="form-group">
                <label for="password-confirm" className="form-label">Confirm Password</label>
 
                <input id="password-confirm" type="password" className="form-control" name="password_confirmation" required="" autocomplete="new-password" placeholder="Confirm new password" /> 
            </div>

            <div> 
                <button type="submit" className="btn-success btn-block auth-submit-btn btn">
                    Reset Password
                </button> 
            </div>
        </form> 
        <Copyright/>
    </div>
</div>
                </div>
            </div>
        </div>
     );
}
 
export default Changepassword;