import React from "react";
import styles from "@/app/styles/common.module.css";
import ArticleCard from "../components/ArticleCard";

const ArticlePage = async () => {
  const url = `${process.env.MOVIE_API_KEY}?api-key=${process.env.API_KEY}`;

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  };

  const res = await fetch(url, options);

  const main_data = await res.json();

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Articles</h1>
          <div className={styles.card_section}>
            {main_data.results.map((currArticle: any, index: number) => {
              return <ArticleCard id={index + 1} currArticle={currArticle} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticlePage;
