import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddService.css'


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://vast-eyrie-19386.herokuapp.com/services', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Successfully')
                reset()
            
            }
        }
  )
    }
    return (
        <div className="AddService">
          <Container>
              <Row>
           <Col xxl={6} xl={6} lg={6} md={8} sm={12} xs={12} className="mx-auto">
           <h1 className="text-center">Add a new Package </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", { required: true, maxLength: 100 })} placeholder="Title 1"/>
                <input {...register("title2")} placeholder="Title 2"/>
                <textarea {...register("short_desc", {required:true})}placeholder="Short Description" />
                <textarea {...register("long_desc")}placeholder="Long Description" />
                <input type="number" {...register("price")} placeholder="Price"/>
                <input {...register("day1")} placeholder="Day 1"/>
                <input {...register("day2")} placeholder="Day 2"/>
                <input {...register("day3")} placeholder="Day 3"/>
                <input {...register("time_zone")} placeholder="Time"/>
                <input {...register("img", {required:true})} placeholder="img"/>
            
                 <button className="btn btn-regular w-100 " type="submit">Add Package</button>
            </form>
           </Col>
              </Row>
          </Container>
        </div>
    );
};

export default AddService;