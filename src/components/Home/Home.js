import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {

    const [countries, setCountries] = useState([]);

    useEffect(()=> {
        const url = `https://restcountries.eu/rest/v2/all`;
        fetch(url)
        .then(res => res.json())
        .then(data=> setCountries(data));
    }, [])
    return (
        <div className="container">

            <h1 className="mt-4 text-info text-center">Country List: {countries.length}</h1>

            <div className="row">
                
            {
                countries.map(country => 
                <Country country={country}
                key = {country.name}
                > </Country> )
            }
            </div>
        </div>
    );
};

export default Home;