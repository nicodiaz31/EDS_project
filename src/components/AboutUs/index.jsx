import React, { useContext } from 'react';
import { GlobalContext } from '../../context/Global';

const AboutUsComponent = () => {

    const { staff } = useContext(GlobalContext)

    return (
        <>
        <div className="profile-area projects">
            <div className="container-fluid">
                <h3>Our Staff</h3>
                <div className="row">
                    {
                        staff.map((employee) => (
                            <div className="col-sm-4" key={employee.id}>
                                <div className="card card__staff">
                                    <div className="img1">
                                        <img src={"/images/"+employee.imgbg}  alt="image_background" />
                                    </div>
                                    <div className="img2">
                                        <img src={"/images/"+employee.imgProfile} alt="profile_image" />
                                    </div>
                                    <div className="main-text">
                                        <h2>{employee.name+" "+employee.lastname}</h2>
                                    </div>
                                    <div className="contact__email">
                                        <p>{employee.email}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutUsComponent;