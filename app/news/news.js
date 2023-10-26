const apiKey = `874df45818044ffe964bd66db6d28eab`;

export async function getFeaturedNews(catg = "") {
  try {
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?language=en&pageSize=14&apiKey=${apiKey}&category=${catg}
      `,
      {
        next: {
          revalidate: 300,
        },
      }
    );
    response = await response.json();
    if (response.status === "ok") {
      return response.articles;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getSearchedNews(search = "") {
  try {
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?language=en&pageSize=14&apiKey=${apiKey}&q=${search}
      `
    );
    response = await response.json();
    if (response.status === "ok") {
      return response.articles;
    }
  } catch (err) {
    console.log(err);
  }
}
