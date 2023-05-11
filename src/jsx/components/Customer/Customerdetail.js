

import React,{useState,useEffect,useRef,Fragment} from 'react';
import {Link} from 'react-router-dom';
import { Dropdown } from "react-bootstrap";

import avartar5 from "../../../images/avatar/5.png";
import avartar1 from "../../../images/avatar/1.png";
import Commerce from '@chec/commerce.js';



const Customerdetail = () => {
	
    const url = new URL(
        "https://api.chec.io/v1/customers/cstmr_DWy4oGyjPPl6Jx/orders"
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
             <div class="card">
						
                        <div class="card-header">
                                                       <h4 class="card-title">ahmed sherif Card Report</h4>
                                                   </div>
                                                   <div class="card-body">
                                                   <div class="row">
                                                   <div class="col-xl-3 col-xxl-6 col-lg-6 col-sm-6">
                                                   
                                               <div class="widget-stat card bg-primary">
                                                   <div class="card-body p-4">
                                                       <div class="media">
                                                           <span class="mr-3">
                                                               <i class="fa fa-first-order"></i>
                                                           </span>
                                                           <div class="media-body text-white text-right">
                                                               <p class="mb-1">Total Orders</p>
                                                               <h3 class="text-white">1</h3>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               
                                           </div>
                                           
                                           <div class="col-xl-3 col-xxl-6 col-lg-6 col-sm-6">
                                               <div class="widget-stat card bg-success">
                                                   <div class="card-body p-4">
                                                       <div class="media">
                                                           <span class="mr-3">
                                                               
                                                           </span>
                                                           <div class="media-body text-white text-right">
                                                               <p class="mb-1">Wallet Balance</p>
                                                               <h3 class="text-white">0 $</h3>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           
                                           <div class="col-xl-3 col-xxl-6 col-lg-6 col-sm-6">
                                               <div class="widget-stat card bg-info">
                                                   <div class="card-body p-4">
                                                       <div class="media">
                                                           <span class="mr-3">
                                                               
                                                           </span>
                                                           <div class="media-body text-white text-right">
                                                               <p class="mb-1">Wallet Active?</p>
                                                               <h3 class="text-white">No</h3>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           
                                           
                                           </div>
                                           </div>
                                           
                                            <div class="card-header">
                                                       
                                                                           <h4 class="card-title">Add Balance OR Substract Balance</h4>
                                                                   </div>
                                                   <div class="card-body">
                                                       <div class="basic-form">
  <form method="post">
  <div class="form-group">
  <label>Amount</label>
  <input type="text" class="form-control numberonly" placeholder="Enter Amount" name="amt" required=""/>
  </div><div class="col-12">
        <button type="submit" name="add_bal" class="btn btn-success mb-2">+ Add Amount</button>
        <button type="submit" name="sub_bal" class="btn btn-danger mb-2"> - Substract Amount</button>
        </div>
        </form>
        </div>
        </div>                                     
         <div class="card-header">
         <h4 class="card-title">ahmed sherif Wallet Transaction Report</h4>
         </div>
         <div class="card-body">
         <div class="table-responsive">
                                                           <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper no-footer"><div class="dataTables_length" id="DataTables_Table_0_length"><label>Show <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" class=""><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div><div id="DataTables_Table_0_filter" class="dataTables_filter"><label>Search:<input type="search" class="" placeholder="" aria-controls="DataTables_Table_0"/></label></div><table class="dbs dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
                                                               <thead>
                                                                   <tr role="row"><th class="text-center sorting_desc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-sort="descending" aria-label="
                                                                           Sr No.
                                                                       : activate to sort column ascending" style={{width: "184.479px;"}}>
                                                                           Sr No.
                                                                       </th><th class="text-center sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="
                                                                          Wallet Id
                                                                       : activate to sort column ascending" style={{width: "256.215px;"}}>
                                                                          Wallet Id
                                                                       </th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Datetime: activate to sort column ascending" style={{width: "268.524px;"}}>Datetime</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Message: activate to sort column ascending" style={{width: "260.486px;"}}>Message</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style={{width: "202.917px;"}}>Status</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Amount: activate to sort column ascending" style={{width: "240.99px;"}}>Amount</th></tr>
                                                               </thead>
                                                               <tbody>
                                                                                                             
                                                               <tr class="odd"><td valign="top" colspan="6" class="dataTables_empty">No data available in table</td></tr></tbody>
                                                               
                                                           </table><div class="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div><div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate"><a class="paginate_button previous disabled" aria-controls="DataTables_Table_0" data-dt-idx="0" tabindex="0" id="DataTables_Table_0_previous">Previous</a><span></span><a class="paginate_button next disabled" aria-controls="DataTables_Table_0" data-dt-idx="1" tabindex="0" id="DataTables_Table_0_next">Next</a></div></div>
                                                       </div>
                                                   </div>
                                                   
                                                   <div class="card-header">
                                                       <h4 class="card-title">ahmed sherif Order Report</h4>
                                                   </div>
                                                    <div class="card-body">
                                                       <div class="table-responsive">
                                                           <div id="DataTables_Table_1_wrapper" class="dataTables_wrapper no-footer"><div class="dataTables_length" id="DataTables_Table_1_length"><label>Show <select name="DataTables_Table_1_length" aria-controls="DataTables_Table_1" class=""><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div><div id="DataTables_Table_1_filter" class="dataTables_filter"><label>Search:<input type="search" class="" placeholder="" aria-controls="DataTables_Table_1"/></label></div><table class="dbs dataTable no-footer" id="DataTables_Table_1" role="grid" aria-describedby="DataTables_Table_1_info">
                                                               <thead>
                                                                   <tr role="row"><th class="sorting_desc" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1" aria-sort="descending" aria-label="Order No.: activate to sort column ascending" style={{width: "133.438px;"}}>Order No.</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1" aria-label="Order Date: activate to sort column ascending" style={{width:"175.243px;"}}>Order Date</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1" aria-label="Restaurant Name: activate to sort column ascending" style={{width: "239.497px;"}}>Restaurant Name</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1" aria-label="Customer Name: activate to sort column ascending" style={{width: "223.785px;"}}>Customer Name</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1" aria-label="Customer Address: activate to sort column ascending" style={{width: "252.344px;"}}>Customer Address</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1" aria-label="Amount: activate to sort column ascending" style={{width: "117.708px;"}}>Amount</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1" aria-label="Order Status: activate to sort column ascending" style={{width: "174.826px;"}}>Order Status</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_1" rowspan="1" colspan="1" aria-label=": activate to sort column ascending" style={{width: "24.8264px;"}}></th></tr>
                                                               </thead>
                                                               <tbody>
                                                               {Customers.map((d, i) => (
                                                                                                                  
                                                                  
                                                               <tr role="row" class="odd">
                                                                       <td class="sorting_1">
                                                                       {d.customer.id}                  </td>
                                                                       <td> May 09, 04:10 AM</td>
                                                                      
                                                                              
                                                                      <td> McDonald's</td>
                                                                   
                       <td> test</td>												
                                                                      <td> test</td>
                                                                      <td> 64169 $</td>
                                                                      <td>
                       
                                                                                   <a class="btn text-info bgl-info" href="javascript:void(0);">Cancelled</a>
                                                                               </td>
                                                                      <td>
                                                                                   <div class="dropdown">
                                                                                       {/* <a class="btn-link" href="javascript:void(0)" data-toggle="dropdown" aria-expanded="false">
                                                                                           <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="12" cy="5" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="19" r="2"></circle></g></svg>
                                                                                       </a> */}
                                                                                       <div class="dropdown-menu dropdown-menu-right">
                                                                                       
                                                                                           <a href="orderdetails.php?orderid=1718" class="dropdown-item text-success">View Order Details</a>
                                                                                       </div>
                                                                                   </div>
                                                                               </td>
                                                                       
                                                                       </tr>
                                                                       ))}</tbody>
                                                               
                                                           </table>
                                                           <div class="dataTables_info" id="DataTables_Table_1_info" role="status" aria-live="polite">Showing 1 to 1 of 1 entries</div><div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_1_paginate"><a class="paginate_button previous disabled" aria-controls="DataTables_Table_1" data-dt-idx="0" tabindex="0" id="DataTables_Table_1_previous">Previous</a><span><a class="paginate_button current" aria-controls="DataTables_Table_1" data-dt-idx="1" tabindex="0">1</a></span><a class="paginate_button next disabled" aria-controls="DataTables_Table_1" data-dt-idx="2" tabindex="0" id="DataTables_Table_1_next">Next</a></div></div>
                                                       </div>
                                                   </div>
                                               </div>
			 </div>
		  </div>
	   </Fragment>
	);
 };
 
 export default Customerdetail;

