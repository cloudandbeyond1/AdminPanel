

import React,{useState,useEffect,useRef,Fragment} from 'react';
import {Link} from 'react-router-dom';
import { Dropdown } from "react-bootstrap";

import avartar5 from "../../../images/avatar/5.png";
import avartar1 from "../../../images/avatar/1.png";




const Customerlist = () => {
	const drop = (
	   <Dropdown>
		  <Dropdown.Toggle variant="" className="table-dropdown icon-false">
			 <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
				<g
				   stroke="none"
				   strokeWidth="1"
				   fill="none"
				   fillRule="evenodd"
				>
				   <rect x="0" y="0" width="24" height="24"></rect>
				   <circle fill="#000000" cx="5" cy="12" r="2"></circle>
				   <circle fill="#000000" cx="12" cy="12" r="2"></circle>
				   <circle fill="#000000" cx="19" cy="12" r="2"></circle>
				</g>
			 </svg>
		  </Dropdown.Toggle>
		  <Dropdown.Menu>
			 <Dropdown.Item to={"#"}>Edit</Dropdown.Item>
 
			 <Dropdown.Item to={"#"} className="text-danger">
				Delete
			 </Dropdown.Item>
		  </Dropdown.Menu>
	   </Dropdown>
	);
 
	const chack = (i) => (
	   <div className={`custom-control custom-checkbox ml-2   `}>
		  <input
			 type="checkbox"
			 className="custom-control-input "
			 id={`checkAll${i}`}
			 required=""
		  />
		  <label
			 className="custom-control-label"
			 htmlFor={`checkAll${i}`}
		  ></label>
	   </div>
	);



	
	const url = new URL(
		"https://api.chec.io/v1/customers"
	);

	
	
	const headers = {
		"X-Authorization": "sk_517265b2dc5cad78241fa72ca6aa2249255aecf041d43",
		"Accept": "application/json",
    "Content-Type": "application/json",
		
	};
	
	const [Customers, setCustomers] = useState([]);
  
	useEffect(() => {
	 fetch(url, {
		method: "GET",
		headers: headers,
	})
	.then(response => response.json())
	 .then((data) => { 
		return data,
	 setCustomers(data.data)
  }) 
   .catch(err => console.log(err))
  },[setCustomers])
  console.log(Customers,"Customers");


  
  
 
	return (
	   <Fragment>
		  
		  <div className="row">
			 <div className="col-lg-12">
				<div className="card">
				   <div className="card-body">
					  <div className="table-responsive">
						 <table className="table mb-0 table-striped">
							<thead>
							   <tr>
								  <th className="">
									 <div className="custom-control custom-checkbox mx-2">
										<input
										   type="checkbox"
										   className="custom-control-input"
										   id="checkAll"
										/>
										<label
										   className="custom-control-label"
										   htmlFor="checkAll"
										></label>
									 </div>
								  </th>
								  <th>Name</th>
								  <th>Email</th>
								  <th>Phone</th>
								  <th className="pl-5 width200">
									 Billing Address
								  </th>
								  <th>Customer Id</th>
								  <th></th>
							   </tr>
							</thead>
							<tbody id="customers">
                           {Customers.map((d, i) => (
                              <tr key={i}>
								<td>{chack(i)}</td>
								  <td className="py-3">
									 <Link to={{pathname: "/Customer-Detail"}}>
										<div className="media d-flex align-items-center">
										   {/* <div className="avatar avatar-xl mr-2">
											  <div className="">
												 <img
													className="rounded-circle img-fluid"
													src={avartar5}
													width="10"
													alt=""
												 />
											  </div>
										   </div> */}
										   <div className="media-body">
											  <h5 className="mb-0 fs--1">
												 {d.firstname}
											  </h5>
										   </div>
										</div>
									 </Link>
								  </td>
								  <td className="py-2">
									 <Link to="mailto:ricky@example.com">
									 {d.email}
									 </Link>
								  </td>
								  <td className="py-2">
									 {" "}
									 <Link to="tel:2012001851">{d.phone}</Link>
								  </td>
								  <td className="py-2 pl-5 wspace-no">
								  {d.default_billing.name}, {d.default_billing.street}, {d.default_billing.town_city}, {d.default_billing.postal_zip_code}
								  </td>
								  <td className="py-2">{d.id}</td>
								  <td className="py-2 text-right">{drop}</td>
							  </tr>
                           ))}
                        </tbody>
						 </table>
					  </div>
				   </div>
				</div>
			 </div>
		  </div>
	   </Fragment>
	);
 };
 
 export default Customerlist;

