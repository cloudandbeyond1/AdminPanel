import React, { Fragment } from "react";

import { Switch, Route } from "react-router-dom";

/// Componetns
import Nav from "./nav";
import Footer from "./Footer";

/// Deshboard

import Home from "../components/Dashboard/Home/Home";
import Application from "../components/Dashboard/Application/Application";
import Profile from "../components/Dashboard/Profile/Profile";
import Companies from "../components/Dashboard/Companies/Companies";
import Statistics from "../components/Dashboard/Statistics/Statistics";
import SearchJobs from "../components/Dashboard/SearchJobs/SearchJobs";
import Dash from "../dashboard";

//Product

import Addproduct from "../components/Products/Addproduct";
import Listproduct from "../components/Products/ListProduct";

import Customerlist from "../components/Customer/Customerlist";
//Order List 
import NewOrder from "../components/Orders/NewOrder";
import CancelledOrder from "../components/Orders/CancelledOrder";
import Completedorder from "../components/Orders/Completedorder";

const Routes = () => {
   const routes = [
      /// Deshborad
      { url: "Home", component: Home},
            /// Bootstrap
      { url: "Dash", component: Dash },
      { url: "Add-Product", component: Addproduct },
      { url: "List-Product", component: Listproduct },
      { url: "application", component: Application },
      { url: "profile", component: Profile },
      { url: "companies", component: Companies },
      { url: "search-job", component: SearchJobs },
      { url: "statistics", component: Statistics },
      { url: "Add-Customer-list", component: Customerlist },
      { url: "New-Order", component: NewOrder },
		{ url: "Cancelled-Order", component: CancelledOrder },
		{ url: "Completed-Order", component: Completedorder },
   ];

   return (
      <Fragment>
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
         {/* <Footer /> */}
      </Fragment>
   );
};

export default Routes;
