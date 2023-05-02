


import React,{useState,useEffect,useRef,Fragment} from 'react';
import {Link} from 'react-router-dom';
import Commerce from '@chec/commerce.js';
import { Table,Pagination } from "react-bootstrap";



const ListProduct = () => {
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
			  <h4 className="card-title">List Of Products</h4>
		   </div>
		   <div className="card-body">
			  <Table responsive className="w-100">
				 <div id="example_wrapper" className="dataTables_wrapper">
					<table id="example" className="display w-100 dataTable">
					   <thead>
					   <tr>
              <th>Product Name</th>
             <th>Product</th>
             <th>Description</th>
			 <th>Price</th>
             </tr>
					   </thead>
					   <tbody>
          {products.map((result) => {
            return (
              
                 <tr>
                  <td>{result.name}</td>
				  <td> <img
                                                className=""
                                                width="80"
                                                src={result.image.url}
                                                alt=""
                                             /></td>
                  <td dangerouslySetInnerHTML={{__html: result.description}}></td>
                  <td>{result.price.formatted_with_symbol}</td>
                </tr>
              
            )
          })}
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
export default ListProduct;