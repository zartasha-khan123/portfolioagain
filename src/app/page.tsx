import Header from "@/components/header/page";
import Herosection from '@/components/herosection/page'
import Testimonals from "@/components/testimonals/Testimonals";
import About from "@/components/about/about";
import ContactUs from "@/components/contact/contact";
import AboutImageDiv from "@/components/about/AboutImageDiv/aboutbottom";
import Portfolio from "@/components/portfolio/portfolio";
import Services from "@/components/services/services";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>

    <Header/>
    <Herosection/>
    <About/>
    <AboutImageDiv/>
    <Portfolio/>
    <Services/>
    <Testimonals/>
    <ContactUs/>
    <Footer/>
    </>
  );
}
