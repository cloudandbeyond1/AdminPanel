import React, { Fragment } from "react";
import PageTitle from "../../layouts/PageTitle";
import {
   Row,
   Col,
   Card,
   Table,
   Badge,
   Dropdown,
   ProgressBar,
} from "react-bootstrap";

/// imge
import avatar1 from "../../../images/avatar/1.jpg";
import avatar2 from "../../../images/avatar/2.jpg";
import avatar3 from "../../../images/avatar/3.jpg";
import { Link } from "react-router-dom";

const ListCategory = () => {
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
         
         <Row>
            <Col lg={12}>
               <Card>
                  <Card.Header>
                     <Card.Title>Category List</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Table responsive="md">
                        <thead>
                           <tr>
                              <th className="width80">
                                 <strong>S.No.</strong>
                              </th>
                              <th>
                                 <strong>Category Name</strong>
                              </th>
                              <th>
                                 <strong>Status</strong>
                              </th>
                              <th>
                                 <strong>Action</strong>
                              </th>
                              
                              <th></th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>
                                 <strong>01</strong>
                              </td>
                              <td>Veg Only</td>
                              
                              <td>
                                 <Badge variant="success light">
                                    Publish
                                 </Badge>
                              </td>
                              
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
                                 <strong>02</strong>
                              </td>
                              <td>Top Rated</td>
                              
                              <td>
                              <Badge variant="success light">
                                    Publish</Badge>
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
                           <tr>
                              <td>
                                 <strong>03</strong>
                              </td>
                              <td>Offers Near You</td>
                              
                              <td>
                              <Badge variant="success light">
                                    Publish</Badge>
                              </td>
                              
                              <td>
                                 <Dropdown>
                                    <Dropdown.Toggle
                                       variant="warning"
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
                                 <strong>04</strong>
                              </td>
                              <td>Best Sellers</td>
                              
                              <td>
                              <Badge variant="success light">
                                    Publish</Badge>
                              </td>
                              
                              <td>
                                 <Dropdown>
                                    <Dropdown.Toggle
                                       variant="warning"
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
                                 <strong>05</strong>
                              </td>
                              <td>Best In Safety</td>
                              
                              <td>
                              <Badge variant="success light">
                                    Publish</Badge>
                              </td>
                              
                              <td>
                                 <Dropdown>
                                    <Dropdown.Toggle
                                       variant="warning"
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
                        </tbody>
                     </Table>
                  </Card.Body>
               </Card>
            </Col>
            
         </Row>
      </Fragment>
   );
};

export default ListCategory;
