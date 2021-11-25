import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './TourDetails.css'

const TourDetails = ({singleTour}) => {
    const {img, title, time_zone, short_desc, _id, price} = singleTour;
    const history = useHistory()
    const goToBooking = () => {
            history.push(`/seeDetails/${_id}`)
    }
    return (
        <>
           <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
           <div className="single-item shadow">
           <Image  src={img} className="img-fluid"/>
              <div className="rating">
                  <h2>{title}</h2>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                
                  <h5>{time_zone}</h5>
                  <p>{short_desc}</p>
               
                    <div className="d-flex justify-content-between">
                    <h3>${price}</h3>
                  
                    <button className="btn btn-regular" onClick={() => goToBooking(_id)}>See Details </button>
                    </div>
              </div>
           </div>
           </Col>
        </>
    );
};

export default TourDetails;