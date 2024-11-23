"use client";
import styles from "@/components/testimonals/testimonals.module.css";
import useEmblaCarousel from "embla-carousel-react";
import Testimonialcard from "./testimonial-card/testimonialcard";
import Autoplay from "embla-carousel-autoplay";
import { caveatFont } from "@/font";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import React, { useCallback ,useEffect, useState} from "react";




function Testimonals() {
  const [emblaRef,emblaApi] = useEmblaCarousel({ loop: true },[Autoplay({ delay: 2000 })]);

  const [isEmblaApiReady, setIsEmblaApiReady] = useState(false);

  useEffect(() => {
    if (emblaApi) {
      setIsEmblaApiReady(true); // Set to true once emblaApi is ready
    }
  }, [emblaApi]);

  const handleNextSlide = useCallback(() => {
    if (isEmblaApiReady && emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi, isEmblaApiReady]);

  // Handle the "Previous" slide click
  const handlePrevSlide = useCallback(() => {
    if (isEmblaApiReady && emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi, isEmblaApiReady]);






  return (
    <>
      <section className={styles.testimonals} id='testimonals'>
        <h1 className={caveatFont.className}>
          <span>W</span>hat <span>O</span>ther <span>P</span>eople{" "}
          <span>S</span>ay{" "}
        </h1>

        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.embla_container}>
            <Testimonialcard />
          </div>
       
    


        <FaArrowAltCircleLeft
        size={40}
        color="var(--color-color)"
        onClick={handlePrevSlide}
        className={styles.arrow} // Optional: for styling
      />

      {/* Right Arrow (Next Slide) */}
      <FaArrowAltCircleRight
        size={40}
        color="var(--color-color)"
        onClick={handleNextSlide}
        className={styles.arrow} // Optional: for styling
      />
 </div>
      </section>
    </>
  );
}

export default Testimonals;
