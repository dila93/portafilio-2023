import { useEffect, useState } from "react";

const useArticles = () => {
    const [articles, setArticles] = useState();

    const getMediumArticles = async (url, user) => {
        try {
            const response = await fetch(url+user);
            const articlesResponse = await response.json();
            console.log("articlesResponse: ", articlesResponse);
            setArticles(articlesResponse.items);
          } catch(error) {
            console.log("Failed to fetch medium rss", error);
          }
    }

    useEffect(()=>{
        const url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/';
        const user = '@sebastian-ardila';
        getMediumArticles(url, user);
    }, []);

    return {
        articlesData: articles,
    }
};

export default useArticles;
