### DailyScoop is a News Web App that is built using Next.js V13.

The data is obtained from the news API Website ==> https://newsapi.org/, but the API is not supported during the production stage, that's why I could not deploy the project on gh pages or any server.

### Project Desacription:
- The website displayes news in different categories using the GET method with fetch & await & async on server components.
  
- When the user enters any kw in the search box, it will be automatically navigated to the search page, in addition to adding the search query in the URL, So we can use it to display the searched news. This programmatic navigation feature is added using the push method in the useRouter Hook.
  
- In the search form, The submit btn is also enabled only when the search box is not empty.
  
- In the search component, useSearchParam hook is used to get the searched kw from the url, then add this KW in the API endpoint to display the needed news only.
  
- Images are optimized by using the Image component from next, and also a fallback image is added when there is an error in displaying the news' image. The image which has the error is known by using the onError event handler.

### Project's Video is attached
https://github.com/EmanRadwan114/DailyScoop/assets/135042372/15150223-4e93-4a82-ace3-415c6863ebe6

