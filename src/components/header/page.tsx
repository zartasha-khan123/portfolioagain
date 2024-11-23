'use client'
import React from 'react';
import {caveatFont, interFont} from "@/font";
import styles from '@/components/header/header.module.css'
import Link from 'next/link';
import { TiThMenu } from "react-icons/ti";
import { AiFillCloseSquare } from "react-icons/ai";
import { AnimatePresence, motion } from 'framer-motion'



function Header() {

  const [isOpen,setIsOpen] = React.useState(false)

  return (
    

    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
            <h1 className={caveatFont.className}>ZARTASH  IMRAN</h1>
          <AnimatePresence>
           {isOpen  ?(
    
    <motion.ul className={`${interFont.className} ${styles.navUl} ${styles.active}`}
           key={"active"}
           initial={{opacity:0, width:0}}
           animate={{opacity:1, width:'40%'}}
           exit={{opacity:0, width:0}}
           transition={{duration:2,type:'spring'}}
      >
            <AiFillCloseSquare size={30}  className={styles.close} onClick={() => setIsOpen(false)}/>

<li><Link href={"/"}>HOME</Link></li>
<li><Link href={"#about"}>ABOUT</Link></li>
<li><Link href={"#portfolio"}>PORTFOLIO</Link></li>
<li><Link href={"#services"}>SERVICES</Link></li>
<li><Link href={"#testimonals"}>TESTIMONALS</Link></li>
<li><Link href={"#contact"}>CONTACT</Link></li>
</motion.ul>
)

:

(

<ul className={`${interFont.className} ${styles.navUl}`} >
<li><Link href={"/"}>HOME</Link></li>
<li><Link href={"#about"}>ABOUT</Link></li>
<li><Link href={"#portfolio"}>PORTFOLIO</Link></li>
<li><Link href={"#services"}>SERVICES</Link></li>
<li><Link href={"#testimonals"}>TESTIMONALS</Link></li>
<li><Link href={"#contact"}>CONTACT</Link></li>
</ul>

)

} 

</AnimatePresence>
            <TiThMenu size={35} color='white' className={styles.menu} onClick={() => setIsOpen(!isOpen)}/>    
        </nav>

      </header>
    </>
  )
 }

export default Header

