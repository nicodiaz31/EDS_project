import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [cat, setCat] = useState();
    const [staff, setStaff] = useState([]);
    const [titles, setTitles] = useState([]);
    const [sectionTitle, setSectionTitle] = useState({})

    useEffect(() => {
        async function fetchData() {
            const staffJson = await fetch("/json/staff.json");
            let data = await staffJson.json();
            setStaff(data);
            const titlesJson = await fetch("/json/titlesSection.json");
            data = await titlesJson.json();
            setTitles(data);
        }
        fetchData();
        return () => <></>;
    }, []);

    useEffect(() => {
        const section = titles.find(title => title.id === cat)
        setSectionTitle(section)
        console.log(section)
        return () => <></>;
    },[titles, cat])

    return (
        <GlobalContext.Provider value={{ cat, setCat, staff, sectionTitle }}>
        {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
