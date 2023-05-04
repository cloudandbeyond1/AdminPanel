import React, { Component } from "react";

/// Link
import { Link } from "react-router-dom";

/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
import check from "../../../images/dashicons/check.png";
import categorymenu from "../../../images/dashicons/categorymenu.png";
import forkmenu from "../../../images/dashicons/forkmenu.png";
import ordermenu from "../../../images/dashicons/ordermenu.png";
import bannermenu from "../../../images/dashicons/bannermenu.png";
import homemenu from "../../../images/dashicons/homemenu.png";
import productsmenu from "../../../images/dashicons/productsmenu.png";
import usermenu from "../../../images/dashicons/usermenu.png";

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
   
   componentDidMount() {
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

      const styles = {
         imgicon: {
           height: "25px",
           width: "25px",
         },
        }

      /// Active menu
      let deshBoard = [
            "",
            "analytics",
            "companies",
            "statistics",
			
         ],
        
         Customerlist = ["Add-Customer-list"],

         OrderList = ["New-Order","Cancelled-Order","Completed-Order"],

         BannerList=["Add-Banner","List-Banner"],

         Restaurant=["Add-Restaurant","List-Restaurant"],

         Product = ["Add-Product","List-Product"],

         CategoryList = ["Add-Category","List-Category"];


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
                        <img src={homemenu} style={styles.imgicon} className="mr-2"/>
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
                        <img src={productsmenu} style={styles.imgicon} className="mr-2"/>
                        <span className="nav-text">Products</span>
                     </Link>
                     <ul >
                        <li>
                           <Link to="/Add-Product">Add Products</Link>
                        </li>                     
                        <li>
                           <Link to="/List-Product">Product List</Link>
                        </li>                      
                     </ul>
                  </li>
                
                  <li
                     className={`${
                        Restaurant.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        className="has-arrow ai-icon"
                        to="#"
                        
                     >
                        {/* <i className="flaticon-381-internet"></i> */}
                        <img src={forkmenu} style={styles.imgicon} className="mr-2"/>
                        <span className="nav-text">Restaurant</span>
                     </Link>
                     <ul >
                        <li>
                           <Link to="/Add-Restaurant">Add Restaurant</Link>
                        </li>
                        <li>
                           <Link to="/List-Restaurant">List Restaurant</Link>
                        </li>                                       
                     </ul>
                  </li>
                  <li
                     className={`${
                        BannerList.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        className="has-arrow ai-icon"
                        to="#"
                        
                     >
                        <img src={bannermenu} style={styles.imgicon} className="mr-2"/>
                        <span className="nav-text Product">Banner</span>
                     </Link>
                     <ul >
                        <li>
                           <Link to="/Add-Banner">Add Banner</Link>
                        </li>
                        <li>
                           <Link to="/List-Banner">List Banner</Link>
                        </li>                       
                     </ul>
                  </li>

                  <li
                     className={`${
                        CategoryList.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                     <Link
                        className="has-arrow ai-icon"
                        to="#"
                        
                     >
                        {/* <i className="flaticon-381-notepad"></i> */}
                        <img src={categorymenu} style={styles.imgicon} className="mr-2"/>
                        <span className="nav-text Product">Category</span>
                     </Link>
                     <ul >
                        <li>
                           <Link to="/Add-Category">Add Category</Link>
                        </li>
                        <li>
                           <Link to="/List-Category">List Category</Link>
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
                        {/* <i className="flaticon-381-notepad"></i> */}
                        <img src={ordermenu} style={styles.imgicon} className="mr-2"/>
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

                  {/* <li>
                     <Link
                        className="has-arrow ai-icon"
                        to="#"
                        
                     >
                        <img src={usermenu} style={styles.imgicon} className="mr-2"/>
                        <span className="nav-text">Customer List</span>
                     </Link>
                     <ul>
                        <li>
                           <Link to="/page-register">Register</Link>
                        </li>
                        <li>
                           <Link to="/page-login">Login</Link>
                        </li>
                     </ul>
                  </li> */}
                  <li
                     className={`${
                        Customerlist.includes(path.slice(1)) ? "mm-active" : ""
                     }`}
                  >
                    
                     <Link
                        to="Add-Customer-list"
                        className="ai-icon"
                        
                     >
                        <img src={usermenu} style={styles.imgicon} className="mr-2"/>
                        <span className="nav-text">User List</span>
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
                     <strong>New Do Hospitality</strong> © All Rights Reserved
                  </p>
                  {/* <p>by DexignZone</p> */}
               </div>
            </PerfectScrollbar>
         </div>
      );
   }
}

export default SideBar;
