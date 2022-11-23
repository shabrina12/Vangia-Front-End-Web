import React from 'react';
import { profile1, profile2, profile3, profile4, profile5, profile6 } from '../../images';
import { Navigation, Pagination, A11y} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './testimonials.css';

const Testimonials = () => {
  return (
    <section className='testimonials'>
        <h1>Testimonials</h1>
        <p>What our loved customers say about our amazing products.</p>
        <Swiper className='swiper'
            breakpoints={{
                // width >= 300
                300: {
                    slidesPerView: 1,
                    spaceBetween: 70
                },
                // width >= 600
                600: {
                    slidesPerView: 1,
                    spaceBetween: 100
                },
                // width >= 1000
                1000: {
                    slidesPerView: 2,
                    spaceBetween: 130
                }
            }}
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={120}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >

            <SwiperSlide>
                <div className='slide-col'>
                    <img src={profile1} alt='profile' />
                    <h4>Grace Chavez</h4>
                    <p>“ I found Vangia just by chance and it has been the best thing to happen to me in a long time. I'm finally able to get the products I need. “</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slide-col'>
                    <img src={profile3} alt='profile' />
                    <h4>Timothee</h4>
                    <p>“ I'm not sure what to say but Vangia is the best product site I've ever come across. It's so easy to search for products. “</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slide-col'>
                    <img src={profile2} alt='profile' />
                    <h4>Hamza McMahon</h4>
                    <p>“ I found Vangia just by chance and it has been the best thing to happen to me in a long time. I'm finally able to get the products I need. “</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slide-col'>
                    <img src={profile4} alt='profile' />
                    <h4>George W.</h4>
                    <p>“ I'm not sure what to say but Vangia is the best product site I've ever come across. It's so easy to search for products. “</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slide-col'>
                    <img src={profile5} alt='profile' />
                    <h4>Nana</h4>
                    <p>“ I found Vangia just by chance and it has been the best thing to happen to me in a long time. I'm finally able to get the products I need. “</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slide-col'>
                    <img src={profile6} alt='profile' />
                    <h4>Matthew Gubler</h4>
                    <p>“ I'm not sure what to say but Vangia is the best product site I've ever come across. It's so easy to search for products  “</p>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default Testimonials