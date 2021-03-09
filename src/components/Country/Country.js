import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Country = (props) => {
    // console.log(props);
    const { name, capital, flag } = props.country;
    return (
            
            <div className="col-md-3 my-3">
                <Card >
                    <Card.Img variant="top" src= {flag} />
                    <Card.Body>
                        <Card.Title>Country: {name}</Card.Title>
                        <Card.Text>
                            Capital: <b>{capital}</b>
                        </Card.Text>
                        <Link to ={`/name/${name}`} ><Button variant="primary">Details</Button></Link>
                    </Card.Body>
                </Card>

            </div>
       
    );
};

export default Country;