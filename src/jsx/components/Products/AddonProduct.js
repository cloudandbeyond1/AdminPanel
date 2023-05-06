import React ,{ Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddonProduct = () => {
  
    const options = [

        { label: 'Chicken 65', value: 'Chicken 65' },
     
        { label: 'Mushroom Briyani', value: 'Mushroom Briyani' },
     
        { label: 'Minty paneer Briyani', value: 'Minty paneer Briyani' },

        { label: 'Chicken Briyani', value: 'Chicken Briyani' },
     
        { label: 'Mutton Briyani', value: 'Mutton Briyani' },
     
        { label: 'kabuli Chana Briyani', value: 'kabuli Chana Briyani' },

        { label: 'Fried Chicken', value: 'Fried Chicken' },
     
        { label: 'Pan Fried Broccoli', value: 'Pan Fried Broccoli' },
     
        { label: 'Cabbage Salad', value: 'Cabbage Salad' },

        { label: 'Veg Briyani', value: 'Veg Briyani' },
     
        { label: 'Chicken Kebab', value: 'Chicken Kebab' },
     
        { label: 'Mutton Kebab', value: 'Mutton Kebab' },

        { label: 'Panneer Kebab', value: 'Panneer Kebab' },
     
      ];
     
      const [value, setValue] = React.useState('Chicken 65');
     
      const handleChange = (event) => {
     
        setValue(event.target.value);
      }
    return (
		<Fragment>
		<div className="row">
		   <div className="col-lg-12">
			  <div className="card">
				 <div className="card-header">
					<h4 className="card-title">Add-on Product</h4>
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
                                   			
                                   <select className="form-control" value={value} onChange={handleChange}>

{options.map((option) => (

  <option value={option.value}>{option.label}</option>

))}

</select>
								   </div>
								</div>

								<div className="form-group row">
									<label className="col-sm-2 col-form-label col-form-label-sm">
									  Extra Product Name
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

export default AddonProduct;

