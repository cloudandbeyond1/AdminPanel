import React, { Fragment } from "react";
import { Form } from "react-bootstrap";


const AddCategory = () => {
   return (
      <Fragment>
         <div className="row">
            <div className="col-xl-12">
               <div className="card">
                  <div className="card-body">
                     <div className="row">
                        <div className="col-md-12 order-md-1">
                           <h4 className="mb-3">Add Category</h4>
                           <hr className="mb-4" />
                           <form className="needs-validation" noValidate="">

                           <div className="row">
                                 <div className="col-md-12 mb-3">
                                    <label htmlFor="deliveryCharge">
                                    Category Name
                                    </label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="deliveryCharge"
                                       placeholder="Enter Category Name"                                      
                                    />                                    
                                 </div>
                              </div>

                              <div class="input-group mb-3 mt-2">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">Upload Category Image</span>
                                            </div>
                                            <div class="custom-file">
                                                <input type="file" name="cat_img" class="custom-file-input" required=""/>
                                                <label class="custom-file-label">Choose file</label>
                                            </div>
                                        </div>

                                        <div className="row">                             
                              <div className="col-md-12">
                              <label htmlFor="cc-name">
                              Category Status
                              </label>

                              <div className="form-group">
                              <select placeholder="Select Type" className="form-control">
                              <option>Publish</option>
                                       <option>UnPublish</option>
                              </select>
                           </div>
                           
                           </div>                             
                           </div>
                          
                              <button
                                 className="btn btn-primary btn-sm"
                                 type="submit">
                                 Add Category
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

export default AddCategory;
