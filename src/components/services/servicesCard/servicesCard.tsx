'use client'
import React, { useRef } from 'react'
import styles from '@/components/services/servicesCard/serviceCard.module.css'
import { interFont } from '@/font'
import { servicesCards } from '@/constant/servicesCards'
import Image from 'next/image'
import {motion,useMotionValue,useTransform} from 'framer-motion'

function ServicesCard() {
  return (
    <>
    {servicesCards.map((item,index)=>{
        return(
          
          <Card key={index} item={item}/>
    )})}
      
    </>
  )
}

//card component:

function Card({item}:{item:{src:string, title:string, description:string}}){

  const cardRef = useRef<HTMLDivElement | null>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY,[-100,100],[30,-30])
  const rotateY = useTransform(mouseX,[-100,100],[-20,20])

const handleMouseMove = (e:React.MouseEvent)=>{
if(!cardRef.current ) return;
  const rect = cardRef.current.getBoundingClientRect()
  const x = e.clientX  - rect.left - rect.width / 2
  const y = e.clientY  - rect.top - rect.height / 2
  
  mouseX.set(x)
  mouseY.set(y)
}



  return(
    <motion.div className={`${styles.card1} ${interFont.className}`} 
    ref={cardRef}
    style={{perspective:1000,rotateX:rotateX,rotateY:rotateY}}
    onMouseMove={handleMouseMove}>
    <div className={styles.card1img}>
    <Image src={item.src} 
    alt='image' 
    width={60} 
    height={60} />
    </div>

    <h2 className={interFont.className}>{item.title}</h2>

    <p> {item.description} </p>
</motion.div>

  )
}








    export default ServicesCard
