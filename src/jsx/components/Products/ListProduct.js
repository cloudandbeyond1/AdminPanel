


import React,{useState,useEffect,useRef,Fragment} from 'react';
import Commerce from '@chec/commerce.js';
import ProductList from './ProductList';


const ListProduct = () => {

	
	const commerce = new Commerce('pk_517267717706df3d39ab4a44126aae98baf632b72c612')
 
	const [products, setProducts] = useState([])
  
	useEffect(() => {
	  commerce.products.list()
		.then(res => {
		  setProducts(res.data)        
		})
		.catch(err => console.log(err))
  },[setProducts])
  
  
  return (
	<Fragment>
        
	<div className="row">
	   {products.map((product) => (
		  <ProductList key={product.key} product={product} />
	   ))}
	</div>
 </Fragment>
  );
};

export default ListProduct;