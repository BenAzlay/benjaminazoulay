import { ProjectContentProps } from "./projectData";
import ProjectLink from "../components/ProjectLink";

const RestifyProject = ({ color }: ProjectContentProps) => {
  return (
    <div className="text-start space-y-6 font-medium text-inherit">
      <div>
        <h4 style={{ color }} className="box-section-title">
          Reclaim your time. Get paid.
        </h4>
        <p>
          Phone addiction is at an all-time high.
          Restify helps you switch off and take control—rewarding you
          for every minute spent away from your screen.
        </p>
      </div>
      <div>
        <h4 style={{ color }} className="box-section-title">
          The Stack
        </h4>
        <ul className="list-disc list-inside">
          <li>
            Frontend:{" "}
            <span className="font-bold">React Native + Expo</span>
          </li>
          <li>
            Backend: <span className="font-bold">Nest.js + Prisma</span>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-start lg:justify-items-center">
        <ProjectLink
          href="https://restifyapp.org"
          label="Learn more"
          color={color}
        />
        <ProjectLink
          href="https://play.google.com/store/apps/details?id=com.restify"
          label="Download on the Play Store"
          color={color}
        />
      </div>
    </div>
  );
};

export default RestifyProject;
