import React from "react";

const SingleCompani = (props) => {
   const { icon, title, description } = props.company;
   return (
      <div className="col-xl-3 col-xxl-4 col-md-4 col-sm-6">
         <div className="card text-center">
            <div className="card-body">
               {icon}
               <h6 className="font-w600 text-black fs-16 mb-1">{title}</h6>
               <span className="fs-14">{description}</span>
            </div>
         </div>
      </div>
   );
};

export default SingleCompani;
