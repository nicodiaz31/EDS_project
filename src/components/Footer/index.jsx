import React from 'react';
import { Link } from 'react-router-dom';
import { faEnvelope, faHome, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterComponent = () => {
    return(
        <>
            <section className="footer__background">
                <footer className="pt-4 pb-4">
                    <div className="container-fluid text-center text-md-left">
                        <div className="row text-md-left">
                            <div className="col-md-4 col-lg-4 col-xl-5 mx-auto mt-3">
                                <div>
                                    <h5 className="text-uppercase mb-4 ">
                                        Environmental Development & Sustainability Inc.
                                    </h5>
                                    <p>
                                        EDS is an environmental consultant dedicated to providing support to its 
                                        clients to improve their environmental performance and 
                                        relationship with local communities to attain sustainable development.
                                    </p>
                                    <img src="/images/EDSLogo.png" style={{width:80}} alt="" />
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <div>
                                    <h5 className="text-uppercase mb-4">
                                        Useful Links
                                    </h5>
                                    <p>
                                        <Link className="footer__links" to={`/services`}> Services </Link>
                                    </p>
                                    <p>
                                        <Link className="footer__links" to={`/projects`}> Projects </Link>
                                    </p>
                                    <p>
                                        <Link className="footer__links" to={`/news`} > News </Link>
                                    </p>
                                    <p>
                                        <Link className="footer__links" to={`/aboutUs`}> About Us </Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
                                <div>
                                    <h5 className="text-uppercase mb-4">
                                        Contact Us
                                    </h5>
                                    <p>
                                        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Guaynabo, Puerto Rico
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>  edspuertorico@edspuertorico.com
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> 1-787-708-2774
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faPrint}></FontAwesomeIcon> 1-787-708-2774
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr className="mb-4"/>
                        <div className="row align-items-center">
                            <div className="col-md-7 col-lg-8">
                                <p>Copyright ©2021 Environmental Development & Sustainability Inc. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                    
                </footer>
            </section>
        </>
    )
}

export default FooterComponent;