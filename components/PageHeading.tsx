import { PropsWithChildren } from "react";

export const PageHeading = ({ children }: PropsWithChildren) => (
  <div className="bg-base-950">
    <h1 className="default-padding heading-normal sm:heading-large md:heading-extralarge primary-gradient hyphens-manual bg-clip-text pb-6 pt-2 text-center text-transparent sm:pb-8 sm:pt-4 md:pb-10 md:pt-5">
      {children}
    </h1>
  </div>
);
