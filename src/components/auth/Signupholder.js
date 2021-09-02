import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
const Signupholder = () => {
    return ( 
        <div className="signup_holder">
        <div className="signin_link web_show">Don't have an account?
            <a href="/register" className="login_acc">Create Account</a>
        </div>
    </div>
     );
}
 
export default Signupholder;