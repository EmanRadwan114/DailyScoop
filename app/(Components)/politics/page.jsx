import React from "react";
import News from "../News/News";
import { getFeaturedNews } from "@/app/news/news";

export const metadata = {
  title: "Politics News",
  description: "Get Fresh Politics News",
};

export default async function PoliticsNews() {
  const featuredNews = await getFeaturedNews("politics");

  return <News titleText="Top Politics Headlines" data={featuredNews}></News>;
}
