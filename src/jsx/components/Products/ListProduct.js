


import React,{useState,useEffect,useRef,Fragment} from 'react';
import {Link} from 'react-router-dom';
import Commerce from '@chec/commerce.js';
import { Table,Pagination } from "react-bootstrap";
import { starOne, starTwo, starThree, starFour, starFive } from "./ProductStar";
import ProductList from './ProductList';


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