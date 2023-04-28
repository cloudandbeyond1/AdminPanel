import React, { Fragment } from "react";

import { Switch, Route } from "react-router-dom";

/// Componetns
import Nav from "./nav";
import Footer from "./Footer";

/// Deshboard
import Home from "../components/Dashboard/Home/Home";


//Product

import Addproduct from "../components/Products/Addproduct";
import Listproduct from "../components/Products/ListProduct";



const Routes = () => {
   const routes = [
      /// Deshborad
      { url: "", component: Home },
            /// Bootstrap

      { url: "Add-Product", component: Addproduct },
      { url: "List-Product", component: Listproduct },
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
