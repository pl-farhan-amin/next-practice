import React from "react";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";

const page = ({
  params,
  searchParams,
}: {
  params: { id: number };
  searchParams: any;
}) => {
  const { id } = params;
  const { currArticle } = searchParams;

  const { multimedia, abstract, title, item_type } = JSON.parse(currArticle);

  return (
    <div className={styles.container}>
      <h2 className={styles.movie_title}>
        {" "}
        U.S News \ <span>{item_type}</span>
      </h2>
      <div className={styles.card_section}>
        <div>
          <Image
            src={multimedia[multimedia.length - 2].url}
            width={600}
            height={400}
            style={{ objectFit: "cover" }}
            alt={`Image-${id}`}
          />
        </div>
        <div>
          <h1>{title}</h1>
          <p>{abstract}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
