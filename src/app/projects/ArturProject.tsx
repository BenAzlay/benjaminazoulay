import { ProjectContentProps } from "./projectData";
import ProjectLink from "../components/ProjectLink";

const ArturProject = ({ color }: ProjectContentProps) => {
  return (
    <div className="text-start space-y-6 font-medium">
      <div>
        <h4 style={{ color }} className="box-section-title">
          Fiat & Crypto Wealth Management Platform
        </h4>
        <p>
          Artur.ai is an innovative AI-powered wealth management platform that
          enables individuals to consolidate all their assets in one place,
          providing tailored investment recommendations to balance, manage, and
          grow their wealth.
        </p>
      </div>
      <div>
        <h4 style={{ color }} className="box-section-title">
          Stack.ai
        </h4>
        <ul className="list-disc list-inside">
          <li>
            🎮 Frontend:{" "}
            <span className="font-bold">React.js + TailwindCSS</span>
          </li>
          <li>
            🍑 Backend: <span className="font-bold">Django + MongoDB</span>
          </li>
        </ul>
      </div>
      <div className="text-center">
        <ProjectLink
          href="https://artur.ai"
          icon="🌐"
          label="Visit Artur.ai"
        />
      </div>
    </div>
  );
};

export default ArturProject;
