import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useIsMobile from "../useIsMobile";

interface PlanetType {
  name: string;
  speed: number;
  image: string;
  link: string;
}

interface PlanetProps {
  planet: PlanetType;
  index: number;
}

const getOrbitSize = (index: number) => {
  // Keep this as the single source of truth so orbits + planets always align.
  if (index === 0) return "min(300px, 40vw)";
  if (index === 1) return "min(500px, 65vw)";
  return "min(700px, 85vw)";
};

const planets: PlanetType[] = [
  {
    name: "Github",
    speed: 20,
    image: "/logos/Github.png",
    link: "https://github.com/BenAzlay",
  },
  {
    name: "LinkedIn",
    speed: 25,
    image: "/logos/LinkedIn.png",
    link: "https://www.linkedin.com/in/benjaminazoulay1",
  },
  {
    name: "Hashnode",
    speed: 30,
    image: "/logos/Hashnode.png",
    link: "https://blog.benjaminazoulay.com/",
  },
];

const Planet = ({ planet, index }: PlanetProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();
  const duration = planet.speed;

  const sizeString = getOrbitSize(index);

  return (
    <div
      className="absolute top-1/2 left-1/2 rounded-full flex items-center justify-center pointer-events-none"
      style={{
        width: sizeString,
        height: sizeString,
        animation: `orbit ${duration}s linear infinite`,
        animationPlayState: isHovered ? "paused" : "running",
        zIndex: isHovered ? 100 : 50, // High z-index to ensure visibility
        cursor: "pointer",
      }}
      onClick={() => window.open(planet.link, "_blank")}
    >
      {/* Planet Container - rotates with parent */}
      <div
        className="absolute top-0 left-1/2 z-30 pointer-events-auto"
        onMouseEnter={() => setIsHovered(!isMobile)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          animation: `counter-orbit ${duration}s linear infinite`,
          animationPlayState: isHovered && !isMobile ? "paused" : "running",
          zIndex: isHovered ? 100 : 30,
        }}
      >
        {/* Planet Dot */}
        <motion.div
          animate={{
            scale: isHovered ? 2.5 : 1, // Massive scale for "close up" feel
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-6 h-6 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-transparent md:bg-black/50 md:border border-white/20 hover:border-red-800/40"
        >
          <Image src={planet.image} alt={planet.name} width={20} height={20} />
        </motion.div>
      </div>
    </div>
  );
};

const SolarSystem = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const sunRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sunRef.current) return;

    const sunRect = sunRef.current.getBoundingClientRect();
    const sunCenterX = sunRect.left + sunRect.width / 2;
    const sunCenterY = sunRect.top + sunRect.height / 2;

    const deltaX = e.clientX - sunCenterX;
    const deltaY = e.clientY - sunCenterY;

    // Calculate rotation angles with proper scaling
    const maxRotation = 8; // degrees - reduced for subtle effect
    // Normalize based on viewport size for consistent behavior
    const normalizedX = deltaX / (window.innerWidth / 2);
    const normalizedY = deltaY / (window.innerHeight / 2);

    // Clamp values to prevent over-rotation
    const clamp = (value: number, min: number, max: number) =>
      Math.min(Math.max(value, min), max);

    // rotateY controls left/right tilt, rotateX controls up/down tilt
    const rotateY = clamp(normalizedX * maxRotation, -maxRotation, maxRotation);
    const rotateX = clamp(
      -normalizedY * maxRotation,
      -maxRotation,
      maxRotation
    );

    setRotation({ x: rotateX, y: rotateY });
  };

  return (
    <div
      className="absolute inset-0 w-full h-screen flex items-center justify-center"
      onMouseMove={handleMouseMove}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        ref={sunRef}
        className="relative flex items-center justify-center w-full h-full"
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        style={{
          transformStyle: "preserve-3d",
          maxWidth: "min(700px, 90vw)",
          maxHeight: "min(700px, 90vh)"
        }}
      >
        {/* Center Sun */}
        <div
          className="relative z-20 flex flex-col items-center justify-center w-24 h-24 md:w-40 md:h-40 rounded-full"
          data-clickable="true"
        >
          <Image
            src="/PFP.jpg"
            alt="PFP"
            fill
            objectFit="cover"
            className="rounded-full"
          />
        </div>

        {/* Orbits */}
        {Array.from({ length: planets.length }).map((_, index) => {
          const sizeString = getOrbitSize(index);

          return (
            <div
              key={index}
              className="absolute rounded-full border border-white/20"
              style={{
                width: sizeString,
                height: sizeString,
                zIndex: 10 - index,
              }}
            />
          );
        })}

        {planets.map((planet, index) => {
          return <Planet key={index} planet={planet} index={index} />;
        })}
      </motion.div>
    </div>
  );
};

export default SolarSystem;
