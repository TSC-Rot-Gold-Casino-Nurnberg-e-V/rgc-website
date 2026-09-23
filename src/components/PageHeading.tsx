import { PropsWithChildren } from "react";

export const PageHeading = ({ children }: PropsWithChildren) => (
  <div className="bg-base-900">
    <h1 className="container-lg text-gold pt-2 pb-6 text-center text-4xl font-bold hyphens-manual sm:pt-4 sm:pb-8 sm:text-5xl md:pt-5 md:pb-10">
      {children}
    </h1>
  </div>
);
