const OnboardingSidebar = (props) => {
    return ( 
        <div className="steps-container">
                        <a href="javascript:void(0)">
                            <img src="/assets/images/sellergeni_logo_white_master.png" alt="Logo" className="logo_onboarding" />
                        </a>
                        <div className="steps-list" >
                            <ul id="progress">
                                <li className={props.intro}>
                                    <div className="node">
                                        <span className="number_progress">1</span>
                                        <span className="check_progress"><svg xmlns="http://www.w3.org/2000/svg" width="16.74" height="10" viewBox="0 0 19.281 13.728">
                                                <path id="Path_294" data-name="Path 294" d="M1187.471,718.344l5.535,5.463,9.5-9.492" transform="translate(-1185.35 -712.194)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <p>Introduction</p>
                                </li>
                                <li className={props.connect}>
                                    <div className="node">
                                        <span className="number_progress">2</span>
                                        <span className="check_progress">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16.74" height="10" viewBox="0 0 19.281 13.728">
                                                <path id="Path_294" data-name="Path 294" d="M1187.471,718.344l5.535,5.463,9.5-9.492" transform="translate(-1185.35 -712.194)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <p>Connect amazon</p>
                                </li>

                                <li className={props.launch}>
                                    <div className="node">
                                        <span className="number_progress">3</span>
                                        <span className="check_progress">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16.74" height="10" viewBox="0 0 19.281 13.728">
                                                <path id="Path_294" data-name="Path 294" d="M1187.471,718.344l5.535,5.463,9.5-9.492" transform="translate(-1185.35 -712.194)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <p>Launch</p>
                                </li>
                                </ul>
                        </div>
                    </div>
     );
}
 
export default OnboardingSidebar;