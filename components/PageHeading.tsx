import { PropsWithChildren } from "react";

export const PageHeading = ({ children }: PropsWithChildren) => (
  <div className="bg-base-950">
    <h1 className="container-lg heading-normal sm:heading-large md:heading-extralarge text-gold hyphens-manual pb-6 pt-2 text-center sm:pb-8 sm:pt-4 md:pb-10 md:pt-5">
      {children}
    </h1>
  </div>
);
