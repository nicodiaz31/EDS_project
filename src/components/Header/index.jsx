import React, { useContext } from 'react';
import NavBarComponent from '../NavBar';
import { Link, useParams } from 'react-router-dom';
import { GlobalContext } from '../../context/Global';

const HeaderComponent = () => {

    const { sectionTitle } = useContext(GlobalContext);

    function handleScroll() {
        window.scroll({
          top: 700,
          left: 0, 
          behavior: 'smooth',
        });
      }
   
    return(
        <>
        {
            sectionTitle.content !== undefined ? 
                <section className="header">
                    <NavBarComponent/>
                    <div className="text-box__intro">
                        <h1>{sectionTitle.title}</h1>
                        <p>
                        {   
                            sectionTitle.content.map((pg) => (
                                <div key={1}>
                                    {pg}
                                    <br/>
                                </div>
                            ))
                        }
                        </p>
                        <Link className="btn__intro" onClick={handleScroll}>{sectionTitle.button}</Link>
                    </div>
                </section>
            :
                <></>
        }
            
        </>
    )
}

export default HeaderComponent;