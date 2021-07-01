import React from 'react';

const ProjectsComponent = () => {
    
    return(
        <>
            <section className="projects">
                <div className="container-fluid">
                    <h3>Our Projects</h3>
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
                </div>
            </section>
        </>
    )
}

export default ProjectsComponent;