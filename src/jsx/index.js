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
import Login from "./pages/Login";
import LockScreen from "./pages/LockScreen";

import ForgotPassword from "./pages/ForgotPassword";
/// Widget

/// Deshboard
import Home from "./components/Dashboard/Home/Home";

/// Bo

/// App
/// Product List
import Addproduct from "./components/Products/Addproduct";
import ListProduct from "./components/Products/ListProduct"


const Markup = () => {
   const routes = [
		/// Deshborad
		{ url: "", component: Home },
		
		
		{ url: "Add-Product", component: Addproduct },
		{ url: "List-Product", component: ListProduct },
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

export default Markup;
