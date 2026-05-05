import RiskophobeProject from "./RiskophobeProject";
import FlashstakeProject from "./FlashstakeProject";
import ArturProject from "./ArturProject";
import UpsideWTFProject from "./UpsideWTFProject";
import EpochIslandProject from "./EpochIslandProject";
import RestifyProject from "./RestifyProject";
import StargateProject from "./StargateProject";
import AdoneyeProject from "./AdoneyeProject";

export interface ProjectContentProps {
  color: string;
}

interface Project {
  title: string;
  color: string;
  logo: string;
  ContentComponent: React.ComponentType<ProjectContentProps>;
}

const projectData: Project[] = [
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
    title: "Adoneye",
    logo: "/logos/Adoneye.png",
    ContentComponent: AdoneyeProject,
    color: "#f7931a",
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
    title: "EpochIsland",
    logo: "/logos/Epoch.png",
    ContentComponent: EpochIslandProject,
    color: "#F1F1F1",
  },
  {
    title: "Artur.ai",
    logo: "/logos/Artur.png",
    ContentComponent: ArturProject,
    color: "#3C6AF6",
  },
  {
    title: "Upside",
    logo: "/logos/Upside.png",
    ContentComponent: UpsideWTFProject,
    color: "rgb(149, 255, 217)",
  },
];

export default projectData;
