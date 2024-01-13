import React, { useEffect, useState } from "react";
import axios from "axios";
import { Article } from "./components/Article/Article";
import { Navbar } from "./components/Navbar/Navbar";
import { ThreeDots } from "react-loader-spinner";

/* import { Counter } from "./components/Counter/Counter";
 */

import "./styles/App.css";
// Componente em classe é uma classe que herda a classee Component do React, e retorna HTML dentro do método render.

// Componente funcional é uma função que retorna HTML.

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await axios.get(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      const newsData = response.data;

      console.log(newsData);
      setNews(newsData);
    }

    loadNews();
  }, []);

  // Método responsável por renderizar o conteúdo HTML do nosso componente.
  return (
    <>
      <Navbar />

      <section id="articles">
        {news.length === 0 ? (
          <div style={{height: '400px', width: '100%', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
            <ThreeDots />
          </div>
        ) : (
          news.map((article) => {
            return (
              <Article
                key={article.id}
                title={article.title}
                provider={article.newsSite}
                description={article.summary}
                thumbnail={article.imageUrl}
              />
            );
          })
        )}
      </section>
    </>
  );
}

export default App;
