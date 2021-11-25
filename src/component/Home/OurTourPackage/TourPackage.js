import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TourDetails from './TourDetails/TourDetails';
import './TourPackage.css'



const TourPackage = () => {
    const [packages, setPackage] = useState([])

    useEffect(() => {
         fetch('https://vast-eyrie-19386.herokuapp.com/services')
         .then(res => res.json())
         .then(data => setPackage(data))

    }, [])

    return (
        <div className="tour-Package">
            <Container>
                <Row>
                    <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={12} className=" mx-auto">
                       <div className="our-service">
                       <h1>Popular Tour Package</h1>
                        <p>Best Destinations for International Tour Packages · Vibrant nightlife. · Paris, Singapur, Bali · Bangkok, Phuket, Spain, New Zeland, Krabi, Dubai.</p>
                       </div>
                    </Col>
                
                </Row>
                <Row>
                    {
                        packages.map(singleTour => <TourDetails  singleTour={singleTour}/>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default TourPackage;
