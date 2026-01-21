"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import ProjectList from "./projects/ProjectList";
import EmailButton from "./components/EmailButton";
import useIsMobile from "./useIsMobile";
import SolarSystem from "./components/SolarSystem";

const ScrollWidget = dynamic(() => import("./components/ScrollWidget"), {
  ssr: false,
});

export default function Home() {
  const isMobile = useIsMobile();
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();

  const introSection = () => (
    <div
      id="intro-section"
      className="min-h-screen px-4 flex flex-col items-center justify-center text-center gap-6 bg-gradient-to-br from-red-900 to-gray-800 "
    >
      <SolarSystem />
      <ScrollWidget projectsSectionRef={projectsSectionRef} />
    </div>
  );

  const projectsSection = () => {
    return (
      <div
        ref={projectsSectionRef}
        className="py-6 sm:py-12 px-1 sm:px-6 md:px-12 lg:p-16 text-center space-y-16 bg-gray-800"
      >
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-white">Portfolio</h2>
          <h3 className="text-gray-300 font-semibold">
            A selection of recent projects I&lsquo;m proud of
          </h3>
          {!isMobile ? <h6 className="text-gray-400 font-light">👀 Pro tip: you can reorder them!</h6> : null}
        </div>
        <ProjectList />
      </div>
    );
  };

  const footer = () => (
    <div className="bg-red-900 rounded-t-2xl p-6 text-center space-y-4 z-50 gap-2 flex flex-col items-center sticky">
      <p className="text-xl font-bold -mb-4">Interested in working together?</p>
      <EmailButton />
      <p>Copyright © Benjamin Azoulay {currentYear}</p>
    </div>
  );

  return (
    <main className="min-h-screen text-white bg-gray-800">
      {introSection()}
      {projectsSection()}
      {footer()}
    </main>
  );
}
