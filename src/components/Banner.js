import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GrahamNorton from '../images/graham-norton.jpeg'
import AmazonMusic from '../images/amazon-music.jpeg'
import primeVideo from '../images/prime-video.jpeg'
import Image from 'next/image';


const Banner = () => {
    return (
        <div className='relative'>
            <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
            <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={5000}>
                <div>
                    <img loading='lazy' src={GrahamNorton.src} alt='' />
                </div>
                <div>
                   <img loading='lazy' src={primeVideo.src} alt='' />
                </div>
                <div>
                    <Image loading='lazy' src={AmazonMusic} alt='' />
                </div>
            </Carousel>
        </div>
    )
}

export default Banner
