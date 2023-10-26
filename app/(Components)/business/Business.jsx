import React from "react";
import News from "../News/News";
import { getFeaturedNews } from "@/app/news/news";

export default async function BusinessNews() {
  const featuredNews = await getFeaturedNews("business");

  return <News titleText="Top Business Headlines" data={featuredNews}></News>;
}
