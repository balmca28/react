import OnboardingSidebar from "./OnboardingSidebar"

const OnboardingStep2 = () => {
    let intro="";
    let connect="active";
    let launch="";
    let waitlist=51;
    const checkwaitinglist = () => {
        if (waitlist>=50) {
          return <a href="/onboarding-waitinglist" className="newbtn_main mg sellertype_btn " id="sellertype_btn">Continue</a>;
        }
        else {
          return <a href="/Onboarding-launch" className="newbtn_main mg sellertype_btn " id="sellertype_btn">Continue</a>;
        }
      }

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
                    We require access to your Amazon Advertisement &amp; SellerCentral account to get you started. We
                    are Amazon authorised developers and your data will not be shared with an external agency or
                    used outside the scope of this app.
                </div>
                <div className="selection_cards_holder">
                    <div className="cards_shadow_two">
                        <div className="">
                            <div className="onboarding_widget_left">
                                <div className="onboarding_para">Amazon SP-API - To get your Products, orders &amp;
                                    inventory counts</div>
                         <button value="connect" data-url="https://sellercentral.amazon.in/apps/authorize/consent?application_id=amzn1.sp.solution.2b1223e6-e42e-4b9c-9686-37f1017bfcd3&amp;state=c2cbb887c444adbe434e5f80015ed611&amp;version=beta" className="newbtn_main para_mg" id="amazon-connect" type="button">Connect Amazon
                                    Account</button>
                                
                            </div>
                            <div className="onboarding_widget_right">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJOq08j87Gonrf951ZPy5UVfQm1_4d7U3-yA&amp;usqp=CAU" alt="sellergeni images" />
                            </div>
                        </div>
                    </div>


                    <div className="cards_shadow_two">
                        <div className="">
                            <div className="onboarding_widget_left">
                                <div className="onboarding_para">Amazon Advertisement API - To get your ads account
                                    connected and to manage it. </div>
                                   <a href="http://app.local.sellerx/connect/amazon/ads" className="newbtn_main  para_mg" type="button">Connect to
                                    Amazon Ads Account</a>
                                                                </div>
                            <div className="onboarding_widget_right">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJOq08j87Gonrf951ZPy5UVfQm1_4d7U3-yA&amp;usqp=CAU" alt="sellergeni images" />

                            </div>
                        </div>
                    </div>

                    <div className="onboarding_button_holder text-right">
                    {checkwaitinglist()}
                   </div>

                </div>
            </div>
            </div>
        </div>
        </div>
 
     );
}
 
export default OnboardingStep2;