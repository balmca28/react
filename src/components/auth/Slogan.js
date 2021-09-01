import Typography from '@material-ui/core/Typography';
import './Login.css';
const Slogan = () => {
    return (
        <div className="slogan-container">
            <a className="logo_reg" href="/">
                <img src="http://static.local.sellerx/assets/images/sellergeni_logo_white_master.png" alt="Logo" className="logo_auth" />
            </a>
            <div className="slogan-center">
                <Typography component="h1">
                    Introducing<br />GrowZ &#38; SmartPlug
                </Typography>
                <div className="d-none d-md-block web_show">
                <p id="p_details">Grow your Business on Amazon using Goal-based Strategies that caters to all your business needs. Get actionable insights to build Killer Product listings. Remove the guesswork from your Business and let us start to increase your sales profitably.</p>
                <p className="mb-1" >Who is it for?
                    <ul className="pl-3">
                        <li>Existing marketplace sellers who have their products listed.</li>
                        <li id="li">Service providers who want to optimise their client's accounts.</li>
                        <li>Marketing Professionals looking for tools to get optimum results.</li>
                    </ul>
                </p>
            </div>
            </div>
         </div>

    );
}

export default Slogan;