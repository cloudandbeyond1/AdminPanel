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
import Dash from "../components/Dashboard/Dash";

//Product

import Addproduct from "../components/Products/Addproduct";
import Listproduct from "../components/Products/ListProduct";

import Customerlist from "../components/Customer/Customerlist";

/// Order List
import NewOrder from "../components/Orders/NewOrder";
import CancelledOrder from "../components/Orders/CancelledOrder"
import Completedorder from "../components/Orders/Completedorder";
import OrderTracking from "../components/Orders/Order/OrderTracking";
import ProductOrder from "../components/Orders/ProductOrder";

//BannerList

import AddBanner from "../components/Banner/AddBanner";
import ListBanner from "../components/Banner/ListBanner";
import ListRestaurant from "../components/Restaurant/ListRestaurant";
import AddRestaurant from "../components/Restaurant/AddRestaurant";
import AddCategory from "../components/Category/AddCategory";
import ListCategory from "../components/Category/ListCategory";

//Settings
import Merchant from "../components/Settings/Merchant";
import Tax from "../components/Settings/Tax";
import Shipping from "../components/Settings/Shipping";

import ProductDetail from "../components/Products/ProductDetail";
import ProductList from "../components/Products/ProductList";
import AddonProduct from "../components/Products/AddonProduct";
import Login from "../pages/Login";


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
      { url:"Add-Banner",component:AddBanner},

{ url:"List-Banner",component:ListBanner},
{ url:"List-Restaurant",component:ListRestaurant},
{ url:"Add-Restaurant",component:AddRestaurant},
{ url:"Add-Category",component:AddCategory},
{ url:"List-Category",component:ListCategory},


      { url:"List-Banner",component:ListBanner},
      { url:"List-Restaurant",component:ListRestaurant},


      { url:"Merchant",component:Merchant},
      { url:"Tax",component:Tax},
      { url:"Shipping",component:Shipping},
      { url:"Login",component:Login},
      { url: "Product-Detail", component: ProductDetail},
		{ url: "Product-List", component: ProductList},

      { url: "Addon-Product", component: AddonProduct},

      { url: "Order-Tracking", component: OrderTracking},
		{ url: "Product-Order", component: ProductOrder},


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
