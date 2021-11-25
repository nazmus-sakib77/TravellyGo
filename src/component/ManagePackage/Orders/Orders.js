import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import './Orders.css'

const Orders = (props) => {
    const {image, user, phone, _id, title_order, address, amount} = props.order;
    const {handleDeleteUser} = props;
    console.log(props)

    return (
        <div className="my-all-order">
             <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={12}>
                    <div className="order-al shadow">
                    <Row>
                           <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
                            <Image src={image} className="img-fluid" />
                            </Col>
                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
                                <div className="myOrder">
                                    <h2><b> Order Name: </b>{title_order}</h2>
                                    <h2><b> Name: </b>{user}</h2>
                                    <h5><b> Phone: </b>{phone}</h5>
                                    <h5><b> Location:</b>{address}</h5>
                                    <h5>Price: {amount}</h5>
                                    <button className="btn btn-regular " onClick={() => handleDeleteUser(_id)}>Cancel Your Order</button>
                                </div>
                            </Col>
                      </Row>
                    </div>
             </Col>
        </div>
    );
};

export default Orders;