import React, { Fragment } from "react";
import { Link } from "react-router-dom";
//** Import Profile Img */
import profileImg from "../../../../images/avatar/1.jpg";
import { Dropdown } from "react-bootstrap";

const Profile = () => {
   return (
      <Fragment>
         <div className="row">
            <div className="col-xl-9 col-xxl-8 col-lg-8">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="card profile-card">
                        <div className="card-header flex-wrap border-0 pb-0">
                           <h3 className="fs-24 text-black font-w600 mr-auto mb-2 pr-3">
                              Edit Profile
                           </h3>
                           <div className="d-flex mr-5 align-items-center mb-2">
                              <div className="custom-control custom-switch toggle-switch text-right">
                                 <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customSwitch1"
                                 />
                                 <label
                                    className="custom-control-label"
                                    htmlFor="customSwitch1"
                                 >
                                    Available for hire?
                                 </label>
                              </div>
                           </div>
                           <Link
                              to="#"
                              className="btn btn-dark light btn-rounded mr-3 mb-2"
                           >
                              Cancel
                           </Link>
                           <Link
                              className="btn btn-primary btn-rounded mb-2"
                              to="#"
                           >
                              Save Changes
                           </Link>
                        </div>
                        <div className="card-body">
                           <form>
                              <div className="mb-5">
                                 <div className="title mb-4">
                                    <span className="fs-18 text-black font-w600">
                                       Generals
                                    </span>
                                 </div>
                                 <div className="row">
                                    <div className="col-xl-4 col-sm-6">
                                       <div className="form-group">
                                          <label>First Name</label>
                                          <input
                                             type="text"
                                             className="form-control"
                                             placeholder="Enter name"
                                          />
                                       </div>
                                    </div>
                                    <div className="col-xl-4 col-sm-6">
                                       <div className="form-group">
                                          <label>Middle Name</label>
                                          <input
                                             type="text"
                                             className="form-control"
                                             placeholder="Type here"
                                          />
                                       </div>
                                    </div>
                                    <div className="col-xl-4 col-sm-6">
                                       <div className="form-group">
                                          <label>Last Name</label>
                                          <input
                                             type="text"
                                             className="form-control"
                                             placeholder="Last name"
                                          />
                                       </div>
                                    </div>
                                    <div className="col-xl-4 col-sm-6">
                                       <div className="form-group">
                                          <label>Username</label>
                                          <input
                                             type="text"
                                             className="form-control"
                                             placeholder="User name"
                                          />
                                       </div>
                                    </div>
                                    <div className="col-xl-4 col-sm-6">
                                       <div className="form-group">
                                          <label>Password</label>
                                          <input
                                             type="password"
                                             className="form-control"
                                             placeholder="Enter password"
                                          />
                                       </div>
                                    </div>
                                    <div className="col-xl-4 col-sm-6">
                                       <div className="form-group">
                                          <label>Re-Type Password</label>
                                          <input
                                             type="password"
                                             className="form-control"
                                             placeholder="Enter password"
                                          />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="mb-5">
                                 <div className="title mb-4">
                                    <span className="fs-18 text-black font-w600">
                                       CONTACT
                                    </span>
                                 </div>
                                 <div className="row">
                                    <div className="col-xl-4 col-sm-6">
                                       <div className="form-group">
                                          <label>MobilePhone</label>
                                          <div className="input-group input-icon mb-3">
                                             <div className="input-group-prepend">
                                                <span
                                                   className="input-group-text"
                                                   id="basic-addon1"
                                                >
                                                   <i
                                                      className="fa fa-phone"
                                                      aria-hidden="true"
                                                   ></i>
                                                </span>
                                             </div>
                                             <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Phone no."
                                             />
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-xl-4 col-sm-6">
                                       <div className="form-group">
                                          <label>Whatsapp</label>
                                          <div className="input-group input-icon mb-3">
                                             <div className="input-group-prepend">
                                                <span
                                                   className="input-group-text"
                                                   id="basic-addon2"
                                                >
                                                   <i
                                                      className="fa fa-whatsapp"
                                                      aria-hidden="true"
                                                   ></i>
                                                </span>
                                             </div>
                                             <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Phone no."
                                             />
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-xl-4 col-sm-6">
                                       <div className="form-group">
                                          <label>Email</label>
                                          <div className="input-group input-icon mb-3">
                                             <div className="input-group-prepend">
                                                <span
                                                   className="input-group-text"
                                                   id="basic-addon3"
                                                >
                                                   <i className="las la-envelope"></i>
                                                </span>
                                             </div>
                                             <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter email"
                                             />
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-xl-4 col-sm-6">
                                       <div className="form-group">
                                          <label>Address</label>
                                          <div className="input-group">
                                             <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter adress"
                                             />
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-xl-4 col-sm-6">
                                       <div className="form-group">
                                          <label>City</label>
                                          <select className="form-control">
                                             <option>London</option>
                                             <option>United State</option>
                                             <option>United Kingdom</option>
                                             <option>Germany</option>
                                             <option>Netherland</option>
                                          </select>
                                       </div>
                                    </div>
                                    <div className="col-xl-4 col-sm-6">
                                       <div className="form-group">
                                          <label>Country</label>
                                          <select className="form-control">
                                             <option>England</option>
                                             <option>United State</option>
                                             <option>United Kingdom</option>
                                             <option>Germany</option>
                                             <option>Netherland</option>
                                          </select>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="mb-5">
                                 <div className="title mb-4">
                                    <span className="fs-18 text-black font-w600">
                                       About me
                                    </span>
                                 </div>
                                 <div className="row">
                                    <div className="col-xl-12">
                                       <div className="form-group">
                                          <label>Tell About You</label>
                                          <textarea
                                             className="form-control"
                                             rows="6"
                                             defaultValue="Lorem ipsum dolor sit amet,
                                             consectetur adipiscing elit, sed do
                                             eiusmod tempor incididunt ut labore
                                             et dolore magna aliqua. Ut enim ad
                                             minim veniam, quis nostrud
                                             exercitation ullamco laboris nisi
                                             ut aliquip ex ea commodo consequat.
                                             Duis aute irure dolor in
                                             reprehenderit in voluptate velit
                                             esse cillum dolore eu fugiat nulla
                                             pariatur. Excepteur sint occaecat
                                             cupidatat non proident, sunt in
                                             culpa qui officia deserunt mollit
                                             anim id est laborum que laudantium,
                                             totam rem aperiam, eaque ipsa quae
                                             ab illo inventore veritatis et
                                             quasi architecto beatae vitae dicta
                                             su"
                                          />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div>
                                 <div className="title mb-4">
                                    <span className="fs-18 text-black font-w600">
                                       Skils
                                    </span>
                                 </div>
                                 <div className="row">
                                    <div className="col-xl-6">
                                       <div className="media mb-4">
                                          <span className="text-primary progress-icon mr-3">
                                             78%
                                          </span>
                                          <div className="media-body">
                                             <p className="font-w500">
                                                Programming
                                             </p>
                                             <div
                                                className="progress skill-progress"
                                                style={{ height: "10px" }}
                                             >
                                                <div
                                                   className="progress-bar bg-primary progress-animated"
                                                   style={{
                                                      width: "78%",
                                                      height: "10px",
                                                   }}
                                                   role="progressbar"
                                                >
                                                   <span className="sr-only">
                                                      78% Complete
                                                   </span>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-xl-6">
                                       <div className="media mb-4">
                                          <span className="text-primary progress-icon mr-3">
                                             65%
                                          </span>
                                          <div className="media-body">
                                             <p className="font-w500">
                                                Prototyping
                                             </p>
                                             <div
                                                className="progress skill-progress"
                                                style={{ height: "10px" }}
                                             >
                                                <div
                                                   className="progress-bar bg-primary progress-animated"
                                                   style={{
                                                      width: "65%",
                                                      height: "10px;",
                                                   }}
                                                   role="progressbar"
                                                >
                                                   <span className="sr-only">
                                                      65% Complete
                                                   </span>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-xl-6">
                                       <div className="media mb-4">
                                          <span className="text-primary progress-icon mr-3">
                                             89%
                                          </span>
                                          <div className="media-body">
                                             <p className="font-w500">
                                                UI Design
                                             </p>
                                             <div
                                                className="progress skill-progress"
                                                style={{ height: "10px" }}
                                             >
                                                <div
                                                   className="progress-bar bg-primary progress-animated"
                                                   style={{
                                                      width: "89%",
                                                      height: "10px",
                                                   }}
                                                   role="progressbar"
                                                >
                                                   <span className="sr-only">
                                                      89% Complete
                                                   </span>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-xl-6">
                                       <div className="media mb-4">
                                          <span className="text-primary progress-icon mr-3">
                                             94%
                                          </span>
                                          <div className="media-body">
                                             <p className="font-w500">
                                                Researching
                                             </p>
                                             <div
                                                className="progress skill-progress"
                                                style={{ height: "10px" }}
                                             >
                                                <div
                                                   className="progress-bar bg-primary progress-animated"
                                                   style={{
                                                      width: "94%",
                                                      height: "10px;",
                                                   }}
                                                   role="progressbar"
                                                >
                                                   <span className="sr-only">
                                                      94% Complete
                                                   </span>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-3 col-xxl-4 col-lg-4">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="card  flex-lg-column flex-md-row ">
                        <div className="card-body card-body  text-center border-bottom profile-bx">
                           <div className="profile-image mb-4">
                              <img
                                 src={profileImg}
                                 className="rounded-circle"
                                 alt=""
                              />
                           </div>
                           <h4 className="fs-22 text-black mb-1">Oda Dink</h4>
                           <p className="mb-4">Programmer</p>
                           <div className="row">
                              <div className="col-6">
                                 <div className="border rounded p-2">
                                    <h4 className="fs-22 text-black font-w600">
                                       228
                                    </h4>
                                    <span className="text-black">
                                       Following
                                    </span>
                                 </div>
                              </div>
                              <div className="col-6">
                                 <div className="border rounded p-2">
                                    <h4 className="fs-22 text-black font-w600">
                                       4,842
                                    </h4>
                                    <span className="text-black">
                                       Followers
                                    </span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="card-body  border-left">
                           <div className="d-flex mb-3 align-items-center">
                              <Link className="contact-icon mr-3" to="#">
                                 <i
                                    className="fa fa-phone"
                                    aria-hidden="true"
                                 ></i>
                              </Link>
                              <span className="text-black">
                                 +50 123 456 7890
                              </span>
                           </div>
                           <div className="d-flex mb-3 align-items-center">
                              <Link className="contact-icon mr-3" to="#">
                                 <i className="las la-envelope"></i>
                              </Link>
                              <span className="text-black">
                                 info@example.com
                              </span>
                           </div>
                           <div className="row text-center mt-2 mt-md-5">
                              <div className="col-4 p-0">
                                 <div className="d-inline-block mb-2 relative donut-chart-sale">
                                    <svg
                                       className="peity"
                                       height={75}
                                       width={75}
                                    >
                                       <path
                                          d="M 37.5 0 A 37.5 37.5 0 1 1 0.5697092620421955 30.988193337490124 L 10.910190668670381 32.81149920299289 A 27 27 0 1 0 37.5 10.5"
                                          data-value={7}
                                          fill="rgb(255, 142, 38)"
                                       />
                                       <path
                                          d="M 0.5697092620421955 30.988193337490124 A 37.5 37.5 0 0 1 37.49999999999999 0 L 37.49999999999999 10.5 A 27 27 0 0 0 10.910190668670381 32.81149920299289"
                                          data-value={2}
                                          fill="rgba(236, 236, 236, 1)"
                                       />
                                    </svg>
                                    <small className="text-black">66%</small>
                                 </div>
                                 <span className="d-block">PHP</span>
                              </div>
                              <div className="col-4 p-0">
                                 <div className="d-inline-block mb-2 relative donut-chart-sale">
                                    <svg
                                       className="peity"
                                       height={75}
                                       width={75}
                                    >
                                       <path
                                          d="M 37.5 0 A 37.5 37.5 0 0 1 50.32575537471258 72.73847327947156 L 46.73454386979306 62.87170076121953 A 27 27 0 0 0 37.5 10.5"
                                          data-value={4}
                                          fill="rgb(62, 168, 52)"
                                       />
                                       <path
                                          d="M 50.32575537471258 72.73847327947156 A 37.5 37.5 0 1 1 37.49999999999999 0 L 37.49999999999999 10.5 A 27 27 0 1 0 46.73454386979306 62.87170076121953"
                                          data-value={5}
                                          fill="rgba(236, 236, 236, 1)"
                                       />
                                    </svg>
                                    <small className="text-black">31%</small>
                                 </div>
                                 <span className="d-block">Vue</span>
                              </div>
                              <div className="col-4 p-0">
                                 <div className="d-inline-block mb-2 relative donut-chart-sale">
                                    <svg
                                       className="peity"
                                       height={75}
                                       width={75}
                                    >
                                       <path
                                          d="M 37.5 0 A 37.5 37.5 0 0 1 74.43029073795779 30.98819333749011 L 64.08980933132962 32.81149920299288 A 27 27 0 0 0 37.5 10.5"
                                          data-value={2}
                                          fill="rgb(34, 172, 147)"
                                       />
                                       <path
                                          d="M 74.43029073795779 30.98819333749011 A 37.5 37.5 0 1 1 37.49999999999999 0 L 37.49999999999999 10.5 A 27 27 0 1 0 64.08980933132962 32.81149920299288"
                                          data-value={7}
                                          fill="rgba(236, 236, 236, 1)"
                                       />
                                    </svg>
                                    <small className="text-black">7%</small>
                                 </div>
                                 <span className="d-block">Laravel</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-12">
                     <div className="card">
                        <div className="card-header border-0 pb-0">
                           <h4 className="fs-20 text-black">Portofolios</h4>
                           <Dropdown className="dropdown float-right custom-dropdown mb-0">
                              <Dropdown.Toggle
                                 variant=""
                                 className=""
                                 data-toggle="dropdown"
                              ></Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                 <Dropdown.Item
                                    className="dropdown-item"
                                    to="/profile"
                                 >
                                    Details
                                 </Dropdown.Item>
                                 <Dropdown.Item
                                    className="dropdown-item text-danger"
                                    to="/profile"
                                 >
                                    Cancel
                                 </Dropdown.Item>
                              </Dropdown.Menu>
                           </Dropdown>{" "}
                        </div>
                        <div className="card-body">
                           <div className="d-flex mb-3 align-items-center bg-light rounded">
                              <svg
                                 className="mr-3 min-w50"
                                 width="50"
                                 height="50"
                                 viewBox="0 0 49 49"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <rect
                                    width="49"
                                    height="49"
                                    rx="18"
                                    fill="#3D6AD6"
                                 />
                                 <path
                                    d="M22.7047 25.2398C22.6293 25.2398 21.0484 25.2403 20.3193 25.2396C19.9439 25.2394 19.81 25.1045 19.81 24.7267C19.8095 23.7564 19.8093 22.7861 19.81 21.8158C19.8103 21.4428 19.9519 21.3005 20.3224 21.3002C21.0515 21.2998 22.6238 21.3 22.7047 21.3C22.7047 21.2335 22.7044 19.8326 22.7047 19.1875C22.7051 18.2338 22.8753 17.3208 23.3599 16.4849C23.8559 15.6293 24.5779 15.0432 25.5031 14.7043C26.0956 14.4871 26.7107 14.4005 27.3395 14.4C28.1263 14.3995 28.913 14.4002 29.6999 14.4017C30.0381 14.4022 30.1881 14.5517 30.1888 14.8922C30.1903 15.805 30.1903 16.7177 30.1888 17.6302C30.1883 17.9743 30.0446 18.1126 29.6987 18.1164C29.0539 18.1234 28.4085 18.119 27.7643 18.145C27.1137 18.145 26.7715 18.4627 26.7715 19.1362C26.7559 19.8485 26.765 20.5615 26.765 21.2998C26.8259 21.2998 28.6775 21.2995 29.543 21.2998C29.9361 21.2998 30.0705 21.4349 30.0705 21.8302C30.0705 22.7952 30.0703 23.7605 30.0695 24.7255C30.0693 25.115 29.9431 25.2394 29.5475 25.2396C28.6821 25.2401 26.8377 25.2398 26.7571 25.2398V33.0506C26.7571 33.467 26.626 33.5998 26.2151 33.5998C25.2134 33.5998 24.2114 33.6 23.2096 33.5998C22.8465 33.5998 22.7049 33.4586 22.7049 33.0955C22.7047 30.5518 22.7047 25.3291 22.7047 25.2398Z"
                                    fill="white"
                                 />
                              </svg>
                              <span className="font-w500">
                                 /davidheree.porto
                              </span>
                           </div>
                           <div className="d-flex mb-3 align-items-center bg-light rounded">
                              <svg
                                 className="mr-3 min-w50"
                                 width="50"
                                 height="50"
                                 viewBox="0 0 50 50"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <rect
                                    width="50"
                                    height="50"
                                    rx="18"
                                    fill="#EA518D"
                                 />
                                 <path
                                    d="M28.4575 25.3758C29.4183 27.8067 30.1319 30.3093 30.5955 32.866C31.2569 32.4627 31.8751 31.9783 32.4371 31.4165C33.8964 29.9569 34.8383 28.1177 35.1711 26.1218C33.7375 25.5286 32.1672 25.2005 30.5215 25.2005C29.8179 25.2005 29.1285 25.261 28.4575 25.3758Z"
                                    fill="white"
                                 />
                                 <path
                                    d="M32.4447 17.5714C32.4418 17.5687 32.4391 17.5658 32.4364 17.5631C30.5862 15.7129 28.1262 14.6939 25.5097 14.6939C24.4865 14.6939 23.4873 14.8504 22.5391 15.1509C24.0587 17.0549 25.3956 19.0869 26.5414 21.2344C28.7 20.3177 30.6881 19.0761 32.4447 17.5714Z"
                                    fill="white"
                                 />
                                 <path
                                    d="M33.2143 18.4386C31.3717 20.0214 29.3123 21.3039 27.0718 22.2627C27.4021 22.9276 27.7141 23.6033 28.0085 24.289C28.8309 24.1325 29.6696 24.0526 30.5209 24.0526C32.1698 24.0526 33.7734 24.3492 35.2952 24.9328C35.3018 24.7856 35.3055 24.6379 35.3055 24.49C35.3055 22.2668 34.5698 20.1575 33.2143 18.4386V18.4386Z"
                                    fill="white"
                                 />
                                 <path
                                    d="M19.4805 32.2117C21.1955 33.5564 23.2967 34.2857 25.5101 34.2857C26.917 34.2857 28.2784 33.9906 29.5242 33.4308C29.0572 30.7249 28.3095 28.1143 27.3121 25.6295C23.8453 26.5756 20.989 29.0155 19.4805 32.2117V32.2117Z"
                                    fill="white"
                                 />
                                 <path
                                    d="M25.3247 25.1018C25.8284 24.8887 26.3422 24.708 26.8638 24.5596C26.5886 23.9292 26.2964 23.3077 25.9891 22.6949C23.3427 23.6775 20.5599 24.1756 17.7012 24.1756C17.0371 24.1756 16.3773 24.1482 15.7224 24.0948C15.7171 24.2258 15.7139 24.3576 15.7139 24.49C15.7139 27.1065 16.7329 29.5665 18.5831 31.4167C18.5836 31.4172 18.5843 31.418 18.5851 31.4184C19.225 30.1423 20.0618 28.9822 21.0815 27.9624C22.3073 26.7367 23.7348 25.7743 25.3247 25.1018V25.1018Z"
                                    fill="white"
                                 />
                                 <path
                                    d="M25.4519 21.6637C24.2893 19.5108 22.9294 17.4796 21.3966 15.5941C20.3636 16.0726 19.4119 16.7341 18.583 17.5631C17.1008 19.0452 16.1526 20.9189 15.834 22.9509C16.4499 23.0013 17.0724 23.0275 17.7013 23.0275C20.4219 23.0273 23.0325 22.5458 25.4519 21.6637V21.6637Z"
                                    fill="white"
                                 />
                              </svg>
                              <span className="font-w500">/david.drib</span>
                           </div>
                           <div className="d-flex mb-3 align-items-center bg-light rounded">
                              <svg
                                 className="mr-3 min-w50"
                                 width="50"
                                 height="50"
                                 viewBox="0 0 50 50"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <rect
                                    width="50"
                                    height="50"
                                    rx="18"
                                    fill="#0073B1"
                                 />
                                 <path
                                    d="M34.5948 33.6V33.5993H34.5996V26.5577C34.5996 23.113 33.858 20.4593 29.8308 20.4593C27.8948 20.4593 26.5956 21.5218 26.0652 22.5288H26.0093V20.7809H22.1909V33.5993H26.167V27.252C26.167 25.5809 26.4838 23.9647 28.5533 23.9647C30.5926 23.9647 30.6228 25.872 30.6228 27.359V33.6H34.5948Z"
                                    fill="white"
                                 />
                                 <path
                                    d="M15.7168 20.7816H19.6977V33.6H15.7168V20.7816Z"
                                    fill="white"
                                 />
                                 <path
                                    d="M17.7056 14.4C16.4326 14.4 15.3999 15.4327 15.3999 16.7057C15.3999 17.9786 16.4326 19.0329 17.7056 19.0329C18.9785 19.0329 20.0113 17.9786 20.0113 16.7057C20.0103 15.4327 18.9776 14.4 17.7056 14.4Z"
                                    fill="white"
                                 />
                              </svg>
                              <span className="font-w500">/davidheree222</span>
                           </div>
                           <div className="d-flex mb-3 align-items-center bg-light rounded">
                              <svg
                                 className="mr-3 min-w50"
                                 width="50"
                                 height="50"
                                 viewBox="0 0 50 50"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <rect
                                    width="50"
                                    height="50"
                                    rx="18"
                                    fill="#FF0000"
                                 />
                                 <path
                                    d="M30.9677 17.1386H19.0321C17.0247 17.1386 15.3999 18.7658 15.3999 20.771V27.2292C15.3999 29.2342 17.0247 30.8614 19.0321 30.8614H30.9675C32.9751 30.8614 34.5999 29.2342 34.5999 27.229V20.771C34.5999 18.7658 32.9751 17.1386 30.9677 17.1386ZM22.4705 26.9434V21.0566L27.529 24.006L22.4705 26.9434Z"
                                    fill="white"
                                 />
                              </svg>
                              <span className="font-w500">/davidhereechan</span>
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

export default Profile;
