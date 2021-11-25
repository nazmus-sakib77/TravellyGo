import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import Orders from './Orders/Orders';
import './ManagePackage.css'

const ManagePackage = () => {

 const [orders, setOrder] = useState([])

 useEffect(() => {
       fetch('https://shrieking-hollow-72956.herokuapp.com/order')
       .then(res => res.json())
       .then(data => setOrder(data))
 }, [])
    // delete an order 
    const handleDeleteUser = id => {
        const process = window.confirm('Are You Sure Cancel Order')
        if(process){
            const url = `https://shrieking-hollow-72956.herokuapp.com/order/${id}`
            fetch(url, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('Successfully')
                    const remainingUsers = orders.filter(order => order._id !== id)
                    setOrder(remainingUsers)
                }
           
            })
         
        }
    }
     // delete an user 
    return (
        <>
          <div className="booking-container">
              <h1 className="text-center text-white">Manage All Order</h1>
          </div>
          <div className="order-all-pack">
          <Container>
              <Row>
                 {
                     orders.map(order => <Orders
                     handleDeleteUser={handleDeleteUser}
                     order={order}
                     ></Orders>)
                 }
              </Row>
          </Container>
          </div>
        </>
    );
};

export default ManagePackage;