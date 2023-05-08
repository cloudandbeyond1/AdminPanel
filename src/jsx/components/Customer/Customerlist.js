

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
								  <th>Joined</th>
								  <th></th>
							   </tr>
							</thead>
							<tbody id="customers">
							   <tr className="btn-reveal-trigger">
								  <td>{chack(1)}</td>
								  <td className="py-3">
									 <Link to={"#"}>
										<div className="media d-flex align-items-center">
										   <div className="avatar avatar-xl mr-2">
											  <div className="">
												 <img
													className="rounded-circle img-fluid"
													src={avartar5}
													width="30"
													alt=""
												 />
											  </div>
										   </div>
										   <div className="media-body">
											  <h5 className="mb-0 fs--1">
												 Ricky Antony
											  </h5>
										   </div>
										</div>
									 </Link>
								  </td>
								  <td className="py-2">
									 <Link to="mailto:ricky@example.com">
										info@example.com
									 </Link>
								  </td>
								  <td className="py-2">
									 {" "}
									 <Link to="tel:2012001851">(201) 200-1851</Link>
								  </td>
								  <td className="py-2 pl-5 wspace-no">
									 2392 Main Avenue, Penasauka
								  </td>
								  <td className="py-2">30/03/2018</td>
								  <td className="py-2 text-right">{drop}</td>
							   </tr>
							   <tr className="btn-reveal-trigger">
								  <td className="py-2">{chack(2)}</td>
								  <td className="py-3">
									 <Link to={"#"}>
										<div className="media d-flex align-items-center">
										   <div className="avatar avatar-xl mr-2">
											  <img
												 className="rounded-circle img-fluid"
												 src={avartar1}
												 alt=""
												 width="30"
											  />
										   </div>
										   <div className="media-body">
											  <h5 className="mb-0 fs--1">
												 Emma Watson
											  </h5>
										   </div>
										</div>
									 </Link>
								  </td>
								  <td className="py-2">
									 <Link to="mailto:emma@example.com">
										info@example.com
									 </Link>
								  </td>
								  <td className="py-2">
									 {" "}
									 <Link to="tel:2122288403">(212) 228-8403</Link>
								  </td>
								  <td className="py-2 pl-5 wspace-no">
									 2289 5th Avenue, New York
								  </td>
								  <td className="py-2">11/07/2017</td>
								  <td className="py-2 text-right">{drop}</td>
							   </tr>
							   <tr className="btn-reveal-trigger">
								  <td className="py-2">{chack(3)}</td>
								  <td className="py-3">
									 <Link to={"#"}>
										<div className="media d-flex align-items-center">
										   <div className="avatar avatar-xl mr-2">
											  <div className="">
												 <img
													className="rounded-circle img-fluid"
													src={avartar5}
													width="30"
													alt=""
												 />
											  </div>
										   </div>
										   <div className="media-body">
											  <h5 className="mb-0 fs--1">
												 Rowen Atkinson
											  </h5>
										   </div>
										</div>
									 </Link>
								  </td>
								  <td className="py-2">
									 <Link to="mailto:rown@example.com">
										info@example.com
									 </Link>
								  </td>
								  <td className="py-2">
									 {" "}
									 <Link to="tel:2012001851">(201) 200-1851</Link>
								  </td>
								  <td className="py-2 pl-5 wspace-no">
									 112 Bostwick Avenue, Jersey City
								  </td>
								  <td className="py-2">05/04/2016</td>
								  <td className="py-2 text-right">{drop}</td>
							   </tr>
							   <tr className="btn-reveal-trigger">
								  <td className="py-2">{chack(4)}</td>
								  <td className="py-3">
									 <Link to={"#"}>
										<div className="media d-flex align-items-center">
										   <div className="avatar avatar-xl mr-2">
											  <img
												 className="rounded-circle img-fluid"
												 src={avartar1}
												 alt=""
												 width="30"
											  />
										   </div>
										   <div className="media-body">
											  <h5 className="mb-0 fs--1">
												 Antony Hopkins
											  </h5>
										   </div>
										</div>
									 </Link>
								  </td>
								  <td className="py-2">
									 <Link to="mailto:antony@example.com">
										info@example.com
									 </Link>
								  </td>
								  <td className="py-2">
									 {" "}
									 <Link to="tel:9013243127">(901) 324-3127</Link>
								  </td>
								  <td className="py-2 pl-5 wspace-no">
									 3448 Ile De France St #242,{" "}
								  </td>
								  <td className="py-2">05/04/2018</td>
								  <td className="py-2 text-right">{drop}</td>
							   </tr>
							   <tr className="btn-reveal-trigger">
								  <td className="py-2">{chack(5)}</td>
								  <td className="py-3">
									 <Link to={"#"}>
										<div className="media d-flex align-items-center">
										   <div className="avatar avatar-xl mr-2">
											  <img
												 className="rounded-circle img-fluid"
												 src={avartar1}
												 alt=""
												 width="30"
											  />
										   </div>
										   <div className="media-body">
											  <h5 className="mb-0 fs--1">
												 Jennifer Schramm
											  </h5>
										   </div>
										</div>
									 </Link>
								  </td>
								  <td className="py-2">
									 <Link to="mailto:jennifer@example.com">
										info@example.com
									 </Link>
								  </td>
								  <td className="py-2">
									 {" "}
									 <Link to="tel:8283829631">(828) 382-9631</Link>
								  </td>
								  <td className="py-2 pl-5 wspace-no">
									 659 Hannah Street, Charlotte
								  </td>
								  <td className="py-2">17/03/2016</td>
								  <td className="py-2 text-right">{drop}</td>
							   </tr>
							   <tr className="btn-reveal-trigger">
								  <td className="py-2"></td>
								  <td className="py-3">
									 <Link to={"#"}>
										<div className="media d-flex align-items-center">
										   <div className="avatar avatar-xl mr-2">
											  <div className="">
												 <img
													className="rounded-circle img-fluid"
													src={avartar5}
													width="30"
													alt=""
												 />
											  </div>
										   </div>
										   <div className="media-body">
											  <h5 className="mb-0 fs--1">
												 Raymond Mims
											  </h5>
										   </div>
										</div>
									 </Link>
								  </td>
								  <td className="py-2">
									 <Link to="mailto:raymond@example.com">
										info@example.com
									 </Link>
								  </td>
								  <td className="py-2">
									 {" "}
									 <Link to="tel:5624685646">(562) 468-5646</Link>
								  </td>
								  <td className="py-2 pl-5 wspace-no">
									 2298 Locust Court, Artesia
								  </td>
								  <td className="py-2">12/07/2014</td>
								  <td className="py-2 text-right">{drop}</td>
							   </tr>
							   <tr className="btn-reveal-trigger">
								  <td className="py-2">{chack(6)}</td>
								  <td className="py-3">
									 <Link to={"#"}>
										<div className="media d-flex align-items-center">
										   <div className="avatar avatar-xl mr-2">
											  <img
												 className="rounded-circle img-fluid"
												 src={avartar1}
												 alt=""
												 width="30"
											  />
										   </div>
										   <div className="media-body">
											  <h5 className="mb-0 fs--1">
												 Michael Jenkins
											  </h5>
										   </div>
										</div>
									 </Link>
								  </td>
								  <td className="py-2">
									 <Link to="mailto:jenkins@example.com">
										info@example.com
									 </Link>
								  </td>
								  <td className="py-2">
									 {" "}
									 <Link to="tel:3026138829">(302) 613-8829</Link>
								  </td>
								  <td className="py-2 pl-5 wspace-no">
									 4678 Maud Street, Philadelphia
								  </td>
								  <td className="py-2">15/06/2014</td>
								  <td className="py-2 text-right">{drop}</td>
							   </tr>
							   <tr className="btn-reveal-trigger">
								  <td className="py-2"></td>
								  <td className="py-3">
									 <Link to={"#"}>
										<div className="media d-flex align-items-center">
										   <div className="avatar avatar-xl mr-2">
											  <img
												 className="rounded-circle img-fluid"
												 src={avartar1}
												 alt=""
												 width="30"
											  />
										   </div>
										   <div className="media-body">
											  <h5 className="mb-0 fs--1">
												 Kristine Cadena
											  </h5>
										   </div>
										</div>
									 </Link>
								  </td>
								  <td className="py-2">
									 <Link to="mailto:cadena@example.com">
										info@example.com
									 </Link>
								  </td>
								  <td className="py-2">
									 {" "}
									 <Link to="tel:3172737814">(317) 273-7814</Link>
								  </td>
								  <td className="py-2 pl-5 wspace-no">
									 3412 Crestview Manor, Indianapolis
								  </td>
								  <td className="py-2">15/04/2021</td>
								  <td className="py-2 text-right">{drop}</td>
							   </tr>
							   <tr className="btn-reveal-trigger">
								  <td className="py-2">{chack(7)}</td>
								  <td className="py-3">
									 <Link to={"#"}>
										<div className="media d-flex align-items-center">
										   <div className="avatar avatar-xl mr-2">
											  <div className="">
												 <img
													className="rounded-circle img-fluid"
													src={avartar5}
													width="30"
													alt=""
												 />
											  </div>
										   </div>
										   <div className="media-body">
											  <h5 className="mb-0 fs--1">
												 Ricky Antony
											  </h5>
										   </div>
										</div>
									 </Link>
								  </td>
								  <td className="py-2">
									 <Link to="mailto:ricky@example.com">
										info@example.com
									 </Link>
								  </td>
								  <td className="py-2">
									 {" "}
									 <Link to="tel:2012001851">(201) 200-1851</Link>
								  </td>
								  <td className="py-2 pl-5 wspace-no">
									 2392 Main Avenue, Penasauka
								  </td>
								  <td className="py-2">30/03/2021</td>
								  <td className="py-2 text-right">{drop}</td>
							   </tr>
							   <tr className="btn-reveal-trigger">
								  <td className="py-2">{chack(8)}</td>
								  <td className="py-3">
									 <Link to={"#"}>
										<div className="media d-flex align-items-center">
										   <div className="avatar avatar-xl mr-2">
											  <img
												 className="rounded-circle img-fluid"
												 src={avartar1}
												 alt=""
												 width="30"
											  />
										   </div>
										   <div className="media-body">
											  <h5 className="mb-0 fs--1">
												 Emma Watson
											  </h5>
										   </div>
										</div>
									 </Link>
								  </td>
								  <td className="py-2">
									 <Link to="mailto:emma@example.com">
										info@example.com
									 </Link>
								  </td>
								  <td className="py-2">
									 {" "}
									 <Link to="tel:2122288403">(212) 228-8403</Link>
								  </td>
								  <td className="py-2 pl-5 wspace-no">
									 2289 5th Avenue, New York
								  </td>
								  <td className="py-2">11/07/2020</td>
								  <td className="py-2 text-right">{drop}</td>
							   </tr>
							   <tr className="btn-reveal-trigger">
								  <td className="py-2">{chack(9)}</td>
								  <td className="py-3">
									 <Link to={"#"}>
										<div className="media d-flex align-items-center">
										   <div className="avatar avatar-xl mr-2">
											  <div className="">
												 <img
													className="rounded-circle img-fluid"
													src={avartar5}
													width="30"
													alt=""
												 />
											  </div>
										   </div>
										   <div className="media-body">
											  <h5 className="mb-0 fs--1">
												 Rowen Atkinson
											  </h5>
										   </div>
										</div>
									 </Link>
								  </td>
								  <td className="py-2">
									 <Link to="mailto:rown@example.com">
										info@example.com
									 </Link>
								  </td>
								  <td className="py-2">
									 {" "}
									 <Link to="tel:2012001851">(201) 200-1851</Link>
								  </td>
								  <td className="py-2 pl-5 wspace-no">
									 112 Bostwick Avenue, Jersey City
								  </td>
								  <td className="py-2">05/04/2016</td>
								  <td className="py-2 text-right">{drop}</td>
							   </tr>
							   <tr className="btn-reveal-trigger">
								  <td className="py-2">{chack(10)}</td>
								  <td className="py-3">
									 <Link to={"#"}>
										<div className="media d-flex align-items-center">
										   <div className="avatar avatar-xl mr-2">
											  <img
												 className="rounded-circle img-fluid"
												 src={avartar1}
												 alt=""
												 width="30"
											  />
										   </div>
										   <div className="media-body">
											  <h5 className="mb-0 fs--1">
												 Antony Hopkins
											  </h5>
										   </div>
										</div>
									 </Link>
								  </td>
								  <td className="py-2">
									 <Link to="mailto:antony@example.com">
										info@example.com
									 </Link>
								  </td>
								  <td className="py-2">
									 {" "}
									 <Link to="tel:9013243127">(901) 324-3127</Link>
								  </td>
								  <td className="py-2 pl-5 wspace-no">
									 3448 Ile De France St #242
								  </td>
								  <td className="py-2">05/04/2018</td>
								  <td className="py-2 text-right">{drop}</td>
							   </tr>
							   <tr className="btn-reveal-trigger">
								  <td className="py-2">{chack(11)}</td>
								  <td className="py-3">
									 <Link to={"#"}>
										<div className="media d-flex align-items-center">
										   <div className="avatar avatar-xl mr-2">
											  <img
												 className="rounded-circle img-fluid"
												 src={avartar1}
												 alt=""
												 width="30"
											  />
										   </div>
										   <div className="media-body">
											  <h5 className="mb-0 fs--1">
												 Jennifer Schramm
											  </h5>
										   </div>
										</div>
									 </Link>
								  </td>
								  <td className="py-2">
									 <Link to="mailto:jennifer@example.com">
										info@example.com
									 </Link>
								  </td>
								  <td className="py-2">
									 {" "}
									 <Link to="tel:8283829631">(828) 382-9631</Link>
								  </td>
								  <td className="py-2 pl-5 wspace-no">
									 659 Hannah Street, Charlotte
								  </td>
								  <td className="py-2">17/03/2016</td>
								  <td className="py-2 text-right">{drop}</td>
							   </tr>
							   <tr className="btn-reveal-trigger">
								  <td className="py-2">{chack(12)}</td>
								  <td className="py-3">
									 <Link to={"#"}>
										<div className="media d-flex align-items-center">
										   <div className="avatar avatar-xl mr-2">
											  <div className="">
												 <img
													className="rounded-circle img-fluid"
													src={avartar5}
													width="30"
													alt=""
												 />
											  </div>
										   </div>
										   <div className="media-body">
											  <h5 className="mb-0 fs--1">
												 Raymond Mims
											  </h5>
										   </div>
										</div>
									 </Link>
								  </td>
								  <td className="py-2">
									 <Link to="mailto:raymond@example.com">
										info@example.com
									 </Link>
								  </td>
								  <td className="py-2">
									 {" "}
									 <Link to="tel:5624685646">(562) 468-5646</Link>
								  </td>
								  <td className="py-2 pl-5 wspace-no">
									 2298 Locust Court, Artesia
								  </td>
								  <td className="py-2">12/07/2022</td>
								  <td className="py-2 text-right">{drop}</td>
							   </tr>
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

