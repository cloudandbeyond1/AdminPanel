import React, { Fragment } from "react";
import { Link } from "react-router-dom";
//** Import SVG Image */
import {
   Icon01,
   Icon02,
   Icon03,
   Icon04,
   Icon05,
   Icon06,
   Icon07,
   Icon08,
   Icon09,
   Icon10,
   Icon11,
   Icon12,
} from "./CompaniesIcons";
import SingleCompani from "./SingleCompani";
import { Dropdown } from "react-bootstrap";
import PageTitle from "../../../layouts/PageTitle";

const Companies = () => {
   const CompaniesData = [
      {
         icon: Icon01,
         title: "Simonis Ltd",
         description: "Internet Service Porvider",
      },
      {
         icon: Icon02,
         title: "Funk Inc",
         description: "IT Department",
      },
      {
         icon: Icon03,
         title: "Highspeed Studios",
         description: "Creative Design Agency",
      },
      {
         icon: Icon04,
         title: "Mosciski Inc",
         description: "Creative Design Agency",
      },
      {
         icon: Icon05,
         title: "Incubator Studios",
         description: "Software House",
      },
      {
         icon: Icon06,
         title: "Naonatu Inc.",
         description: "Creative Design Agency",
      },
      {
         icon: Icon07,
         title: "ColoColo Studios",
         description: "Internet Service Porvider",
      },
      {
         icon: Icon08,
         title: "Funk Inc",
         description: "IT Department",
      },
      {
         icon: Icon09,
         title: "Mosciski Inc",
         description: "Creative Design Agency",
      },
      {
         icon: Icon10,
         title: "Highspeed Studios",
         description: "Creative Design Agency",
      },
      {
         icon: Icon11,
         title: "Simonis Ltd",
         description: "Internet Service Porvider",
      },
      {
         icon: Icon12,
         title: "Funk Inc",
         description: "IT Department",
      },
   ];
   return (
      <Fragment>
         <PageTitle activeMenu="Companies" motherMenu="Search Job" />

         <div className="row">
            <div className="col-xl-9 col-xxl-8">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="d-flex flex-wrap search-job bg-white rounded py-3 px-md-3 px-0 mb-4 align-items-center">
                        <div className="col-xl-3 col-xxl-4 col-md-4 border-right">
                           <Dropdown className="dropdown mb-0 custom-dropdown d-block">
                              <Dropdown.Toggle
                                 variant=""
                                 className="btn d-flex align-items-center rounded-0 svg-btn px-0"
                                 data-toggle="dropdown"
                              >
                                 <svg
                                    className="min-w20"
                                    width="20"
                                    height="24"
                                    viewBox="0 0 20 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       d="M10 0C4.93398 0 0.8125 4.12148 0.8125 9.1875C0.8125 10.8091 1.24094 12.4034 2.05145 13.7979C2.24041 14.123 2.45162 14.4398 2.67934 14.7396L9.60081 24H10.3991L17.3207 14.7397C17.5483 14.4398 17.7595 14.1231 17.9485 13.7979C18.7591 12.4034 19.1875 10.8091 19.1875 9.1875C19.1875 4.12148 15.066 0 10 0ZM10 12.2344C8.31995 12.2344 6.95312 10.8675 6.95312 9.1875C6.95312 7.50745 8.31995 6.14062 10 6.14062C11.68 6.14062 13.0469 7.50745 13.0469 9.1875C13.0469 10.8675 11.68 12.2344 10 12.2344Z"
                                       fill="#40189D"
                                    />
                                 </svg>
                                 <div className="text-left ml-3">
                                    <span className="d-block fs-16 text-black">
                                       Around You
                                    </span>
                                 </div>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                 <Dropdown.Item
                                    className="dropdown-item"
                                    to="/companies"
                                 >
                                    4 June 2020 - 4 July 2020
                                 </Dropdown.Item>
                                 <Link
                                    className="dropdown-item"
                                    to="/companies"
                                 >
                                    5 july 2020 - 4 Aug 2020
                                 </Link>
                              </Dropdown.Menu>
                           </Dropdown>
                        </div>
                        <div className="col-xl-9 col-xxl-8 col-md-8 d-flex flex-wrap">
                           <input
                              className="form-control input-rounded mr-auto mb-3 mb-md-0"
                              type="text"
                              placeholder="Search by Title, Company or any jobs keyword..."
                           />
                           <Link
                              to="#"
                              className="bg-light btn btn-rounded text-primary mr-3"
                           >
                              <svg
                                 className="min-w20 mr-3"
                                 width="20"
                                 height="20"
                                 viewBox="0 0 20 20"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M1 4H12C12 4.53043 12.2107 5.03914 12.5858 5.41421C12.9609 5.78929 13.4696 6 14 6H16C16.5304 6 17.0391 5.78929 17.4142 5.41421C17.7893 5.03914 18 4.53043 18 4H19C19.2652 4 19.5196 3.89464 19.7071 3.70711C19.8946 3.51957 20 3.26522 20 3C20 2.73478 19.8946 2.48043 19.7071 2.29289C19.5196 2.10536 19.2652 2 19 2H18C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0H14C13.4696 0 12.9609 0.210714 12.5858 0.585786C12.2107 0.960859 12 1.46957 12 2H1C0.734784 2 0.48043 2.10536 0.292893 2.29289C0.105357 2.48043 0 2.73478 0 3C0 3.26522 0.105357 3.51957 0.292893 3.70711C0.48043 3.89464 0.734784 4 1 4ZM14 2H16V3V4H14V2ZM19 9H10C10 8.46957 9.78929 7.96086 9.41421 7.58579C9.03914 7.21071 8.53043 7 8 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9H1C0.734784 9 0.48043 9.10536 0.292893 9.29289C0.105357 9.48043 0 9.73478 0 10C0 10.2652 0.105357 10.5196 0.292893 10.7071C0.48043 10.8946 0.734784 11 1 11H4C4 11.5304 4.21071 12.0391 4.58579 12.4142C4.96086 12.7893 5.46957 13 6 13H8C8.53043 13 9.03914 12.7893 9.41421 12.4142C9.78929 12.0391 10 11.5304 10 11H19C19.2652 11 19.5196 10.8946 19.7071 10.7071C19.8946 10.5196 20 10.2652 20 10C20 9.73478 19.8946 9.48043 19.7071 9.29289C19.5196 9.10536 19.2652 9 19 9ZM6 11V9H8V10V11H6ZM19 16H16C16 15.4696 15.7893 14.9609 15.4142 14.5858C15.0391 14.2107 14.5304 14 14 14H12C11.4696 14 10.9609 14.2107 10.5858 14.5858C10.2107 14.9609 10 15.4696 10 16H1C0.734784 16 0.48043 16.1054 0.292893 16.2929C0.105357 16.4804 0 16.7348 0 17C0 17.2652 0.105357 17.5196 0.292893 17.7071C0.48043 17.8946 0.734784 18 1 18H10C10 18.5304 10.2107 19.0391 10.5858 19.4142C10.9609 19.7893 11.4696 20 12 20H14C14.5304 20 15.0391 19.7893 15.4142 19.4142C15.7893 19.0391 16 18.5304 16 18H19C19.2652 18 19.5196 17.8946 19.7071 17.7071C19.8946 17.5196 20 17.2652 20 17C20 16.7348 19.8946 16.4804 19.7071 16.2929C19.5196 16.1054 19.2652 16 19 16ZM12 18V16H14V17V18H12Z"
                                    fill="#40189D"
                                 ></path>
                              </svg>
                              FILTER
                           </Link>
                           <Link to="#" className="btn btn-primary btn-rounded">
                              <i className="las la-search scale5 mr-3"></i>
                              FIND
                           </Link>
                        </div>
                     </div>
                     <div className="d-flex pb-3 mb-4 border-bottom flex-wrap align-items-center">
                        <Link
                           to="#"
                           className="btn btn-primary light btn-rounded mr-2 mb-2"
                        >
                           Suggestions
                        </Link>
                        <Link
                           to="#"
                           className="btn btn-primary light btn-rounded mr-2 mb-2"
                        >
                           Your Skill
                        </Link>
                        <Link
                           to="#"
                           className="btn btn-primary btn-rounded mr-2 mb-2"
                        >
                           Programmer
                        </Link>
                        <Link
                           to="#"
                           className="btn btn-primary light btn-rounded mr-2 mb-2"
                        >
                           Software Engineer
                        </Link>
                        <Link
                           to="#"
                           className="btn btn-primary light btn-rounded mr-2 mb-2"
                        >
                           Photographer
                        </Link>
                        <Link
                           to="#"
                           className="btn btn-primary light btn-rounded mr-2 mb-2"
                        >
                           Digital Marketing
                        </Link>
                     </div>
                     <div className="d-flex flex-wrap align-items-center mb-4">
                        <div className="mr-auto mb-2 pr-2">
                           <h6 className="text-black fs-16 font-w600 mb-1">
                              Showing 246 Jobs Results
                           </h6>
                           <span className="fs-14">Based your preferences</span>
                        </div>
                        <div className="custom-control custom-switch toggle-switch text-right mr-5 mb-2">
                           <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customSwitch12"
                           />
                           <label
                              className="custom-control-label"
                              htmlFor="customSwitch12"
                           >
                              Salary
                           </label>
                        </div>
                        <Dropdown className="dropdown custom-dropdown mb-0 mr-4 mt-3 mt-sm-0 mb-2">
                           <Dropdown.Toggle
                              variant=""
                              className="btn border border-primary text-black btn-rounded"
                              role="button"
                              data-toggle="dropdown"
                              aria-expanded="false"
                           >
                              <svg
                                 className="mr-2 scale5"
                                 width="14"
                                 height="14"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M10.2932 16.293L8.00016 18.5859V3C8.00016 2.73478 7.89481 2.48043 7.70727 2.29289C7.51973 2.10536 7.26538 2 7.00016 2C6.73495 2 6.48059 2.10536 6.29306 2.29289C6.10552 2.48043 6.00016 2.73478 6.00016 3V18.5859L3.70716 16.293C3.51856 16.1108 3.26596 16.01 3.00376 16.0123C2.74156 16.0146 2.49075 16.1198 2.30534 16.3052C2.11994 16.4906 2.01477 16.7414 2.01249 17.0036C2.01021 17.2658 2.111 17.5184 2.29316 17.707L6.29316 21.707C6.48086 21.8942 6.73513 21.9993 7.00021 21.9993C7.2653 21.9993 7.51956 21.8942 7.70726 21.707L11.7073 17.707C11.8901 17.5185 11.9914 17.2657 11.9894 17.0031C11.9874 16.7405 11.8822 16.4893 11.6965 16.3036C11.5109 16.118 11.2596 16.0128 10.997 16.0108C10.7345 16.0088 10.4816 16.1102 10.2932 16.293Z"
                                    fill="#40189D"
                                 />
                                 <path
                                    d="M11.0002 6H21.0002C21.2655 6 21.5198 5.89464 21.7074 5.7071C21.8949 5.51957 22.0002 5.26521 22.0002 5C22.0002 4.73478 21.8949 4.48043 21.7074 4.29289C21.5198 4.10536 21.2655 4 21.0002 4H11.0002C10.735 4 10.4807 4.10536 10.2931 4.29289C10.1056 4.48043 10.0002 4.73478 10.0002 5C10.0002 5.26521 10.1056 5.51957 10.2931 5.7071C10.4807 5.89464 10.735 6 11.0002 6Z"
                                    fill="#40189D"
                                 />
                                 <path
                                    d="M21.0002 8H11.0002C10.735 8 10.4807 8.10536 10.2931 8.29289C10.1056 8.48043 10.0002 8.73478 10.0002 9C10.0002 9.26521 10.1056 9.51957 10.2931 9.7071C10.4807 9.89464 10.735 10 11.0002 10H21.0002C21.2655 10 21.5198 9.89464 21.7074 9.7071C21.8949 9.51957 22.0002 9.26521 22.0002 9C22.0002 8.73478 21.8949 8.48043 21.7074 8.29289C21.5198 8.10536 21.2655 8 21.0002 8Z"
                                    fill="#40189D"
                                 />
                                 <path
                                    d="M18.0002 12H11.0002C10.735 12 10.4807 12.1054 10.2931 12.2929C10.1056 12.4804 10.0002 12.7348 10.0002 13C10.0002 13.2652 10.1056 13.5196 10.2931 13.7071C10.4807 13.8947 10.735 14 11.0002 14H18.0002C18.2655 14 18.5198 13.8947 18.7074 13.7071C18.8949 13.5196 19.0002 13.2652 19.0002 13C19.0002 12.7348 18.8949 12.4804 18.7074 12.2929C18.5198 12.1054 18.2655 12 18.0002 12Z"
                                    fill="#40189D"
                                 />
                              </svg>
                              Newest
                           </Dropdown.Toggle>
                           <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                              <Dropdown.Item
                                 className="dropdown-item"
                                 to="/companies"
                              >
                                 Details
                              </Dropdown.Item>
                              <Dropdown.Item
                                 className="dropdown-item text-danger"
                                 to="/companies"
                              >
                                 Cancel
                              </Dropdown.Item>
                           </Dropdown.Menu>
                        </Dropdown>
                        <Link to="#" className="mr-3 mb-2">
                           <span className="border border-primary rounded-circle d-block sharp-lg">
                              <svg
                                 className="scale5"
                                 width="14"
                                 height="14"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M6 7.5H3C2.17275 7.5 1.5 6.82687 1.5 6V3C1.5 2.17313 2.17275 1.5 3 1.5H6C6.82725 1.5 7.5 2.17313 7.5 3V6C7.5 6.82687 6.82725 7.5 6 7.5ZM3 3V6H6.00113L6 3H3ZM22.5 4.5C22.5 4.08544 22.1642 3.75 21.75 3.75H9.75C9.33581 3.75 9 4.08544 9 4.5C9 4.91456 9.33581 5.25 9.75 5.25H21.75C22.1642 5.25 22.5 4.91456 22.5 4.5ZM6 15H3C2.17275 15 1.5 14.3269 1.5 13.5V10.5C1.5 9.67313 2.17275 9 3 9H6C6.82725 9 7.5 9.67313 7.5 10.5V13.5C7.5 14.3269 6.82725 15 6 15ZM3 10.5V13.5H6.00113L6 10.5H3ZM22.5 12C22.5 11.5854 22.1642 11.25 21.75 11.25H9.75C9.33581 11.25 9 11.5854 9 12C9 12.4146 9.33581 12.75 9.75 12.75H21.75C22.1642 12.75 22.5 12.4146 22.5 12ZM6 22.5H3C2.17275 22.5 1.5 21.8269 1.5 21V18C1.5 17.1731 2.17275 16.5 3 16.5H6C6.82725 16.5 7.5 17.1731 7.5 18V21C7.5 21.8269 6.82725 22.5 6 22.5ZM3 18V21H6.00113L6 18H3ZM22.5 19.5C22.5 19.0854 22.1642 18.75 21.75 18.75H9.75C9.33581 18.75 9 19.0854 9 19.5C9 19.9146 9.33581 20.25 9.75 20.25H21.75C22.1642 20.25 22.5 19.9146 22.5 19.5Z"
                                    fill="#40189D"
                                 ></path>
                              </svg>
                           </span>
                        </Link>
                        <Link to="#" className="mb-2">
                           <span className="bg-primary rounded-circle d-block sharp-lg">
                              <svg
                                 className="scale5"
                                 width="14"
                                 height="14"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M10 1H2C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V10C1 10.2652 1.10536 10.5196 1.29289 10.7071C1.48043 10.8946 1.73478 11 2 11H10C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8946 10.5196 11 10.2652 11 10V2C11 1.73478 10.8946 1.48043 10.7071 1.29289C10.5196 1.10536 10.2652 1 10 1ZM9 9H3V3H9V9Z"
                                    fill="white"
                                 ></path>
                                 <path
                                    d="M22 1H14C13.7348 1 13.4804 1.10536 13.2929 1.29289C13.1054 1.48043 13 1.73478 13 2V10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11H22C22.2652 11 22.5196 10.8946 22.7071 10.7071C22.8946 10.5196 23 10.2652 23 10V2C23 1.73478 22.8946 1.48043 22.7071 1.29289C22.5196 1.10536 22.2652 1 22 1ZM21 9H15V3H21V9Z"
                                    fill="white"
                                 ></path>
                                 <path
                                    d="M10 13H2C1.73478 13 1.48043 13.1054 1.29289 13.2929C1.10536 13.4804 1 13.7348 1 14V22C1 22.2652 1.10536 22.5196 1.29289 22.7071C1.48043 22.8946 1.73478 23 2 23H10C10.2652 23 10.5196 22.8946 10.7071 22.7071C10.8946 22.5196 11 22.2652 11 22V14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13ZM9 21H3V15H9V21Z"
                                    fill="white"
                                 ></path>
                                 <path
                                    d="M22 13H14C13.7348 13 13.4804 13.1054 13.2929 13.2929C13.1054 13.4804 13 13.7348 13 14V22C13 22.2652 13.1054 22.5196 13.2929 22.7071C13.4804 22.8946 13.7348 23 14 23H22C22.2652 23 22.5196 22.8946 22.7071 22.7071C22.8946 22.5196 23 22.2652 23 22V14C23 13.7348 22.8946 13.4804 22.7071 13.2929C22.5196 13.1054 22.2652 13 22 13ZM21 21H15V15H21V21Z"
                                    fill="white"
                                 ></path>
                              </svg>
                           </span>
                        </Link>
                     </div>
                  </div>
                  {/* Map Single Job Companies Data */}
                  {CompaniesData.map((company, i) => (
                     <SingleCompani key={i} company={company}></SingleCompani>
                  ))}
               </div>
            </div>
            <div className="col-xl-3 col-xxl-4">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="card d-sm-flex flex-xl-column flex-sm-row">
                        <div className="card-body border-bottom text-center col-xl-12 col-sm-6">
                           <svg
                              className="mb-4"
                              width="134"
                              height="134"
                              viewBox="0 0 134 134"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M0 19.4909C0 8.72638 8.72638 0 19.4909 0H114.509C125.274 0 134 8.72638 134 19.4909V114.509C134 125.274 125.274 134 114.509 134H19.4909C8.72638 134 0 125.274 0 114.509V19.4909Z"
                                 fill="#D3D3D3"
                              />
                              <path
                                 d="M0 19.4909C0 8.72638 8.72638 0 19.4909 0H114.509C125.274 0 134 8.72638 134 19.4909V114.509C134 125.274 125.274 134 114.509 134H19.4909C8.72638 134 0 125.274 0 114.509V19.4909Z"
                                 fill="#40C7CF"
                              />
                              <path
                                 d="M34.5414 34.5417C38.7631 30.32 43.7751 26.9711 49.291 24.6863C54.807 22.4015 60.719 21.2255 66.6895 21.2255C72.6599 21.2255 78.5719 22.4015 84.0879 24.6863C89.6039 26.9711 94.6158 30.32 98.8376 34.5417C103.059 38.7635 106.408 43.7754 108.693 49.2914C110.978 54.8074 112.154 60.7194 112.154 66.6898C112.154 72.6603 110.978 78.5723 108.693 84.0882C106.408 89.6042 103.059 94.6162 98.8376 98.8379L82.7635 82.7639C84.8744 80.653 86.5488 78.147 87.6912 75.389C88.8336 72.631 89.4216 69.675 89.4216 66.6898C89.4216 63.7046 88.8336 60.7486 87.6912 57.9906C86.5488 55.2326 84.8744 52.7266 82.7635 50.6158C80.6526 48.5049 78.1467 46.8304 75.3887 45.6881C72.6307 44.5457 69.6747 43.9577 66.6895 43.9577C63.7042 43.9577 60.7482 44.5457 57.9902 45.6881C55.2323 46.8305 52.7263 48.5049 50.6154 50.6158L34.5414 34.5417Z"
                                 fill="#8FD7FF"
                              />
                              <path
                                 d="M34.5413 98.8379C26.0151 90.3117 21.2252 78.7477 21.2252 66.6898C21.2252 54.6319 26.0151 43.0679 34.5413 34.5417C43.0675 26.0155 54.6316 21.2255 66.6894 21.2255C78.7473 21.2255 90.3113 26.0155 98.8375 34.5417L82.7635 50.6158C78.5004 46.3527 72.7184 43.9577 66.6894 43.9577C60.6605 43.9577 54.8785 46.3527 50.6154 50.6158C46.3523 54.8789 43.9573 60.6609 43.9573 66.6898C43.9573 72.7188 46.3523 78.5008 50.6154 82.7639L34.5413 98.8379Z"
                                 fill="white"
                              />
                           </svg>
                           <h4 className="fs-22 text-black font-w600 mb-1">
                              Highspeed Studios
                           </h4>
                           <p>Creative Design Agency</p>
                           <Link
                              to="#"
                              className="btn btn-outline-primary d-block btn-rounded"
                           >
                              + Follow
                           </Link>
                           <div className="row mt-5">
                              <div className="d-flex flex-wrap col-xl-12">
                                 <div className="media mr-auto pr-2 mb-4">
                                    <svg
                                       className="mr-3 min-w46"
                                       width="46"
                                       height="46"
                                       viewBox="0 0 46 46"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <rect
                                          width="46"
                                          height="46"
                                          rx="23"
                                          fill="#40189D"
                                       />
                                       <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M20.7833 23.3841C20.7391 23.3453 20.6369 23.255 20.6006 23.2209C19.7145 22.3882 19.134 21.0843 19.134 19.6148C19.134 17.0488 20.8998 15.0156 23.0004 15.0156C25.101 15.0156 26.8668 17.0488 26.8668 19.6148C26.8668 21.083 26.2873 22.386 25.4036 23.2201C25.3664 23.2552 25.2623 23.3473 25.2186 23.3857L25.2148 23.4495C25.2396 23.8322 25.4968 24.1639 25.866 24.281C28.6105 25.149 30.6003 27.223 30.9344 29.6811C30.9803 30.0091 30.882 30.3408 30.6647 30.5906C30.4474 30.8405 30.1326 30.984 29.8016 30.984C27.3793 30.9844 18.6216 30.9844 16.1993 30.9844C15.8681 30.9844 15.5531 30.8409 15.3357 30.591C15.1184 30.341 15.02 30.0091 15.0657 29.6833C15.4006 27.2229 17.3903 25.149 20.1344 24.2811C20.5049 24.1636 20.7624 23.8306 20.7861 23.4465L20.7833 23.3841Z"
                                          fill="white"
                                       />
                                    </svg>
                                    <div className="media-body text-left">
                                       <h4 className="fs-18 mb-0 text-black font-w600">
                                          80-100
                                       </h4>
                                       <span className="fs-14">Employee</span>
                                    </div>
                                 </div>
                                 <div className="media mb-4">
                                    <svg
                                       className="mr-3 min-w46"
                                       width="46"
                                       height="46"
                                       viewBox="0 0 46 46"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <rect
                                          width="46"
                                          height="46"
                                          rx="23"
                                          fill="#FFBE17"
                                       />
                                       <path
                                          d="M19.1205 30C18.9969 30.0004 18.8747 29.9732 18.7629 29.9203C18.6512 29.8674 18.5526 29.7902 18.4745 29.6944C18.3964 29.5985 18.3407 29.4865 18.3115 29.3663C18.2822 29.2462 18.2802 29.121 18.3055 29L18.9705 25.11L16.1455 22.365C16.0348 22.2569 15.9566 22.12 15.9196 21.9697C15.8826 21.8195 15.8883 21.6619 15.9362 21.5147C15.984 21.3675 16.072 21.2367 16.1903 21.1369C16.3086 21.0371 16.4524 20.9724 16.6055 20.95L20.5005 20.385L22.2455 16.845C22.3128 16.7031 22.419 16.5831 22.5518 16.4991C22.6845 16.4151 22.8384 16.3705 22.9955 16.3705C23.1526 16.3705 23.3065 16.4151 23.4393 16.4991C23.572 16.5831 23.6782 16.7031 23.7455 16.845L25.5005 20.385L29.4055 20.955C29.5586 20.9774 29.7024 21.0421 29.8207 21.1419C29.939 21.2417 30.027 21.3725 30.0749 21.5197C30.1227 21.6669 30.1284 21.8245 30.0914 21.9747C30.0545 22.125 29.9762 22.2619 29.8655 22.37L27.0405 25.125L27.6955 29C27.7216 29.1518 27.7049 29.3078 27.6474 29.4507C27.5898 29.5936 27.4937 29.7176 27.3697 29.8089C27.2457 29.9002 27.0987 29.9552 26.9452 29.9678C26.7917 29.9804 26.6377 29.95 26.5005 29.88L23.0005 28.045L19.5005 29.88C19.3856 29.9505 19.2551 29.9917 19.1205 30ZM17.0955 21.89L19.7355 24.465C19.8325 24.5586 19.9051 24.6745 19.9469 24.8027C19.9888 24.9308 19.9986 25.0672 19.9755 25.2L19.3505 28.83L22.6155 27.115C22.7343 27.0528 22.8664 27.0203 23.0005 27.0203C23.1346 27.0203 23.2667 27.0528 23.3855 27.115L26.6505 28.83L26.0255 25.195C26.0024 25.0622 26.0122 24.9258 26.0541 24.7977C26.0959 24.6695 26.1685 24.5536 26.2655 24.46L28.9055 21.885L25.2555 21.355C25.1222 21.3356 24.9957 21.284 24.8868 21.2047C24.7779 21.1255 24.69 21.0209 24.6305 20.9L23.0005 17.6L21.3705 20.905C21.3111 21.0259 21.2231 21.1305 21.1142 21.2097C21.0053 21.289 20.8788 21.3406 20.7455 21.36L17.0955 21.89Z"
                                          fill="white"
                                       />
                                       <path
                                          d="M23.2958 17.065L25.0808 20.685C25.1042 20.7325 25.1387 20.7736 25.1814 20.8049C25.224 20.8362 25.2736 20.8569 25.3258 20.865L29.3258 21.445C29.3845 21.4561 29.4391 21.4828 29.4838 21.5225C29.5285 21.5621 29.5616 21.6131 29.5796 21.6701C29.5975 21.7271 29.5997 21.7879 29.5858 21.846C29.572 21.9041 29.5426 21.9573 29.5008 22L26.6108 24.815C26.5728 24.8521 26.5443 24.8979 26.5278 24.9484C26.5113 24.9989 26.5072 25.0526 26.5158 25.105L27.1958 29.105C27.2088 29.1685 27.2029 29.2343 27.1787 29.2944C27.1546 29.3545 27.1133 29.4062 27.06 29.443C27.0067 29.4797 26.9437 29.5 26.879 29.5013C26.8142 29.5025 26.7505 29.4847 26.6958 29.45L23.1258 27.57C23.0787 27.5455 23.0264 27.5327 22.9733 27.5327C22.9202 27.5327 22.8679 27.5455 22.8208 27.57L19.2758 29.435C19.2211 29.4697 19.1574 29.4875 19.0927 29.4863C19.0279 29.485 18.965 29.4647 18.9117 29.428C18.8584 29.3912 18.8171 29.3395 18.7929 29.2794C18.7688 29.2193 18.7628 29.1535 18.7758 29.09L19.4558 25.09C19.4645 25.0376 19.4604 24.9839 19.4439 24.9334C19.4273 24.8829 19.3988 24.8371 19.3608 24.8L16.5008 22C16.4576 21.9571 16.4271 21.9031 16.4127 21.844C16.3983 21.7848 16.4005 21.7228 16.4192 21.6648C16.4378 21.6069 16.4721 21.5552 16.5183 21.5155C16.5645 21.4758 16.6207 21.4497 16.6808 21.44L20.6808 20.86C20.7331 20.8519 20.7827 20.8312 20.8253 20.7999C20.8679 20.7686 20.9024 20.7275 20.9258 20.68L22.7108 17.06C22.7392 17.0068 22.7816 16.9624 22.8334 16.9316C22.8853 16.9008 22.9446 16.8848 23.0048 16.8853C23.0651 16.8858 23.1241 16.9028 23.1754 16.9345C23.2267 16.9662 23.2684 17.0113 23.2958 17.065Z"
                                          fill="white"
                                       />
                                    </svg>
                                    <div className="media-body text-left">
                                       <h4 className="fs-18 mb-0 text-black font-w600">
                                          4.5
                                       </h4>
                                       <span className="fs-14">Reviews</span>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-12">
                                 <div className="media">
                                    <svg
                                       className="mr-3 min-w46"
                                       width="46"
                                       height="46"
                                       viewBox="0 0 46 46"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <rect
                                          width="46"
                                          height="46"
                                          rx="23"
                                          fill="#ECECEC"
                                       />
                                       <path
                                          d="M23 15C19.6227 15 16.875 17.7477 16.875 21.125C16.875 22.2061 17.1606 23.2689 17.701 24.1986C17.8269 24.4153 17.9677 24.6266 18.1196 24.8264L22.7339 31H23.2661L27.8804 24.8264C28.0322 24.6266 28.173 24.4154 28.299 24.1986C28.8394 23.2689 29.125 22.2061 29.125 21.125C29.125 17.7477 26.3773 15 23 15ZM23 23.1562C21.88 23.1562 20.9688 22.245 20.9688 21.125C20.9688 20.005 21.88 19.0938 23 19.0938C24.12 19.0938 25.0312 20.005 25.0312 21.125C25.0312 22.245 24.12 23.1562 23 23.1562Z"
                                          fill="#808080"
                                       />
                                    </svg>
                                    <div className="media-body text-left">
                                       <h4 className="fs-18 text-black font-w600 mb-0">
                                          London, England
                                       </h4>
                                       <span className="fs-14">Location</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="card-body col-xl-12 col-sm-6 border-left ">
                           <h6 className="fs-16 text-black font-w600 mb-4">
                              About Company
                           </h6>
                           <p className="fs-14">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                           </p>
                           <p className="fs-14">
                              Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non
                              proident, sunt in
                           </p>
                           <div className="d-flex justify-content-between flex-wrap pt-3">
                              <Link
                                 to="#"
                                 className="btn btn-primary btn-rounded btn-sm mb-2"
                              >
                                 23 Vacancy
                              </Link>
                              <Link
                                 to="#"
                                 className="btn btn-dark btn-rounded btn-sm mb-2"
                              >
                                 More Detail
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default Companies;
