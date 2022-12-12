import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { userContext } from "../../App";
import './Shipment.css'

export default function Shipment() {
  const[authUser] = useContext(userContext)
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data)

    }
   
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
      <input {...register("firstName", { required: true, maxLength: 20 })} placeholder='Enter your Name' defaultValue={authUser.displayName}/> <br />
      <input type="number" {...register("age", { min: 18, max: 99 })} placeholder='Enter your Age'/> <br />
      <input {...register("address", { required: true, maxLength: 30 })} placeholder='Enter your Address'/> <br />
      <input placeholder='Enter your Email' defaultValue={authUser.email}/> <br />
      <input type="tel" placeholder='Your Phone Number' defaultValue={authUser.number}/> <br />
      <input type="submit" />
    </form>
  );
}