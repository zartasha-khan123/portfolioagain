'use client'
import React from 'react'
import styles from '@/components/herosection/hero.module.css'
import { interFont } from '@/font'
import Button from '../button/button'
import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { RxVercelLogo } from "react-icons/rx";

import Image from 'next/image'
import Link from 'next/link';
import {motion} from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'





function HeroSection() {
  return (
    <>
      <section className={`${styles.hero} ${interFont.className}`} id="hero">

        <h1><span>Hey</span>!{" "}   I&apos;m
        {' '}<span>ZARTASH IMRAN</span>
        {' '}
        <motion.span style={{display:"inline-block",fontSize:"3.125rem"}}
        animate={{rotate:[0,15,-10,20,-10,0]}}
        transition={{duration:1.5,repeat:Infinity,ease:"easeInOut"}}
        >👋🏽</motion.span>
         <br/>
        I&apos;m{' '}   <Typewriter words={['Front End Web Developer', 'UX UI Designer']}
        loop={Infinity} 
        cursor={true} 
        cursorStyle={'_'} 
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1500}/>   
         </h1>
      <p>I can build user interface for web sites and applications with {" "}
        <span>React JS</span> and { " " }
        <span>Next.Js</span>
        <br/>
      I love the front end development.</p>
     <div className={styles.btn}><Link href="https://www.linkedin.com/in/zartash-zartasha-9916992bb/" target='_blank'>
      <Button text={"Hire Me"} /></Link> {/* pass probs */}
      <Link href="https://resume-builder-zartashimran.vercel.app" target='_blank' className={styles.btns}>
       <Button text={"Download Resume"}/>
      </Link> {/* pass probs */}</div>

       <div className={styles.sociallogo}>
      <Link href='https://www.facebook.com'><FaFacebookF size={30}color='#1877F2
'/></Link>
      <Link href='https://www.instagram.com'> <FaSquareInstagram size={30} color='red' /></Link>
      <Link href='https://www.whatsapp.com'> <FaWhatsapp size={30}color='lightgreen'/></Link>
      <Link href='https://www.telegram.com'><FaTelegram size={30}color='black'/></Link>
      <Link href='https://www.github.com'><FaGithub  size={30}color='lightblue'/></Link>
      <Link href='https://www.vercel.com'><RxVercelLogo size={30}color='black'/></Link>


       </div>

       <div className={styles.bottomdiv}>
        <Image src="/images/behance.png" width={500} height={500} alt='behance'>
        </Image>
        <Image src="/images/dribble.png" width={500} height={500} alt='dribble'>
        </Image>
        <Image src="/images/upwork.png" width={500} height={500} alt='upwork'>
        </Image>
        <Image src="/images/freelance.png" width={500} height={500} alt='freelance'>
        </Image>

       </div>
    </section>
    </>
  )
}

export default HeroSection

     

     
