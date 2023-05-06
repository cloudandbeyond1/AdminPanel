import React, { Fragment } from "react";
import { Form } from "react-bootstrap";
import {
    Row,
    Col,
    Card,
    Table,
    Badge,
    Dropdown,
    ProgressBar,
 } from "react-bootstrap";
 


const Shipping = () => {

   const styles = {
		radiobtn: {
		  marginRight: "20px !important",
		  marginTop: "0px !important",
		},
		
	  }

      const svg1 = (
        <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
           <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <rect x="0" y="0" width="24" height="24"></rect>
              <circle fill="#000000" cx="5" cy="12" r="2"></circle>
              <circle fill="#000000" cx="12" cy="12" r="2"></circle>
              <circle fill="#000000" cx="19" cy="12" r="2"></circle>
           </g>
        </svg>
     );
     
   return (
      <Fragment>
         <div className="row">
            <div className="col-xl-12">
               <div className="card">
                  <div className="card-body">
                     <div className="row">
                        <div className="col-md-12 order-md-1">
                           
                           <form className="needs-validation" noValidate="">
                              <div className="row">

                              <div className="col-md-12 mb-3">
                           <h4 className="mb-3"> Shipping Zones </h4>
                           <div class="input-group mb-3">
                              <input type="text" class="form-control"/>
                              <div class="input-group-append">
                                 <button class="btn btn-primary" type="button">Search</button>
                                 </div>
                                 </div>
                           </div>
                          </div>

                              {/* <hr className="mb-4" /> */}
{/* 
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
                              </div> */}
                              
                              {/* <div className="row">
                              

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
                                    <span>*</span> Province/State
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
                                    <span>*</span> Postal/zip code
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
                              </div> */}


                              {/* <h4 className="mb-3">Tax Rate Zones</h4>
                              <hr className="mb-4" /> */}
                              


                              <div className="row">                             
                              <div className="col-md-12">
                              <Table responsive="md">
                        <thead>
                           <tr>
                              <th className="width80">
                                 <strong>Zone</strong>
                              </th>
                              <th>
                                 <strong>NO. OF COUNTRIES</strong>
                              </th>
                              <th>
                                 <strong>Digital Rate</strong>
                              </th>
                              <th>
                                 <strong>Action</strong>
                              </th>
                              
                              <th></th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>
                                 India
                              </td>
                              <td>18.0%</td>                              
                              <td>0.0%</td>
                              <td>
                                 <Dropdown>
                                    <Dropdown.Toggle
                                       variant="success"
                                       className="light sharp icon-false"
                                    >
                                       {svg1}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                       <Dropdown.Item>Edit</Dropdown.Item>
                                       <Dropdown.Item>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 USA
                              </td>
                              <td>18.0%</td>
                              
                              <td>
                              
                                    1.0%
                              </td>
                              
                              <td>
                                 <Dropdown>
                                    <Dropdown.Toggle
                                       variant="danger"
                                       className="light sharp icon-false">
                                       {svg1}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                       <Dropdown.Item>Edit</Dropdown.Item>
                                       <Dropdown.Item>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </td>
                           </tr>
                           
                           
                           
                        </tbody>
                     </Table>
                           </div>                             
                           </div>

                           
                              

                             


                              <button
                                 className="btn btn-primary btn-sm"
                                 type="submit">
                                 Save Changes
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

export default Shipping;
