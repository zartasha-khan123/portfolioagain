import React from 'react'
import styles from './portfolio.module.css'
import { caveatFont, interFont } from '@/font'
import PortfolioCard from './portfoliocards/portfoliocard'

function Portfolio() {
  return (
    <>
      <section className={styles.portfolio} id='portfolio'>

        <h1 className={`${caveatFont.className}`}>
        <span>M</span>y {' '}
        <span>L</span>ast {' '}
        <span>W</span>ork {' '}
        </h1>

        <p className={interFont.className}>I focused on designing the UI/UX for an e-commerce website 
          using Figma, ensuring an intuitive and user-friendly interface. Additionally, I worked on various Next.js projects where I utilized TypeScript, HTML, CSS, and React to create dynamic, responsive, and high-performance web applications. This combination of design and development allowed me to bridge the gap between aesthetics 
          and functionality effectively..</p>


<div className={styles.mywork}>
         <PortfolioCard/>
</div>
           
      </section>
    </>
  )
}

export default Portfolio
