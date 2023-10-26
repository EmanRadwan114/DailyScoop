import React from "react";
import FallbackImg from "../fallbackImg/fallbackImg";

export default function NewsCard({ img, title, desc, source, url, date }) {
  return (
    <div className="col-md-6">
      <div className="shadow-sm border border-1 border-opacity-50 border-dark rounded-2 minHeight">
        <FallbackImg img={img} title={title}></FallbackImg>
        <div className="py-2 px-3">
          <h2 className="h6 fw-bold mainText my-2">{title}...</h2>
          <p className="m-0 mb-2 overflow-hidden text-wrap">
            {desc
              ? desc
              : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum a sunt reiciendis itaque. Odit itaque dolores iure aspernatur assumenda totam`}
            ...
          </p>
          <p className="m-0 d-inline-block text-capitalize fw-bold mainBg text-light rounded-1 px-2 py-1">
            {source}
          </p>
          <div className="row justify-content-between my-3">
            <div className="col-6">
              <a
                href={url}
                target="_blank"
                className="d-block mainText fw-semibold"
              >
                Continue
                <i className="fa-solid fa-right-long ms-3"></i>
              </a>
            </div>
            <div className="col-6 text-end">
              <span>{date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
