import React,{useState,useEffect,useRef,Fragment} from 'react';

import data from "./tabledata";
import { Badge, Dropdown, Table } from "react-bootstrap";

const ProductOrder = () => {

   const url = new URL(
      "https://api.chec.io/v1/orders"
  );
  
  const headers = {
      "X-Authorization": "sk_517265b2dc5cad78241fa72ca6aa2249255aecf041d43",
      "Content-Type": "application/json",
      "access-control-allow-methods":"GET, POST, OPTIONS, DELETE, PUT",
      "access-control-allow-origin":"*",
      "Cache-Control":"no-store, private",
      "strict-transport-security":"max-age=15552000; includeSubDomains; preload",
      "x-support":"http://slack.commercejs.com"
  };
  
  const [Orders, setOrders] = useState([]);

  useEffect(() => {
   fetch(url, {
      method: "GET",
      headers: headers,
  })
  .then(response => response.json())
   .then((data) => { 
      return data,
   setOrders(data.data)
}) 
 .catch(err => console.log(err))
},[setOrders])
console.log(Orders,"Orders");
   return (
     
      <div className="h-80">
         
         <div className="row">
            <div className="col-lg-12">
               <div className="card">
                  <div className="card-body">
                     <Table responsive className="table-responsive-xl" size="sm">
                        <thead>
                           
                           <tr>                              
                                 <th className="align-middle">
                                   Order Id
                                 </th>
                                 <th className="align-middle">
                                   Email
                                 </th>
                                 <th className="align-middle">
                                   Customer Name
                                 </th>
                                 <th className="align-middle">
                                   Shipping Address
                                 </th>
                                 <th className="align-middle">
                                   Status
                                 </th>
                                 <th className="align-middle">
                                   Amount
                                 </th>
                              <th></th>
                           </tr>
                        </thead>
                        <tbody id="orders">
                           {Orders.map((d, i) => (
                              <tr key={i}>
                                
                                 <td>{d.id}</td>
                               <td>{d.customer.email}</td>
                               <td>{d.customer.firstname}</td>
                               <td>{d.shipping.name},{d.shipping.street},{d.shipping.town_city}</td>
                               <td>
                                       {d.status_payment === "Paid" ? (
                                          <Badge variant="success light">
                                             Paid
                                          </Badge>
                                       ) : d.status_payment === "Unpaid" ? (
                                          <Badge variant="danger light">
                                             Unpaid
                                          </Badge>
                                       ) : d.status_payment === "Panding" ? (
                                          <Badge variant="warning light">
                                             Pending
                                          </Badge>
                                       ) : (
                                          d.status_payment
                                       )}
                                    </td> 
                               <td>{d.order_value.formatted_with_symbol}</td>
                               <Dropdown>
                                             <Dropdown.Toggle
                                                variant=""
                                                className="table-dropdown icon-false"
                                             >
                                                <svg
                                                   width="24px"
                                                   height="24px"
                                                   viewBox="0 0 24 24"
                                                   version="1.1"
                                                >
                                                   <g
                                                      stroke="none"
                                                      strokeWidth="1"
                                                      fill="none"
                                                      fillRule="evenodd"
                                                   >
                                                      <rect
                                                         x="0"
                                                         y="0"
                                                         width="24"
                                                         height="24"
                                                      ></rect>
                                                      <circle
                                                         fill="#000000"
                                                         cx="5"
                                                         cy="12"
                                                         r="2"
                                                      ></circle>
                                                      <circle
                                                         fill="#000000"
                                                         cx="12"
                                                         cy="12"
                                                         r="2"
                                                      ></circle>
                                                      <circle
                                                         fill="#000000"
                                                         cx="19"
                                                         cy="12"
                                                         r="2"
                                                      ></circle>
                                                   </g>
                                                </svg>
                                             </Dropdown.Toggle>
                                             <Dropdown.Menu>
                                                <Dropdown.Item href="#">
                                                   Completed
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                   Processing
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                   On Hold
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                   Pending
                                                </Dropdown.Item>
                                                <div className="dropdown-divider"></div>
                                                <Dropdown.Item
                                                   href="#"
                                                   className="text-danger"
                                                >
                                                   Delete
                                                </Dropdown.Item>
                                             </Dropdown.Menu>
                                          </Dropdown>
                              </tr>
                           ))}
                        </tbody>
                     </Table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductOrder;
