

import React,{useState,useEffect,useRef,Fragment} from 'react';
import {Link} from 'react-router-dom';
import Commerce from '@chec/commerce.js';
import { Table,Pagination, Button } from "react-bootstrap";



const Customerlist = () => {
	const commerce = new Commerce('pk_517267717706df3d39ab4a44126aae98baf632b72c612')
 
	const [products, setProducts] = useState([])
	// const [categories,setCategories] = useState([])
  
	
  
	useEffect(() => {
	  commerce.products.list()
		.then(res => {
		  console.log(res,"fg");
		  setProducts(res.data)        
		})
		.catch(err => console.log(err))
  },[setProducts])
  
  
	 
  const sort = 3;
  let jobPagination = Array(Math.ceil(products.length / sort))
	 .fill()
	 .map((_, i) => i + 1);
	 console.log(products,jobPagination,"jobPagination");
  const activePag = useRef(0);
  const jobData = useRef(
	products.slice(
		activePag.current * sort,
		(activePag.current + 1) * sort
	 )	
  );
  console.log(jobData,activePag,"jobData");
  const [demo, setdemo] = useState();
  const onClick = (i) => {
	 activePag.current = i;

	 jobData.current = products.slice(
		activePag.current * sort,
		(activePag.current + 1) * sort
	 );
	setdemo(
		products.slice(
		   activePag.current * sort,
		   (activePag.current + 1) * sort
		)
	 );
  };
  console.log(jobData.current,activePag,"jobData");
  return (
	 <div className="col-12">
		<div className="card">
		   <div className="card-header">
			  <h4 className="card-title">Customer List</h4>
		   </div>
		   <div className="card-body">


		   <div class="dataTables_length" id="example_length">
			<label>Show entries</label>
				<select  class="custom-select custom-select-sm form-control form-control-sm ml-1"  style={{width:"60px",height:"42px"}}>
					
					<option value="10">10</option>
					<option value="25">25</option>
					<option value="50">50</option>
					<option value="100">100</option>
					</select>
				
				</div> 
										

				<div data-test="datatable-input" class="mdb-datatable-filter flex-row" style={{float:"right",marginTop:"-40px"}}>
					<input class="form-control form-control-sm ml-0 my-1" type="text" placeholder="Search" aria-label="Search" value=""/>
					</div>


			  <Table responsive className="w-100">
				 <div id="example_wrapper" className="dataTables_wrapper">
					<table id="example" className="display w-100 dataTable">
					   <thead>
					   <tr>
              <th>#</th>
             <th>Full Name</th>
             <th>Mobile</th>
			 <th>Status</th>
             <th>Action</th>
             </tr>
					   </thead>
					   <tbody>
        
         
              
                 <tr>
                  <td>1</td>
				  <td> 
					Ananda Raj
				  </td>
                  <td>1234569870</td>
                  <td><Button className='btn btn-sm' style={{backgroundColor:"#f72b50",borderRadius:"0px"}}> Make Deaction</Button></td>
				  <td ><a href="" class="btn btn-danger shadow btn-xs sharp mr-1"><i class="fa fa-trash"></i></a><a href="" class="btn btn-success shadow btn-xs sharp"><i class="fa fa-map-pin"></i></a>
				  <a href="" class="btn btn-info shadow btn-xs ml-1 sharp"><i class="fa fa-file"></i></a></td>
                </tr>
				<tr>
                  <td>2</td>
				  <td> 
					Riyas
				  </td>
                  <td>1234569871</td>
                  <td><Button className='btn btn-sm' style={{backgroundColor:"#f72b50",borderRadius:"0px"}}> Make Deaction</Button></td>
				  <td ><a href="" class="btn btn-danger shadow btn-xs sharp mr-1"><i class="fa fa-trash"></i></a><a href="" class="btn btn-success shadow btn-xs sharp"><i class="fa fa-map-pin"></i></a>
				  <a href="" class="btn btn-info shadow btn-xs ml-1 sharp"><i class="fa fa-file"></i></a></td>
                </tr>
				<tr>
                  <td>3</td>
				  <td> 
					Praveen
				  </td>
                  <td>1234569872</td>
                  <td><Button className='btn btn-sm' style={{backgroundColor:"#f72b50",borderRadius:"0px"}}> Make Deaction</Button></td>
				  <td ><a href="" class="btn btn-danger shadow btn-xs sharp mr-1"><i class="fa fa-trash"></i></a><a href="" class="btn btn-success shadow btn-xs sharp"><i class="fa fa-map-pin"></i></a>
				  <a href="" class="btn btn-info shadow btn-xs ml-1 sharp"><i class="fa fa-file"></i></a></td>
                </tr>
				<tr>
                  <td>4</td>
				  <td> 
					Mounika
				  </td>
                  <td>1234569873</td>
                  <td><Button className='btn btn-sm' style={{backgroundColor:"#f72b50",borderRadius:"0px"}}> Make Deaction</Button></td>
				  <td ><a href="" class="btn btn-danger shadow btn-xs sharp mr-1"><i class="fa fa-trash"></i></a><a href="" class="btn btn-success shadow btn-xs sharp"><i class="fa fa-map-pin"></i></a>
				  <a href="" class="btn btn-info shadow btn-xs ml-1 sharp"><i class="fa fa-file"></i></a></td>
                </tr>
				<tr>
                  <td>5</td>
				  <td> 
					Jaya Sri
				  </td>
                  <td>1234569874</td>
                  <td><Button className='btn btn-sm' style={{backgroundColor:"#f72b50",borderRadius:"0px"}}> Make Deaction</Button></td>
				  <td ><a href="" class="btn btn-danger shadow btn-xs sharp mr-1"><i class="fa fa-trash"></i></a><a href="" class="btn btn-success shadow btn-xs sharp"><i class="fa fa-map-pin"></i></a>
				  <a href="" class="btn btn-info shadow btn-xs ml-1 sharp"><i class="fa fa-file"></i></a></td>
                </tr>
				<tr>
                  <td>6</td>
				  <td> 
					Raghav
				  </td>
                  <td>1234569875</td>
                  <td><Button className='btn btn-sm' style={{backgroundColor:"#f72b50",borderRadius:"0px"}}> Make Deaction</Button></td>
				  <td ><a href="" class="btn btn-danger shadow btn-xs sharp mr-1"><i class="fa fa-trash"></i></a><a href="" class="btn btn-success shadow btn-xs sharp"><i class="fa fa-map-pin"></i></a>
				  <a href="" class="btn btn-info shadow btn-xs ml-1 sharp"><i class="fa fa-file"></i></a></td>
                </tr>
				<tr>
                  <td>7</td>
				  <td> 
					Philip
				  </td>
                  <td>1234569876</td>
                  <td><Button className='btn btn-sm' style={{backgroundColor:"#f72b50",borderRadius:"0px"}}> Make Deaction</Button></td>
				  <td ><a href="" class="btn btn-danger shadow btn-xs sharp mr-1"><i class="fa fa-trash"></i></a><a href="" class="btn btn-success shadow btn-xs sharp"><i class="fa fa-map-pin"></i></a>
				  <a href="" class="btn btn-info shadow btn-xs ml-1 sharp"><i class="fa fa-file"></i></a></td>
                </tr>
				<tr>
                  <td>8</td>
				  <td> 
					Thirukumaran
				  </td>
                  <td>1234569877</td>
                  <td><Button className='btn btn-sm' style={{backgroundColor:"#f72b50",borderRadius:"0px"}}> Make Deaction</Button></td>
				  <td ><a href="" class="btn btn-danger shadow btn-xs sharp mr-1"><i class="fa fa-trash"></i></a><a href="" class="btn btn-success shadow btn-xs sharp"><i class="fa fa-map-pin"></i></a>
				  <a href="" class="btn btn-info shadow btn-xs ml-1 sharp"><i class="fa fa-file"></i></a></td>
                </tr>
				<tr>
                  <td>9</td>
				  <td> 
				  Kingsly
				  </td>
                  <td>1234569878</td>
                  <td><Button className='btn btn-sm' style={{backgroundColor:"#f72b50",borderRadius:"0px"}}> Make Deaction</Button></td>
				  <td ><a href="" class="btn btn-danger shadow btn-xs sharp mr-1"><i class="fa fa-trash"></i></a><a href="" class="btn btn-success shadow btn-xs sharp"><i class="fa fa-map-pin"></i></a>
				  <a href="" class="btn btn-info shadow btn-xs ml-1 sharp"><i class="fa fa-file"></i></a></td>
                </tr>
				<tr>
                  <td>10</td>
				  <td> 
					Balasubramanian
				  </td>
                  <td>1234567890</td>
                  <td><Button className='btn btn-sm' style={{backgroundColor:"#f72b50",borderRadius:"0px"}}> Make Deaction</Button></td>
				  <td ><a href="" class="btn btn-danger shadow btn-xs sharp mr-1"><i class="fa fa-trash"></i></a><a href="" class="btn btn-success shadow btn-xs sharp"><i class="fa fa-map-pin"></i></a>
				  <a href="" class="btn btn-info shadow btn-xs ml-1 sharp"><i class="fa fa-file"></i></a></td>
                </tr>
              
           
   
		  {/* {jobData.current.map((d,i) => (				
                              <tr key={i}>
                                 {products.map((da) =>  (
									 <Fragment>
									<td>{da.name}</td>
									<td> <img
																  className=""
																  width="80"
																  src={da.image.url}
																  alt=""
															   /></td>
									<td dangerouslySetInnerHTML={{__html: da.description}}></td>
									<td>{da.price.formatted_with_symbol}</td>
									</Fragment>
								 ))}
								 </tr>
								 ))} */}
            
			
         </tbody>
					</table>

					<div className="d-flex justify-content-between align-items-center mt-3">
					   <div className="dataTables_info">
						  Showing {activePag.current * sort + 1} to
						  {products.length <
						  (activePag.current + 1) * sort
							 ? products.length
							 : (activePag.current + 1) * sort}
						  of {products.length} entries
					   </div>
					   <div className="dataTables_paginate paging_simple_numbers">
						  <Pagination
							 className="pagination-primary pagination-circle"
							 size="lg"
						  >
							 <li
								className="page-item page-indicator "
								onClick={() =>
								   activePag.current > 1 &&
								   onClick(activePag.current - 1)
								}
							 >
								<Link className="page-link" to="#">
								   <i className="la la-angle-left" />
								</Link>
							 </li>
							 {jobPagination.map((number, i) => (
								<Pagination.Item
								   className={
									  activePag.current === i ? "active" : ""
								   }
								   onClick={() => onClick(i)}
								>
								   {number}
								</Pagination.Item>
							 ))}
							 <li
								className="page-item page-indicator"
								onClick={() =>
								   activePag.current + 1 <
									  jobPagination.length &&
								   onClick(activePag.current + 1)
								}
							 >
								<Link className="page-link" to="#">
								   <i className="la la-angle-right" />
								</Link>
							 </li>
						  </Pagination>
					   </div>
					</div>
				 </div>
			  </Table>
		   </div>
		</div>
	 </div>
  );
};

