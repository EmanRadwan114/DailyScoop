import NewsCard from "../newsCard/NewsCard";
import SidebarNewsCard from "../sidebarNews/SidebarNewsCard";

export default function News({ titleText, data }) {
  return (
    <>
      <h1 className="h3 pt-5 pb-3 fw-bold mainText">{titleText}</h1>
      <div className="row g-4 align-items-stretch">
        {data?.map((article, index) => {
          const date = new Date(article.publishedAt);
          return (
            <>
              {article.title !== "[Removed]" ? (
                <>
                  {index === 0 ? (
                    <div className="row gx-3 gy-1 mb-3 mt-2 align-items-center">
                      <SidebarNewsCard
                        img={article?.urlToImage}
                        title={article?.title
                          ?.split(" ")
                          .splice(0, 10)
                          .join(" ")}
                        key={index}
                        url={article?.url}
                        desc={
                          article?.description
                            ? `${article?.description
                                ?.split(" ")
                                .splice(0, 20)
                                .join(" ")}...`
                            : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum a sunt reiciendis itaque. Odit itaque dolores iure aspernatur assumenda totam...`
                        }
                        color={"mainText fw-bold"}
                        src={article?.source.name}
                      />
                    </div>
                  ) : (
                    <NewsCard
                      img={article?.urlToImage}
                      title={article?.title?.split(" ").splice(0, 10).join(" ")}
                      desc={article?.description
                        ?.split(" ")
                        .splice(0, 20)
                        .join(" ")}
                      source={article?.source.name}
                      url={article?.url}
                      date={`${date?.getFullYear()} - ${date?.getMonth()} - ${date?.getDate()}`}
                      key={index}
                    ></NewsCard>
                  )}
                </>
              ) : (
                ""
              )}
            </>
          );
        })}
      </div>
    </>
  );
}
