import React from "react";
import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";
import { HeroSectionProps } from "../interfaces";
import { mulish } from "../layout";

const HeroSection = ({ title, imageURL }: HeroSectionProps) => {
  return (
    <main className={heroStyles.main_section}>
      <div className={styles.container}>
        <div className={styles.grid_two_section}>
          <div className={styles.hero_content}>
            <h1>{title}</h1>
            <p>
              From award winning dramas to blockbuster action movies, we&apos;ve
              got you covered. Browse our selection of the latest and greatest
              movies, and find your new favourite today.
            </p>

            <Link href={"/article"}>
              <button className={mulish.className}>Explore Articles</button>
            </Link>
          </div>
          <div className={heroStyles.hero_image}>
            <Image
              src={imageURL}
              alt="home page Image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