// 	return (
// 		<Fragment>
// 			 <div className="col-12">
//          <div className="card">
//             <div className="card-header">
//                <h4 className="card-title">List of Product</h4>
//             </div>
//             <div className="card-body">
//                <Table responsive className="w-100">
//                   <div id="example_wrapper" className="dataTables_wrapper">
//                      <table
//                         id="example"
//                         className="display w-100 dataTable"
//                         role="grid"
//                         aria-describedby="example_info"
//                      >
//                         <thead>
//             <tr>
//               <th>ID</th>
//               <th>Email</th>
//               <th>Username</th>
//             </tr>
//           </thead>
// 		  <tbody>
//           {products.map((result) => {
//             return (
              
//                  <tr>
//                   <td>{result.name}</td>
//                   <td>{result.description}</td>
//                   <td>{result.id}</td>
//                 </tr>
              
//             )
//           })}
            
             
//           </tbody>
                       
//                      </table>
//                   </div>
//                </Table>
//             </div>
//          </div>
//       </div>
// 			{/* <div className="row">
// 				<div className="col-xl-12">
// 					<div className="table-responsive">
// 						<div  className="display mb-4 dataTablesCard">					
// 						<div className="container">
           
//           <table id="example" class="table table-hover table-bordered">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Email</th>
//               <th>Username</th>
//             </tr>
//           </thead>
//           <tbody>
//           {products.map((result) => {
//             return (
              
//                  <tr>
//                   <td>{result.name}</td>
//                   <td>{result.description}</td>
//                   <td>{result.id}</td>
//                 </tr>
              
//             )
//           })}
            
             
//           </tbody>
//         </table>
           
//         </div>	
// 						</div>
// 					</div>
// 				</div>	
// 			</div> */}
// 		</Fragment>
					
// 	);
// }
export default Customerlist