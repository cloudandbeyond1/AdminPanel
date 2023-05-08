import React, { Fragment } from "react";
import { Link } from "react-router-dom";
//** Import Profile Img */


const AddCustomer = () => {
   return (
      <Fragment>
         <div className="row">
            <div className="col-xl-12 col-xxl-12 col-lg-12">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="card profile-card">
                        <div className="card-header flex-wrap border-0 pb-0">
                           <h3 className="fs-24 text-black font-w600 mr-auto mb-2 pr-3">
						   Add Customer
                           </h3>
                           
                           <Link
                              to="#"
                              className="btn btn-dark light btn-rounded mr-3 mb-2"
                           >
                              Cancel
                           </Link>
                           <Link
                              className="btn btn-primary btn-rounded mb-2"
                              to="#"
                           >
                              Save Changes
                           </Link>
                        </div>
                        <div className="card-body">
                           <form>
                              <div className="mb-3">
                                 <div className="title mb-4">
                                    <span className="fs-18 text-black font-w600">
                                       General Details
                                    </span>
                                 </div>
                                 <div className="row">
                                    <div className="col-md-6">
                                       <div className="form-group">
                                          <label>First Name</label>
                                          <input
                                             type="text"
                                             className="form-control"
                                             placeholder="Enter name"
                                          />
                                       </div>
                                    </div>
                                    
                                    <div className="col-md-6">
                                       <div className="form-group">
                                          <label>Last Name</label>
                                          <input
                                             type="text"
                                             className="form-control"
                                             placeholder="Last name"
                                          />
                                       </div>
                                    </div>
                                    
                                    
                                    
                                 </div>
                              </div>
                              <div>
                                 <div className="title mb-4">
                                    <span className="fs-18 text-black font-w600">
                                       Contact Details
                                    </span>
                                 </div>
                                 <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                       <div className="form-group">
                                          <label>MobilePhone</label>
                                          <div className="input-group input-icon mb-3">
                                             <div className="input-group-prepend">
                                                <span
                                                   className="input-group-text"
                                                   id="basic-addon1"
                                                >
                                                   <i
                                                      className="fa fa-phone"
                                                      aria-hidden="true"
                                                   ></i>
                                                </span>
                                             </div>
                                             <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Phone no."
                                             />
                                          </div>
                                       </div>
                                    </div>
                                    
                                    <div className="col-md-6">
                                       <div className="form-group">
                                          <label>Email</label>
                                          <div className="input-group input-icon mb-3">
                                             <div className="input-group-prepend">
                                                <span
                                                   className="input-group-text"
                                                   id="basic-addon3"
                                                >
                                                   <i className="las la-envelope"></i>
                                                </span>
                                             </div>
                                             <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter email"
                                             />
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="form-group">
                                          <label>Address</label>
                                          <div className="input-group">
                                             <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter address"
                                             />
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="form-group">
                                          <label>Joining date</label>
                                          <div className="input-group">
                                             <input
                                                type="date"
                                                className="form-control"
                                                placeholder="Enter adress"
                                             />
                                          </div>
                                       </div>
                                    </div>
                                    
                                 </div>
                              </div>
                              
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
                     </div>
      </Fragment>
   );
};

export default AddCustomer;
