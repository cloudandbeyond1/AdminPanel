import React, { Fragment } from "react";
import { Form } from "react-bootstrap";


const AddRestaurant = () => {
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
                           <h4 className="mb-3"><i class="fa fa-cutlery"></i> Restaurant Information</h4>
                           <hr className="mb-4" />
                           <form className="needs-validation" noValidate="">
                              <div className="row">
                                 <div className="col-md-4 mb-3">
                                    <label htmlFor="restaurantName">
                                    <span>*</span> Restaurant Name
                                    </label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="restaurantName"
                                       placeholder="Enter Restaurant Name"
                                       required
                                    />
                                    <div className="invalid-feedback">
                                    Restaurant Name  is required.
                                    </div>
                                 </div>
                                 

                                 <div class="form-group col-4 mb-1">
                                            <label><span class="text-danger">*</span> Restaurant Image</label>
                                            <div class="custom-file">
                                                <input type="file" name="cat_img" class="custom-file-input form-control" required=""/>
                                                <label class="custom-file-label">Choose Restaurant Image</label>
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

                                 <div className="col-md-4 mb-3">
                                    <label htmlFor="restaurantStatus">Restaurant Status</label>
                                    <Form.Control as="select">
                                       <option style={{ color: "blue" }}>
                                          Choose...
                                       </option>
                                       <option>Publish</option>
                                       <option>Unpublish</option>
                                    </Form.Control>

                                    <div className="invalid-feedback">
                                       Please provide a valid state.
                                    </div>
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
                                 <div className="col-md-4 mb-3">
                                    <label htmlFor="ratingNumber">
                                    <span>*</span> Rating
                                    </label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="ratingNumber"
                                       placeholder="Enter Rating"
                                       required
                                    />
                                    <div className="invalid-feedback">
                                       Valid rating is required.
                                    </div>
                                 </div>
                                 <div className="col-md-4 mb-3">
                                    <label htmlFor="deliveryTime"><span>*</span> Approx Delivery Time</label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="deliveryTime"
                                       placeholder="Enter Approx Delivery Time"
                                       required
                                    />
                                    <div className="invalid-feedback">
                                       Approx Delivery Time is required.
                                    </div>
                                 </div>

                                 <div className="col-md-4 mb-3">
                                    <label htmlFor="approxPrice">Approx Price for Two</label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="approxPrice"
                                       placeholder="Enter Approx Price for Two"
                                       required
                                    />
                                    <div className="invalid-feedback">
                                    Approx Price for Two is required.
                                    </div>
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
                                 <div className="col-md-4 mb-3">
                                    <label htmlFor="licenseCode">
                                    <span>*</span> Certificate/License Code
                                    </label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="licenseCode"
                                       placeholder="Enter Certificate/License Code"
                                       required
                                    />
                                    <div className="invalid-feedback">
                                       Valid rating is required.
                                    </div>
                                 </div>
                                 <div className="col-md-4 mb-3">
                                    <label htmlFor="lastName"><span>*</span> Mobile number(With country code + sign)</label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="deliveryTime"
                                       placeholder="Enter Mobile number"
                                       required
                                    />
                                    <div className="invalid-feedback">
                                    Mobile number is required.
                                    </div>
                                 </div>

                                 <div className="col-md-4 mb-3">
                                    <label htmlFor="lastName"><span>*</span> Short Description</label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="deliveryTime"
                                       placeholder="Enter Short Description"
                                       required
                                    />
                                    <div className="invalid-feedback">
                                    Short Description is required.
                                    </div>
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


                              <h4 className="mb-3"><i class="fa fa-sign-in"></i> Restaurant Login Information</h4>
                              <hr className="mb-4" />
                              <div className="row">
                              

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
                              <div className="col-md-6 mb-3">
                                 <label htmlFor="cc-number">
                                 <span>*</span> Password
                                 </label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    id="cc-number"
                                    placeholder="Enter Password"
                                    required
                                 />
                                 <div className="invalid-feedback">
                                 Password is required
                                 </div>
                              </div>
                           </div>


                           <h4 className="mb-3"><i class="fa fa-list-alt"></i> Restaurant Category Information</h4>
                              <hr className="mb-4" />
                              <div className="row">                             
                              <div className="col-md-12">

                              <label htmlFor="cc-name">
                              <span>*</span> Restaurant Category(Multiple Select)
                                 </label>

                              <div className="form-group">
                              <select placeholder="Choose Category" className="form-control">
                                 <option>Veg Only</option>
                                 <option>Express Delivery</option>
                                 <option>Offers Near You</option>
                                 <option>Top Rated</option>
                              </select>
                           </div>
                           </div>                          
                              
                           </div>



                           <h4 className="mb-3"><i class="fa fa-map-pin"></i> Restaurant Address Information</h4>
                              <hr className="mb-4" />

                              <div className="row">
                              <div className="col-md-12 mb-3">
                                 <label htmlFor="address"><span>*</span> Full Address</label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    placeholder="Enter Full Address"
                                    required=""
                                 />
                                 <div className="invalid-feedback">
                                    Please enter your shipping address.
                                 </div>
                              </div>
                              </div>


                              




                              
                              <div className="row">
                              

                                 <div className="col-md-6 mb-3">
                                    <label htmlFor="cc-name">
                                    <span>*</span> Pincode
                                    </label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="cc-name"
                                       placeholder="Enter Pincode"
                                       required
                                    />
                                    
                                    <div className="invalid-feedback">
                                       Pincode is required
                                    </div>
                                 </div>
                                 <div className="col-md-6 mb-3">
                                    <label htmlFor="cc-landmark">
                                    <span>*</span> Landmark
                                    </label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="cc-landmark"
                                       placeholder="Enter Landmark"
                                       required
                                    />
                                    <div className="invalid-feedback">
                                    Landmark is required
                                    </div>
                                 </div>

                                 
                                 <div className="col-md-6 mb-3">
                                    <label htmlFor="cc-name">
                                    <span>*</span> Latitude
                                    </label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="cc-name"
                                       placeholder="Enter Latitude"
                                       required
                                    />

                                   <small className="text-muted">
                                   You can use services like: https://www.mapcoordinates.net/en
                                   If you enter an invalid Latitude/Longitude the map system might crash with a white screen.
                                    </small>
                                    
                                    
                                    <div className="invalid-feedback">
                                    Latitude is required
                                    </div>
                                 </div>
                                 <div className="col-md-6 mb-3">
                                    <label htmlFor="cc-number">
                                    <span>*</span>  Longitude
                                    </label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="cc-number"
                                       placeholder="Enter Longitude"
                                       required
                                    />
                                    <div className="invalid-feedback">
                                    Longitude is required
                                    </div>
                                 
                              </div>
                              </div>


                              <h4 className="mb-3"><i class="fa fa-motorcycle"></i> Select Delivery Charge Type</h4>
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
                              <span>*</span> Restaurant Category(Multiple Select)
                              </label>

                              <div className="form-group">
                              <select placeholder="Select Type" className="form-control">
                              <option>Fixed Charge</option>
                                       <option>Dynamic Charge</option>
                              </select>
                           </div>
                           <div className="invalid-feedback">
                                       Please Select Delivery Charge Type.
                                    </div>
                           </div>                             
                           </div>

                           <div className="row">
                                 <div className="col-md-12 mb-3">
                                    <label htmlFor="deliveryCharge">
                                    <span>*</span> Delivery Charge
                                    </label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="deliveryCharge"
                                       placeholder="Enter Delivery Charge"
                                       required
                                    />
                                    <div className="invalid-feedback">
                                    Delivery Charge is required.
                                    </div>
                                 </div>
                              </div>

                              



                              <h4 className="mb-3"><i class="fa fa-motorcycle"></i> Restaurant Delivery Information</h4>
                              <hr className="mb-4" />
                              <div className="row">
                                 <div className="col-md-4 mb-3">
                                    <label htmlFor="ratingNumber">
                                    Store Charge (Packing/Extra)
                                    </label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="ratingNumber"
                                       placeholder="Enter Store Charge (Packing/Extra)"
                                       required
                                    />
                                    <div className="invalid-feedback">
                                       Valid Store Charge (Packing/Extra) is required.
                                    </div>
                                 </div>
                                 <div className="col-md-4 mb-3">
                                    <label htmlFor="deliveryTime"><span>*</span> Delivery Radius in Km</label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="deliveryTime"
                                       placeholder="Enter Delivery Radius in Km"
                                       required
                                    />
                                    <div className="invalid-feedback">
                                    Delivery Radius in Km is required.
                                    </div>
                                 </div>

                                 <div className="col-md-4 mb-3">
                                    <label htmlFor="approxPrice"><span>*</span> Min.Order Price</label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="approxPrice"
                                       placeholder="Enter Min.Order Price"
                                       required
                                    />
                                    <div className="invalid-feedback">
                                    Min.Order Price is required.
                                    </div>
                                 </div>    
                              </div>


                              <h4 className="mb-3"><i class="fa fa-motorcycle"></i> Restaurant Admin Commission</h4>
                              <hr className="mb-4" />
                              <div className="row">
                                 <div className="col-md-12 mb-3">
                                    <label htmlFor="ratingNumber">
                                    <span>*</span> Commission Rate %
                                    </label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="ratingNumber"
                                       placeholder="Enter Commission Rate"
                                       required
                                    />
                                    <div className="invalid-feedback">
                                    Commission Rate is required.
                                    </div>
                                 </div>
                              </div>


                              <h4 className="mb-3"><i class="fa fa-money"></i> Restaurant Payout Information</h4>
                              <hr className="mb-4" />

                              <div className="row">
                              <div className="col-md-6 mb-3">
                                 <label htmlFor="bank-name">
                                 <span>*</span> Bank Name
                                 </label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    id="bank-name"
                                    placeholder="Enter Bank Name"
                                    required
                                 />
                                 
                                 <div className="invalid-feedback">
                                 Bank Name is required
                                 </div>
                              </div>
                              <div className="col-md-6 mb-3">
                                 <label htmlFor="bank-code">
                                 <span>*</span> Bank Code/IFSC
                                 </label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    id="bank-code"
                                    placeholder="Enter Bank Code/IFSC"
                                    required
                                 />
                                 <div className="invalid-feedback">
                                 Bank Code/IFSC is required
                                 </div>
                              </div>
                           </div>

                           <div className="row">
                              <div className="col-md-6 mb-3">
                                 <label htmlFor="recipient-name">
                                 <span>*</span> Recipient Name
                                 </label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    id="recipient-name"
                                    placeholder="Enter Recipient Name"
                                    required
                                 />
                                 
                                 <div className="invalid-feedback">
                                 Recipient Name is required
                                 </div>
                              </div>
                              <div className="col-md-6 mb-3">
                                 <label htmlFor="account-number">
                                 <span>*</span> Account Number
                                 </label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    id="account-number"
                                    placeholder="Enter Account Number"
                                    required
                                 />
                                 <div className="invalid-feedback">
                                 Account Number is required
                                 </div>
                              </div>
                           </div>

                           <div className="row">
                              <div className="col-md-6 mb-3">
                                 <label htmlFor="cc-paypalid">
                                 <span>*</span> Paypal ID
                                 </label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    id="cc-paypalid"
                                    placeholder="Enter Paypal ID"
                                    required
                                 />
                                 
                                 <div className="invalid-feedback">
                                 Paypal ID is required
                                 </div>
                              </div>
                              <div className="col-md-6 mb-3">
                                 <label htmlFor="cc-upi">
                                 <span>*</span> UPI ID
                                 </label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    id="cc-upi"
                                    placeholder="Enter UPI ID"
                                    required
                                 />
                                 <div className="invalid-feedback">
                                 UPI ID is required
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

export default AddRestaurant;
