import React, { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
   const [registrationData, setRegistrationData] = useState({});
   const handleBlur = (e) => {
      const newRegistrationData = { ...registrationData };
      newRegistrationData[e.target.name] = e.target.value;
      setRegistrationData(newRegistrationData);
   };
   const submitHandler = (e) => {
      e.preventDefault();
      
   };
   return (
      <div className="row justify-content-center  align-items-center h-80">
         <div className="col-md-6">
            <div className="authincation-content">
               <div className="row no-gutters">
                  <div className="col-xl-12">
                     <div className="auth-form">
                        <div className="text-center mb-3">
                          <h4 className="text-center mb-4">Sign up your account</h4>
                        </div>
                        
                        <form
                           action=""
                           onSubmit={(e) => e.preventDefault(submitHandler)}
                        >
                           <div className="form-group">
                              <label className="mb-1 "> <strong>Username</strong> </label>
                              <input
                                 type="text"
                                 className="form-control"
                                 placeholder="username"
                                 name="name"
                                 onChange={handleBlur}
                              />
                           </div>
                           <div className="form-group">
                              <label className="mb-1 ">   <strong>Email</strong>  </label>
                              <input  type="email" className="form-control"  placeholder="hello@example.com"  name="Email"  onChange={handleBlur}   />
                           </div>
                           <div className="form-group">
                              <label className="mb-1 ">   <strong>Password</strong>  </label>
                              <input type="password" className="form-control" value="Password"  onChange={handleBlur}  />
                           </div>
                           <div className="text-center mt-4">
                           <Link to="/Dash"><button type="submit" className="btn btn-primary btn-block"  onClick={() => submitHandler} >  Sign me up  </button></Link>
                           </div>
                        </form>
                        <div className="new-account mt-3">
                           <p className="">
                              Already have an account?{" "}
                              <Link className="text-primary" to="/page-login">
                                 Sign in
                              </Link>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Registration;
