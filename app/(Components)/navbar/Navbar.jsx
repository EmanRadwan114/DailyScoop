"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import SearchBox from "../searchBox/SearchBox.jsx";

export default function Navbar() {
  const pathname = usePathname();
  const navLinks = [
    {
      path: "/",
      text: "business",
    },
    {
      path: "/sports",
      text: "sports",
    },
    {
      path: "/health",
      text: "health",
    },
    {
      path: "/politics",
      text: "politics",
    },
    {
      path: "/technology",
      text: "technology",
    },
  ];

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body shadow-sm fixed-top align-items-center text-center text-lg-start">
        <div className="container-sm">
          <Link className="navbar-brand fw-semibold fs-4" href="/">
            Daily<span className="mainText">Scoop</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {navLinks.map((item, index) => {
                return (
                  <li className="nav-item py-2" key={index}>
                    <Link
                      className={` nav-link text-capitalize text-dark fw-medium d-inline-block ${
                        item.path === pathname ? " active" : ""
                      }`}
                      href={item.path}
                    >
                      {item.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <SearchBox></SearchBox>
          </div>
        </div>
      </nav>
    </header>
  );
}
