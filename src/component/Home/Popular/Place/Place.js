import React from 'react';
import { Col, Image } from 'react-bootstrap';
import './Place.css'

const Place = ({place}) => {
    const {img, title, id} = place;
    return (
        <>
            <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                <div className="popular_place">
                 <figure>
                 <Image src={img} className="img-fluid"/>
                    <figcaption>
                       {title}
                       <button className="btn btn-regular ms-5">Booking</button>
                    </figcaption>
                 </figure>

                </div>
            </Col>
        </>
    );
};

export default Place;