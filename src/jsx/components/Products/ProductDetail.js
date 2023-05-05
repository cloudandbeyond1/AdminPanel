
import { Link } from "react-router-dom";
import Commerce from '@chec/commerce.js';
import React,{useState,useEffect,useRef,Fragment} from 'react';
import { useLocation,useParams} from 'react-router-dom';
import { starOne, starTwo, starThree, starFour, starFive } from "./ProductStar";

const ProductDetail = () => {

const commerce = new Commerce('pk_517267717706df3d39ab4a44126aae98baf632b72c612');
 
const [products, setProducts] = useState([]);

useEffect(() => {
  commerce.products.list()
    .then(res => {
      console.log(res,"fghg");
      setProducts(res.data)        
    })
    .catch(err => console.log(err))
},[setProducts])


const location = useLocation();
console.log(location.state.id,"match");


   console.log(products,"fgfg");
   const singleProductData = products.filter( (list) => list.name===location.state.id);
   console.log(singleProductData,"singleProductData");
 

   return (
    <div>
    {singleProductData.map((product) => (
      <div className="h-80">
		 <div className="row">
            <div className="col-lg-12">
               <div className="card">
                  <div className="card-body">
                     <div className="row">
						<div className="col-xl-3 ">
							<div className="tab-content">
								<div role="tabpanel" className="tab-pane fade show active" id="first">
									<img className="img-fluid" src={product.image.url} alt="" />
								</div>
								<div role="tabpanel" className="tab-pane fade" id="second">
									<img className="img-fluid" src={product.image.url} alt="" />
								</div>
								<div role="tabpanel" className="tab-pane fade" id="third">
									<img className="img-fluid" src={product.image.url}	 alt="" />
								</div>
								<div role="tabpanel" className="tab-pane fade" id="for">
									<img className="img-fluid" src={product.image.url} alt="" />
								</div>
							</div>
							<div className="tab-slide-content new-arrival-product mb-4 mb-xl-0">
							
								<ul className="nav slide-item-list mt-3" role="tablist">
									<li role="presentation" className="show">
										<a href="#first" role="tab" data-toggle="tab">
											<img className="img-fluid" src={product.image.url} alt="" width="50" />
										</a>
									</li>
									<li role="presentation">
										<a href="#second" role="tab" data-toggle="tab"><img className="img-fluid" src={product.image.url} alt="" width="50" /></a>
									</li>
									<li role="presentation">
										<a href="#third" role="tab" data-toggle="tab"><img className="img-fluid" src={product.image.url} alt="" width="50" /></a>
									</li>
									<li role="presentation">
										<a href="#for" role="tab" data-toggle="tab"><img className="img-fluid" src={product.image.url} alt="" width="50" /></a>
									</li>
								</ul>
							</div>
						</div>	
                        <div className="col-xl-9 col-lg-6  col-md-6 col-xxl-7 col-sm-12">
                           <div className="product-detail-content">
                              <div className="new-arrival-content pr">
                                 <h4 >{product.name}</h4>
                                 <div className="star-rating d-inline mb-2">
                                    {starThree} 
									<span className="review-text"> (34 reviews) / </span>
                                    <Link className="product-review" to="#">
                                       Write a review?
                                    </Link>
                                 </div>
                                 <p className="price">{product.price.formatted_with_symbol}</p>
                                 <p>
                                    Availability:
                                    <span className="item">
                                    {product.is.sold_out}
                                       <i className="fa fa-shopping-basket"></i>
                                    </span>
                                 </p>
                                 <p>
                                    Product code:
                                    <span className="item">{product.permalink}</span>
                                 </p>
                                 <p>
                                    Brand: <span className="item">{product.permalink}</span>
                                 </p>
                                 <p className="text-content" dangerouslySetInnerHTML={{__html: product.description}}></p>
                                 <div className="filtaring-area my-3">
                                    <div className="size-filter">
                                       <h4 className="m-b-15">Select size</h4>

                                       <div
                                          className="btn-group"
                                          data-toggle="buttons"
                                       >
                                          <label className="btn btn-outline-primary light btn-sm">
                                             <input
                                                type="radio"
                                                className="position-absolute invisible"
                                                name="options"
                                                id="option5"
                                             />
                                             XS
                                          </label>
                                          <label className="btn btn-outline-primary light btn-sm">
                                             <input
                                                type="radio"
                                                className="position-absolute invisible"
                                                name="options"
                                                id="option1"
                                             />
                                             SM
                                          </label>
                                          <label className="btn btn-outline-primary light btn-sm">
                                             <input
                                                type="radio"
                                                className="position-absolute invisible"
                                                name="options"
                                                id="option2"
                                             />
                                             MD
                                          </label>
                                          <label className="btn btn-outline-primary light btn-sm">
                                             <input
                                                type="radio"
                                                className="position-absolute invisible"
                                                name="options"
                                                id="option3"
                                             />
                                             LG
                                          </label>
                                          <label className="btn btn-outline-primary light btn-sm">
                                             <input
                                                type="radio"
                                                className="position-absolute invisible"
                                                name="options"
                                                id="option4"
                                             />
                                             XL
                                          </label>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-2 px-0">
                                    <input
                                       type="number"
                                       name="num"
                                       className="form-control input-btn input-number"
                                       defaultValue="1"
                                    />
                                 </div>
                                 <div className="shopping-cart mt-3">
                                    <Link
                                       className="btn btn-primary btn-lg"
                                       to="#"
                                    >
                                       <i className="fa fa-shopping-basket mr-2"></i>
                                       Add to cart
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
       ))}
   </div>
   );
   
};
export default ProductDetail;
