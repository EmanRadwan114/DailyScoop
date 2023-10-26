import React from "react";
import News from "../News/News";
import { getFeaturedNews } from "@/app/news/news";

export const metadata = {
  title: "Health News",
  description: "Get Fresh Health News",
};

export default async function HealthNews() {
  const featuredNews = await getFeaturedNews("health");
  return (
    <>
      <News titleText="Top Health Headlines" data={featuredNews}></News>
    </>
  );
}
