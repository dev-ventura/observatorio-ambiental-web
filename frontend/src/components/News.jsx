import { useState, useEffect } from "react";
import { Menu } from "./Menu";
import backupNews from "../data/backupNews";
import { useParams } from "react-router-dom";
import "./News.css";

const News = () => {
  const [news, setNews] = useState([...backupNews.news]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { q } = useParams();
  console.log(q)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://google-news-consultor.onrender.com/api?q=${q}`
        );
        const data = await response.json();
        setNews(data.news);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <div className="page">
        <div>
          <Menu />
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="sectionNews">
            <h1 className="titleNews">Noticias</h1>
            <div className="news-container">
              {news.map((article, index) => (
                <div key={index} className="newsItem">
                  {article.pagemap.cse_thumbnail ? (
                    <div className="imgWrapper">
                      <img
                        className="imageNews"
                        src={article.pagemap.cse_thumbnail[0].src}
                      />
                    </div>
                  ) : null}

                  <div>
                    <h2 className="articleTitle">{article.title}</h2>
                    <p className="articleSnippet">{article.snippet}</p>
                    <a
                      className="articleLink"
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Leer más...{" "}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default News;
