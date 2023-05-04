import React, { Fragment } from "react";
import { Form } from "react-bootstrap";


const Merchant = () => {

   const styles = {
		radiobtn: {
		  marginRight: "20px !important",
		  marginTop: "0px !important",
		},
		
	  }
     
   return (
      <Fragment>
         

         <div className="row">
            <div className="col-xl-12">
               <div className="card">
                  <div className="card-body">
                     <div className="row">
                        {/* <div className="col-md-4 order-md-2 mb-4">
                           <h4 className="d-flex justify-content-between align-items-center mb-3">
                              <span className="text-muted">Your cart</span>
                              <span className="badge badge-primary badge-pill">
                                 3
                              </span>
                           </h4>
                           <ul className="list-group mb-3">
                              <li className="list-group-item d-flex justify-content-between lh-condensed">
                                 <div>
                                    <h6 className="my-0">Product name</h6>
                                    <small className="text-muted">
                                       Brief description
                                    </small>
                                 </div>
                                 <span className="text-muted">$12</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between lh-condensed">
                                 <div>
                                    <h6 className="my-0">Second product</h6>
                                    <small className="text-muted">
                                       Brief description
                                    </small>
                                 </div>
                                 <span className="text-muted">$8</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between lh-condensed">
                                 <div>
                                    <h6 className="my-0">Third item</h6>
                                    <small className="text-muted">
                                       Brief description
                                    </small>
                                 </div>
                                 <span className="text-muted">$5</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between active">
                                 <div className="text-white">
                                    <h6 className="my-0 text-white">
                                       Promo code
                                    </h6>
                                    <small>EXAMPLECODE</small>
                                 </div>
                                 <span className="text-white">-$5</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between">
                                 <span>Total (USD)</span>
                                 <strong>$20</strong>
                              </li>
                           </ul>

                           <form onSubmit={(e) => e.preventDefault()}>
                              <div className="input-group">
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Promo code"
                                 />
                                 <div className="input-group-append">
                                    <button
                                       type="submit"
                                       className="btn btn-primary"
                                    >
                                       Redeem
                                    </button>
                                 </div>
                              </div>
                           </form>
                        </div> */}
                        <div className="col-md-12 order-md-1">
                           <h4 className="mb-3"> Details</h4>
                           <hr className="mb-4" />
                           <form className="needs-validation" noValidate="">
                              <div className="row">
                                 <div className="col-md-6 mb-3">
                                    <label htmlFor="businessName">
                                    <span>*</span> Business Name
                                    </label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="businessName"
                                       placeholder="Enter Business Name"
                                       required
                                    />
                                    <div className="invalid-feedback">
                                    Business Name  is required.
                                    </div>
                                 </div>

                                 <div className="col-md-6 mb-3">
                                 <label htmlFor="cc-name">
                                 <span>*</span> Email Address
                                 </label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    id="cc-name"
                                    placeholder="Enter Email Address"
                                    required
                                 />
                                 
                                 <div className="invalid-feedback">
                                 Email Address is required
                                 </div>
                              </div>
                                 

                                 {/* <div   className="col-md-4 mt-5">                           
                                 
                                 {/* <label htmlFor="restaurantImage">
                                 Restaurant Image
                                    </label> */}
                                   
                                 {/* <input 
                                    type="file"
                                    className="custom-file-input form-control"                                    />
                                 <label className="custom-file-label">
                                    Choose Restaurant Image
                                 </label>                           
                           
                           </div> */} 
                              
                                 


                                 {/* <div className="col-md-4 mb-3">
                                    <label htmlFor="lastName">Restaurant Image</label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="lastName"
                                       placeholder=""
                                       required
                                    />
                                    <div className="invalid-feedback">
                                       Valid last name is required.
                                    </div>
                                 </div> */}

                                 
                                    <div className="col-md-12 mb-3">
                                       <label htmlFor="description">Description</label>
                                       <div class="form-group"><textarea class="form-control" rows="4" id="comment"></textarea></div>
                                    </div>
                                    {/* <div className="col-md-4 mb-3">
                                       <label htmlFor="restaurantStatus">Restaurant Status</label>
                                       <input
                                          type="text"
                                          className="form-control"
                                          id="restaurantStatus"
                                          placeholder=""
                                          required
                                       />
                                    
                                    </div> */}


                              </div>



                              <div className="row">

                              <div className="col-md-6 mb-3">
                           <h4 className="mb-3"> Address </h4>
                           </div>
                           <div className="col-md-6 mb-3 justify-content-end d-flex">
                           <div class="form-check form-switch ">
                           <label class="form-check-label mb-1" style={styles.radiobtn} for="flexSwitchCheckDefault">Make visible to public API</label>
                           <input class="form-check-input ml-2" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                           
                           </div></div></div>

                              <hr className="mb-4" />

                              <div className="row">
                              <div className="col-md-12 mb-3">
                                 <label htmlFor="address"><span>*</span> Street</label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    id="street"
                                    placeholder="Enter your street"
                                    required=""
                                 />
                                 <div className="invalid-feedback">
                                    Please enter your street address.
                                 </div>
                              </div>
                              </div>
                              
                              <div className="row">
                              

                                 <div className="col-md-6 mb-3">
                                    <label htmlFor="cc-name">
                                    <span>*</span> City
                                    </label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="city-name"
                                       placeholder="Enter City"
                                       required
                                    />
                                    
                                    <div className="invalid-feedback">
                                       City is required
                                    </div>
                                 </div>
                                 <div className="col-md-6 mb-3">
                                    <label htmlFor="state">
                                    <span>*</span> State
                                    </label>
                                    <div className="form-group">
                              <select placeholder="Select Type" className="form-control">
                              <option>Andhra Pradesh</option>
                                       <option>Tamilnadu</option>
                              </select>
                           </div>
                                    <div className="invalid-feedback">
                                    State is required
                                    </div>
                                 </div>

                                 
                                 <div className="col-md-6 mb-3">
                                    <label htmlFor="postalcode">
                                    <span>*</span> Postal code
                                    </label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="postalcode"
                                       placeholder="Enter Postal Code"
                                       required
                                    />
                                    
                                    <div className="invalid-feedback">
                                    Postal code is required
                                    </div>
                                 </div>
                                 <div className="col-md-6 mb-3">
                                    <label htmlFor="state">
                                    <span>*</span> Country
                                    </label>
                                    <div className="form-group">
                              <select placeholder="Select Type" className="form-control">
                              <option>India</option>
                                       <option>United States</option>
                              </select>
                           </div>
                                    <div className="invalid-feedback">
                                    Country is required
                                    </div>
                                 </div>
                              </div>


                              <h4 className="mb-3">Currency</h4>
                              <hr className="mb-4" />
                              {/* <div className="col-md-12 mb-3">
                                    <label htmlFor="state">Delivery Charge Type</label>
                                    <Form.Control as="select">
                                       <option style={{ color: "blue" }}>
                                          Select Type
                                       </option>
                                       <option>Fixed Charge</option>
                                       <option>Dynamic Charge</option>
                                    </Form.Control>

                                    <div className="invalid-feedback">
                                       Please Select Delivery Charge Type.
                                    </div>
                                 </div> */}
                           


                              <div className="row">                             
                              <div className="col-md-12">
                              <label htmlFor="cc-name">
                              <span>*</span> Currency
                              </label>

                              <div className="form-group">
                              <select placeholder="Select Type" className="form-control">
                              <option>INR Indian Rupee</option>
                                       <option>US Dollars</option>
                              </select>
                           </div>
                           <div className="invalid-feedback">
                                       Select Dollars.
                                    </div>
                           </div>                             
                           </div>

                           <h4 className="mb-3">Google Analytics</h4>
                              <hr className="mb-4" />
                              <div className="row">
                              

                              <div className="col-md-6 mb-3">
                                 <label htmlFor="track-id">
                                 <span>*</span> Tracking ID
                                 </label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    id="track-id"
                                    placeholder="Enter Tracking ID"
                                    required
                                 />
                                 
                                 <div className="invalid-feedback">
                                    Tracking ID is required
                                 </div>
                              </div>
                              <div className="col-md-6 mb-3">
                                 <label htmlFor="domain-name">
                                 <span>*</span> Linkedin Domain Name
                                 </label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    id="domain-name"
                                    placeholder="Enter Linked Domain Name"
                                    required
                                 />
                                 
                                 <div className="invalid-feedback">
                                    Domain name is required
                                 </div>
                              </div>
                              
                           </div>

                             


                              <button
                                 className="btn btn-primary btn-sm"
                                 type="submit">
                                 Add Restaurant
                              </button>
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

export default Merchant;
