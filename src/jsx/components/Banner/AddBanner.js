import React from 'react';


const AddBanner = () => {
	
  return (
	 <div className="col-12">
    {/* Card  */}
		<div className="card">
		   <div className="card-header">
			  <h4 className="card-title">Add Banner</h4>
		   </div>
		   <div className="card-body">
		      <div class="input-group mb-3">
                 <div class="input-group-prepend">
                   <span class="input-group-text">Upload Banner Image</span>
                 </div>
				 {/* File Upload */}
                    <div class="custom-file">
                        <input type="file" name="cat_img" class="custom-file-input" required=""/>
                        <label class="custom-file-label">Choose file</label>
                    </div>
              </div>
                    {/* Dropdown */}
                  <div class="form-group" >
                     <label>Select Restaurant</label>
                       <select name="rid" class="form-control" required="" style={{borderRadius:"0px",height:"40px"}}>
						  <option value="0">Unclickable</option>
						  <option value="1">M H Maisur House &amp; Fency Dhosa</option>
						  <option value="2">KHODIYAR KRUPA DABELI &amp; VADAPAV</option>
						  <option value="3">Patel's Puff House</option>
						  <option value="4">Navjivan Restaurant</option>
						  <option value="5">B &amp; G Food Campus</option>
						  <option value="6">McDonald's</option>
						  <option value="7">Burger King</option>
					      <option value="8">Mahesh Pav Bhaji</option>
						  <option value="9">CRACKED EGG</option>
						  <option value="10">Baskin Robbins</option>
						  <option value="11">YO YO FRANKIE AND MAGGI</option>
						  <option value="12">Domino's Pizza</option>
					   </select>
                  </div>
                      {/* Dropdown */}
					<div class="form-group" >
                        <label>Banner Status</label>
                           <select name="status" class="form-control" required="" style={{borderRadius:"0px",height:"40px"}}>
							   <option value="0">Publish</option>
							   <option value="1">UnPublish</option>	
						   </select>
                    </div>
                         {/* Submit Button */}
						<div class="col-12">
                            <button type="submit" name="add_banner" class="btn btn-primary mb-2" style={{backgroundColor:"#FF720D"}}>Add Banner</button>
                        </div>
		   </div>
		</div>
	 </div>
  );
};
export default AddBanner;