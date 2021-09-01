import './Login.css';
import MasterLogo from '../../assets/images/sellergeni_logo_white_master.png';
const Slogan = () => {
    return ( 
        <div className="slogan-container">
                    <a className="logo_reg" href="/">
                        <img src={MasterLogo} alt="Logo" className="logo_auth" />
                    </a>
                    <div className="slogan-center">
                        <h1>Introducing<br/>GrowZ &#38; SmartPlug</h1>
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