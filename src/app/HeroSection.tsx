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
      <ParallaxBanner className="h-[35rem]">
        <ParallaxBannerLayer translateY={[0, 50]}>
          <Image
            src={heroImage}
            alt=""
            className="object-cover object-top opacity-50 blur-xs"
            fill
            priority
          />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer>
          <Transition
            show
            appear
            enter="duration-1000 ease-in-out"
            enterFrom="scale-95 opacity-0"
            enterTo="scale-100 opacity-100"
            className="container-lg relative flex h-full flex-col justify-center space-y-6 text-primary-50"
          >
            <h1 className="heading-large sm:heading-extralarge text-gold mx-auto max-w-lg text-center font-extrabold uppercase">
              Lebe, Liebe, Tanze!
            </h1>
            <div className="heading-extrasmall mx-auto max-w-2xl space-y-1 text-center text-base-50">
              <p>Herzlich Willkommen</p>
              <p>im TSC Rot-Gold-Casino Nürnberg e.V.</p>
              <p className="pt-4">Dein Verein für Tanzsport in Bayern</p>
            </div>
          </Transition>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </ParallaxProvider>
  </section>
);
