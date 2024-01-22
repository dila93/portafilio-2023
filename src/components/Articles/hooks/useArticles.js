import { useEffect, useState } from "react";

const useArticles = () => {
    const [articles, setArticles] = useState();

    const getMediumArticles = async (url, user) => {
        try {
            const response = await fetch(url+user);
            const articlesResponse = await response.json();
            setArticles(articlesResponse.items);
          } catch(error) {
            console.error("Failed to fetch medium rss", error);
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
