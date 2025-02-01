import Image from "next/image";
import { CSSProperties, FC } from "react";
import { ProjectContentProps } from "../projects/projectData";
import { motion } from "framer-motion";

interface ProjectBoxProps {
  title: string;
  image: string;
  color: string;
  Content: FC<ProjectContentProps>;
}

const ProjectBox: FC<ProjectBoxProps> = ({ title, image, color, Content }) => {
  return (
    <motion.div
      initial={{ marginTop: 0, marginBottom: 0 }}
      whileHover={{ marginTop: 48, marginBottom: 48 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative group dark-glass rounded-lg p-6 text-center dark-glass border-2 pb-16"
      style={{ borderColor: color }}
    >
      {/* Logo Container */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-12 flex items-center justify-center shadow-md border-2"
        style={{
          width: 96,
          height: 96,
          borderRadius: "48px",
          borderColor: color,
        }}
      >
        <Image
          src={image}
          alt={`${title} logo`}
          width={96}
          height={96}
          className="rounded-full"
        />
      </div>

      {/* Box Content */}
      <div className="mt-8 text-gray-100">
        <h3 className="text-2xl font-semibold" style={{ color }}>
          {title}
        </h3>
        <Content color={color} />
      </div>

      {/* Semi-Circular Cutout */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bg-gray-800"
        style={{
          width: 96,
          height: 48,
          borderRadius: "48px 48px 0 0",
          borderTop: `2px solid ${color}`,
          borderRight: `2px solid ${color}`,
          borderLeft: `2px solid ${color}`,
          bottom: "-2px",
        }}
      />
    </motion.div>
  );
};

export default ProjectBox;
