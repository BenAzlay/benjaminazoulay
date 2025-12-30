'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS } from '@/data/constants';

const SolarSystem = () => {
    return (
        <div className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center py-24 my-24 border-y border-white/5 bg-[#050505]/50 perspective-1000">

            {/* Background Glow - Overflow hidden here only to contain the blur */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#CCFF00]/5 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(204,255,0,0.03)_0%,transparent_70%)]" />
            </div>

            {/* Center Sun */}
            <motion.div
                className="relative z-20 flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full bg-black border border-white/10 shadow-[0_0_60px_-15px_rgba(204,255,0,0.3)] backdrop-blur-sm group"
                whileHover={{ scale: 1.1, borderColor: '#CCFF00', boxShadow: '0 0 80px -10px rgba(204,255,0,0.5)' }}
                data-clickable="true"
            >
                <div className="absolute inset-0 rounded-full bg-[#CCFF00] opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl" />
                <span className="font-display font-bold text-white text-xl tracking-widest uppercase">Benjamin</span>
                <span className="text-[10px] font-mono text-[#CCFF00] mt-1 opacity-60">Full-Stack</span>
            </motion.div>

            {/* Orbits */}
            {[1, 2, 3].map((orbitIndex) => {
                // Safe responsive sizing
                let sizeString;
                if (orbitIndex === 1) sizeString = "min(300px, 40vw)";
                else if (orbitIndex === 2) sizeString = "min(500px, 65vw)";
                else sizeString = "min(700px, 85vw)";

                return (
                    <div
                        key={orbitIndex}
                        className="absolute rounded-full border border-white/5"
                        style={{
                            width: sizeString,
                            height: sizeString,
                            zIndex: 10 - orbitIndex
                        }}
                    />
                );
            })}

            {/* Planets (Skills) */}
            {SKILLS.map((skill) => {
                return (
                    <SkillPlanet
                        key={skill.name}
                        skill={skill}
                    />
                );
            })}

        </div>
    );
};

// Skill Planet Sub-component
interface SkillProps {
    skill: typeof SKILLS[0];
}

const SkillPlanet = ({ skill }: SkillProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const duration = skill.speed;
    const orbitIndex = skill.orbit;

    // Replicate exactly the orbit sizing logic so planets align with track
    let sizeString;
    if (orbitIndex === 1) sizeString = "min(300px, 40vw)";
    else if (orbitIndex === 2) sizeString = "min(500px, 65vw)";
    else sizeString = "min(700px, 85vw)";

    return (
        <div
            className="absolute top-1/2 left-1/2 rounded-full flex items-center justify-center pointer-events-none"
            style={{
                width: sizeString,
                height: sizeString,
                animation: `orbit ${duration}s linear infinite`,
                animationPlayState: isHovered ? 'paused' : 'running',
                zIndex: isHovered ? 100 : 50 // High z-index to ensure visibility
            }}
        >
            {/* Planet Container - rotates with parent */}
            <div
                className="absolute top-0 left-1/2 z-30 pointer-events-auto"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    animation: `counter-orbit ${duration}s linear infinite`,
                    animationPlayState: isHovered ? 'paused' : 'running',
                    zIndex: isHovered ? 100 : 30
                }}
            >
                {/* Hit Area & Visuals */}
                <div className="relative group cursor-pointer flex flex-col items-center justify-center p-6 -m-6" data-clickable="true">

                    {/* The Planet Dot - Scales massively on hover */}
                    <motion.div
                        animate={{
                            scale: isHovered ? 2.5 : 1, // Massive scale for "close up" feel
                            backgroundColor: isHovered ? '#CCFF00' : '#18181b',
                            borderColor: isHovered ? '#CCFF00' : '#3f3f46',
                            boxShadow: isHovered ? '0 0 50px rgba(204,255,0,0.6)' : '0 0 10px rgba(0,0,0,0.5)'
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="w-6 h-6 md:w-8 md:h-8 bg-zinc-900 rounded-full border border-zinc-700 flex items-center justify-center relative z-10 transition-colors duration-200 shadow-lg"
                    >
                        {/* Icon also needs to adapt color */}
                        <skill.icon size={14} className={isHovered ? "text-black" : "text-zinc-500"} />
                    </motion.div>

                    {/* Orbit Trace / Glow on hover */}
                    <div className={`absolute inset-0 bg-[#CCFF00] rounded-full blur-xl transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-30' : 'opacity-0'}`} />

                    {/* Floating Label (Tooltip) - Enhanced */}
                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 24 }} // Pushed down a bit more
                                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                                className="absolute top-0 z-[200] pointer-events-none"
                            >
                                <div className="bg-zinc-950/90 backdrop-blur-md border border-[#CCFF00]/40 px-6 py-4 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] flex flex-col items-center min-w-[160px] transform translate-y-4">
                                    <span className="font-display font-bold text-xl text-white uppercase tracking-widest text-center whitespace-nowrap">{skill.name}</span>
                                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent my-2" />
                                    <span className="text-[10px] text-[#CCFF00] font-mono tracking-[0.2em] uppercase">{skill.level || "Expert"}</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </div>
    );
};

export default SolarSystem;
