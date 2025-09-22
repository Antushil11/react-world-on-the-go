import React, { use, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css";

const Countries = ({ countriesPromise }) => {


    const [visitedCountries, setVisitedCountries] = useState([])

    const [visitedFlags, setVisitedFlage] = useState([])

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)

    }
    const handleVisitedFlage =(flag)=>{
           const newVisitedFlags = [...visitedFlags,flag];
           setVisitedFlage(newVisitedFlags)
     }
    const countriesData = use(countriesPromise)

    const countries = countriesData.countries;

     


    return (
        <div >
            <h1>You and I :  visited countries : {countries.length}</h1>

            <h3>Total county visited : {visitedCountries.length}</h3>
            <h3>Total visieted flager : {visitedFlags.length}</h3>

            <ol>
                {
                    visitedCountries.map(country => <li
                        key={country.cca3.cca3}> {country.name.common}</li>)
                }
            </ol>

            <div className='visited-flag-container'>
                {
                    visitedFlags.map((flag,index )=> <img key={index} src={flag} ></img>)
                }
            </div>

            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries} 
                        handleVisitedFlage ={handleVisitedFlage }
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;