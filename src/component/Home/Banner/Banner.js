import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';



import './Banner.css'

const Banner = () => {

    return (
        <Row className="p-0 m-0">
            <Col lg={12} sm={12} xs={12} className="p-0 m-0">
                <div className="banner-container">
                    <Container>
                        <Row>
                            <Col xxl={6} lg={6} md={6} sm={12} xs={12}>

                                <h1 className="banner-heading">Travel <small className="banner-small">Explore us all</small></h1>
                                <p className="text-white banner-tagline">We have picked 50 of the most beautiful places in the world </p>
                                <p className="text-white banner-tagline"> to add to your travel list, from flamingo-pink lakes in Mexico and vast.</p>
                                <button className="btn btn-regular">Booking</button>
                            </Col>
                        </Row>
                    </Container>

                </div>
            </Col>
        </Row>
    );
};

export default Banner;