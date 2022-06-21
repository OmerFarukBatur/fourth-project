import React from "react";
import { useFormik } from "formik";

import validations  from "./validations";

function Signup() {

    const{handleSubmit, handleChange, values, errors, touched, handleBlur} = useFormik({
        initialValues:{
            email:"",
            password:"",
            passwordConfirm:""
        },
        onSubmit: (values) =>{
            console.log(values);
        },
        validationSchema: validations
    });



  return (
    <div>
        <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <br></br>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           <br></br>
           {errors.email && touched.email &&<div class="error">{errors.email}</div>}
           <br></br>


           <label>Password</label>
           <br></br>
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />

            <br></br>
            {errors.password && touched.password &&  <div class="error">{errors.password}</div>}
            <br></br>

            <label>Password Confirm</label>
            <br></br>
           <input
             type="password"
             name="passwordConfirm"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.passwordConfirm}
           />

           <br></br>
           {errors.passwordConfirm && touched.passwordConfirm && <div class="error">{errors.passwordConfirm}</div>}
            <br></br>

           <button type="submit" >
             Submit
           </button>


           <br></br>
            <br></br>

            <code>{JSON.stringify(values)}</code>

         </form>
    </div>
  )
}

export default Signup
