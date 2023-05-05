
import Commerce from '@chec/commerce.js';
import React,{useState,useEffect,useRef,Fragment} from 'react';

import { Link } from "react-router-dom";
import { starOne, starTwo, starThree, starFour, starFive } from "./ProductStar";
const ProductList = (props) => {
   console.log(props,"props");
   const {
      name,
      image,
      description,
      is,
      price,
      permalink
   } = props.product;	

  return (
		 <div className="col-lg-12 col-xl-6">
		 <div className="card">
			<div className="card-body">
			   <div className="row m-b-30">
				  <div className="col-md-5 col-xxl-12">
					 <div className="new-arrival-product mt-4 mb-xxl-4 mb-md-0">
						<div className="new-arrivals-img-contnent">
						   <img className="img-fluid-product" src={image.url}  alt="" />
						</div>
					 </div>
				  </div>
				  <div className="col-md-7 col-xxl-12">
					 <div className="new-arrival-content position-relative">
                
						<h4><Link to={{pathname: "/Product-Detail", state: {id: name}}} >{name}</Link></h4>
						<div className="comment-review star-rating">
						   {starThree}
						   <span className="review-text">(34 reviews) /</span>
						   <Link
							  className="product-review"
							  to="/ecom-product-list"
						   >
							  {" "}
							  Write a review?
						   </Link>
							<p className="price">{price.formatted_with_symbol}</p>
						</div>
						
						<p>
						   Availability:{" "}
						   <span className="item">
							  {is.sold_out}
							  <i className="fa fa-check-circle text-success"></i>
						   </span>
						</p>
						 <p>
						   Product code:{" "}
						   <span className="item">{permalink}</span>
						</p>
						<p> Brand: <span className="item">{permalink}</span>  </p>
					 </div>
				  </div>
            <div className="row">
               <div className="col-md-12 col-xxl-12">
               <div className="new-arrival-content position-relative">
                <p className="text-content" dangerouslySetInnerHTML={{__html: description}}></p>
              </div>
               </div>
            </div>

			   </div>
			</div>
		 </div>
	  </div>
  );
};

export default ProductList;

