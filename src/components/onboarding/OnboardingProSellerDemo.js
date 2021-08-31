import OnboardingSidebar from "./OnboardingSidebar"

const OnboardingProSellerDemo = () => {
    let intro="";
    let connect="active";
    let launch="";
    return ( 
        <div className="container-fluid full_view">
            <div className="row full_view">
                <div className="col-lg-3 col-md-3 col-sm-12 onboarding_left_view">
                <OnboardingSidebar intro={intro} connect={connect} launch={launch} />
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12 onboarding_right_content">
                <div className="onboarding_third_step">
                    <div className="onboarding_title wt_bold">
                        Hello, StoreName <br/>
                        GrowZ - Blazing Fast Growth, just a click away 🚀
                    </div>
                    <div className="onboarding_subtitle">
                        Pro Seller 
                    </div>
                    <div className="selection_cards_holder">

                        <div className="onboarding_button_holder text-right">
                            <button  className="newbtn_main" id="sellerconnect_btn">Start Chat</button>
                        </div>

                    </div>
                </div>
                </div>
            </div>
            </div>
     );
}
 
export default OnboardingProSellerDemo;