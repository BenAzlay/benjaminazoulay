import { ProjectContentProps } from "./projectData";
import ProjectLink from "../components/ProjectLink";

const AmarnaiProject = ({ color }: ProjectContentProps) => {
  return (
    <div className="text-start space-y-6 font-medium text-inherit">
      <div>
        <h4 style={{ color }} className="box-section-title">
          Inbox zero, on autopilot.
        </h4>
        <p>
          Email overload is the norm. Amarnai connects to your Gmail and uses AI to
          automatically sort and classify threads—clearing your backlog and handling
          incoming mail in real time. Open-source and self-hostable, or available as a
          managed SaaS.
        </p>
      </div>
      <div>
        <h4 style={{ color }} className="box-section-title">
          The Stack
        </h4>
        <ul className="list-disc list-inside">
          <li>
            Frontend: <span className="font-bold">Next.js</span>
          </li>
          <li>
            Backend: <span className="font-bold">Node.js + TypeScript</span>
          </li>
          <li>
            Database: <span className="font-bold">PostgreSQL + Prisma</span>
          </li>
          <li>
            Shared types: <span className="font-bold">Zod schemas</span>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-start lg:justify-items-center">
        <ProjectLink
          href="https://amarnai.com"
          label="Visit Amarnai"
          color={color}
        />
        <ProjectLink
          href="https://github.com/amarnai/amarnai"
          label="Open-source monorepo"
          color={color}
        />
      </div>
    </div>
  );
};

export default AmarnaiProject;
