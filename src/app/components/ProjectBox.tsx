import Image from "next/image";
import { FC, ReactNode } from "react";
import { ProjectContentProps } from "../projects/projectData";

interface ProjectBoxProps {
  title: string;
  image: string;
  color: string;
  Content: FC<ProjectContentProps>;
}

const ProjectBox: FC<ProjectBoxProps> = ({ title, image, color, Content }) => {
  return (
    <div
      className="relative bg-gray-900 shadow-lg rounded-lg p-6 text-center border-2"
      style={{ borderColor: color }}
    >
      {/* Logo Container */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 -top-12 border-2 rounded-full bg-gray-900 flex items-center justify-center shadow-md`}
        style={{
          width: 96,
          height: 96,
          borderColor: color,
        }}
      >
        <Image src={image} alt={`${title} logo`} width={96} height={96} />
      </div>

      {/* Box Content */}
      <div className="mt-8 text-gray-100">
        <h3 className="text-2xl font-semibold" style={{ color }}>
          {title}
        </h3>
        <Content color={color} />
      </div>
    </div>
  );
};

export default ProjectBox;
