import React from "react";

/// React router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/// Css
import "./index.css";
import "./chart.css";

/// Layout
import Nav from "./layouts/nav";
import Footer from "./layouts/Footer";


/// Pages
import Registration from "./pages/Registration";

import LockScreen from "./pages/LockScreen";

import ForgotPassword from "./pages/ForgotPassword";
/// Widget

/// Deshboard


import Home from "./components/Dashboard/Home/Home";
import Companies from "./components/Dashboard/Companies/Companies";
import Analytics from "./components/Dashboard/Analytics/Analytics";
import Review from "./components/Dashboard/Review/Review";
import Order from "./components/Dashboard/Order/Order";
import Orderlist from "./components/Dashboard/Orderlist/Orderlist";
import Profile from "./components/Dashboard/Profile/Profile";
/// Bo

/// App
/// Product List
import Addproduct from "./components/Products/Addproduct";
import ListProduct from "./components/Products/ListProduct"
import Customerlist from "./components/Customer/Customerlist";

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
