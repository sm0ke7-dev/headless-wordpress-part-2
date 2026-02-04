"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

const useCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index) => () => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const dotClassName = (index) => {
    return clsx("relative mx-[3px] inline-block size-2 rounded-full", {
      "bg-black": current === index + 1,
      "bg-neutral-darker/40": current !== index + 1,
    });
  };

  return { api, setApi, handleDotClick, dotClassName };
};

export function Gallery18({ data }) {
  const heading = data?.gallery_heading || "Our space";
  const description = data?.gallery_description || "Treatment rooms, equipment, and the people who know how to use them";

  const defaultImages = [
    { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Gallery image 1" },
    { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Gallery image 2" },
    { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Gallery image 3" },
    { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Gallery image 4" },
    { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Gallery image 5" },
    { url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg", alt: "Gallery image 6" }
  ];

  const images = data?.gallery_images && data.gallery_images.length > 0 ? data.gallery_images : defaultImages;

  const carouselState = useCarousel();
  return (
    <section id="relume">
      <div className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md">
              {description}
            </p>
          </div>
          <Carousel
            setApi={carouselState.setApi}
            opts={{ loop: true, align: "start" }}
          >
            <div className="relative">
              <CarouselContent className="ml-0">
                {images.map((image, index) => (
                  <CarouselItem key={index} className="basis-1/2 px-3 md:basis-1/3 md:px-4">
                    <div className="w-full">
                      <img
                        src={image.url || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"}
                        alt={image.alt || `Gallery image ${index + 1}`}
                        className="aspect-square size-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex md:size-12 lg:size-14" />
              <CarouselNext className="hidden md:flex md:size-12 lg:size-14" />
            </div>
            <div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={carouselState.handleDotClick(index)}
                  className={carouselState.dotClassName(index)}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
