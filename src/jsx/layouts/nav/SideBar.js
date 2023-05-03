import React, { Component } from "react";

/// Link
import { Link } from "react-router-dom";

/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

/// Menu
import MetisMenu from "metismenujs";

class MM extends Component {
   componentDidMount() {
      this.$el = this.el;
      this.mm = new MetisMenu(this.$el);
   }
   componentWillUnmount() {
      this.mm("dispose");
   }
   render() {
      return (
         <div className="mm-wrapper">
            <ul className="metismenu" ref={(el) => (this.el = el)}>
               {this.props.children}
            </ul>
         </div>
      );
   }
}

class SideBar extends Component {
   /// Open menu
   componentDidMount() {
      // sidebar open/close
      var btn = document.querySelector(".nav-control");
      var aaa = document.querySelector("#main-wrapper");

      function toggleFunc() {
         return aaa.classList.toggle("menu-toggle");
      }

      btn.addEventListener("click", toggleFunc);
   }
   render() {
      /// Path
      const path = window.location.pathname;

      /// Active menu
      let deshBoard = [
            "",
            "analytics",
            "companies",
            "statistics",
			
         ],
        
         Customerlist = ["Add-Customer-list"],
         OrderList = ["New-Order","Cancelled-Order","Completed-Order"],

         Product = ["Add-Product","List-Product"];


      return (
         <div className="deznav">
            <PerfectScrollbar className="deznav-scroll">
               <MM className="metismenu" id="menu">
                  <li
                     className={`${
                        deshBoard.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                      <Link
                        to="/"
                        className="ai-icon"
                        
                     >
                        <i className="flaticon-381-settings-2"></i>
                        <span className="nav-text">Dashboard</span>
                     </Link>                     
                  </li>
                  <li
                     className={`${
                        Product.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        className="has-arrow ai-icon"
                        to="#"
                     >
                        <i className="flaticon-381-television"></i>
                        <span className="nav-text">Products</span>
                     </Link>
                     <ul >
                        <li>
                           <Link to="/Add-Product">Add Product</Link>
                        </li>                     
                        <li>
                           <Link to="/List-Product">Product List</Link>
                        </li>                      
                     </ul>
                  </li>
                
                  <li
                     className={`${
                        Product.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        className="has-arrow ai-icon"
                        to="#"
                        
                     >
                        <i className="flaticon-381-internet"></i>
                        <span className="nav-text">Restaurant</span>
                     </Link>
                     <ul >
                        <li>
                           <Link to="/ui-accordion">Add Restaurant</Link>
                        </li>
                        <li>
                           <Link to="/ui-alert">List Restaurant</Link>
                        </li>                                       
                     </ul>
                  </li>                 
                  <li
                     className={`${
                        Product.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        className="has-arrow ai-icon"
                        to="#"
                        
                     >
                        <i className="flaticon-381-notepad"></i>
                        <span className="nav-text Product">Category</span>
                     </Link>
                     <ul >
                        <li>
                           <Link to="/form-element">Add Category</Link>
                        </li>
                        <li>
                           <Link to="/form-wizard">List Category</Link>
                        </li>                       
                     </ul>
                  </li>

                  <li
                     className={`${
                        OrderList.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        className="has-arrow ai-icon"
                        to="#"
                        
                     >
                        <i className="flaticon-381-notepad"></i>
                        <span className="nav-text Product">Order List</span>
                     </Link>
                     <ul >                     
                     <li>
                           <Link to="New-Order">New Order</Link>
                        </li>
						<li>
                           <Link to="Cancelled-Order">Cancelled Order</Link>
                        </li>    
                        <li>
                           <Link to="Completed-Order">Completed Order</Link>
                        </li>                    
                     </ul>
                  </li>

                  <li>
                     <Link
                        className="has-arrow ai-icon"
                        to="#"
                        
                     >
                        <i className="flaticon-381-layer-1"></i>
                        <span className="nav-text">Profile</span>
                     </Link>
                     <ul >
                        <li>
                           <Link to="/page-register">Register</Link>
                        </li>
                        <li>
                           <Link to="/page-login">Login</Link>
                        </li>
                        
                      
                     </ul>
                  </li>
                  <li
                     className={`${
                        Customerlist.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                    
                     <Link
                        to="Add-Customer-list"
                        className="ai-icon"
                        
                     >
                        <i className="flaticon-381-settings-2"></i>
                        <span className="nav-text">Customer List</span>
                     </Link>

                  </li>
                  <li
                     className={`${
                        Product.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                    
                     <Link
                        to="widget-basic"
                        className="ai-icon"
                        
                     >
                        <i className="flaticon-381-settings-2"></i>
                        <span className="nav-text">Settings</span>
                     </Link>

                  </li>
                 
               </MM>
				<div className="plus-box">
					<p className="fs-13 font-w300 mb-4">Organize your menus through button bellow</p>
					<Link className="btn bg-white text-black btn-rounded d-block" to="#">+Add Menus</Link>
				</div>
               <div className="copyright">
                  {/* <p>
                     <strong>Koki Restaurant React Dashboard</strong> ©All Rights Reserved
                  </p>
                  <p>by DexignZone</p> */}
                  <p>
                     <strong>New Do Hospitality</strong> ©All Rights Reserved
                  </p>
                  {/* <p>by DexignZone</p> */}
               </div>
            </PerfectScrollbar>
         </div>
      );
   }
}

export default SideBar;
