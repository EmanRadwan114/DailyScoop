import React from "react";

export default function Footer() {
  return (
    <footer className=" mt-auto">
      <div className=" bg-body-secondary mt-4 rounded-1 py-5 px-3 shadow-sm text-center">
        <div className="container-sm">
          <h3 className="h4 fw-bold mainText mb-4">
            Susbscribe to Our Newsletter
          </h3>
          <form
            method="post"
            className=" w-75 mx-auto d-flex gap-2 justify-content-center align-items-center"
          >
            <input
              type="email"
              name="email"
              required
              className="form-control border border-1 border-dark border-opacity-25"
              placeholder="Enter Your Email"
            />
            <button
              type="submit"
              className="btn text-light mainBg text-capitalize w-25"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mainBg text-light py-2 text-center fw-bold">
        <p className="m-0">Copyrights &copy; DailyScoop 2023</p>
      </div>
    </footer>
  );
}
