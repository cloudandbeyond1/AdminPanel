
import { Link } from "react-router-dom";
import Commerce from '@chec/commerce.js';
import React,{useState,useEffect,useRef,Fragment} from 'react';
import { useLocation,useParams} from 'react-router-dom';

import careimg from "../../../images/product/cares.png";
import persons from "../../../images/product/persons.png";
import watch from "../../../images/product/watch.png";

import extra from "./addon.json";

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
 
   const styles = {
		imgicon: {
		  height: "20px",
		  width: "20px",
		},     
	  }

   return (
    <div>
    {singleProductData.map((product) => (
      <div className="h-80">
		 <div className="row">
            <div className="col-lg-12">
               <div className="card">
                  <div className="card-body">
                     <div className="row">
						<div className="col-md-6 col-xxl-12">
							<div className="tab-content">
                     <h2>{product.name}</h2>
								<div role="tabpanel" className="tab-pane fade show active" id="first">
									<img className="img-fluid" src={product.image.url} alt="" />
								</div>							
							</div>
							<div className="tab-slide-content new-arrival-product mt-2 mb-4 mb-xl-0">
							
                     <div className="product-detail-content">
                              <div className="new-arrival-content pr">
                                 <h4 >{product.name}</h4>
                                  <p className="text-content" dangerouslySetInnerHTML={{__html: product.description}}></p>
                                 <p className="itemprice py-2">{product.price.formatted_with_symbol}</p>
                                 <p>
                                    Availability:
                                    <span className="item">
                                    {product.is.sold_out}
                                       <i className="fa fa-shopping-basket"></i>
                                    </span>
                                 </p>
                                 <div className="row">
                                 <p className="ml-2"> <img src={watch} style={styles.imgicon}/><span className="item ml-2">25 minutes for preparation</span>  </p>
                                 <p className="ml-4"> <img src={persons} style={styles.imgicon}/><span className="item ml-2">Serves 1-2</span>  </p>
                                 <p className="ml-4"> <img src={careimg} style={styles.imgicon}/><span className="item ml-2">{product.seo.description}</span>  </p>
                                 </div>
                              </div>
                           </div>
							</div>
						</div>	
                        <div className="col-md-6 col-xxl-12">
                           <div className="product-detail-content">
                              <div className="new-arrival-content pr">
                                 <h4>Choose your accomplishment</h4>
                                 {extra.map((data) => (
                                 <div className="itemCheck_data mt-3">
                                 <img className="itemCheck_logo" src={product.image.url} alt="" />
<div className="itemCheck_datatext">{data.Name}</div>
<p className="itemCheck_price">{data.Price}</p>
                                 </div>     
                                 ))}                       
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
