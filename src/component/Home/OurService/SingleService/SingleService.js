import React from 'react';
import { Col } from 'react-bootstrap';
import './SingleService.css'
const SingleService = ({service}) => {
    const {id, title, desc, icon} = service;
    return (
        <>
            <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
                <div className="singleService">
                    <div className="icon">
                    <i className={icon}></i>

                    </div>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
            </Col>
        </>
    );
};

export default SingleService;