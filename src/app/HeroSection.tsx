"use client";

import { Transition } from "@headlessui/react";
import {
  ParallaxBanner,
  ParallaxBannerLayer,
  ParallaxProvider,
} from "react-scroll-parallax";
import Image, { StaticImageData } from "next/image";
import rgcWebsiteHeader1 from "../../public/hero/hero_1.png";
import rgcWebsiteHeader2 from "../../public/hero/hero_2.png";
import rgcWebsiteHeader3 from "../../public/hero/hero_3.png";

const random = Math.random();
let heroImage: StaticImageData;
if (random < 0.33) {
  heroImage = rgcWebsiteHeader1;
} else if (random < 0.66) {
  heroImage = rgcWebsiteHeader2;
} else {
  heroImage = rgcWebsiteHeader3;
}

export const HeroSection = () => (
  <section className="bg-base-900">
    <ParallaxProvider>
      <ParallaxBanner className="h-[30rem] lg:h-[70svh]">
        <ParallaxBannerLayer speed={-30} className="h-[60rem] lg:h-[110svh]">
          <Image
            src={heroImage}
            alt=""
            className="translate-y-[15rem] object-cover object-top opacity-80 blur-xs"
            fill
            priority
          />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="bg-gradient-to-b from-transparent from-80% to-base-900">
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
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </ParallaxProvider>
  </section>
);
