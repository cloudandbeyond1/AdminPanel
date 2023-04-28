import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import PolarAreaCharts from './Polarareacharts';

class Order extends React.Component{
	
	render(){
		return(
			<Fragment>
				
				<div className="form-head d-flex mb-3 mb-md-5 align-items-start">
					<div className="mr-auto d-none d-lg-block">
						<Link to={"#"} className="text-primary d-flex align-items-center mb-3 font-w500" >
						<svg className="mr-3" width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.274969 5.14888C0.27525 5.1486 0.275484 5.14827 0.275812 5.14799L5.17444 0.272997C5.54142 -0.0922061 6.135 -0.090847 6.5003 0.276184C6.86555 0.643168 6.86414 1.23675 6.49716 1.60199L3.20822 4.87499H23.0625C23.5803 4.87499 24 5.29471 24 5.81249C24 6.33027 23.5803 6.74999 23.0625 6.74999H3.20827L6.49711 10.023C6.86409 10.3882 6.8655 10.9818 6.50025 11.3488C6.13495 11.7159 5.54133 11.7171 5.17439 11.352L0.275764 6.47699C0.275483 6.47671 0.27525 6.47638 0.274921 6.4761C-0.0922505 6.10963 -0.0910778 5.51413 0.274969 5.14888Z" fill="#EA4989"/>
						</svg>
						Back</Link >
						<h3 className="text-black font-w600 mb-0 fs-22 mb-2">Order ID #5552351</h3>
						<Link to={"#"} className="mb-0 text-black font-w500" >Orders  /</Link >
						<Link to={"#"} className="mb-0 font-w500" > Order Detaills </Link >
					</div>
					<div className="dropdown ml-auto">
						<div className="btn btn-primary btn-rounded dropdown-toggle d-block  px-4" data-toggle="dropdown">
							<svg className="mr-2 scale5" width="14" height="14" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M7.12885 22H6.87549C6.11615 22 5.50049 22.615 5.50049 23.375C5.50049 24.135 6.11615 24.75 6.87549 24.75H7.12894C7.69836 26.3471 9.21032 27.5 11.0005 27.5C12.7907 27.5 14.3027 26.3471 14.8721 24.75H18.1289C18.6984 26.3471 20.2103 27.5 22.0005 27.5C23.7985 27.5 25.3154 26.3366 25.8788 24.7285C27.5195 24.6187 28.8881 23.4711 29.2494 21.8443L30.9608 14.1408C31.2065 13.037 30.9413 11.897 30.233 11.0148C29.5247 10.1312 28.47 9.62501 27.338 9.62501H25.5407C25.4027 9.11082 25.1547 8.62591 24.8035 8.2057C24.0966 7.35976 23.0586 6.87502 21.9562 6.87502H8.25049C7.49115 6.87502 6.87549 7.49001 6.87549 8.25002C6.87549 9.01002 7.49115 9.62501 8.25049 9.62501H21.9562C22.3469 9.62501 22.5859 9.8412 22.694 9.97011C22.8014 10.099 22.9713 10.3716 22.9028 10.7543L21.3436 19.3164C19.8457 19.5586 18.6267 20.6036 18.1289 22H14.8721C14.3027 20.403 12.7907 19.25 11.0005 19.25C9.21032 19.25 7.69827 20.403 7.12885 22ZM28.0879 12.7349C28.196 12.8692 28.3632 13.1525 28.2766 13.5446L26.5652 21.2481C26.4852 21.6074 26.2128 21.8686 25.8719 21.9582C25.5383 21.0569 24.8921 20.2959 24.0492 19.8082L25.403 12.375H27.338C27.7395 12.375 27.9799 12.6006 28.0879 12.7349ZM22.0005 22C22.0878 22 22.1757 22.0067 22.2348 22.0161C22.8954 22.145 23.3755 22.7157 23.3755 23.375C23.3755 24.1337 22.7585 24.75 22.0005 24.75C21.2425 24.75 20.6255 24.1337 20.6255 23.375C20.6255 22.6163 21.2425 22 22.0005 22ZM11.0005 22C11.7585 22 12.3755 22.6163 12.3755 23.375C12.3755 24.1337 11.7585 24.75 11.0005 24.75C10.2425 24.75 9.62549 24.1337 9.62549 23.375C9.62549 22.6163 10.2425 22 11.0005 22Z" fill="white"></path>
								<path d="M5.5 15.125H11C11.7593 15.125 12.375 14.51 12.375 13.75C12.375 12.99 11.7593 12.375 11 12.375H5.5C4.74066 12.375 4.125 12.99 4.125 13.75C4.125 14.51 4.74066 15.125 5.5 15.125Z" fill="white"></path>
								<path d="M2.75049 19.25H6.87549C7.63483 19.25 8.25049 18.635 8.25049 17.875C8.25049 17.115 7.63483 16.5 6.87549 16.5H2.75049C1.99115 16.5 1.37549 17.115 1.37549 17.875C1.37549 18.635 1.99115 19.25 2.75049 19.25Z" fill="white"></path>
								<path d="M4.12451 9.62501C4.8839 9.62501 5.49951 9.0094 5.49951 8.25001C5.49951 7.49062 4.8839 6.87502 4.12451 6.87502C3.36512 6.87502 2.74951 7.49062 2.74951 8.25001C2.74951 9.0094 3.36512 9.62501 4.12451 9.62501Z" fill="white"></path>
								<path d="M2.75049 24.75C3.50988 24.75 4.12549 24.1344 4.12549 23.375C4.12549 22.6156 3.50988 22 2.75049 22C1.9911 22 1.37549 22.6156 1.37549 23.375C1.37549 24.1344 1.9911 24.75 2.75049 24.75Z" fill="white"></path>
							</svg>
							ON DELIVERY
						</div>
						<div className="dropdown-menu dropdown-menu-left">
							<Link to={"#"} className="dropdown-item" >A To Z List</Link >
							<Link to={"#"} className="dropdown-item" >Z To A List</Link >
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-9 col-xxl-12">
						<div className="row">
							<div className="col-lg-12">
								<div className="card">
									<div className="widget-timeline-icon">
										<ul className="timeline">
											<li>
												<div className="icon bg-primary"></div>
												<Link to={"#"} className="timeline-panel text-muted" >
													<h4 className="mb-2 mt-0">Order Created</h4>
													<p className="fs-14 mb-0 ">Thu, 21 Jul 2020, 11:49 AM</p>
												</Link >
											</li>
											<li>
												<div className="icon bg-primary"></div>
												<Link to={"#"} className="timeline-panel text-muted" >
													<h4 className="mb-2 mt-0">Payment Success</h4>
													<p className="fs-14 mb-0 ">Fri, 22 Jul 2020, 10:44 AM</p>
												</Link >
											</li>
											<li className="border-dark">
												<div className="icon bg-primary"></div>
												<Link to={"#"} className="timeline-panel text-muted" >
													<h4 className="mb-2 mt-0">On Delivery</h4>
													<p className="fs-14 mb-0 ">Sat, 23 Jul 2020, 01:24 PM</p>
												</Link >
											</li>
											<li>
												<div className="icon bg-dark"></div>
												<Link to={"#"} className="timeline-panel text-muted" >
													<h4 className="mb-2 mt-0">Order Delivered</h4>
													<p className="fs-14 mb-0 ">Sat, 23 Jul 2020, 01:24 PM</p>
												</Link >
											</li>
										</ul>	
									</div>
								</div>
							</div>
							<div className="col-xl-12">
								<div className="card">
									<div className="card-body">
										<div className="full-map-area">
											<img src={require("../../../../images/svg/map.svg").default} alt="" style={{width:"100%"}} /> 
											<Link to={"#"} >
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M23 8.93333H21V4.41733L13.414 12L21 19.5853V15.0667H23V23H15.0667V21H19.5833L12 13.414L4.41467 21H8.93333V23H1V15.0667H3V19.584L10.586 12L3.00333 4.41467V8.93333H1.00333V1H8.93333V3H4.41733L12 10.586L19.5853 3.00333H15.0667V1.00333H23V8.93333Z" fill="white"></path>
												</svg>
											</Link >
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-12">
								<div className="card">
									<div className="card-body rounded" style={{background:"#3f4953"}}>
										<div className="row mx-0 align-items-center">
											<div className="media align-items-center col-xl-6 col-lg-5 px-0 mb-3 mb-md-0">
												<img className="mr-3 img-fluid rounded-circle" width="100" src={require("../../../../images/profile/5.png").default} alt="DexignZone" />
												<div className="media-body">
													<p className="text-white mb-1 wspace-no">Delivery guy</p>
													<h3 className="mb-1 text-white  fs-22">Rainold Hawkins</h3>
													<small className="text-gray wspace-no">ID 412455</small>
												</div>
											</div>
											<div className="text-left text-lg-right col-xl-6 col-lg-7 p-0 mt-lg-0 mt-3">
												<div className="iconbox mb-3 mr-3 mb-md-0">
													<i className="las la-phone"></i>
													<small>Telepon</small>
													<p>+12 345 5662 66</p>
												</div>
												<div className="iconbox mb-md-0">
													<i className="las la-shipping-fast"></i>
													<small>Delivery Time</small>
													<p>12:52 AM</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-12">
								<div className="card">
									<div className="card-body p-0">
										<div className="table-responsive order-list">
											<table className="table items-table">
												<tbody><tr>
													<th className="my-0 text-black font-w500 fs-20">Items</th>
													<th style={{width:"10%"}} className="my-0 text-black font-w500 fs-20">Qty</th>
													<th style={{width:"10%"}} className="my-0 text-black font-w500 fs-20">Price</th>
													<th className="my-0 text-black font-w500 fs-20 wspace-no d-md-none d-lg-table-cell">Total Price</th>
													<th></th>
												</tr>
												<tr>
													<td>
														<div className="media">
															<Link to={"/ecom-product-detail"} >
																<img className="mr-3 img-fluid rounded" width="85" src={require("../../../../images/card/pic5.jpg").default} alt="DexignZone" />
															</Link >
															<div className="media-body">
																<small className="mt-0 mb-1 font-w500"><Link to={"#"} className="text-primary" >MAIN COURSE</Link ></small>
																<h5 className="mt-0 mb-2 mb-4"><Link to={"/ecom-product-detail"} className="text-black" >Watermelon juice with ice</Link ></h5>
																<div className="star-review fs-14">
																	<i className="fa fa-star text-orange"></i>
																	<i className="fa fa-star text-orange"></i>
																	<i className="fa fa-star text-orange"></i>
																	<i className="fa fa-star text-gray"></i>
																	<i className="fa fa-star text-gray"></i>
																	<span className="ml-3 text-dark">(454 revies)</span>
																</div>
															</div>
														</div>
													</td>
													<td>
														<h4 className="my-0 text-secondary font-w600">1x</h4>
													</td>
													<td>
														<h4 className="my-0 text-secondary font-w600">$4.12</h4>
													</td>
													<td className="d-md-none d-lg-table-cell">
														<h4 className="my-0 text-secondary font-w600">$4.12</h4>
													</td>
													<td>
														<Link to={"#"}  className="ti-close fs-28 text-danger las la-times-circle"></Link >
													</td>
												</tr>
												<tr>
													<td>
														<div className="media">
															<Link to={"/ecom-product-detail"} >
																<img className="mr-3 img-fluid rounded" width="85" src={require("../../../../images/card/pic6.jpg").default} alt="DexignZone" />
															</Link >
															<div className="media-body">
																<small className="mt-0 mb-1 font-w500"><Link to={"#"} className="text-primary" >MAIN COURSE</Link ></small>
																<h5 className="mt-0 mb-2 text-black mb-4"><Link to={"/ecom-product-detail"} className="text-black" >Chicken curry special with cucumber</Link ></h5>
																<div className="star-review fs-14">
																	<i className="fa fa-star text-orange"></i>
																	<i className="fa fa-star text-orange"></i>
																	<i className="fa fa-star text-orange"></i>
																	<i className="fa fa-star text-gray"></i>
																	<i className="fa fa-star text-gray"></i>
																	<span className="ml-3 text-dark">(454 revies)</span>
																</div>
															</div>
														</div>
													</td>
													<td>
														<h4 className="my-0 text-secondary font-w600">3x</h4>
													</td>
													<td>
														<h4 className="my-0 text-secondary font-w600">$14.99</h4>
													</td>
													<td className="d-md-none d-lg-table-cell">
														<h4 className="my-0 text-secondary font-w600">$44.97</h4>
													</td>
													<td>
														<Link to={"#"}  className="ti-close fs-28 text-danger las la-times-circle"></Link >
													</td>
												</tr>
												<tr>
													<td>
														<div className="media">
															<Link to={"/ecom-product-detail"} >
																<img className="mr-3 img-fluid rounded" width="85" src={require("../../../../images/card/pic7.jpg").default} alt="DexignZone" />
															</Link >
															<div className="media-body">
																<small className="mt-0 mb-1 font-w500"><Link to={"#"} className="text-primary" >MAIN COURSE</Link ></small>
																<h5 className="mt-0 mb-2 text-black mb-4"><Link to={"/ecom-product-detail"} className="text-black" >Italiano pizza with garlic</Link ></h5>
																<div className="star-review fs-14">
																	<i className="fa fa-star text-orange"></i>
																	<i className="fa fa-star text-orange"></i>
																	<i className="fa fa-star text-orange"></i>
																	<i className="fa fa-star text-gray"></i>
																	<i className="fa fa-star text-gray"></i>
																	<span className="ml-3 text-dark">(454 revies)</span>
																</div>
															</div>
														</div>
													</td>
													<td>
														<h4 className="my-0 text-secondary font-w600">1x</h4>
													</td>
													<td>
														<h4 className="my-0 text-secondary font-w600">$15.44</h4>
													</td>
													<td className="d-md-none d-lg-table-cell">
														<h4 className="my-0 text-secondary font-w600">$15.44</h4>
													</td>
													<td>
														<Link to={"#"}  className="ti-close fs-28 text-danger las la-times-circle"></Link >
													</td>
												</tr>
											</tbody></table>
										</div>	
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-xxl-12">
						<div className="row">
							<div className="col-xl-12 col-md-6 col-xxl-6">
								<div className="card">
									<div className="card-body border-bottom">
										<div className="media align-items-center">
											<img className="mr-3 rounded-circle" src={require("../../../../images/profile/6.jpg").default} width="90" alt="" />
											<div className="media-body">
												<h4 className="text-black mb-3">James Witwitcky</h4>
												<span className="bgl-info fs-14 text-info p-2 rounded">Customer</span>
											</div>
										</div>
									</div>
									<div className="card-body border-bottom">
										<div className="media align-items-center">
											<svg className="mr-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M22.9993 17.4712V20.7831C23.0006 21.0906 22.9375 21.3949 22.814 21.6766C22.6906 21.9583 22.5096 22.2112 22.2826 22.419C22.0556 22.6269 21.7876 22.7851 21.4958 22.8836C21.2039 22.9821 20.8947 23.0187 20.5879 22.991C17.1841 22.6219 13.9145 21.4611 11.0418 19.6019C8.36914 17.9069 6.10319 15.6455 4.40487 12.9781C2.53545 10.0981 1.37207 6.81909 1.00898 3.40674C0.981336 3.10146 1.01769 2.79378 1.11572 2.50329C1.21376 2.2128 1.37132 1.94586 1.57839 1.71947C1.78546 1.49308 2.03749 1.31221 2.31843 1.18836C2.59938 1.06451 2.90309 1.0004 3.21023 1.00011H6.52869C7.06551 0.994834 7.58594 1.18456 7.99297 1.53391C8.4 1.88326 8.66586 2.36841 8.74099 2.89892C8.88106 3.9588 9.14081 4.99946 9.5153 6.00106C9.66413 6.39619 9.69634 6.82562 9.60812 7.23847C9.51989 7.65131 9.31494 8.03026 9.01753 8.33042L7.61272 9.73245C9.18739 12.4963 11.4803 14.7847 14.2496 16.3562L15.6545 14.9542C15.9552 14.6574 16.3349 14.4528 16.7486 14.3648C17.1622 14.2767 17.5925 14.3089 17.9884 14.4574C18.992 14.8312 20.0348 15.0904 21.0967 15.2302C21.6341 15.3058 22.1248 15.576 22.4756 15.9892C22.8264 16.4024 23.0128 16.9298 22.9993 17.4712Z" stroke="#566069" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
											</svg>
											<h4 className="mb-0 text-black">+51 5125 626 77</h4>
										</div>
									</div>
									<div className="card-body border-bottom">
										<div className="media align-items-center">
											<svg className="mr-4" width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{minWidth: "24px" }}>
												<path d="M28 13.3333C28 22.6667 16 30.6667 16 30.6667C16 30.6667 4 22.6667 4 13.3333C4 10.1507 5.26428 7.09848 7.51472 4.84805C9.76516 2.59761 12.8174 1.33333 16 1.33333C19.1826 1.33333 22.2348 2.59761 24.4853 4.84805C26.7357 7.09848 28 10.1507 28 13.3333Z" stroke="#3E4954" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
												<path d="M16 17.3333C18.2091 17.3333 20 15.5425 20 13.3333C20 11.1242 18.2091 9.33333 16 9.33333C13.7909 9.33333 12 11.1242 12 13.3333C12 15.5425 13.7909 17.3333 16 17.3333Z" stroke="#3E4954" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
											</svg>
											<h4 className="mb-0 text-black">Long Horn St. Avenue 351636 London</h4>
										</div>
									</div>
									<div className="card-body">
										<h4 className="text-black font-weight-bold mb-3 wspace-no">Note Order</h4>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
									</div>
								</div>
							</div>
							<div className="col-xl-12 col-md-6 col-xxl-6">
								<div className="card">
									<div className="card-header border-0">
										<h4 className="text-black font-w600 wspace-no">Customer Favourite</h4>
									</div>
									<div className="card-body pt-0">
										<div className="text-center">
											<div className="d-inline-block">
											{/* Polar Chart */}
												<div id="polarAreaCharts">
													<PolarAreaCharts />
												</div>
											</div>
										</div>
										<div className="mb-3">
											<div className="d-flex justify-content-between mb-3">
												<p className="mb-0 fs-14 text-black">Pizza (40%)</p>
												<p className="mb-0 fs-14">25</p>
											</div>
											<div className="progress" style={{height:"8px"}}>
												<div className="progress-bar progress-animated bg-warning" style={{width:"80%"}}></div>
											</div>
										</div>
										<div className="mb-3">
											<div className="d-flex justify-content-between mb-3">
												<p className="mb-0 fs-14 text-black">Juice (35%)</p>
												<p className="mb-0 fs-14">60</p>
											</div>
											<div className="progress" style={{height:"8px"}}>
												<div className="progress-bar progress-animated bg-primary" style={{width:"60%"}}></div>
											</div>
										</div>
										<div className="mb-3">
											<div className="d-flex justify-content-between mb-3">
												<p className="mb-0 fs-14 text-black">Dessert (25%)</p>
												<p className="mb-0 fs-14">7</p>
											</div>
											<div className="progress" style={{height:"8px"}}>
												<div className="progress-bar progress-animated bg-info" style={{width:"25%"}}></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
					
			</Fragment>
		)
	}
}

export default Order;