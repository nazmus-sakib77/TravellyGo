import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../../../useAuth/useAuth';
import './SeeDetails.css';

const Booking = () => {
    const {user} = useAuth() 
    const {id} = useParams()
    const [seeDetails, setSeeDetails] = useState({})
    useEffect(() => {
        fetch(`https://vast-eyrie-19386.herokuapp.com/services/${id}`)
        .then(res => res.json())
        .then(data => setSeeDetails(data))

    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const process = window.confirm('Are you Sure Order')
        console.log(data)
        if(process){
            axios.post('https://shrieking-hollow-72956.herokuapp.com/order', data)
            .then(res => {
                if(res.data.insertedId){
                    alert('Successfully')
                    reset()
                }
            }
          )
        }
 
    }
    const {img, long_desc, title, title2, day1, day2, day3, price, time_zone} = seeDetails
    return (
        <>
        {/* booking-container */}
        <div className="booking-container">
            <h1 className="text-center text-white">Tour details</h1>
        </div>
        {/* booking-container */}
       <div className="order-details-more">
       <Container>
             <Row>
                 {/* "see-details */}

                 <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={12}>
                     <div className="see-details">
                         <Image src={img} className="img-fluid"/>
                         <div className="information mt-2">
                             <h5 className="text-primary">{time_zone}</h5>
                             <h1>{title}</h1>
                             <p>{long_desc}</p>
                             <h1 className="title2">{title2}</h1>
                             <p><strong> Day-1:</strong> {day1}</p>
                             <p><strong> Day-2:</strong> {day2}</p>
                             <p><strong> Day-3:</strong> {day3}</p>
                         </div>
                     </div>
                 </Col>

                 {/* "see-details */}

                  {/* /* place-order */  }
                 <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
                    <div className="place-order">
                    <h1 className="text-center">Place Your Order</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="form-control" {...register("user")} value={user.displayName}/>
                            <input className="form-control" type="email" {...register("email")} value={user.email}/>
                            <input className="form-control" {...register("title_order")} value={title}/>
                            <input className="form-control" {...register("Time")} value={time_zone}/>
                            <input className="form-control"  {...register("amount")} value={price}/>
                            <input className="form-control" type="phone" {...register("phone", { required: true})} placeholder="phone number" required/>
                            <input className="form-control" type="text" {...register("address", { required: true})} placeholder="address" required/>
                            <input className="form-control"  {...register("image")} value={img} />
                            <button className="btn btn-regular w-100 " type="submit">Place Order</button>
                        </form>
                    </div>
                 </Col>

                  {/* /* place-order */  }
             </Row>
         </Container>
       </div>
        </>
    );
};

export default Booking;