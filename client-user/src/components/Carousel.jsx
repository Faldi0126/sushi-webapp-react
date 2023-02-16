import React, { useState } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Index() {
  return (
    <div className="2xl:mx-auto 2xl:container flex flex-col justify-center items-center py-10 h-screen">
      <h2 className="m-5 py-7 text-4xl font-semibold text-grey-600">
        Sample of Our Food
      </h2>

      <div className="2xl:px-20 px-6 py-12 w-full lg:w-4/5">
        {/* Carousel for Medium and Large-Sized Screen */}
        <CarouselProvider
          className="relative hidden sm:block"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={3}
          visibleSlides={1}
          step={1}
          infinite={true}
          currentSlide={1}
        >
          <div className="js-flickity flex justify-center items-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <Slider className="carousel__sliderLarge">
              <Slide className="carousel__inner-slideLarge" index={0}>
                <div className="gallery-cell w-full h-full">
                  <div className="relative w-full h-full lg:block hidden">
                    <img
                      src="https://images.unsplash.com/photo-1570780775848-bc1897788ce0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                      alt="sitting area"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                      <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        Fresh Sashimi
                      </h1>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide className="carousel__inner-slideLarge" index={1}>
                <div className="gallery-cell w-full h-full">
                  <div className="relative w-full h-full lg:block hidden">
                    <img
                      src="https://images.unsplash.com/photo-1562158147-f8d6fbcd76f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="chairs"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                      <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        Fresh Sushi
                      </h1>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide className="carousel__inner-slideLarge" index={2}>
                <div className="gallery-cell w-full h-full">
                  <div className="relative w-full h-full lg:block hidden">
                    <img
                      src="https://images.unsplash.com/photo-1607246749106-0a2b287f7245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="chair"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                      <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        Good Sushi
                      </h1>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide className="carousel__inner-slideLarge" index={2}>
                <div className="gallery-cell w-full h-full">
                  <div className="relative w-full h-full lg:block hidden">
                    <img
                      src="https://images.unsplash.com/photo-1596463059283-da257325bab8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="chair"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                      <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        Just Some Good Food
                      </h1>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide className="carousel__inner-slideLarge" index={2}>
                <div className="gallery-cell w-full h-full">
                  <div className="relative w-full h-full lg:block hidden">
                    <img
                      src="https://images.unsplash.com/photo-1627925506511-9340770f5b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="chair"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                      <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        Idk What to Say Anymore
                      </h1>
                    </div>
                  </div>
                </div>
              </Slide>
            </Slider>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>

      <style>
        {`
                    .gallery-cell {
                        height: 386px;
                        padding-right:15px;
                    }
                    @media (min-width: 300px) and (max-width: 420px) {
                        .gallery-cell {
                            height: 286px !important;
                            
                        }
                    }
                    
                    @media (max-width: 640px) {
                        .gallery-cell {
                            padding-right:0;
                        }
                    }

                    .carousel__sliderLarge {
                        padding-left: 20%;
                        padding-right: 20%;
                    }

                    /* gives us the illusion of spaces between the slides */
                    .carousel__inner-slideLarge {
                        width: calc(100% - 20px);
                        height: calc(100% - 20px);
                        left: 10px;
                        top: 10px;
                        
                    }
                `}
      </style>
    </div>
  );
}
