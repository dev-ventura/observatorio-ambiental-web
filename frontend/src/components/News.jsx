import { useState, useEffect } from "react";
import { Menu } from "./Menu";
const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const query = "incendios bolivia"

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`https://google-news-consultor.onrender.com/api?q=${query}`);
        const data = await response.json();
        setNews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  console.log(news)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
    <div className="page">
      <div>
        <Menu />
      </div>
      <div>
        <h1>Noticias</h1>
        <div className="news-container">
          {news.map((article, index) => (
            <div key={index} className="news-item">
              <h2>{article.title}</h2>
              <p>{article.snippet}</p>
              <a href={article.link} target="_blank" rel="noopener noreferrer">Leer más</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  )
}

export default News;