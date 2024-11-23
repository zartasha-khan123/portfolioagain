import React from "react";
import styles from "@/components/testimonals/testimonial-card/testimonial.module.css";
import Image from "next/image";
import { interFont } from "@/font";
import { testimonialcard } from "@/constant/testimonialcard";

function Testimonialcard() {
  return (
    <>
      {testimonialcard.map((card, index) => {
        return (
          <div className={`${styles.card} ${interFont.className}`} key={index}>
            <div className={styles.cardimg}>
              <Image
                src={card.src}
                alt="image"
                width={150}
                height={150}
              ></Image>
            </div>

            <p>{card.name}</p>
            <p>
              <span>{card.title}</span>
            </p>
            <p style={{ marginBottom: "0px" }}>{card.discription}</p>
          </div>
        );
      })}
    </>
  );
}

export default Testimonialcard;
