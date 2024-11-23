'use client'
import React from 'react'
import styles from "@/components/about/about.module.css"
import { caveatFont, interFont } from '@/font'
import Button from '../button/button'
import Image from 'next/image'
import {motion} from 'framer-motion'
import Link from 'next/link'

function About() {
  return (
    <>
      <section className={styles.about} id='about'>
        <motion.div className={styles.aboutleft}
        initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:2, type:'spring', stiffness: 50}}
        >
          <h1 className={caveatFont.className}> ZARTASH IMRAN </h1>

          <p className={caveatFont.className}>Freelance Web Developer</p>
          <h2 className={`${styles.detailpara} ${interFont.className}`}>
          I am Zartash Imran, a passionate and dedicated freelance web developer with expertise in creating visually appealing, responsive, and functional websites. With a strong foundation in web technologies like Next.js, ReactJS, and Tailwind CSS, 
          I focus on delivering user-friendly and pixel-perfect designs that align with client goals.
</h2>

<Link href="#contact" ><Button text={"Contact Me"}/></Link>
          </motion.div>
          <motion.div className={styles.aboutright}
          initial={{opacity:0,x:100}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:2, type:'spring', stiffness: 50}}
          >
         <Image src= "/images/profile.jpg" width={300} height={300} alt='profile' className={styles.img}></Image>
          </motion.div>
      </section>
    </>
  )
}

export default About
