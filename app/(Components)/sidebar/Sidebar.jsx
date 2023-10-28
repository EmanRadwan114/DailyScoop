import React from "react";
import { getFeaturedNews } from "@/app/news/news";
import SidebarNewsCard from "./../sidebarNews/SidebarNewsCard";

export default async function Sidebar() {
  const featuredNews = await getFeaturedNews("science");

  return (
    <aside>
      <h3 className="h5 fw-bold mainText text-capitalize text-center border-2 border-bottom border-danger pb-3 mb-3">
        Latest News
      </h3>
      <div className="row g-3 flex-column">
        {featuredNews.map((article, index) => {
          if (index < 12) {
            return (
              <>
                {article.title !== "[Removed]" ? (
                  <div className="row g-2 align-items-center" key={index}>
                    <SidebarNewsCard
                      img={article?.urlToImage}
                      title={article?.title?.split(" ").splice(0, 10).join(" ")}
                      url={article?.url}
                    />
                  </div>
                ) : (
                  ""
                )}
              </>
            );
          }
        })}
      </div>
    </aside>
  );
}
