import { ProjectContentProps } from "./projectData";
import ProjectLink from "../components/ProjectLink";

const AdoneyeProject = ({ color }: ProjectContentProps) => {
  return (
    <div className="text-start space-y-6 font-medium text-inherit">
      <div>
        <h4 style={{ color }} className="box-section-title">
          Your wallet, <i>AI-analyzed</i>
        </h4>
        <p>
          Adoneye is an AI-powered crypto portfolio analysis tool that gives you
          deep, actionable insights into your EVM wallet. Connect a wallet
          address and let the AI engine analyze your token balances, DeFi
          positions, historical performance, and risk exposure.
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
            🔗 Blockchain data:{" "}
            <span className="font-bold">Zerion + Alchemy</span>
          </li>
          <li>
            🤖 LLM: <span className="font-bold">OpenAI</span>
          </li>
        </ul>
      </div>
      <p>
        Built end-to-end by <b>Benjamin Azoulay</b>, Adoneye is{" "}
        <b>100% open-source</b>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 justify-items-start lg:justify-items-center">
        <ProjectLink
          href="https://adoneye.com"
          icon="🌐"
          label="Visit Adoneye.com"
        />
        <ProjectLink
          href="https://github.com/BenAzlay/adoneye"
          icon="👀"
          label="Source code"
        />
      </div>
    </div>
  );
};

export default AdoneyeProject;
