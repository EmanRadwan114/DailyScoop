import React from "react";
import FallbackImg from "../fallbackImg/fallbackImg";

export default function SidebarNewsCard({ img, title, url, desc, color, src }) {
  return (
    <>
      <div className="col-7">
        <FallbackImg img={img} title={title}></FallbackImg>
      </div>
      <div className="col-5">
        <h2 className={`h6 mb-2 ${color}`}>{title}...</h2>
        <p className="m-0 mb-2 overflow-hidden text-wrap">{desc}</p>
        {src ? (
          <p className="m-0 mb-2 d-inline-block text-capitalize fw-bold mainBg text-light rounded-1 px-2 py-1">
            {src}
          </p>
        ) : (
          ""
        )}
        <a href={url} target="_blank" className="d-block mainText fw-semibold">
          Continue
          <i className="fa-solid fa-right-long ms-3"></i>
        </a>
      </div>
    </>
  );
}
