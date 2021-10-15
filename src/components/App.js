
import React, {useState, useEffect} from 'react';
import Card from "./dashboard/Card";
import "../styles/dashboard.css"


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
        <div className = "main">
            <div  className = "dashboard">
                {(data && data.civilizations) ? 
                    data.civilizations.map((civ) =>(
                        <div>
                            <Card civ = {civ} ></Card>
                        </div>
                )) : " "}
            </div>

        </div>
    );
}

export default App;