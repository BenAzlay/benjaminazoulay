import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import useIsMobile from '../useIsMobile';

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
        link: "https://github.com/BenAzlay"
    }, {
        name: "LinkedIn",
        speed: 25,
        image: "/logos/LinkedIn.png",
        link: "https://www.linkedin.com/in/benjaminazoulay1"
    }, {
        name: "Hashnode",
        speed: 30,
        image: "/logos/Hashnode.png",
        link: "https://blog.benjaminazoulay.com/"
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
                animationPlayState: isHovered ? 'paused' : 'running',
                zIndex: isHovered ? 100 : 50, // High z-index to ensure visibility
                cursor: 'pointer'
            }}
            onClick={() => window.open(planet.link, '_blank')}
        >
            {/* Planet Container - rotates with parent */}
            <div
                className="absolute top-0 left-1/2 z-30 pointer-events-auto"
                onMouseEnter={() => setIsHovered(!isMobile)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    animation: `counter-orbit ${duration}s linear infinite`,
                    animationPlayState: isHovered && !isMobile ? 'paused' : 'running',
                    zIndex: isHovered ? 100 : 30
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
    return (
        <div className="relative w-full h-full flex items-center justify-center py-24 my-24 perspective-1000">
            {/* Center Sun */}
            <motion.div
                className="relative z-20 flex flex-col items-center justify-center w-24 h-24 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-red-900 to-gray-800 border border-red-800/40 hover:border-red-800 shadow-[0_0_60px_-15px_rgba(239,68,68,0.3)] backdrop-blur-sm group"
                whileHover={{ scale: 1.1, boxShadow: '0 0 80px -10px rgba(255, 51, 0, 0.5)' }}
                data-clickable="true"
            >
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
            </motion.div>

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
                            zIndex: 10 - index
                        }}
                    />
                );
            })}

            {planets.map((planet, index) => {
                return (
                    <Planet
                        key={index}
                        planet={planet}
                        index={index}
                    />
                );
            })}

        </div>
    );
};

export default SolarSystem;
