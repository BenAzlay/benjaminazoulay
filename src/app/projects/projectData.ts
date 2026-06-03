import AmarnaiProject from "./AmarnaiProject";
import RiskophobeProject from "./RiskophobeProject";
import FlashstakeProject from "./FlashstakeProject";
import ArturProject from "./ArturProject";
import RestifyProject from "./RestifyProject";
import StargateProject from "./StargateProject";

export interface ProjectContentProps {
  color: string;
}

interface Project {
  title: string;
  color: string;
  logo: string;
  logoSize?: number;
  logoRounded?: boolean;
  ContentComponent: React.ComponentType<ProjectContentProps>;
}

const projectData: Project[] = [
  {
    title: "Amarnai",
    logo: "/logos/Amarnai.png",
    logoSize: 64,
    logoRounded: false,
    ContentComponent: AmarnaiProject,
    color: "#F8F5EF",
  },
  {
    title: "Stargate",
    logo: "/logos/Stargate.png",
    ContentComponent: StargateProject,
    color: "#C050E0",
  },
  { 
    title: "Restify",
    logo: "/logos/Restify.png",
    ContentComponent: RestifyProject,
    color: "#4A8FA8",
  },
  {
    title: "Riskophobe",
    logo: "/logos/Riskophobe.png",
    ContentComponent: RiskophobeProject,
    color: "#9B6DEB",
  },
  {
    title: "Flashstake",
    logo: "/logos/Flashstake.png",
    ContentComponent: FlashstakeProject,
    color: "#FE0094",
  },
  {
    title: "Artur.ai",
    logo: "/logos/Artur.png",
    ContentComponent: ArturProject,
    color: "#3C6AF6",
  }
];

export default projectData;
