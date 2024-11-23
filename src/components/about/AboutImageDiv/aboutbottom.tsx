'use client'
import React from 'react'
import styles from '@/components/about/AboutImageDiv/aboutbottom.module.css'
import Image from 'next/image'
import {motion} from 'framer-motion'

//parent container
const ContainerVariants = {
  hidden:{},
  show:{
    transition:{staggerChildren:0.2}
  }
}

//child Container

const itemVariants ={
  hidden:{opacity:0,y:20},
  show:{opacity:1,y:0}
}


function AboutImageDiv() {

  return (
    <>
      <motion.section className={styles.aboutimage}
      variants={ContainerVariants}
      initial='hidden'
      whileInView='show'
       >
 <motion.div variants={itemVariants}><Image src="/images/html.png" width={96} height={96} alt='html'></Image></motion.div>
 <motion.div variants={itemVariants}><Image src="/images/css.png" width={96} height={96} alt='css'></Image></motion.div>
 <motion.div variants={itemVariants}><Image src="/images/typescript.png" width={70} height={70} alt='typescript'></Image></motion.div>
 <motion.div variants={itemVariants}><Image src="/images/git.png" width={96} height={96} alt='git'></Image></motion.div>
 <motion.div variants={itemVariants}><Image src="/images/figma.png" width={96} height={96} alt='figma'></Image></motion.div>
 <motion.div variants={itemVariants}><Image src="/images/react.png" width={96} height={96} alt='react'></Image></motion.div>
 <motion.div variants={itemVariants}><Image src="/images/node.png" width={96} height={96} alt='node'></Image></motion.div>
<motion.div variants={itemVariants}><Image src="/images/next.png" width={96} height={96} alt='next'></Image></motion.div>
      </motion.section>
    </>
  )
}

export default AboutImageDiv
