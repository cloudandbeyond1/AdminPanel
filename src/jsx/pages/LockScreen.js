import React, { useState } from "react";

const LockScreen = () => {
   const [lockScreenData, setLockScreenData] = useState({});
   const handleBlur = (e) => {
      const newLockScreenData = { ...lockScreenData };
      newLockScreenData[e.target.name] = e.target.value;
      setLockScreenData(newLockScreenData);
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
                        <h4 className="text-center mb-4 "> Account Locked   </h4>
                        <form  action=""   onSubmit={(e) => e.preventDefault(submitHandler)} >
                           <div className="form-group">
                              <label className="">  <strong>Password</strong>  </label>
                              <input type="password" className="form-control" value="password" onChange={handleBlur} />
                           </div>
                           <div className="text-center">
                              <button  type="submit"   className="btn btn-primary btn-block"  onClick={() => submitHandler}> Unlock </button>
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

export default LockScreen;
