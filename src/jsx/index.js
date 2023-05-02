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
import Dash from "./dashboard";
/// App
/// Product List
import Addproduct from "./components/Products/Addproduct";
import ListProduct from "./components/Products/ListProduct"


import Customerlist from "./components/Customer/Customerlist";

const Markup = () => {
   const routes = [
		/// Deshborad
		{ url: "", component: Login },
		
		{ url: "Add-Product", component: Addproduct },
		{ url: "List-Product", component: ListProduct },
		{ url: "Dash", component: Dash },
		{ url: "Add-Customer-list", component: Customerlist },
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
