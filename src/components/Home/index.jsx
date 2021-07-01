import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HomeComponent = () => {
    useEffect(()=> {
        return () => {}
    } 
    ,[])
    return(
        <>
            <section className="services" >
                <div className="container-fluid" id="servicesSection">
                    <h3>Services We offer:</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum obcaecati, tempore voluptatibus atque eveniet porro ratione deleniti et maiores quisquam rerum a reiciendis earum laboriosam vitae, praesentium at quis tenetur.</p>
                    <div className="row">
                        <div className="col">
                            <h4>Implementation of ISO 14001</h4>
                            <p>Implementation of ISO 14001 and OHSAS 18000 Environmental and Occupational Health and Safety Management Systems</p>
                        </div>
                        <div className="col">
                            <h4>Environmental Training</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quia. Voluptatibus nemo similique officia magnam ullam minima exercitationem eaque soluta itaque repudiandae sint nesciunt ab, rem illum beatae voluptates ex?</p>
                        </div>
                        <div className="col">
                            <h4>Environmental Auditing</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptates, repudiandae exercitationem repellendus dolor eius hic commodi porro nesciunt, tempora vero minima enim doloribus assumenda iusto. Veniam cupiditate quos repellendus?</p>
                        </div>
                    </div>
                    <div className="row pt-4 justify-content-center">
                        <Link className="btn__toCat" to={`/services`}>More Services!</Link>
                    </div>
                </div>
            </section>
            <section className="projects">
                <div className="container-fluid">
                    <h3>Some Projects of Us:</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos explicabo fuga eius reiciendis ipsam harum repellendus cumque! Odio, provident earum quisquam dicta itaque, aliquam tempore autem natus ad at facere.</p>
                    <div className="row">
                        <div className="col">
                            <div className="card_project">
                                <img src="/images/AMA.jpg" alt="AMA" />
                                <div className="layer" >
                                    <h4>Preparation for EPA of Autoridad Metropolitana de Autobuses (AMA)</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card_project">
                                <img src="/images/guaynabo_municipalidad.jpg" alt="Municipalidad Guaynabo" />
                                <div className="layer">
                                    <h4>Environmental Assistance & Implementation of the NPDES-MS4 permit for the Municipality of Guaynabo, Puerto Rico</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card_project">
                                <img src="/images/pumaEnergy.jpg" alt="pumaEnergy" />
                                <div className="layer">
                                    <h4>Site inspections and permit process of the UIC systems at various gas stations of PUMA Energy</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-4 justify-content-center">
                        <Link className="btn__toCat" to={`/projects`}>More Projects!</Link>
                    </div>
                </div>
            </section>
            <section className="news pb-4">
                <div className="container-fluid">
                    <h3>Our Last News</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas deserunt provident officiis similique odio eum nihil, culpa nostrum dicta? Optio, molestias harum ad similique neque sint culpa facilis quidem esse?</p>
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="card">
                                <img src="/images/news_img2.jpg" alt="" className="card-img" />
                                <div className="card-img-overlay">
                                    <div className="layer">
                                        <div className="news__title">
                                            <h4>this is happening this July!</h4>
                                        </div>
                                        <div class="news__button">
                                            <button type="button" className="btn btn-circle btn-color btn-xl">
                                                <FontAwesomeIcon icon={faArrowRight} color="white"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card">
                                <img src="/images/news_img1.jpg" alt="" className="card-img" />
                                <div className="card-img-overlay">
                                    <div className="layer">
                                        <div className="news__title">
                                            <h4>this is happening this June!</h4>
                                        </div>
                                        <div className="news__button">
                                            <button type="button" className="btn btn-circle btn-color btn-xl">
                                                <FontAwesomeIcon icon={faArrowRight} color="white"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card">
                                <img src="/images/news_img3.jpg" alt="" className="card-img" />
                                <div className="card-img-overlay">
                                    <div className="layer">
                                        <div className="news__title">
                                            <h4>this is happening this May!</h4>
                                        </div>
                                        <div className="news__button">
                                            <button type="button" className="btn btn-circle btn-color btn-xl">
                                                <FontAwesomeIcon icon={faArrowRight} color="white"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card">
                                <img src="/images/news_img4.jpg" alt="" className="card-img" />
                                <div className="card-img-overlay">
                                    <div className="layer">
                                        <div className="news__title">
                                            <h4>this is happening this March!</h4>
                                        </div>
                                        <div className="news__button">
                                            <button type="button" className="btn btn-circle btn-color btn-xl">
                                                <FontAwesomeIcon icon={faArrowRight} color="white"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-4 justify-content-center">
                        <Link className="btn__toCat" to={`/news`}>More News!</Link>
                    </div>
                </div>
            </section>      
        </>
    )
}

export default HomeComponent;