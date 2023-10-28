"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SearchBox() {
  const [searchKW, setSearchKW] = useState("");
  const navigate = useRouter();

  return (
    <form
      className="d-flex mx-auto py-3"
      onSubmit={(e) => {
        e.preventDefault();
        navigate.push(`/search?q=${searchKW}`);
      }}
      role="search"
      id="searchForm"
    >
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        id="searchNews"
        onChange={(e) => {
          setSearchKW(e.target.value);
        }}
      />
      <button
        className="btn mainBg text-light"
        type="submit"
        disabled={!searchKW}
      >
        Search
      </button>
    </form>
  );
}
