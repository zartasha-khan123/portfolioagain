import React from 'react'
import styles from '@/components/services/services.module.css'
import { caveatFont, interFont } from '@/font'
import ServicesCard from './servicesCard/servicesCard'

function Services() {
  return (
    <>
      <section className={styles.services} id='services'>

        <h1 className={caveatFont.className}>
        <span>W</span>hat {' '}
        <span> I</span> {' '}
        <span>D</span>o {' '}
        <span> F</span>or {' '}
        <span> C</span>lients {' '}
        </h1>

        <p className={interFont.className}> In web development and branding, creating responsive, pixel-perfect websites using tools like Next.js and Tailwind CSS. I transforms Figma designs into functional,
        visually appealing websites while ensuring proper layout and responsivenes</p>

       <div className={styles.cardservice}>

        <ServicesCard/>
       

</div>
      </section>
    </>
  )
}

export default Services
