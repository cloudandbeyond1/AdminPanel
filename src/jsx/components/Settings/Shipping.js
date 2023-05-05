import React, { Fragment } from "react";
import { Form } from "react-bootstrap";
import {
    Row,
    Col,
    Card,
    Table,
    Badge,
    Dropdown,
    ProgressBar,
 } from "react-bootstrap";
 


const Shipping = () => {

   const styles = {
		radiobtn: {
		  marginRight: "20px !important",
		  marginTop: "0px !important",
		},
		
	  }

      const svg1 = (
        <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
           <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <rect x="0" y="0" width="24" height="24"></rect>
              <circle fill="#000000" cx="5" cy="12" r="2"></circle>
              <circle fill="#000000" cx="12" cy="12" r="2"></circle>
              <circle fill="#000000" cx="19" cy="12" r="2"></circle>
           </g>
        </svg>
     );
     
   return (
      <Fragment>
         <div className="row">
            <div className="col-xl-12">
               <div className="card">
                  <div className="card-body">
                     <div className="row">
                        <div className="col-md-12 order-md-1">
                           <form className="needs-validation" noValidate="">
                              

                              <h4 className="mb-3">Tax Rate Zones</h4>
                              <hr className="mb-4" />
                              
{/* Search */}
<div data-test="datatable-input" class="mdb-datatable-filter flex-row" style={{float:"right",marginTop:"-70px"}}>
			     <input class="form-control form-control-sm ml-0 my-1" type="text" placeholder="Search" aria-label="Search" value=""/>
			  </div>

              <Table responsive className="w-100">
				   <div id="example_wrapper" className="dataTables_wrapper">
					  <table id="example" className="display w-100 dataTable">
                        <thead>
                           <tr>
                              <th className="width80">
                                 <strong>Zone</strong>
                              </th>
                              <th>
                                 <strong>No of Countries</strong>
                              </th>
                              <th>
                                 <strong>No of Regions</strong>
                              </th>
                              <th>
                                 <strong>Actions</strong>
                              </th>
                              
                              <th></th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>
                                 Domestic (United States)
                              </td>
                              <td>1</td>                              
                              <td>57</td>
                              <td>
                                 <Dropdown>
                                    <Dropdown.Toggle
                                       variant="success"
                                       className="light sharp icon-false"
                                    >
                                       {svg1}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                       <Dropdown.Item>Edit</Dropdown.Item>
                                       <Dropdown.Item>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 USA
                              </td>
                              <td>18.0%</td>
                              
                              <td>
                              
                                    1.0%
                              </td>
                              
                              <td>
                                 <Dropdown>
                                    <Dropdown.Toggle
                                       variant="danger"
                                       className="light sharp icon-false">
                                       {svg1}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                       <Dropdown.Item>Edit</Dropdown.Item>
                                       <Dropdown.Item>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </td>
                           </tr>
                           
                           
                           
                        </tbody>
                        </table>
                        </div>                             
                     </Table>
                        
                           

                           
                              

                             


                              <button
                                 className="btn btn-primary btn-sm"
                                 type="submit">
                                 Save Changes
                              </button>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
         </div>
      </Fragment>
   );
};

export default Shipping;
