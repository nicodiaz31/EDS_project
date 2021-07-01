import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const NewsComponent = () => {

    return (
        <>
        <section className="news pb-4">
                <div className="container-fluid">
                    <h3>News</h3>
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
                </div>
            </section>  
        </>
    )
}

export default NewsComponent;