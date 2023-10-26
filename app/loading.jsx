import React from "react";

export default function Loading() {
  return (
    <div className=" d-flex justify-content-center align-items-center position-fixed start-0 end-0 top-0 bottom-0 bg-opacity-25 bg-dark">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
