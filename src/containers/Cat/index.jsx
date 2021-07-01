import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import AboutUsComponent from '../../components/AboutUs';
import HeaderComponent from '../../components/Header';
import { GlobalContext } from '../../context/Global';
import HomeComponent from '../../components/Home';
import CardListComponent from '../../components/CardList';

const CatContainer = () => {

    const {cat, setCat, sectionTitle } = useContext(GlobalContext)
    const { category } = useParams();

    useEffect(()=> {
        setCat(category)
        return() => {};
    },[setCat, category])

    return(
        <>  
            {
                sectionTitle ?<HeaderComponent/> : <></>
            }
            {
                cat === 'home' ? <HomeComponent/> : <></>
            }
            {   
                cat === 'aboutUs' ? <AboutUsComponent/> : <></>
            }
            {
                cat === 'services' ? <CardListComponent/> : <></>
            }
            {
                cat === 'projects' ? <CardListComponent/> : <></>
            }
            {
                cat === 'news' ? <CardListComponent/> : <></>
            }
        </>
    )
}

export default CatContainer;