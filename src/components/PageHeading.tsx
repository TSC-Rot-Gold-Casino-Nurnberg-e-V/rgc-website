import { PropsWithChildren } from "react";

export const PageHeading = ({ children }: PropsWithChildren) => (
  <div className="bg-base-900">
    <h1 className="container-lg text-gold hyphens-manual pb-6 pt-2 text-center text-4xl sm:pb-8 sm:pt-4 sm:text-5xl md:pb-10 md:pt-5">
      {children}
    </h1>
  </div>
);
