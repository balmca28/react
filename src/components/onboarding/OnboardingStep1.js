import OnboardingSidebar from "./OnboardingSidebar"
import { useState } from "react";
 
const OnboardingStep1 = () => {
    let intro="active";
    let connect="";
    let launch="";
    const [type, setType] = useState();
   
    const nextButton = () => {
        if(type){
        if (type==="pro") {
          return <a href="/onboarding-prosellerdemo" className="newbtn_main mg sellertype_btn " id="sellertype_btn">Pro Seller Demo</a>;
        }
        else {
          return <a href="/Onboarding-connect" className="newbtn_main mg sellertype_btn" id="sellertype_btn">Continue</a>;
        }}else{
            return <a href="/Onboarding-connect" className="newbtn_main mg sellertype_btn disable" id="sellertype_btn">Continue</a>;
        }
      }
    return ( 
       
        
        <div className="container-fluid full_view">
            <div className="row full_view">
                <div className="col-lg-3 col-md-3 col-sm-12 onboarding_left_view">
                    <OnboardingSidebar intro={intro} connect={connect} launch={launch} />
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12 onboarding_right_content">
                   <div className="onboarding_first_step">
                   <div className="onboarding_title wt_bold">
                        Hello, StoreName <br/>
                        GrowZ - Blazing Fast Growth, just a click away 🚀
                    </div>
                    <div className="onboarding_subtitle">
                        Welcome to SellerGeni. We would like to know more about you to ensure quality service is
                        provided based on your current requirements. Please select how long you have been selling on
                        Amazon.
                    </div>
                      <div className="selection_cards_holder">
                        <div className="selection_cards cards_shadow  first_step_cards first_step_cards_ht">
                          <input type="radio" name="sellertype" value="newseller" onChange={event => setType(event.target.value)} id="newseller" className="sellertype_input" style={{opacity: 0}}/>
                            <label className="sellertype_label" for="newseller"></label>

                            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="151" viewBox="0 0 200 151">
                                <g id="Group_3156" data-name="Group 3156" transform="translate(-522 -281.875)">
                                    <rect id="Rectangle_1849" data-name="Rectangle 1849" width="200" height="151" rx="16" transform="translate(522 281.875)" fill="#f5f5ff"></rect>
                                    <g id="undraw_Add_files_re_v09g" transform="translate(558.779 303.142)">
                                        <path id="Path_6293" data-name="Path 6293" d="M273.648,99.312l-4.108,1.06-50.618,13.053-4.109,1.059a7.779,7.779,0,0,0-5.584,9.464l17.815,69.084a7.779,7.779,0,0,0,9.464,5.584l.011,0,58.814-15.167.011,0a7.779,7.779,0,0,0,5.584-9.464L283.113,104.9A7.779,7.779,0,0,0,273.648,99.312Z" transform="translate(-208.984 -99.066)" fill="#f2f2f2"></path>
                                        <path id="Path_6294" data-name="Path 6294" d="M285.824,113.1l-4.866,1.255-49.1,12.663-4.866,1.255a5.54,5.54,0,0,0-3.976,6.74l17.815,69.084a5.54,5.54,0,0,0,6.74,3.976l.011,0L306.392,192.9l.011,0a5.54,5.54,0,0,0,3.976-6.74l-17.815-69.084A5.54,5.54,0,0,0,285.824,113.1Z" transform="translate(-220.601 -110.683)" fill="#fff"></path>
                                        <path id="Path_6295" data-name="Path 6295" d="M427.269,239.334l-29.752,7.673a1.294,1.294,0,1,1-.646-2.506l29.752-7.673a1.294,1.294,0,1,1,.646,2.506Z" transform="translate(-365.721 -214.551)" fill="#f2f2f2"></path>
                                        <path id="Path_6296" data-name="Path 6296" d="M439.192,257.27l-34.921,9.005a1.294,1.294,0,0,1-.646-2.506l34.921-9.005a1.294,1.294,0,1,1,.646,2.506Z" transform="translate(-371.384 -229.591)" fill="#f2f2f2"></path>
                                        <path id="Path_6297" data-name="Path 6297" d="M457.538,356.708l-29.752,7.673a1.294,1.294,0,1,1-.646-2.506l29.752-7.673a1.294,1.294,0,1,1,.646,2.506Z" transform="translate(-391.102 -312.973)" fill="#f2f2f2"></path>
                                        <path id="Path_6298" data-name="Path 6298" d="M469.46,374.643l-34.921,9.005a1.294,1.294,0,0,1-.646-2.506l34.921-9.005a1.294,1.294,0,1,1,.646,2.506Z" transform="translate(-396.765 -328.013)" fill="#f2f2f2"></path>
                                        <path id="Path_6299" data-name="Path 6299" d="M487.806,474.081l-29.752,7.673a1.294,1.294,0,0,1-.646-2.506l29.752-7.673a1.294,1.294,0,1,1,.646,2.506Z" transform="translate(-416.483 -411.396)" fill="#f2f2f2"></path>
                                        <path id="Path_6300" data-name="Path 6300" d="M499.728,492.017l-34.921,9.005a1.294,1.294,0,1,1-.646-2.506l34.921-9.005a1.294,1.294,0,1,1,.646,2.506Z" transform="translate(-422.147 -426.436)" fill="#f2f2f2"></path>
                                        <path id="Path_6301" data-name="Path 6301" d="M303.2,293.79l-10.529,2.715a.621.621,0,0,1-.756-.446l-2.417-9.372a.621.621,0,0,1,.446-.756l10.529-2.715a.621.621,0,0,1,.756.446l2.417,9.372A.621.621,0,0,1,303.2,293.79Z" transform="translate(-276.479 -253.467)" fill="#e6e6e6"></path>
                                        <path id="Path_6302" data-name="Path 6302" d="M333.464,411.164l-10.529,2.715a.621.621,0,0,1-.756-.446l-2.417-9.372a.621.621,0,0,1,.446-.756l10.529-2.715a.621.621,0,0,1,.756.446l2.417,9.372A.621.621,0,0,1,333.464,411.164Z" transform="translate(-301.86 -351.89)" fill="#e6e6e6"></path>
                                        <path id="Path_6303" data-name="Path 6303" d="M363.733,528.537,353.2,531.253a.621.621,0,0,1-.756-.446l-2.417-9.372a.621.621,0,0,1,.446-.756l10.529-2.715a.621.621,0,0,1,.756.446l2.417,9.372A.621.621,0,0,1,363.733,528.537Z" transform="translate(-327.241 -450.313)" fill="#e6e6e6"></path>
                                        <path id="Path_6304" data-name="Path 6304" d="M507.723,209.052h-60.76a7.779,7.779,0,0,0-7.77,7.77v71.344a7.779,7.779,0,0,0,7.77,7.77h60.76a7.779,7.779,0,0,0,7.77-7.77V216.822A7.779,7.779,0,0,0,507.723,209.052Z" transform="translate(-402.024 -191.294)" fill="#e6e6e6"></path>
                                        <g id="Group_3164" data-name="Group 3164" transform="translate(39.406 19.995)">
                                            <path id="Path_6305" data-name="Path 6305" d="M519.34,222.906H458.58a5.539,5.539,0,0,0-5.533,5.533v71.344a5.54,5.54,0,0,0,5.533,5.533h60.76a5.54,5.54,0,0,0,5.533-5.533V228.439A5.54,5.54,0,0,0,519.34,222.906Z" transform="translate(-453.047 -222.906)" fill="#fff"></path>
                                            <g id="Group_3163" data-name="Group 3163" transform="translate(8.011 9.536)">
                                                <path id="Path_6307" data-name="Path 6307" d="M632.912,452.275H609.664a1.345,1.345,0,0,1,0-2.588h23.248a1.345,1.345,0,0,1,0,2.588Z" transform="translate(-583.46 -422.608)" fill="#e6e6e6"></path>
                                                <path id="Path_6308" data-name="Path 6308" d="M638.206,479.323h-28.5a1.33,1.33,0,0,1,0-2.588h28.5a1.33,1.33,0,0,1,0,2.588Z" transform="translate(-583.46 -445.291)" fill="#e6e6e6"></path>
                                                <path id="Path_6309" data-name="Path 6309" d="M633.247,573.489H609.677a1.34,1.34,0,0,1,0-2.588h23.569a1.34,1.34,0,0,1,0,2.588Z" transform="translate(-583.808 -524.251)" fill="#e6e6e6"></path>
                                                <path id="Path_6310" data-name="Path 6310" d="M638.543,600.536H609.719a1.326,1.326,0,0,1,0-2.588h28.824a1.326,1.326,0,0,1,0,2.588Z" transform="translate(-583.808 -546.931)" fill="#e6e6e6"></path>
                                                <path id="Path_6311" data-name="Path 6311" d="M523.841,454.551H504.013a1.063,1.063,0,0,1-1.131-.974V438.383a1.063,1.063,0,0,1,1.131-.974h19.828a1.063,1.063,0,0,1,1.131.974v15.194A1.063,1.063,0,0,1,523.841,454.551Z" transform="translate(-502.847 -414.536)" fill="#e6e6e6"></path>
                                                <path id="Path_6316" data-name="Path 6316" d="M523.841,454.551H504.013a1.063,1.063,0,0,1-1.131-.974V438.383a1.063,1.063,0,0,1,1.131-.974h19.828a1.063,1.063,0,0,1,1.131.974v15.194A1.063,1.063,0,0,1,523.841,454.551Z" transform="translate(-502.882 -392.313)" fill="#e6e6e6"></path>
                                                <path id="Path_6313" data-name="Path 6313" d="M682.843,317.341H660.19a1.294,1.294,0,1,1,0-2.588h22.653a1.294,1.294,0,0,1,0,2.588Z" transform="translate(-633.671 -309.461)" fill="#ccc"></path>
                                                <path id="Path_6314" data-name="Path 6314" d="M688.18,344.388H660.19a1.294,1.294,0,1,1,0-2.588h27.99a1.294,1.294,0,0,1,0,2.588Z" transform="translate(-633.671 -332.141)" fill="#ccc"></path>
                                                <path id="Path_6315" data-name="Path 6315" d="M524.175,299.514H503.291a.621.621,0,0,1-.62-.62v-16.3a.621.621,0,0,1,.62-.62h20.884a.621.621,0,0,1,.62.62v16.3A.621.621,0,0,1,524.175,299.514Z" transform="translate(-502.67 -281.974)" fill="#feaa29"></path>
                                            </g>
                                        </g>
                                        <circle id="Ellipse_540" data-name="Ellipse 540" cx="14.184" cy="14.184" r="14.184" transform="translate(97.898 84.955)" fill="#f9b959"></circle>
                                        <path id="Path_6306" data-name="Path 6306" d="M865.115,666.4h-4.934v-4.934a1.85,1.85,0,0,0-3.7,0V666.4h-4.934a1.85,1.85,0,1,0,0,3.7h4.934v4.934a1.85,1.85,0,0,0,3.7,0V670.1h4.934a1.85,1.85,0,1,0,0-3.7Z" transform="translate(-746.249 -569.11)" fill="#fff"></path>
                                    </g>
                                </g>
                            </svg>


                            <div className="onboarding_subtitle_two wt_md">I’m a New Seller</div>
                            <div className="onboarding_para para_mg">Launched Products</div>
                            <div className="onboarding_para para_mg">You can select this if you have just created ads or
                                have been running it for less than 3 months.</div>

                        </div>
                        <div className="selection_cards cards_shadow first_step_cards first_step_cards_ht pd_cards">
                            <input type="radio" name="sellertype" value="3months" onChange={event => setType(event.target.value)} id="existingseller" className="sellertype_input" />
                            <label className="sellertype_label" for="existingseller" ></label>
                            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="151" viewBox="0 0 200 151">
                                <g id="Group_3157" data-name="Group 3157" transform="translate(-522 -284.577)">
                                    <rect id="Rectangle_1849" data-name="Rectangle 1849" width="200" height="151" rx="16" transform="translate(522 284.577)" fill="#f5f5ff"></rect>
                                    <g id="undraw_visual_data_re_mxxo" transform="translate(556.334 305.321)">
                                        <path id="Path_6287" data-name="Path 6287" d="M740.794,634.826h-1.96l-.932-7.558h2.892Z" transform="translate(-619.961 -527.01)" fill="#9e616a"></path>
                                        <path id="Path_6288" data-name="Path 6288" d="M915.324,779.191h-6.318v-.08a2.459,2.459,0,0,1,2.459-2.459h3.859Z" transform="translate(-793.992 -669.475)" fill="#2f2e41"></path>
                                        <path id="Path_6289" data-name="Path 6289" d="M693.794,634.826h-1.96l-.932-7.558h2.892Z" transform="translate(-580.473 -527.01)" fill="#9e616a"></path>
                                        <path id="Path_6290" data-name="Path 6290" d="M868.324,779.191h-6.318v-.08a2.459,2.459,0,0,1,2.459-2.459h3.859Z" transform="translate(-754.504 -669.475)" fill="#2f2e41"></path>
                                        <path id="Path_1495" data-name="Path 1495" d="M368.748,464.2V403.49a1.41,1.41,0,0,1,1.41-1.41h6.291a1.41,1.41,0,0,1,1.41,1.41h0v60.864Z" transform="translate(-340.085 -354.772)" fill="#e6e6e6"></path>
                                        <path id="Path_1496" data-name="Path 1496" d="M498.748,530.759V482.49a1.41,1.41,0,0,1,1.41-1.41h6.291a1.41,1.41,0,0,1,1.41,1.41h0v48.166Z" transform="translate(-449.307 -421.146)" fill="#e6e6e6"></path>
                                        <path id="Path_6291" data-name="Path 6291" d="M265.227,178.056a.479.479,0,0,1-.357-.8l21.035-23.462,20.7,11.625,20.824-35.882L348.645,147a.48.48,0,0,1-.609.74L327.694,131l-20.732,35.723-20.855-11.711L265.584,177.9A.478.478,0,0,1,265.227,178.056Z" transform="translate(-252.707 -125.791)" fill="#3f3d56"></path>
                                        <g id="Group_3161" data-name="Group 3161" transform="translate(7.965)">
                                            <circle id="Ellipse_300" data-name="Ellipse 300" cx="4.475" cy="4.475" r="4.475" transform="translate(0 47.311)" fill="#f2e5d1"></circle>
                                            <circle id="Ellipse_301" data-name="Ellipse 301" cx="4.475" cy="4.475" r="4.475" transform="translate(20.778 24.134)" fill="#f2e5d1"></circle>
                                            <circle id="Ellipse_302" data-name="Ellipse 302" cx="4.475" cy="4.475" r="4.475" transform="translate(41.557 35.801)" fill="#f2e5d1"></circle>
                                            <circle id="Ellipse_303" data-name="Ellipse 303" cx="4.475" cy="4.475" r="4.475" transform="translate(62.335)" fill="#feaa29"></circle>
                                        </g>
                                        <circle id="Ellipse_304" data-name="Ellipse 304" cx="4.475" cy="4.475" r="4.475" transform="translate(110.258 33.331)" fill="#feaa29"></circle>
                                        <path id="Path_1507" data-name="Path 1507" d="M869.175,557.739c1.675.2,5.958-1.326,6.191,1,2.2,6.49,2.139,31.368,2.139,31.368l-3.357.16s-2.682-19.767-3.95-24c-.636,5.14-.525,24.8-.525,24.8l-3.037.16s-2.724-16.737-2.74-21.65c-.331-3.6.481-8.931.133-12.409A13.3,13.3,0,0,0,869.175,557.739Z" transform="translate(-756.024 -485.07)" fill="#1f1913"></path>
                                        <path id="Path_1513" data-name="Path 1513" d="M758.748,414.226V344.259a1.529,1.529,0,0,1,1.41-1.625h6.291a1.529,1.529,0,0,1,1.41,1.625V414.41Z" transform="translate(-667.75 -304.828)" fill="#e6e6e6"></path>
                                        <path id="Path_1508" data-name="Path 1508" d="M824.032,380.493a20.885,20.885,0,0,0-2.447-3.863,6.124,6.124,0,0,1-.543-.742,10.29,10.29,0,0,1-.663-1.948c-.607-1.828-2.123-3.3-2.492-5.188-.134-.687-1.268,1.31-.97,2.163.532,1.542.6,3.176,1.279,4.665s1.474,2.919,2.059,4.442a15.316,15.316,0,0,0,1.085,2.557,3.148,3.148,0,0,0,2.167,1.589,5.348,5.348,0,0,1,.261-1.707C823.967,381.831,824.321,381.09,824.032,380.493Z" transform="translate(-716.579 -326.653)" fill="#9e616a"></path>
                                        <path id="Path_1509" data-name="Path 1509" d="M914.991,384.93a8.832,8.832,0,0,1,.519-3.321,3.442,3.442,0,0,0,.305-1.255,3.077,3.077,0,0,0-.387-1.136,29.129,29.129,0,0,1-1.438-3.911l-.8-2.5c-.26-.191,1.261-.257,1.586.192a38.855,38.855,0,0,1,2.706,4.776,8.084,8.084,0,0,1,.547,1.2,6.581,6.581,0,0,1,.288,2.068,28.692,28.692,0,0,1-.352,3.911,3.5,3.5,0,0,1-.877,2.238A12.672,12.672,0,0,0,914.991,384.93Z" transform="translate(-797.483 -330.053)" fill="#9e616a"></path>
                                        <circle id="Ellipse_307" data-name="Ellipse 307" cx="3.317" cy="3.317" r="3.317" transform="translate(109.965 46.948)" fill="#9e616a"></circle>
                                        <path id="Path_1512" data-name="Path 1512" d="M881.112,390.307a.576.576,0,0,1,.121-.6c.083-.065.193-.09.282-.152a1.215,1.215,0,0,0,.3-.384,1.649,1.649,0,0,1,2.063-.524c.548.287.879.861,1.366,1.248.247.2.535.349.783.55a3.22,3.22,0,0,1,1.016,1.643,9.307,9.307,0,0,1,.282,1.938,1.742,1.742,0,0,1-.023.589,1.654,1.654,0,0,1-.223.455,5.074,5.074,0,0,1-1.989,1.84,3.072,3.072,0,0,1-2.65.046.456.456,0,0,1-.2-.162.584.584,0,0,1-.032-.351,2.4,2.4,0,0,0-.264-1.344c-.152-.3-.38-.565-.5-.879a3.062,3.062,0,0,1-.143-1.09A11.836,11.836,0,0,0,881.112,390.307Z" transform="translate(-770.526 -343.351)" fill="#2d293d"></path>
                                        <path id="Path_1514" data-name="Path 1514" d="M238.747,609.464V575.684c0-.433.631-.784,1.41-.784h6.291c.779,0,1.41.352,1.41.784v33.867Z" transform="translate(-230.862 -499.97)" fill="#e6e6e6"></path>
                                        <path id="Path_944" data-name="Path 944" d="M320.506,792.221H189.576a.16.16,0,1,1,0-.32h130.93a.16.16,0,1,1,0,.32Z" transform="translate(-189.416 -682.287)" fill="#e6e6e6"></path>
                                        <path id="Path_1515" data-name="Path 1515" d="M628.747,363.343v-79.4a1.671,1.671,0,0,1,1.41-1.844h6.291a1.671,1.671,0,0,1,1.41,1.844V363.55Z" transform="translate(-558.527 -253.968)" fill="#feaa29"></path>
                                        <circle id="Ellipse_538" data-name="Ellipse 538" cx="1.438" cy="1.438" r="1.438" transform="translate(98.806 40.976)" fill="#a0616a"></circle>
                                        <circle id="Ellipse_539" data-name="Ellipse 539" cx="1.438" cy="1.438" r="1.438" transform="translate(114.789 40.336)" fill="#a0616a"></circle>
                                        <path id="Path_6292" data-name="Path 6292" d="M851.926,431.3c.14-.128,1.285-6.821,1.278-6.971-.018-.825-2.533-1.766-3.037-1.439-.475.309-1.3,3.856-1.834,4.5l-.563-.985h-4.475l-.271.5c-.587-.354-1.116-.68-1.3-.788a.849.849,0,0,0-.21-.1,3.246,3.246,0,0,1-1.279-.6c-.368-.283-2.074-3.246-2.531-3.167a3.984,3.984,0,0,0-2.238,3.037,57.321,57.321,0,0,1,3.111,5.91c.219.9.942,14,1.175,14.609,1.075-.1.226-.289,1.267,0a9.277,9.277,0,0,0,3.459-.15,13.294,13.294,0,0,1,1.448-.064,27.831,27.831,0,0,1,5.97.542,20.315,20.315,0,0,0-1.333-4.582,3.078,3.078,0,0,1,0-.949C850.611,440.216,851.547,431.725,851.926,431.3Z" transform="translate(-732.203 -371.717)" fill="#17171a"></path>
                                    </g>
                                </g>
                            </svg>


                            <div className="onboarding_subtitle_two wt_md">Selling 3+ months</div>
                            <div className="onboarding_para para_mg">Running ads for 60 days+</div>
                            <div className="onboarding_para para_mg">You can select this if you want to start increasing
                                your revenue and get Profitable.</div>
                        </div>
                        <div className="selection_cards cards_shadow first_step_cards first_step_cards_ht">
                            <input type="radio" name="sellertype" value="pro" onChange={event => setType(event.target.value)} id="proseller" className="sellertype_input" />
                            <label className="sellertype_label" for="proseller"></label>
                            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="151" viewBox="0 0 200 151">
                                <g id="Group_3158" data-name="Group 3158" transform="translate(-522 -285)">
                                    <rect id="Rectangle_1849" data-name="Rectangle 1849" width="200" height="151" rx="16" transform="translate(522 285)" fill="#f5f5ff"></rect>
                                    <g id="Group_3199" data-name="Group 3199" transform="translate(-7.776 -5.545)">
                                        <g id="Group_3165" data-name="Group 3165" transform="translate(586.209 325.235)">
                                            <path id="Path_6305" data-name="Path 6305" d="M529.818,222.906H459.455a6.415,6.415,0,0,0-6.408,6.408v82.621a6.415,6.415,0,0,0,6.408,6.408h70.363a6.415,6.415,0,0,0,6.408-6.408V229.314A6.415,6.415,0,0,0,529.818,222.906Z" transform="translate(-453.047 -222.906)" fill="#fff"></path>
                                            <g id="Group_3163" data-name="Group 3163" transform="translate(9.277 11.043)">
                                                <path id="Path_6307" data-name="Path 6307" d="M636.741,452.684H609.818a1.557,1.557,0,0,1,0-3h26.922a1.557,1.557,0,0,1,0,3Z" transform="translate(-579.473 -418.328)" fill="#e6e6e6"></path>
                                                <path id="Path_6308" data-name="Path 6308" d="M642.872,479.732h-33a1.54,1.54,0,0,1,0-3h33a1.54,1.54,0,0,1,0,3Z" transform="translate(-579.473 -440.321)" fill="#e6e6e6"></path>
                                                <path id="Path_6309" data-name="Path 6309" d="M637.129,573.9H609.834a1.551,1.551,0,0,1,0-3h27.295a1.551,1.551,0,0,1,0,3Z" transform="translate(-579.877 -516.877)" fill="#e6e6e6"></path>
                                                <path id="Path_6310" data-name="Path 6310" d="M643.262,600.945h-33.38a1.536,1.536,0,0,1,0-3h33.38a1.536,1.536,0,0,1,0,3Z" transform="translate(-579.877 -538.868)" fill="#e6e6e6"></path>
                                                <path id="Path_6311" data-name="Path 6311" d="M527.154,457.26H504.192a1.231,1.231,0,0,1-1.31-1.128v-17.6a1.231,1.231,0,0,1,1.31-1.128h22.962a1.231,1.231,0,0,1,1.31,1.128v17.6A1.231,1.231,0,0,1,527.154,457.26Z" transform="translate(-502.841 -410.921)" fill="#e6e6e6"></path>
                                                <path id="Path_6316" data-name="Path 6316" d="M527.154,457.26H504.192a1.231,1.231,0,0,1-1.31-1.128v-17.6a1.231,1.231,0,0,1,1.31-1.128h22.962a1.231,1.231,0,0,1,1.31,1.128v17.6A1.231,1.231,0,0,1,527.154,457.26Z" transform="translate(-502.882 -385.185)" fill="#e6e6e6"></path>
                                                <path id="Path_6313" data-name="Path 6313" d="M686.628,317.75H660.394a1.5,1.5,0,1,1,0-3h26.233a1.5,1.5,0,0,1,0,3Z" transform="translate(-629.685 -308.624)" fill="#ccc"></path>
                                                <path id="Path_6314" data-name="Path 6314" d="M692.809,344.8H660.394a1.5,1.5,0,1,1,0-3h32.414a1.5,1.5,0,0,1,0,3Z" transform="translate(-629.685 -330.615)" fill="#ccc"></path>
                                                <path id="Path_6315" data-name="Path 6315" d="M527.574,302.286H503.389a.719.719,0,0,1-.719-.718V282.693a.719.719,0,0,1,.719-.719h24.185a.719.719,0,0,1,.719.719v18.875A.719.719,0,0,1,527.574,302.286Z" transform="translate(-502.67 -281.974)" fill="#feaa29"></path>
                                            </g>
                                        </g>
                                        <g id="Group_3200" data-name="Group 3200" transform="translate(-3)">
                                            <g id="iconfinder_5428317_award_best_seller_gold_high_quality_premium_icon" data-name="iconfinder_5428317_award_best seller_gold_high quality_premium_icon" transform="translate(651.759 311.418)">
                                                <path id="Path_6317" data-name="Path 6317" d="M36.334,18.792l1.251-2.977-2.111-2.443.273-3.23L32.983,8.471l-.737-3.145L29.1,4.6,27.431,1.838l-3.23.273L21.77,0,18.792,1.251,15.815,0,13.372,2.111l-3.23-.273L8.471,4.6l-3.133.737L4.6,8.483,1.838,10.154l.273,3.23L0,15.815l1.251,2.977L0,21.77l2.111,2.443-.273,3.23L4.6,29.113l.737,3.145L8.483,33l1.671,2.763,3.23-.273,2.431,2.1,2.977-1.251,2.977,1.251,2.443-2.111,3.23.273,1.671-2.763,3.145-.737L33,29.1l2.763-1.671-.273-3.23,2.1-2.431ZM18.792,33.474A14.681,14.681,0,1,1,33.474,18.792,14.681,14.681,0,0,1,18.792,33.474Z" fill="#feaa29"></path>
                                                <path id="Path_6318" data-name="Path 6318" d="M31.507,18A13.507,13.507,0,1,0,45.014,31.507,13.507,13.507,0,0,0,31.507,18Zm2.349,7.634H32.094V37.38h1.762v1.175h-4.7V37.38H30.92V25.634H29.158V24.46h4.7Z" transform="translate(-12.715 -12.715)" fill="#feaa29"></path>
                                            </g>
                                            <ellipse id="Ellipse_541" data-name="Ellipse 541" cx="14" cy="13.5" rx="14" ry="13.5" transform="translate(656 317)" fill="#feaa29"></ellipse>
                                            <path id="Path_294" data-name="Path 294" d="M1187.471,717.534l4.421,4.364,7.592-7.583" transform="translate(-522.271 -387.895)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <div className="onboarding_subtitle_two wt_md">Pro Sellers/Brands</div>
                            <div className="onboarding_para para_mg">Sales more than 50 Lakhs</div>
                            <div className="onboarding_para para_mg">You can select this if you want to get a Custom
                                strategy for your Business from an Industry Expert.</div>
                        </div>
                        <div className="onboarding_button_holder text-right">
                        {nextButton()}
                        
                           
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
     );
    
}
 
export default OnboardingStep1;