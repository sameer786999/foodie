import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function SignUp() {

    const [credentials,setcredentials]=useState({name:"",email:"",password:"",geolocation:""});

   const handleSubmit = async (e) => {
     e.preventDefault(); // a synthetic event
     try {
       const response = await fetch("https://localhost:5000/api/createuser", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
           name: credentials.name,
           email: credentials.email,
           password: credentials.password,
           location: credentials.geolocation,
         }),
       });

      

       const json = await response.json();
       console.log(json);

       if (!json.success) {
         alert("Enter valid credentials");
       }
     } catch (error) {
       console.error("Error:", error.message);
     }
   };


    const onChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})

    }
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={credentials.name}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
             Location
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
           
              name="geolocation"
              value={credentials.geolocation}
              onChange={onChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to={"/login"} className="m-3 btn btn-danger">
            Already a user
          </Link>
        </form>
      </div>
    </>
  );
}
