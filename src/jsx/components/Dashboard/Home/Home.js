import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {Dropdown} from 'react-bootstrap';
import { Tab, Nav } from "react-bootstrap";
//** Import Image */
import category from "../../../../images/dashicons/category.png";
import fork from "../../../../images/dashicons/fork.png";
import boy from "../../../../images/dashicons/delivery-boy.png";
import coupon from "../../../../images/dashicons/coupon.png";
import clipboard from "../../../../images/dashicons/clipboard.png";
import check from "../../../../images/dashicons/check.png";
import cancel from "../../../../images/dashicons/close.png";
import sale from "../../../../images/dashicons/sale-tag.png";
import cb from "../../../../images/dishes/briyani0.jpg";
import mb from "../../../../images/dishes/briyani1.jpg";
import eb from "../../../../images/dishes/briyani2.jpg";
import fb from "../../../../images/dishes/briyani3.jpg";
import mushroom from "../../../../images/dishes/briyani4.jpg";





// import {  Sparklines,  SparklinesLine,  } from "react-sparklines";
// import Apexspline from './Apexspline';
// import ApexchartsNegPost from './ApexNagetivePosative';
// import ApexchartsNegPost1 from './ApexNagetivePosative1';




const Home = () => {

	const styles = {
		imgicon: {
		  height: "30px",
		  width: "30px",
		},
		
	  }

   return (
      <Fragment>
         <div className="row">
			<div className="col-xl-3 col-lg-6 col-sm-6">
				<div className="card overflow-hidden ">
					<div className="card-header media border-0 pb-0">
						<div className="media-body">
							<h2 className="text-black">56 </h2>
							<p className="mb-0 text-black">Total Category</p>
						</div>
						<img src={category} style={styles.imgicon}/>
					</div>
					<div className="card-body pt-4 p-0">
					{/* Sparkline Chart  */}
						{/* <Sparklines data={sampleData1}>
							<SparklinesLine style={{ strokeWidth: 2}}  color="#ea4989" />
						</Sparklines> */}
					{/* Sparkline Chart End */}	
					</div>
				</div>
			</div>

			<div className="col-xl-3 col-lg-6 col-sm-6">
				<div className="card overflow-hidden">
					<div className="card-header media border-0 pb-0">
						<div className="media-body">
							<h2 className="text-black">805</h2>
							<p className="mb-0 text-black">Total Restaurant</p>
						</div>
						<img src={fork} style={styles.imgicon}/>
					</div>
					<div className="card-body pt-4 p-0">
						{/* Sparkline Chart  */}
						{/* <Sparklines data={sampleData2}>
							<SparklinesLine style={{ strokeWidth: 2}} color="#ea4989" />
						</Sparklines> */}
						{/* Sparkline Chart End */}
					</div>
				</div>
			</div>
			
			<div className="col-xl-3 col-lg-6 col-sm-6">
				<div className="card overflow-hidden">
					<div className="card-header media border-0 pb-0">
						<div className="media-body">
							<h2 className="text-black">30</h2>
							<p className="mb-0 text-black">Total Delivery boy</p>
						</div>
						<img src={boy} style={styles.imgicon}/>
					</div>
					<div className="card-body pt-4 p-0">
						{/* Sparkline Chart  */}
						{/* <Sparklines data={sampleData3}>
							<SparklinesLine style={{ strokeWidth: 2}} color="#ea4989" />
						</Sparklines> */}
						{/* Sparkline Chart  End*/}
					</div>
				</div>
			</div>

			<div className="col-xl-3 col-lg-6 col-sm-6">
				<div className="card overflow-hidden">
					<div className="card-header media border-0 pb-0">
						<div className="media-body">
							<h2 className="text-black">180</h2>
							<p className="mb-0 text-black">Total Coupons</p>
						</div>
						<img src={coupon} style={styles.imgicon}/>
					</div>
					<div className="card-body pt-4 p-0">
						{/* Sparkline Chart  */}
						{/* <Sparklines data={sampleData4}>
							<SparklinesLine style={{ strokeWidth: 2}} color="#ea4989" />
						</Sparklines> */}
						{/* Sparkline Chart  End */}
					</div>
				</div>	
			</div>
			<div className="col-xl-3 col-lg-6 col-sm-6">
				<div className="card overflow-hidden">
					<div className="card-header media border-0 pb-0">
						<div className="media-body">
							<h2 className="text-black">68 </h2>
							<p className="mb-0 text-black">Total New Orders</p>
						</div>
						<img src={clipboard} style={styles.imgicon}/>
					</div>
					<div className="card-body pt-4 p-0">
					{/* Sparkline Chart  */}
						{/* <Sparklines data={sampleData1}>
							<SparklinesLine style={{ strokeWidth: 2}}  color="#ea4989" />
						</Sparklines> */}
					{/* Sparkline Chart End */}	
					</div>
				</div>
			</div>
			<div className="col-xl-3 col-lg-6 col-sm-6">
				<div className="card overflow-hidden">
					<div className="card-header media border-0 pb-0">
						<div className="media-body">
							<h2 className="text-black">900 </h2>
							<p className="mb-0 text-black">Total Completed Orders</p>
						</div>
						<img src={check} style={styles.imgicon}/>
					</div>
					<div className="card-body pt-4 p-0">
						{/* Sparkline Chart  */}
						{/* <Sparklines data={sampleData2}>
							<SparklinesLine style={{ strokeWidth: 2}} color="#ea4989" />
						</Sparklines> */}
						{/* Sparkline Chart End */}
					</div>
				</div>
			</div>
			<div className="col-xl-3 col-lg-6 col-sm-6">
				<div className="card overflow-hidden">
					<div className="card-header media border-0 pb-0">
						<div className="media-body">
							<h2 className="text-black">20 </h2>
							<p className="mb-0 text-black">Total Cancelled Orders</p>
						</div>
						<img src={cancel} style={styles.imgicon}/>
					</div>
					<div className="card-body pt-4 p-0">
						{/* Sparkline Chart  */}
						{/* <Sparklines data={sampleData3}>
							<SparklinesLine style={{ strokeWidth: 2}} color="#ea4989" />
						</Sparklines> */}
						{/* Sparkline Chart  End*/}
					</div>
				</div>
			</div>
			<div className="col-xl-3 col-lg-6 col-sm-6">
				<div className="card overflow-hidden">
					<div className="card-header media border-0 pb-0">
						<div className="media-body">
							<h2 className="text-black">$7000</h2>
							<p className="mb-0 text-black">Total Sales</p>
						</div>
						<img src={sale} style={styles.imgicon}/>
					</div>
					<div className="card-body pt-4 p-0">
						{/* Sparkline Chart  */}
						{/* <Sparklines data={sampleData4}>
							<SparklinesLine style={{ strokeWidth: 2}} color="#ea4989" />
						</Sparklines> */}
						{/* Sparkline Chart  End */}
					</div>
				</div>	
			</div>
			
			<div className="col-xl-9 col-xxl-8 col-lg-12 col-sm-12">
				<div className="card">
					<div className="card-header border-0">
						<div>
							<h4 className="card-title mb-2">Recent Orders</h4>
						</div>
						<div className="dropdown">
							<button type="button" className="btn border btn-rounded text-black dropdown-toggle" data-toggle="dropdown">
								Newest
							</button>
							<div className="dropdown-menu">
								<Link to={"#"} className="dropdown-item" >2020</Link>
								<Link to={"#"} className="dropdown-item" >2019</Link>
								<Link to={"#"} className="dropdown-item" >2018</Link>
							</div>
						</div>
					</div>
					<div className="card-body p-0">
						<div className="table-responsive ">
							<table className="table order-request ">
								<tbody>
								<tr>
									<td>
										<div className="media align-items-center">
										
											<Link to={"/ecom-product-detail"} >	
												<img className=" mr-3 img-fluid" width="90" src={cb} alt="chicken" />
											</Link>
											<div className="media-body">
												<h5 className="mt-0 mb-2"><Link to={"/ecom-product-detail"} className="text-black" >Chicken Briyani</Link></h5>
												{/* <p className="mb-0 text-primary">#0010235</p> */}
											</div>
										</div>
									</td>
									<td>
										<h5 className="mb-2 text-black wspace-no">Jimmy Kueai</h5>
										{/* <p className="mb-0">South Corner st41256 london</p> */}
									</td>
									<td style={{width:"100px"}}>
										<div className="d-flex align-items-center justify-content-center">
											<h4 className="mb-0 mr-3 fs-20 text-black d-inline-block">₹300</h4>
											<p className="mb-0 fs-20 d-inline-block">x3</p>
										</div>
									</td>
									<td>
										<div className="d-flex align-items-center">
											<Link to={"#"} className="btn bgl-warning text-warning" >PENDING</Link>
											<Dropdown>
												<Dropdown.Toggle   variant	className="table-dropdown icon-false " >
													<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="12" cy="5" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="19" r="2"></circle></g></svg>
												</Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item  > 
														<Link to ={"#"} className="text-black" >
															<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#209F84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
																<path d="M22 4L12 14.01L9 11.01" stroke="#209F84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
															</svg>
															Accept order
														</Link>
													</Dropdown.Item>
													<Dropdown.Item > 
														<Link to ={"#"} className="text-black" >
															<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																<path d="M15 9L9 15" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																<path d="M9 9L15 15" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
															</svg>
															Reject order
														</Link>
													</Dropdown.Item>	
													<Dropdown.Item > 	
														<Link to ={"#"} className="text-black" >
															<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																<path d="M12 16V12" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																<path d="M12 8H12.01" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
															</svg>
															View Details
														</Link>
													</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div className="media align-items-center">
											<Link to={"/ecom-product-detail"}>	
											<img className=" mr-3 img-fluid" width="90" src={mb} alt="mutton" />
											</Link>	
											<div className="media-body">
												<h5 className="mt-0 mb-2"><Link to={"/ecom-product-detail"}  className="text-black">Mutton Briyani</Link></h5>
												{/* <p className="mb-0 text-primary">#0010299</p> */}
											</div>
										</div>
									</td>
									<td>
										<h5 className="mb-2 text-black wspace-no">Kinda Alexa</h5>
										{/* <p className="mb-0">Blue Ocean st.41551 London</p> */}
									</td>
									<td>
										<div className="d-flex align-items-center justify-content-center">
											<h4 className="mb-0 mr-3 fs-20 text-black d-inline-block">₹380</h4>
											<p className="mb-0 fs-20 d-inline-block">x1</p>
										</div>
									</td>
									<td>
										<div className="d-flex align-items-center">
											<Link to={"#"} className="btn bgl-success text-success" >DELIVERED</Link>
											<Dropdown>
												<Dropdown.Toggle   variant	className="table-dropdown icon-false " >
													<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="12" cy="5" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="19" r="2"></circle></g></svg>
												</Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item  > 
														<Link to ={"#"} className="text-black" >
															<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#209F84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
																<path d="M22 4L12 14.01L9 11.01" stroke="#209F84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
															</svg>
															Accept order
														</Link>
													</Dropdown.Item>
													<Dropdown.Item > 
														<Link to ={"#"} className="text-black" >
															<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																<path d="M15 9L9 15" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																<path d="M9 9L15 15" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
															</svg>
															Reject order
														</Link>
													</Dropdown.Item>	
													<Dropdown.Item > 	
														<Link to ={"#"} className="text-black" >
															<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																<path d="M12 16V12" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																<path d="M12 8H12.01" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
															</svg>
															View Details
														</Link>
													</Dropdown.Item>
													
												</Dropdown.Menu>
											</Dropdown>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div className="media align-items-center">
											<Link to={"/ecom-product-detail"}>	
											<img className=" mr-3 img-fluid" width="90" src={eb} alt="egg" />
											</Link>	
											<div className="media-body">
												<h5 className="mt-0 mb-2"><Link to={"/ecom-product-detail"}  className="text-black">Egg Briyani</Link></h5>
												{/* <p className="mb-0 text-primary">#0010235</p> */}
											</div>
										</div>
									</td>
									<td>
										<h5 className="mb-2 text-black wspace-no">Peter Parkur</h5>
										{/* <p className="mb-0">Franklin Avenue St.66125 London</p> */}
									</td>
									<td>
										<div className="d-flex align-items-center justify-content-center">
											<h4 className="mb-0 mr-3 fs-20 text-black d-inline-block">₹180</h4>
											<p className="mb-0 fs-20 d-inline-block">x2</p>
										</div>
									</td>
									<td>
										<div className="d-flex align-items-center">
											<Link to={"#"} className="btn bgl-light" >CANCELED</Link>
											<Dropdown>
												<Dropdown.Toggle   variant	className="table-dropdown icon-false " >
													<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="12" cy="5" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="19" r="2"></circle></g></svg>
												</Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item  > 
														<Link to ={"#"} className="text-black" >
															<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#209F84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
																<path d="M22 4L12 14.01L9 11.01" stroke="#209F84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
															</svg>
															Accept order
														</Link>
													</Dropdown.Item>
													<Dropdown.Item > 
														<Link to ={"#"} className="text-black" >
															<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																<path d="M15 9L9 15" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																<path d="M9 9L15 15" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
															</svg>
															Reject order
														</Link>
													</Dropdown.Item>	
													<Dropdown.Item > 	
														<Link to ={"#"} className="text-black" >
															<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																<path d="M12 16V12" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																<path d="M12 8H12.01" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
															</svg>
															View Details
														</Link>
													</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div className="media align-items-center">
											<Link to={"/ecom-product-detail"}>	
											<img className=" mr-3 img-fluid" width="90" src={fb} alt="fish" />
											</Link>	
											<div className="media-body">
												<h5 className="mt-0 mb-2"><Link to={"/ecom-product-detail"}  className="text-black">Fish Briyani</Link></h5>
												{/* <p className="mb-0 text-primary">#0010235</p> */}
											</div>
										</div>
									</td>
									<td>
										<h5 className="mb-2 text-black wspace-no">Jimmy Kueai</h5>
										{/* <p className="mb-0">South Corner st41256 london</p> */}
									</td>
									<td>
										<div className="d-flex align-items-center justify-content-center">
											<h4 className="mb-0 mr-3 fs-20 text-black d-inline-block">₹250</h4>
											<p className="mb-0 fs-20 d-inline-block">x3</p>
										</div>
									</td>
									<td>
										<div className="d-flex align-items-center">
											<Link to={"#"} className="btn bgl-warning text-warning" >PENDING</Link>
											<Dropdown>
												<Dropdown.Toggle   variant	className="table-dropdown icon-false " >
													<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="12" cy="5" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="19" r="2"></circle></g></svg>
												</Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item  > 
														<Link to ={"#"} className="text-black" >
															<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#209F84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
																<path d="M22 4L12 14.01L9 11.01" stroke="#209F84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
															</svg>
															Accept order
														</Link>
													</Dropdown.Item>
													<Dropdown.Item > 
														<Link to ={"#"} className="text-black" >
															<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																<path d="M15 9L9 15" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																<path d="M9 9L15 15" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
															</svg>
															Reject order
														</Link>
													</Dropdown.Item>	
													<Dropdown.Item > 	
														<Link to ={"#"} className="text-black" >
															<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																<path d="M12 16V12" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																<path d="M12 8H12.01" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
															</svg>
															View Details
														</Link>
													</Dropdown.Item>
													
												</Dropdown.Menu>
											</Dropdown>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div className="media align-items-center">
											<Link to={"/ecom-product-detail"}>	
											<img className=" mr-3 img-fluid" width="90" src={mushroom} alt="mushroom" />
											</Link>	
											<div className="media-body">
												<h5 className="mt-0 mb-2"><Link to={"/ecom-product-detail"}  className="text-black">Mushroom Briyani</Link></h5>
												{/* <p className="mb-0 text-primary">#0010299</p> */}
											</div>
										</div>
									</td>
									<td>
										<h5 className="mb-2 text-black wspace-no">Cindy Alexa</h5>
										{/* <p className="mb-0">Blue Ocean St.41551 London</p> */}
									</td>
									<td>
										<div className="d-flex align-items-center justify-content-center">
											<h4 className="mb-0 mr-3 fs-20 text-black d-inline-block">₹210</h4>
											<p className="mb-0 fs-20 d-inline-block">x1</p>
										</div>
									</td>
									<td>
										<div className="d-flex align-items-center">
											<Link to={"#"} className="btn bgl-light" >CANCELED</Link>
											<Dropdown>
												<Dropdown.Toggle   variant	className="table-dropdown icon-false " >
													<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="12" cy="5" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="19" r="2"></circle></g></svg>
												</Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item  > 
														<Link to ={"#"} className="text-black" >
															<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#209F84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
																<path d="M22 4L12 14.01L9 11.01" stroke="#209F84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
															</svg>
															Accept order
														</Link>
													</Dropdown.Item>
													<Dropdown.Item > 
														<Link to ={"#"} className="text-black" >
															<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																<path d="M15 9L9 15" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																<path d="M9 9L15 15" stroke="#F24242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
															</svg>
															Reject order
														</Link>
													</Dropdown.Item>	
													<Dropdown.Item > 	
														<Link to ={"#"} className="text-black" >
															<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																<path d="M12 16V12" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																<path d="M12 8H12.01" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
															</svg>
															View Details
														</Link>
													</Dropdown.Item>
													
												</Dropdown.Menu>
											</Dropdown>
										</div>
									</td>
								</tr>												
							</tbody></table>
							<div className="card-footer border-0 pt-0 text-center">
								<Link to={"/ecom-product-list"}  className="btn-link">View More &gt;&gt;</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-xl-3 col-xxl-4 col-lg-12 col-sm-12">
				<div className="card">
					<div className="card-header border-0">
						<div>
							<h4 className="card-title mb-2">Daily Trending Menus</h4>
							
						</div>
					</div>
					<div className="card-body px-0 pt-0 pb-2">
						<div className="widget-media trending-menus">
							<ul className="timeline">
								<li>
									<div className="timeline-panel">
										<div className="media mr-3">
											<Link to={"/ecom-product-detail"}>	
												<img alt="" width="90" src={require("./../../../../images/card/pic8.jpg").default} />
											</Link>	
											<div className="number">#1</div>
										</div>
										<div className="media-body">
											<h5 className="mb-3"><Link to={"/ecom-product-detail"}  className="text-black">Chicken curry special with cucumber</Link></h5>
											<div className="d-flex justify-content-between align-items-center">
												<h4 className="mb-0 text-black font-w600">$5.6</h4>
												<p className="mb-0">Order <strong className="text-black font-w500">89x</strong></p>
											</div>
										</div>
									</div>
								</li>
								<li>
									<div className="timeline-panel">
										<div className="media mr-3">
											<Link to={"/ecom-product-detail"}>	
												<img alt="" width="90" src={require("./../../../../images/card/pic4.jpg").default} /> 
											</Link>	
											<div className="number">#2</div>
										</div>
										<div className="media-body">
											<h5 className="mb-3"><Link to={"/ecom-product-detail"}  className="text-black">Watermelon juice with ice</Link></h5>
											<div className="d-flex justify-content-between align-items-center">
												<h4 className="mb-0 text-black font-w600">$4.8</h4>
												<p className="mb-0">Order <strong className="text-black font-w500">67x</strong></p>
											</div>
										</div>
									</div>
								</li>
								<li>
									<div className="timeline-panel">
										<div className="media mr-3">
											<Link to={"/ecom-product-detail"}>	
												<img alt="" width="90" src={require("./../../../../images/card/pic9.jpg").default} />
											</Link>	
											<div className="number">#3</div>
										</div>
										<div className="media-body">
											<h5 className="mb-3"><Link to={"/ecom-product-detail"}  className="text-black">Italiano pizza with garlic</Link></h5>
											<div className="d-flex justify-content-between align-items-center">
												<h4 className="mb-0 text-black font-w600">$12.3</h4>
												<p className="mb-0">Order <strong className="text-black font-w500">59x</strong></p>
											</div>
										</div>
									</div>
								</li>
								<li>
									<div className="timeline-panel">
										<div className="media mr-3">
											<Link to={"/ecom-product-detail"}>	
												<img alt="" width="90" src={require("./../../../../images/card/pic6.jpg").default} />
											</Link>	
											<div className="number">#4</div>
										</div>
										<div className="media-body">
											<h5 className="mb-3"><Link to={"/ecom-product-detail"}  className="text-black">Tuna soup spinach with himalaya salt</Link></h5>
											<div className="d-flex justify-content-between align-items-center">
												<h4 className="mb-0 text-black font-w600">$3.6</h4>
												<p className="mb-0">Order <strong className="text-black font-w500">49x</strong></p>
											</div>
										</div>
									</div>
								</li>
								<li>
									<div className="timeline-panel">
										<div className="media mr-3">
											<Link to={"/ecom-product-detail"}>	
												<img alt="" width="90" src={require("./../../../../images/card/pic10.jpg").default} />
											</Link>	
											<div className="number">#5</div>
										</div>
										<div className="media-body">
											<h5 className="mb-3"><Link to={"/ecom-product-detail"}  className="text-black">Medium Spicy Spagethi Italiano</Link></h5>
											<div className="d-flex justify-content-between align-items-center">
												<h4 className="mb-0 text-black font-w600">$4.2</h4>
												<p className="mb-0">Order <strong className="text-black font-w500">49x</strong></p>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
            
        </div>    
            
         
      </Fragment>
   );
};

export default Home;
