import { ProjectContentProps } from "./projectData";
import ProjectLink from "../components/ProjectLink";

const StargateProject = ({ color }: ProjectContentProps) => {
  return (
    <div className="text-start space-y-6 font-medium text-inherit">
      <div>
        <h4 style={{ color }} className="box-section-title">
          The Future of Staking on VeChain
        </h4>
        <p>
          Stake your VET and get an NFT that earns rewards.
          StarGate turns your staked assets into NFTs that give you access to rewards,
          governance rights, and trading possibilities within the VeChain network.
        </p>
      </div>
      <div>
        <h4 style={{ color }} className="box-section-title">
          The Stack
        </h4>
        <ul className="list-disc list-inside">
          <li>
            📱 Frontend:{" "}
            <span className="font-bold">Vite + Chakra UI + VeChain kit</span>
          </li>
          <li>
            🧠 Smart contracts:{" "}
            <span className="font-bold">Solidity</span>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-start lg:justify-items-center">
        <ProjectLink
          href="https://stargate.vechain.org/"
          icon="👀"
          label="Learn more"
        />
        <ProjectLink
          href="https://app.stargate.vechain.org/"
          icon="🌐"
          label="Visit Stargate dApp"
        />
      </div>
    </div>
  );
};

export default StargateProject;
