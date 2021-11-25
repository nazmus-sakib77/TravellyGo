import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Place from './Place/Place';
import './Popular.css'

const Popular = () => {

const popularPlace = [
    {img:'https://i.ibb.co/FmHxs48/1.jpg', id:1, title:'Bali, Indonesia'},
    {img:'https://i.ibb.co/rQppL2C/2.jpg', id:2, title:'Crete, Greece '},
    {img:'https://i.ibb.co/jMxvcJR/3.jpg', id:3, title:'Barcelona, Spain'},
    {img:'https://i.ibb.co/yQ50tvm/4.jpg', id:4, title:'Paris, France'},
    {img:'https://i.ibb.co/GTZqmSJ/5.jpg', id:5, title:'Thailand'},
    {img:'https://i.ibb.co/DgFs4Fx/6.jpg', id:6, title:'Dubai, UAE'}
]

    return (
        <div className="popular-place">
            <Container>
            <Row>
                    <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={12} className=" mx-auto">
                       <div className="our-service">
                       <h1>Popular Destinations</h1>
                        <p>Destinations. Hand-picked recommendations for your consideration! We invite you to browse our wide and exciting selection of countries and destinations</p>
                       </div>
                    </Col>
                </Row>
                <Row>
                    {
                        popularPlace.map(place => <Place key={place.id} place={place}></Place>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Popular;