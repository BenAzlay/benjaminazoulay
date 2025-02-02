"use client";

import Image from "next/image";
import { useRef } from "react";
import ProjectBox from "./components/ProjectBox";
import projectData from "./projects/projectData";
import dynamic from "next/dynamic";
import ProjectList from "./projects/ProjectList";
import EmailButton from "./components/EmailButton";

const ScrollWidget = dynamic(() => import("./components/ScrollWidget"), {
  ssr: false,
});

export default function Home() {
  const projectsSectionRef = useRef<HTMLDivElement>(null);

  const introSection = () => (
    <div
      id="intro-section"
      className="min-h-screen flex flex-col items-center justify-center text-center gap-6 bg-gradient-to-br from-red-900 to-gray-800 "
    >
      <div className="relative w-48 h-48">
        <Image
          src="/PFP.jpg"
          alt="PFP"
          fill
          objectFit="cover"
          className="rounded-full transition-opacity duration-500 hover:opacity-0"
        />
        <Image
          src="/PFP_Laser.png"
          alt="PFP Hover"
          fill
          objectFit="cover"
          className="rounded-full absolute top-0 left-0 opacity-0 transition-opacity duration-500 hover:opacity-100"
        />
      </div>
      <div className="justify-items-center space-y-4">
        <h1 className="text-2xl sm:text-5xl font-bold text-white">
          WTF is Benjamin Azoulay?
        </h1>
        <h2 className=" text-gray-200 font-semibold max-w-lg">
          A bird, a plane, a Full-Stack Web3 Engineer? Let's find out!
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-3 sm:gap-8 justify-items-center font-medium sm:text-lg">
        <a
          className="bullet-link"
          href="https://github.com/BenAzlay"
          target="_blank"
        >
          <Image src="/logos/Github.png" alt="Github" width={24} height={24} />
          <span className="label">Github</span>
        </a>
        <a
          className="bullet-link"
          href="https://www.linkedin.com/in/benjaminazoulay1"
          target="_blank"
        >
          <Image
            src="/logos/LinkedIn.png"
            alt="LinkedIn"
            width={24}
            height={24}
          />
          <span className="label">LinkedIn</span>
        </a>
        <a
          className="bullet-link"
          href="https://blog.benjaminazoulay.com/"
          target="_blank"
        >
          <Image
            src="/logos/Hashnode.png"
            alt="Hashnode"
            width={24}
            height={24}
          />{" "}
          <span className="label">Tutorials</span>
        </a>
      </div>
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
            A selection of recent projects I'm proud of
          </h3>
        </div>
        <ProjectList />
      </div>
    );
  };

  const footer = () => (
    <div className="bg-red-900 rounded-t-2xl p-6 text-center space-y-4 z-50 gap-2 flex flex-col items-center sticky">
      <p className="text-xl font-bold -mb-4">Interested in working together?</p>
      <EmailButton />
      <p>Copyright © Benjamin Azoulay 2025</p>
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
