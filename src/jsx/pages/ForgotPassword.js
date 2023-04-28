import React, { useState } from "react";

const ForgotPassword = () => {
   const [forgotData, setForgotData] = useState({});
   const handleBlur = (e) => {
      const newForgotData = { ...forgotData };
      newForgotData[e.target.name] = e.target.value;
      setForgotData(newForgotData);
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
                        <h4 className="text-center mb-4">
                           Forgot Password
                        </h4>
                        <form
                           action="./index"
                           onSubmit={(e) => e.preventDefault(submitHandler)}
                        >
                           <div className="form-group">
                              <label> <strong>Email</strong>  </label>
                              <input
                                 type="email"
                                 className="form-control"
                                 value="hello@example.com"
                                 onChange={handleBlur}
                              />
                           </div>
                           <div className="text-center">
                              <button
                                 type="submit"
                                 className="btn btn-primary btn-block"
                                 onClick={() => submitHandler}
                              >
                                 SUBMIT
                              </button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ForgotPassword;
