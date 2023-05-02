import React ,{ Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageTitle from "../../layouts/PageTitle";
import { Link } from "react-router-dom";
//For API Requests
import axios from 'axios';

//Success POPUP
import Swal from 'sweetalert2'

class Addproduct extends React.Component {
  constructor(props)
    {
      super(props);
      
      // this.state = {
      //   imagedata : String
      // };
      this.addFormData = this.addFormData.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    //FileChange
    handleChange(file)
    {
      this.setState({ 
        imagedata: file[0],
      })
    }
    //Form Submission
    addFormData(evt)
      {
        evt.preventDefault();
        const fd = new FormData();
        fd.append('productname', "Testbtr");
        fd.append('productprice', "gfdg");
       // fd.append('productimage', this.state.imagedata);
        fd.append('productdesc', "fgdf");
        
      //   axios.post('https://api.chec.io/v1/products', fd
      //   ).then(res=>
const headers = {
    "X-Authorization": "sk_test_5172686a5fb9362d98b0400373095dcaf3fb18c7fcd1e",
    "Accept": "application/json",
    "Content-Type": "application/json",
};

      fetch("https://api.chec.io/v1/products", {
             method: "POST",
             body: fd,
             headers: headers,
         })
             .then(res=>
        {
   
      this.myFormRef.reset();
      //Success Message in Sweetalert modal
      Swal.fire({
        title: 'Product has been added successfully.',
        text: "Thanks",
        type: 'success',
        
      });
      
      }
      );
      }
  
  render() {
    return (
		<Fragment>
		{/* <PageTitle headingPara="Validation" activeMenu="Validation" motherMenu="Form" /> */}

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

