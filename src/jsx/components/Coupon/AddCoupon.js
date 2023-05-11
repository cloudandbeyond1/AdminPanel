import React, { Fragment } from "react";
import { Form } from "react-bootstrap";


const AddCoupon = () => {
   return (
      <Fragment>
         

         <div className="row">
            <div className="col-xl-12">
               <div className="card">
               <div class="card-body" data-select2-id="6">
               <h4 className="mb-3"><i class="fa fa-tag fa-lg"></i> Add Coupon</h4>
               <hr className="mb-4" />
                       <div class="row" data-select2-id="5">
                       <div class="col-md-4 col-lg-4 col-xs-12 col-sm-12">

								<div class="form-group">
									<label>Coupon Image</label>
									
									 <div class="custom-file">
                              <input type="file" name="f_up" class="custom-file-input" required=""/>
                              <label class="custom-file-label">Choose Coupon file</label>
                            </div>
								</div>
								</div>
								
								<div class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
								<div class="form-group">
									<label>Coupon Expiry Date</label>
									<input type="date" name="cdate" class="form-control" id="projectinput8" required=""/>
								</div>
								</div>
								
								<div class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
								<div class="form-group">								
									<label for="cname">Coupon Code </label>
									<div class="row">
								<div class="col-md-10 col-lg-10 col-xs-12 col-sm-12">
									<input type="text" id="ccode" class="form-control" onkeypress="return isNumberKey(event)" maxlength="8" name="ccode" required="" oninput="this.value = this.value.toUpperCase()"/>
									</div>
									
								<div class="col-md-2 col-lg-2 col-xs-12 col-sm-12">
									<button id="gen_code" class="btn btn-success"><i class="fa fa-refresh" aria-hidden="true"></i></button>
									</div>
									</div>
								</div>
								</div>
							
							 <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
								<div class="form-group">
									<label for="cname">Coupon title </label>
									<input type="text" class="form-control" name="ctitle" required=""/>
								</div>
							</div>

                     <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
								<div class="form-group">
									<label for="cname">Coupon subtitle </label>
									<input type="text" class="form-control" name="subtitle" required=""/>
								</div>
							</div>
  	

                     <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
								<div class="form-group">
									<label for="cname">Coupon Status </label>
									<select name="cstatus" class="form-control" required="">
									<option value="">Select Coupon Status</option>
									<option value="1">Publish</option>
									<option value="0">Unpublish</option>
									
									</select>
								</div>
							</div>	
							
							<div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">

								<div class="form-group">
									<label>Coupon Min Order Amount</label>
									<input type="number" id="cname" class="form-control" name="minamt" step="1" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57" required=""/>
								</div>
								</div>
								
 <div class="col-md-6 col-lg-6 col-xs-12 col-sm-12">
								<div class="form-group">
									<label for="cname">Coupon Value</label>
									<input type="number" id="cname" class="form-control" name="cvalue" step="1" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57" required=""/>
								</div>
							</div>
 <div class="col-md-6 col-lg-6 col-xs-12 col-sm-12" data-select2-id="4">
 <div class="form-group" data-select2-id="3">
 <label for="cname">Select Restuarant</label>
<select name="restsearch[]" id="product" class="select2-multi-select-resturant form-control select2-hidden-accessible" required="" multiple="" data-select2-id="product" tabindex="-1" aria-hidden="true">
									   										   <option value="1" data-select2-id="17">M H Maisur House &amp; Fency Dhosa</option>
										   										   <option value="2" data-select2-id="18">KHODIYAR KRUPA DABELI &amp; VADAPAV</option>
										   										   <option value="3" data-select2-id="19">Patel's Puff House</option>
										   										   <option value="4" data-select2-id="20">Navjivan Restaurant</option>
										   										   <option value="5" data-select2-id="21">B and G Food Campus</option>
										   										   <option value="6" data-select2-id="22">McDonald's</option>
										   										   <option value="7" data-select2-id="23">Burger King</option>
										   										   <option value="8" data-select2-id="24">Mahesh Pav Bhaji</option>
										   										   <option value="9" data-select2-id="25">CRACKED EGG</option>
										   										   <option value="10" data-select2-id="26">Baskin Robbins</option>
										   										   <option value="11" data-select2-id="27">YO YO FRANKIE AND MAGGI</option>
										   										   <option value="12" data-select2-id="28">Domino's Pizza</option>
										   									   </select>
									   </div>
									   </div>
									   
							<div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
															<div class="form-group">
																<label for="cname">Coupon Description </label>

															</div>
													<div className="col-sm-12">	
																<textarea
																	className="form-control"
																	id="val-suggestions"
																	name="val-suggestions"
																	rows="5"										 
																></textarea>
															</div>
														</div>							
															
														</div>
																	
																	
																</div>
										</div>
										</div>
									</div>
								</Fragment>
   );
};

export default AddCoupon;
