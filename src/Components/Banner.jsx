// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function App() {
    return (
        <div className='my-16 '>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}

                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="h-[600px] overflow-hidden font-inter  rounded-2xl bg-[url(https://i.ibb.co/CbLrjtP/1.jpg)] bg-no-repeat bg-center bg-cover">
                        <div className="size-full bg-[#0000000b] p-14 lg:p-28 flex items-center">
                            <div className="px-9 py-10 rounded-2xl backdrop-blur-sm max-w-[500px] shadow-xl">
                                <h2 className="text-white text-4xl font-bold drop-shadow-lg">
                                    Affordable Price For Car Servicing
                                </h2>
                                <p className="text-white mt-6 drop-shadow-lg hidden md:block">
                                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                                </p>
                                <div className='flex gap-4 mt-7'>
                                    <button className="btn btn-error text-white bg-[#FF3811]">Discover More</button>
                                    <button className="btn btn-outline text-white">Latest Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[600px] overflow-hidden rounded-2xl bg-[url(https://i.ibb.co/wBCLBKx/2.jpg)] bg-no-repeat bg-center bg-cover">
                        <div className="size-full bg-[#0000000b] p-14 lg:p-28 flex items-center">
                            <div className="px-9 py-10 rounded-2xl backdrop-blur-sm max-w-[500px] shadow-xl">
                                <h2 className="text-white text-4xl font-bold drop-shadow-lg">
                                    Affordable Price For Car Servicing
                                </h2>
                                <p className="text-white mt-6 drop-shadow-lg hidden md:block">
                                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                                </p>
                                <div className='flex gap-4 mt-7'>
                                    <button className="btn btn-error text-white bg-[#FF3811]">Discover More</button>
                                    <button className="btn btn-outline text-white">Latest Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-[600px] overflow-hidden rounded-2xl bg-[url(https://i.ibb.co/KmNNqP4/3.jpg)] bg-no-repeat bg-center bg-cover">
                        <div className="size-full bg-[#0000000b] p-14 lg:p-28 flex items-center">
                            <div className="px-9 py-10 rounded-2xl backdrop-blur-sm max-w-[500px] shadow-xl">
                                <h2 className="text-white text-4xl font-bold drop-shadow-lg">
                                    Affordable Price For Car Servicing
                                </h2>
                                <p className="text-white mt-6 drop-shadow-lg hidden md:block">
                                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                                </p>
                                <div className='flex gap-4 mt-7'>
                                    <button className="btn btn-error text-white bg-[#FF3811]">Discover More</button>
                                    <button className="btn btn-outline text-white">Latest Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-[600px] overflow-hidden rounded-2xl bg-[url(https://i.ibb.co/4P0gRg7/4.jpg)] bg-no-repeat bg-center bg-cover">
                        <div className="size-full bg-[#0000000b] p-14 lg:p-28 flex items-center">
                            <div className="px-9 py-10 rounded-2xl backdrop-blur-sm max-w-[500px] shadow-xl">
                                <h2 className="text-white text-4xl font-bold drop-shadow-lg">
                                    Affordable Price For Car Servicing
                                </h2>
                                <p className="text-white mt-6 drop-shadow-lg hidden md:block">
                                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                                </p>
                                <div className='flex gap-4 mt-7'>
                                    <button className="btn btn-error text-white bg-[#FF3811]">Discover More</button>
                                    <button className="btn btn-outline text-white">Latest Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-[600px] overflow-hidden rounded-2xl bg-[url(https://i.ibb.co/0CgNP53/5.jpg)] bg-no-repeat bg-center bg-cover">
                        <div className="size-full bg-[#0000000b] p-14 lg:p-28 flex items-center">
                            <div className="px-9 py-10 rounded-2xl backdrop-blur-sm max-w-[500px] shadow-xl">
                                <h2 className="text-white text-4xl font-bold drop-shadow-lg">
                                    Affordable Price For Car Servicing
                                </h2>
                                <p className="text-white mt-6 drop-shadow-lg hidden md:block">
                                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                                </p>
                                <div className='flex gap-4 mt-7'>
                                    <button className="btn btn-error text-white bg-[#FF3811]">Discover More</button>
                                    <button className="btn btn-outline text-white">Latest Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-[600px] overflow-hidden rounded-2xl bg-[url(https://i.ibb.co/3v0R8JR/6.jpg)] bg-no-repeat bg-center bg-cover">
                        <div className="size-full bg-[#0000000b] p-14 lg:p-28 flex items-center">
                            <div className="px-9 py-10 rounded-2xl backdrop-blur-sm max-w-[500px] shadow-xl">
                                <h2 className="text-white text-4xl font-bold drop-shadow-lg">
                                    Affordable Price For Car Servicing
                                </h2>
                                <p className="text-white mt-6 drop-shadow-lg hidden md:block">
                                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                                </p>
                                <div className='flex gap-4 mt-7'>
                                    <button className="btn btn-error text-white bg-[#FF3811]">Discover More</button>
                                    <button className="btn btn-outline text-white">Latest Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
