import React, { useContext } from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';

import {EffectFade, Autoplay} from 'swiper';
import Img1 from '../assets/img/heroSlider/1.jpg';
import Img2 from '../assets/img/heroSlider/2.jpg';
import Img3 from '../assets/img/heroSlider/3.jpg';
import { RoomContext } from '../context/RoomContext';

const slides = [
  {
    title: 'Your Luxury Hotel For Vacation',
    bg: Img1,
    btnText: 'See our rooms'
  },
  {
    title: 'Your Luxury Hotel For Vacation',
    bg: Img2,
    btnText: 'See our rooms'
  },
  {
    title: 'Your Luxury Hotel For Vacation',
    bg: Img3,
    btnText: 'See our rooms'
  }
]



const HeroSlider = () => {
  const {handleScroll} = useContext(RoomContext);


  
   return (
    <Swiper modules={[EffectFade, Autoplay]}
    effect={'fade'}
    loop={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false
    }}
     className='heroSlider h-[600px] lg:h-[860px] '>
      {slides.map((slide, index)=>{
        const {title, bg, btnText} = slide;
        return <SwiperSlide className='h-full relative justify-center items-center flex'
        key={index}
        >
        <div className='z-20 text-white text-center'>
          <div className='uppercase font-tertiary tracking-[6px] mb-5'>Just enjoy and Relax</div>
          <h1 className='text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6'>{title}</h1>
          <button className='btn btn-lg btn-primary mx-auto'
          onClick={(e)=> handleScroll(e)}
          >
          {btnText}
          </button>
        </div>
        <div className='absolute top-0 w-full h-full'>
          <img src={bg} alt="" className='object-cover h-full w-full'/>
        </div>
        <div className='absolute w-full h-full bg-black/70'></div>
        </SwiperSlide>
      })}
    </Swiper>
    )
};

export default HeroSlider;
