import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Banner1 from '../../../assets/carrusel/Banner1.jpg'
import Banner2 from '../../../assets/carrusel/Banner2.jpg'
import Banner3 from '../../../assets/carrusel/Banner3.jpg'
import Banner4 from '../../../assets/carrusel/Banner4.jpg'
import Banner5 from '../../../assets/carrusel/Banner5.jpg'
import { NewArrivals_Img } from '../NewArrival.styled';
const Carousel  = () => {
    return ( 
        <CarouselProvider
        interval={5000}
        touchEnabled={true}
        isPlaying={true}
        naturalSlideWidth={100}
        naturalSlideHeight={40}
        totalSlides={5} >
            <Slider>
                <Slide index={0}><NewArrivals_Img src={Banner1} alt='banner1'/></Slide>
                <Slide index={1}><NewArrivals_Img src={Banner2} alt='banner2'/></Slide>
                <Slide index={2}><NewArrivals_Img src={Banner3} alt='banner3'/></Slide>
                <Slide index={3}><NewArrivals_Img src={Banner4} alt='Banner4'/></Slide>
                <Slide index={4}><NewArrivals_Img src={Banner5} alt='Banner5'/></Slide>
            </Slider>
        </CarouselProvider>
        );
}

export default Carousel 