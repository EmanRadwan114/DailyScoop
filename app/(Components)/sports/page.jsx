import React from "react";
import News from "../News/News";
import { getFeaturedNews } from "@/app/news/news";

export const metadata = {
  title: "Sports News",
  description: "Get Fresh Sports News",
};

export default async function SportsNews() {
  const featuredNews = await getFeaturedNews("sports");

  return <News titleText="Top Sports Headlines" data={featuredNews}></News>;
}
