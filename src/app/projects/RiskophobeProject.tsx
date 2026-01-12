import { ProjectContentProps } from "./projectData";
import ProjectLink from "../components/ProjectLink";

const RiskophobeProject = ({ color }: ProjectContentProps) => {
  return (
    <div className="text-start space-y-6 font-medium text-inherit">
      <div>
        <h4 style={{ color }} className="box-section-title">
          Are you a <i>riskophobe</i>?
        </h4>
        <p>
          Then this dApp is for you! Simply put, Riskophobe allows you to buy a
          token with the ability to return it and get your money back, within a
          certain timeframe. That way, you&lsquo;ll sleep better at night.
        </p>
      </div>
      <div>
        <h4 style={{ color }} className="box-section-title">
          The Stack
        </h4>
        <ul className="list-disc list-inside">
          <li>
            🎮 Frontend:{" "}
            <span className="font-bold">Next.js + TailwindCSS + Wagmi</span>
          </li>
          <li>
            🍑 Backend: <span className="font-bold">GraphQL</span>
          </li>
          <li>
            🧠 Smart contracts:{" "}
            <span className="font-bold">Solidity + Hardhat</span>
          </li>
        </ul>
      </div>
      <p>
        The best part? It&lsquo;s <b>100% made by Benjamin Azoulay</b> (your
        humble servant), and <b>100% open-source</b> 🤗
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-start lg:justify-items-center">
        <ProjectLink
          href="https://riskophobe.com"
          icon="🌐"
          label="Visit Riskophobe.com"
        />
        <ProjectLink
          href="https://github.com/BenAzlay/riskophobe-frontend"
          icon="👀"
          label="Fontend code"
        />
        <ProjectLink
          href="https://github.com/BenAzlay/riskophobe-contracts"
          icon="🧠"
          label="Contracts code"
        />
        <ProjectLink
          href="https://github.com/BenAzlay/riskophobe-backend"
          icon="🍑"
          label="Backend code"
        />
      </div>
    </div>
  );
};

export default RiskophobeProject;
