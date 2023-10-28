"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getSearchedNews } from "@/app/news/news";
import News from "../News/News";
import Loading from "@/app/loading";

export default function SearchNews() {
  const [searchedDate, setSearchedData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const searchparam = useSearchParams();
  const searchKW = searchparam.get("q");

  async function displayFoundNews(search) {
    try {
      setLoading(true);
      const foundNews = await getSearchedNews(search);
      setSearchedData(foundNews);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(err);
    }
  }

  useEffect(() => {
    displayFoundNews(searchKW);
  }, [searchKW]);

  return (
    <>
      {isLoading ? (
        <Loading></Loading>
      ) : searchedDate?.length !== 0 && searchedDate !== null ? (
        // <News titleText="Searched News" data={searchedDate}></News>
        ""
      ) : (
        <div className="d-flex justify-content-center align-items-center position-fixed start-0 end-0 top-0 bottom-0">
          <p className="m-0 fw-bold fs-4">No News Found 😔</p>
        </div>
      )}
    </>
  );
}
