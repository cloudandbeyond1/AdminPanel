import React from "react";
import { Link } from "react-router-dom";

const SingleJob = (props) => {
   const {
      subTitle,
      title,
      icon,
      lowRate,
      highRate,
      description,
      locationPlace,
      locationCountry,
   } = props.jobData;
   return (
      <div className="col-xl-4 col-md-6">
         <div className="card shadow_1">
            <div className="card-body">
               <div className="media mb-2">
                  <div className="media-body">
                     <p className="mb-1">{subTitle}</p>
                     <h4 className="fs-20 text-black">{title}</h4>
                  </div>
                  {icon}
               </div>
               <span className="text-primary font-w500 d-block mb-3">
                  ${lowRate} - ${highRate}
               </span>
               <p className="fs-14">{description}</p>
               <div className="d-flex align-items-center mt-4">
                  <Link
                     to="search-job"
                     className="btn btn-primary light btn-rounded mr-auto"
                  >
                     REMOTE
                  </Link>
                  <span className="text-black font-w500">
                     {locationPlace}, {locationCountry}
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SingleJob;
