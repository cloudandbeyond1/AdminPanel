import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//For API Requests
import axios from 'axios';

//Success POPUP
import Swal from 'sweetalert2'

class Addproduct extends React.Component {
  constructor(props)
    {
      super(props);
      
      // this.state = {
      //   imagedata : String
      // };
      this.addFormData = this.addFormData.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    //FileChange
    handleChange(file)
    {
      this.setState({ 
        imagedata: file[0],
      })
    }
    //Form Submission
    addFormData(evt)
      {
        evt.preventDefault();
        const fd = new FormData();
        fd.append('productname', "Testbtr");
        fd.append('productprice', "gfdg");
       // fd.append('productimage', this.state.imagedata);
        fd.append('productdesc', "fgdf");
        
      //   axios.post('https://api.chec.io/v1/products', fd
      //   ).then(res=>
const headers = {
    "X-Authorization": "sk_test_5172686a5fb9362d98b0400373095dcaf3fb18c7fcd1e",
    "Accept": "application/json",
    "Content-Type": "application/json",
};

      fetch("https://api.chec.io/v1/products", {
             method: "POST",
             body: fd,
             headers: headers,
         })
             .then(res=>
        {
  
      this.myFormRef.reset();
      //Success Message in Sweetalert modal
      Swal.fire({
        title: 'Product has been added successfully.',
        text: "Thanks",
        type: 'success',
        
      });
      
      }
      );
      }
  
  render() {
    return (
      <div className="MainDiv">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div class="container">
            <a class="navbar-brand" href="#">Therichpost</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>

        <div class="container main-container">

          <div class="row">

            <div class="col-lg-12">
              <h1 className="text-center mt-5 mb-5">Reactjs Eccommerce Site - Add Product</h1>

              <form ref={(el) => this.myFormRef = el} className="mt-5 mb-5">
                <div className="form-group">
                <input type="text" className="form-control" id="productname" placeholder="Enter Product Name" ref="productname" />
                </div>
                <div className="form-group">
                <input type="text" className="form-control" id="price" placeholder="Product Price" ref="productprice" />
                </div>
                <div className="form-group">
                <label for="image">Product Image:</label>
                <input onChange={ (e) => this.handleChange(e.target.files) } type="file" className="form-control" id="image" ref="productimage" />
                </div>
                <div className="form-group">
                <label for="comment">Product Description:</label>
                <textarea class="form-control" rows="5" id="productdesc" ref="productdesc"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.addFormData}>Submit</button>
            </form>

              

            </div>
            

            
           

          </div>
        

        </div>
       
       
      </div>
    );
  }
}

export default Addproduct;



// import { Card, Container, Row ,Col, Form, InputGroup, ListGroup,Table} from 'react-bootstrap';
// import React, { useState,useEffect } from 'react';
// import Commerce from '@chec/commerce.js';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../../../css/new.css";
// import { Button } from 'reactstrap';
// import axios from 'axios';

// function Addproduct() {


//   const commerce = new Commerce('pk_517267717706df3d39ab4a44126aae98baf632b72c612');


// const url = new URL(
//     "https://api.chec.io/v1/products"
// );

// let _data = {
//    name: "testbriyani",
//    price:"520",
//    description:"hjsdfgdshf",
//    image:"https://cdn.chec.io/merchants/51726/assets/BED36EJeks7SQWRR|chicken651.jpg"

// }
// let _data1 = {"product":{"name":"Liteweight Runners","price":25}};

// const headers = {
//     "X-Authorization": "sk_test_5172686a5fb9362d98b0400373095dcaf3fb18c7fcd1e",
//     "Accept": "application/json",
//     "Content-Type": "application/json",
// };

// // fetch(url, {
// //     method: "POST",
// //     body: JSON.stringify(_data),
// //     headers: headers,
// // })
// //     .then(response => response.json());

   
//     const handleSubmit = async () => {
//       console.log("kddg");
//       const response = await fetch('https://api.chec.io/v1/products', {
//         method: 'POST',
//         body: _data1,
//         headers: headers
//       });
//       const result = await response.json();
//       console.log(result,"kddg");
//     }

//    // const handleSubmit = async () => {
//    //    try {
//    //      const response = await axios.post('https://api.chec.io/v1/products', _data);
//    //      console.log(response.data,"kj");
//    //    } catch (error) {
//    //      console.error(error,"kh");
//    //    }
//    //  }

// return (
//   <div className="purchase-card" >
//          <Card style={{border:"none"}}>
//               <Card.Title tag='h5'> Add Banner</Card.Title>
//               <hr></hr>
//                   <Form>    
//                       <Form.Group className="mb-3">
//                          <Form.Label>Name</Form.Label>
//                          <Form.Control type="name" placeholder="Name(required)" />
//                       </Form.Group>

//                      <Form.Group className="mb-3">
//                         <Form.Label>price</Form.Label>
//                         <Form.Control type="number" placeholder="Price" />
//                      </Form.Group>

//                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                         <Form.Label>Description</Form.Label>
//                         <Form.Control as="textarea" rows={3} />
//                      </Form.Group>

//                      <Form.Group className="mb-3">
//                          <Form.Label>File upload</Form.Label>
//                          <Form.Control type="file" placeholder="Password" />
//                      </Form.Group>
//                   </Form>
//                         <Button style={{backgroundColor:"orange",border:"orange",width:"150px",borderRadius:"15px"}} onClick={handleSubmit} >Add Banner</Button>
//          </Card>
//       </div> 
//    )
//  }
  
// export default Addproduct