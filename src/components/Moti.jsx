import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Moti = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="moti"
      >
        <SwiperSlide>
          <div className=" flex flex-col gap-3 text-white justify-center items-center w-[80%] mx-auto text-center h-full">
            <span className=" text-xl flex gap-1 ">
              <RiDoubleQuotesL />
              <p className="">
                Success is not final, failure is not fatal: it is the courage to
                continue that counts
              </p>
              <RiDoubleQuotesR />
            </span>
            <span className=" italic">- Winston Churchill -</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col gap-3 text-white justify-center items-center w-[80%] mx-auto text-center h-full">
            <span className=" text-xl flex gap-1 ">
              <RiDoubleQuotesL />
              <p className="">
                The greatest glory in living lies not in never falling, but in
                rising every time we fall.
              </p>
              <RiDoubleQuotesR />
            </span>
            <span className=" italic">- Nelson Mandela -</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col gap-3 text-white justify-center items-center w-[80%] mx-auto text-center h-full">
            <span className=" text-xl flex gap-1 ">
              <RiDoubleQuotesL />
              <p className="">Believe you can and you're halfway there.</p>
              <RiDoubleQuotesR />
            </span>
            <span className=" italic">- Theodore Roosevelt -</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col gap-3 text-white justify-center items-center w-[80%] mx-auto text-center h-full">
            <span className=" text-xl flex gap-1 ">
              <RiDoubleQuotesL />
              <p className="">You miss 100% of the shots you don't take.</p>
              <RiDoubleQuotesR />
            </span>
            <span className=" italic">- Wayne Gretzky -</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col gap-3 text-white justify-center items-center w-[80%] mx-auto text-center h-full">
            <span className=" text-xl flex gap-1 ">
              <RiDoubleQuotesL />
              <p className="">
                The future belongs to those who believe in the beauty of their
                dreams.
              </p>
              <RiDoubleQuotesR />
            </span>
            <span className=" italic">- Eleanor Roosevelt -</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col gap-3 text-white justify-center items-center w-[80%] mx-auto text-center h-full">
            <span className=" text-xl flex gap-1 ">
              <RiDoubleQuotesL />
              <p className="">
                You are never too old to set another goal or to dream a new
                dream.
              </p>
              <RiDoubleQuotesR />
            </span>
            <span className=" italic">- C.S. Lewis -</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col gap-3 text-white justify-center items-center w-[80%] mx-auto text-center h-full">
            <span className=" text-xl flex gap-1 ">
              <RiDoubleQuotesL />
              <p className="">
                I have not failed. I've just found 10,000 ways that won't work.
              </p>
              <RiDoubleQuotesR />
            </span>
            <span className=" italic">- Thomas Edison -</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Moti;
