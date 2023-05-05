import React from "react";

/// React router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/// Css
import "../../index.css";
import "../../chart.css";

/// Layout
import Nav from "../../layouts/nav";
import Footer from "../../layouts/Footer";


/// Pages

/// Widget

/// Deshboard


import Home from "../Dashboard/Home/Home";
import Companies from "../Dashboard/Companies/Companies";
import Analytics from "../Dashboard/Analytics/Analytics";
import Review from "../Dashboard/Review/Review";
import Order from "../Dashboard/Order/Order";
import Orderlist from "../Dashboard/Orderlist/Orderlist";
import Profile from "../Dashboard/Profile/Profile";
/// Bo

/// App
/// Product List
import Addproduct from "../Products/Addproduct";
import ListProduct from "../Products/ListProduct"
import Customerlist from "../Customer/Customerlist";

/// Order List
import NewOrder from "../Orders/NewOrder";
import CancelledOrder from "../Orders/CancelledOrder"
import Completedorder from "../Orders/Completedorder";

import AddBanner from "../Banner/AddBanner";
import ListBanner from "../Banner/ListBanner";

//Restaurant
import ListRestaurant from "../Restaurant/ListRestaurant";
import AddRestaurant from "../Restaurant/AddRestaurant";
import AddCategory from "../Category/AddCategory";
import ListCategory from "../Category/ListCategory";


import Merchant from "../Settings/Merchant";
import Tax from "../Settings/Tax";

import Login from "../../pages/Login";

const Dash = () => {
   const routes = [
		/// Deshborad
		{ url: "Add-Product", component: Addproduct },
		{ url: "List-Product", component: ListProduct },
		{ url: "", component: Home },
		{ url: "companies", component: Companies },
		{ url: "analytics", component: Analytics },
		{ url: "review", component: Review },
		{ url: "profile", component: Profile },
		{ url: "order", component: Order },
		{ url: "order-list", component: Orderlist },
		{ url: "Add-Customer-list", component: Customerlist },
		{ url: "New-Order", component: NewOrder },
		{ url: "Cancelled-Order", component: CancelledOrder },
		{ url: "Completed-Order", component: Completedorder },
		{ url:"Add-Banner",component:AddBanner},
		{ url:"List-Banner",component:ListBanner},
		{ url:"List-Restaurant",component:ListRestaurant},
		{ url:"Add-Restaurant",component:AddRestaurant},
		{ url:"Add-Category",component:AddCategory},
		{ url:"List-Category",component:ListCategory},
		{ url:"Merchant",component:Merchant},
		{ url:"Tax",component:Tax},
		{ url:"Login",component:Login},

   ];

   return (
		
			<Router basename="/react">

				<div id="main-wrapper" className="show">
					
						<Nav />
						<div className="content-body">
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
						</div>
						<Footer />
				</div>
				
			</Router>
				
    );
};

export default Dash;
