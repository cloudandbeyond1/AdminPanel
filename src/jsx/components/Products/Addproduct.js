import React ,{ Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Addproduct extends React.Component {
  constructor(props)
    {
      super(props);
    }
  render() {
    return (
		<Fragment>
		<div className="row">
		   <div className="col-lg-12">
			  <div className="card">
				 <div className="card-header">
					<h4 className="card-title">Add Product</h4>
				 </div>
				 <div className="card-body">
					<div className="form-validation">
					   <form
						  className="form-valide"
						  action="#"
						  method="post"
						  onSubmit={(e) => e.preventDefault()}
					   >
						  <div className="row">
							 <div className="col-xl-8">
								<div className="form-group row">
								<label className="col-sm-2 col-form-label col-form-label-sm">
									  Product Name
									  <span className="text-danger">*</span>
								   </label>
								   <div className="col-sm-10">								
									  <input
										 type="text"
										 className="form-control"
										 id="val-username"
										 name="val-username"
										 placeholder="Enter a Product Name.."
									  />
								   </div>
								</div>
								<div className="form-group row">
								<label className="col-sm-2 col-form-label col-form-label-sm">
									 Price
									  <span className="text-danger">*</span>
								   </label>
								   <div className="col-sm-10">	
									  <input
										 type="number"
										 className="form-control"
										 id="val-email"
										 name="val-email"
										 placeholder="Enter Price"
									  />
								   </div>
								</div>
																
								<div className="form-group row">
								<label className="col-sm-2 col-form-label col-form-label-sm">
									  Description{" "}
									  <span className="text-danger">*</span>
								   </label>
								   <div className="col-sm-10">	
									  <textarea
										 className="form-control"
										 id="val-suggestions"
										 name="val-suggestions"
										 rows="5"
										 placeholder="What would you like to see?"
									  ></textarea>
								   </div>
								</div>
								<div className="form-group row">
								<label className="col-sm-2 col-form-label col-form-label-sm">
									  Upload Image{" "}
									  <span className="text-danger">*</span>
								   </label>
								   <div className="col-sm-10">	
                              <div className="custom-file">
                                 <input
                                    type="file"
                                    className="custom-file-input"
                                 />
                                 <label className="custom-file-label">
                                    Choose file
                                 </label>
                              </div>
                           </div>
						   </div>
							 <div className="form-group row">
								   <div className="col-lg-12 justify-content-center d-flex">
									  <button
										 type="submit"
										 className="btn btn-primary"
									  >
										 Submit
									  </button>
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
  </Fragment>

    );
  }
}

export default Addproduct;

