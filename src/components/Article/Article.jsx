import React from "react";
import articleImg from "../../assets/images/article1.jpeg";
import "./styles.css";

export function Article({title,provider,description,thumbnail}) {
  return (
    <article id="article">
      <img src={thumbnail} alt={title} />

      <div className="article_infos">
        <h2>{title}</h2>
        <h3>{provider}</h3>

        <p>{description}</p>
      </div>
    </article>
  );
}
