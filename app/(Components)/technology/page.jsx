import React from "react";
import News from "../News/News";
import { getFeaturedNews } from "@/app/news/news";

export const metadata = {
  title: "Technology News",
  description: "Get Fresh Technology News",
};

export default async function TechnologyNews() {
  const featuredNews = await getFeaturedNews("technology");

  return <News titleText="Top Technology Headlines" data={featuredNews}></News>;
}
