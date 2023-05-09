import React from "react";

/// React router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/// Css
import "./index.css";
import "./chart.css";

/// Layout

/// Pages
import Registration from "./pages/Registration";

import LockScreen from "./pages/LockScreen";

import ForgotPassword from "./pages/ForgotPassword";
/// Widget

/// Deshboard
import Login from "./pages/Login";

/// Bo
import Dash from "./components/Dashboard/dashboard";
/// App
/// Product List
import Addproduct from "./components/Products/Addproduct";
import ListProduct from "./components/Products/ListProduct"


import Userlist from "./components/Users/Userlist";

/// Order List
import NewOrder from "./components/Orders/NewOrder";
import CancelledOrder from "./components/Orders/CancelledOrder"
import Completedorder from "./components/Orders/Completedorder";

import AddBanner from "./components/Banner/AddBanner";
import ListBanner from "./components/Banner/ListBanner";

//Restaurant
import ListRestaurant from "./components/Restaurant/ListRestaurant";
import AddRestaurant from "./components/Restaurant/AddRestaurant";


import AddCategory from "./components/Category/AddCategory";
import ListCategory from "./components/Category/ListCategory";

//settings
import Merchant from "./components/Settings/Merchant";
import Tax from "./components/Settings/Tax";
import Shipping from "./components/Settings/Shipping";
import ProductDetail from "./components/Products/ProductDetail";
import ProductList from "./components/Products/ProductList";



import Customerlist from "./components/Customer/Customerlist";
import AddCustomer from "./components/Customer/AddCustomer";
import ProductOrder from "./components/Restaurant/ProductOrder";


import AddCoupon from "./components/Coupon/AddCoupon";

import ListCoupon from "./components/Coupon/ListCoupon";

import AddDeliveryBoy from "./components/Delivery/AddDeliveryBoy";

import ListDeliveryBoy from "./components/Delivery/ListDeliveryBoy";

const Markup = () => {
   const routes = [
		/// Deshborad
		{ url: "", component: Login },
		
		{ url: "Add-Product", component: Addproduct },		
		{ url: "List-Product", component: ListProduct },
		{ url: "Dash", component: Dash },
		
		{ url: "New-Order", component: NewOrder },
		{ url: "Cancelled-Order", component: CancelledOrder },
		{ url: "Completed-Order", component: Completedorder },
		{ url:"Add-Banner",component:AddBanner},
		{ url:"List-Banner",component:ListBanner},
		{ url: "Add-Restaurant", component: AddRestaurant},
		{ url:"List-Restaurant",component:ListRestaurant},
		{ url: "Add-Category", component: AddCategory},
		{ url: "List-Category", component: ListCategory},
		{ url: "Merchant", component:Merchant},
		{ url: "Tax", component:Tax},
		{ url: "Register", component:Registration},
		{ url: "Product-Detail", component: ProductDetail},
		{ url: "Product-List", component: ProductList},
		{ url: "UserList", component: Userlist},
		{ url: "Customer-List", component: Customerlist},
		{ url: "Add-Customer", component: AddCustomer},
		{ url: "Product-Order", component: ProductOrder},
		{ url:"Shipping",component:Shipping},
		{ url: "Add-Coupon", component: AddCoupon},
		{ url: "List-Coupon", component: ListCoupon},
		{ url: "Add-Delivery", component: AddDeliveryBoy},
		{ url: "List-Delivery", component: ListDeliveryBoy},

   ];

   return (
		
			<Router basename="/react">
				
					<div id="main-wrapper" className="show">
						{/* <Nav /> */}
						<div className="container-fluid">
							<Switch>
								{routes.map((data, i) => (
									<Route
										key={i}
										exact
										path={`/${data.url}`}
										component={data.component}
									/>
								))}
							</Switch>
						</div>
						{/* <Footer /> */}
					</div>
				
			</Router>
				
    );
};

export default Markup;
