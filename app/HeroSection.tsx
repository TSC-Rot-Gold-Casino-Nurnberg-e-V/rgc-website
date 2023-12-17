"use client";

import { PropsWithChildren } from "react";
import { Transition } from "@headlessui/react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export const HeroSection = ({ children }: PropsWithChildren) => (
  <section className="h-[100dvh] bg-base-900">
    <Transition
      show
      appear
      enter="duration-1000 ease-in-out"
      enterFrom="scale-95 opacity-0"
      enterTo="scale-100 opacity-100"
      className="container-lg relative z-10 flex h-full flex-col justify-center space-y-6 text-primary-50"
    >
      <h1 className="heading-large sm:heading-extralarge text-gold mx-auto max-w-lg text-center font-extrabold uppercase">
        Lebe, Liebe, Tanze!
      </h1>
      <div className="heading-extrasmall mx-auto max-w-2xl space-y-1 text-center text-base-50">
        <p>Herzlich Willkommen</p>
        <p>im TSC Rot-Gold-Casino Nürnberg e.V.</p>
        <p className="pt-4">Dein Verein für Tanzsport in Nürnberg / Fürth</p>
      </div>
    </Transition>
    <ParallaxProvider>
      <Parallax speed={-50} className="absolute inset-0 opacity-50 blur-xs">
        {children}
      </Parallax>
    </ParallaxProvider>
  </section>
);
