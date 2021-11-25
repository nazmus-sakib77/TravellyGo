import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleService from './SingleService/SingleService';
import './OurService.css';

const OurService = () => {
    const services = [
        {id:1,title:'Hotel Booking', icon:'fa fa-bed', desc:'We help millions of travelers each year compare deals for hotels and accommodations'},
        {id:2,title:'Flight Booking', icon:'fa fa-plane', desc:'Flight ticket booking travel is made simpler with our round trip and multicity options.'},
        {id:3,title:'Ticket Booking', icon:'fas fa-ticket-alt', desc:'Find cheap flight tickets at lowest airfare on airline tickets around the world.'},
        {id:4,title:'Cruises Booking', icon:'fa fa-ship', desc:'Here We give you best option to book a cruise with no booking fees and the best price guaranteed.'},
        {id:5,title:'Rail Booking', icon:'fa fa-train', desc:'Railway tickets without fees and overpayments. If you are tired of waiting at the ticket office, Hassle Free'},
        {id:6,title:'Holiday Booking', icon:'fa fa-home', desc:'Thousands of Vacation Rentals, Cabins, Beach Houses and More on HolidayLettings. Find Amazing Deals, Real Reviews'},
    ]
    return (
        <div className="Ourservice_container" id="service">
            <Container>
                <Row>
                    <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={12} className=" mx-auto">
                       <div className="our-service">
                       <h1>Our Services</h1>
                        <p>Largest online hotel booking service in Bangladesh, Big savings on hotels in bangladesh and destinations around the worldwide, Find the guaranteed best.</p>
                       </div>
                    </Col>
                </Row>
                <Row>
                      {
                          services.map(service => <SingleService key={service.id} service={service}></SingleService>)
                      }
                </Row>
            </Container>
            
        </div>
    );
};

export default OurService;