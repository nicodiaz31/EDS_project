import React, { useContext } from 'react';
import { GlobalContext } from '../../context/Global';
import ServicesComponent from '../Services';
import ProjectsComponent from '../Projects';
import NewsComponent from '../News';

const CardListComponent = () => {

    const { cat } = useContext(GlobalContext)

    console.log(cat)

    return(
        <>
        {
            cat === 'services' ? <ServicesComponent/> : <></>
        }
        {
            cat === 'projects' ? <ProjectsComponent/> : <></>
        }
        {
            cat === 'news' ? <NewsComponent/> : <></>
        }
        </>
    )
}

export default CardListComponent;