
import React, {useState, useEffect} from 'react';
// import "../styles/App.css";

import React from "react";
import Dashboard from "./dashboard/Dashboard";



const App = () =>{

    const [data, setData] = useState({});

    useEffect(() =>{
        fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations")
        .then((res) => res.json())
            .then((json) =>{
                setData(json);
            })
    }, []);

    return(

        <div>
            <div>
                {(data && data.civilizations) ? 
                    data.civilizations.map((civ) =>(
                        <div>
                            {civ.name}
                        </div>
                )) : " "}
            </div>

        </div>

        <Dashboard></Dashboard>
    );
}

export default App;