"use client";

import { Transition } from "@headlessui/react";
import Image, { StaticImageData } from "next/image";
import rgcWebsiteHeader1 from "../../public/hero/hero_1.png";
import rgcWebsiteHeader2 from "../../public/hero/hero_2.png";
import rgcWebsiteHeader3 from "../../public/hero/hero_3.png";
import { useEffect, useRef } from "react";

const random = Math.random();
let heroImage: StaticImageData;
if (random < 0.33) {
  heroImage = rgcWebsiteHeader1;
} else if (random < 0.66) {
  heroImage = rgcWebsiteHeader2;
} else {
  heroImage = rgcWebsiteHeader3;
}

export const HeroSection = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    function handleScroll() {
      if (imageRef.current) {
        const scroll = window.scrollY;
        imageRef.current.style.transform = `translateY(${scroll * 0.45}px)`;
      }
    }
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="h-[30rem] bg-base-900 lg:h-[70dvh]">
      <div className="absolute inset-x-0 top-0 translate-y-16 max-lg:h-[50rem] lg:bottom-0">
        <Image
          ref={imageRef}
          src={heroImage}
          alt=""
          className="object-cover object-top opacity-80 blur-xs will-change-transform"
          fill
          priority
        />
      </div>
      <Transition
        show
        appear
        enter="duration-1000 ease-in-out"
        enterFrom="scale-95 opacity-0"
        enterTo="scale-100 opacity-100"
        className="container-lg relative flex h-full flex-col justify-center space-y-6 text-primary-50"
      >
        <h1 className="text-gold mx-auto max-w-lg text-center text-5xl font-bold uppercase sm:text-6xl">
          Lebe, Liebe, Tanze!
        </h1>
        <div className="mx-auto max-w-2xl space-y-1 text-center text-2xl text-base-50 sm:text-3xl">
          <p className="font-bold">Herzlich Willkommen</p>
          <p className="font-bold">im TSC Rot-Gold-Casino Nürnberg e.V.</p>
          <p className="pt-4 font-semibold">
            Dein Verein für Tanzsport in Bayern
          </p>
        </div>
      </Transition>
    </section>
  );
};
