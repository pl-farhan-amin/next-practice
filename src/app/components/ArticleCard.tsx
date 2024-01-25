import React from "react";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

const ArticleCard = ({ id, currArticle }: { id: number; currArticle: any }) => {
  const { title, abstract, multimedia } = currArticle;

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image
            src={multimedia[multimedia.length - 1].url}
            alt={`Article-Image-${id}`}
            width={280}
            height={250}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.card_data}>
          <h2>{`${title.substring(0, 18)}...`}</h2>
          <p>{`${abstract.substring(0, 66)}...`}</p>
          <Link
            href={{
              pathname: `/article/${id}`,
              query: {
                currArticle: JSON.stringify(currArticle),
              },
            }}
          >
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
