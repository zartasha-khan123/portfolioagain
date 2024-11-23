"use client";
import React from "react";
import styles from "@/components/portfolio/portfoliocards/portfoliocard.module.css";
import Image from "next/image";
import { portfolio_cards } from "@/constant/portfolioCards";
import Link from "next/link";
import { motion } from "framer-motion";

function PortfolioCard() {
  return (
    <>
      { portfolio_cards.map((item, index) => {
        return (
          <motion.div
            className={styles.card}
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }} >
            <Link href={item.href}>
              <div className={styles.cardimg}>
                {item.type == "image" ? (
                  <Image
                    src={item.src}
                    width={407}
                    height={407}
                    alt="profile"
                    className={styles.img}
                  />
                ) : (
                  <video src={item.src} loop muted controls autoPlay></video>
                )}
              </div>
            </Link>
           <button  className={styles.text}>{item.title}</button> 
          </motion.div>
        );
      })}
    </>
  );
}

export default PortfolioCard;
