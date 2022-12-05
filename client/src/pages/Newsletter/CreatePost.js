
//ADDING formik (npm install formik)
//allows us to make forms that are easier to validate etc
//gives errors automatically ^
//allows you to not have to do it manually with the html tags aka <required>

//ADDING yup (npm install yup)
//this allows us to validate info
//ex: if you been on a website saw a form that require a password btwn 10 characters or special character
//aka called form validation--yup allows us to do that easier

import React from 'react'
import {Formik, Form, Field} from 'formik';
import * as Yup from "yup";
import axios from 'axios';
//import {useNavigate} from "react-router-dom"; //importing
import  '../Newsletter/Newsletter.css';

function CreatePost() {

    const initialValues = {
        first_Name:"",
        last_Name:"",
        Email:"",
        Phone_Number:"",
    };

    //this is where we are using YUP for the from validation
    const validationSchema= Yup.object().shape({
        first_Name:Yup.string().required("Please enter first name"),
        last_Name:Yup.string().required("Please enter a last name"),
        Email:Yup.string().required("Please enter an email"),
        Phone_Number:Yup.string().min(10).max(15).required("Please enter phone number"),
    });

    //this is where we are using the post request to be able to create a new post and then using
    //a promise to send it to the database
    //i included the resetForm inside line 38 so that once its in the database the form clears

    //let navigate = useNavigate(); declaring varibale so we can use in line 49

    //wanna call the post request when we submit the form
    //make sure to change the navigate bc rn its taking us back to the home page
    const onSubmit = (data, {resetForm}) =>{
        axios.post("http://localhost:3001/posts",data).then((response)=>{
            console.log("It worked! It's in the database")
            resetForm({data: ''})
           // navigate("/");//this is redirecting us back to the home so we can have visual confirmation
      });
    };

  

  return (
    <div className="container">

   <Formik 
   initialValues={initialValues} 
   onSubmit={onSubmit} 
   validationSchema={validationSchema}>

  
            <Form className="formContainer">

            <div className="contact-box">
            <div className='left'></div>
            <div className='right'>
            <h2>Join our Newsletter</h2>

                <Field 
                id="inputCreatePost" 
                name="first_Name" 
                placeholder="First Name"
                required
                />

                <Field  
                id="inputCreatePost"
                 name="last_Name" 
                 placeholder="Last Name"
                 required
                 />
                
                <Field  
                id="inputCreatePost" 
                name="Email" 
                placeholder="Email"
                required
                />

                <Field  
                id="inputCreatePost" 
                name="Phone_Number" 
                placeholder="Phone Number"
                required
                />
                
                <br>
                </br>
                <br></br>

                <button className='btn' type="submit">Sign Me Up</button>
                </div>
                </div>
                
            </Form>    
    </Formik>

       </div>
  );
}

export default CreatePost

