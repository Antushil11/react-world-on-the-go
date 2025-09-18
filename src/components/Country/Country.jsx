import React, {useState } from 'react';
import "./Country.css"

const Country = ({ country,handleVisitedCountries ,handleVisitedFlage}) => {

    // console.log(handleVisitedCountries)

    const [visited, setVisited] = useState(false)

    const handleVisited = () =>{

        // 1.basic
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }
        
        // 2.2nd
        // setVisited(visited? false : true)

        // 3. 3rd

        setVisited(!visited);
        handleVisitedCountries(country)

    }
    return (
        <div className={`country ${visited && "country-visited"}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.png} />
            <h3>name : {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area : {country.area.area} {country.area.area >
             300000 ? "BigCountry" : "Small country"}</p>
             <button onClick={handleVisited}>
                {
                    visited ? "Visited" : "Not Visited"
                }
             </button>


             <button onClick={() => {handleVisitedFlage(country.flags.flags.png)}}>Add visited flage</button>

        </div>
    );
};

export default Country;