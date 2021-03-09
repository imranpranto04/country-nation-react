import React, { useEffect, useState } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const CountryDteails = () => {

    const { countryName } = useParams();
    const [country, setCountry] = useState([]);
    const { name, population, flag, region, capital, timezones } = country;

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
    }, []);
    return (
        <div className="container mt-5">

            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={flag} alt="" />
                </div>

                <div className="col-md-6">

                    <Jumbotron>
                        <h1>{capital}, {name}</h1>
                        <h4>Region: {region}</h4>
                        <h5>popuation: <b>{population}</b></h5>
                        
                        <p>Timezone: {timezones}</p>
                        <br/>
                        <p>
                            <Link to={"/home"}><Button variant="primary">All Country</Button></Link>                          
                        </p>
                    </Jumbotron>
                </div>
            </div>
        </div>
    );
};

export default CountryDteails;