import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row className="p-0 m-0">
                    <Col md={4}>
                        <div className="widget">
                            <Link to="/home" className="mb-4">
                                <Image className="" src={logo} alt="Maxon" />
                            </Link>
                            <p className="widget-p">Travelly Go is the country’s first and leading online travel aggregator. Initially started with the name Travel Booking BD, we had a dream to make travel easier for people.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="widget widget-address ">
                            <h3 className="widget-title">Contact Info</h3>
                            <address>
                                <span><i className="fas fa-map-marker-alt text-white "></i>67 Sasha Cove,67 Sasha Cove Eest</span>
                                <a href="tel:+0263949822698" className="text-decoration-none "><i className="fas fa-phone-alt text-white "></i> +9617617617</a>
                                <a href="mailto:info@t.com" className="text-decoration-none "><i className="fas fa-envelope text-white"></i> info@travellygo.com</a>
                            </address>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="widget">
                            <h3 className="widget-title"> Find us On</h3>
                            <div className="d-flex">
                                <Row className="p-0 m-0 widget-address">
                                    <a href="https://www.facebook.com" target="_blank" className="m-0"> <i className="fab fa-facebook"> </i> Facebook</a>
                                    <a href="https://www.instagram.com" target="_blank"> <i className="fab fa-instagram"> </i> Instagram</a>
                                    <a href="https://www.twitter.com" target="_blank"> <i className="fab fa-twitter"> </i> Twitter</a>
                                </Row>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div >
    );
};

export default Footer;