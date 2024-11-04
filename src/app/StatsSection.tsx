"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      className="flex justify-center bg-base-900"
      aria-label="Vereinsstatistik"
      ref={ref}
    >
      <div className="container-lg grid w-full gap-6 py-12 text-center font-bold max-sm:max-w-sm max-sm:px-6 sm:grid-cols-3 md:justify-between">
        <div
          className="text-gold w-40 max-sm:justify-self-start"
          aria-label="Statistik"
        >
          <div className="text-5xl">
            {">"}
            <CountUp end={inView ? 600 : 0} />
          </div>
          <div className="text-xl sm:text-2xl">Mitglieder</div>
        </div>
        <div
          className="text-gold max-sm:justify-self-end"
          aria-label="Statistik"
        >
          <div className="text-5xl">
            <CountUp end={inView ? 8 : 0} />
          </div>
          <div className="text-xl sm:text-2xl">Formations&shy;teams</div>
        </div>
        <div
          className="text-gold max-sm:justify-self-start"
          aria-label="Statistik"
        >
          <div className="text-5xl">
            <CountUp end={inView ? 27 : 0} />x
          </div>
          <div className="text-xl sm:text-2xl">Bayernpokal&shy;sieger</div>
        </div>
      </div>
    </section>
  );
};
