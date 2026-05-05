
import { ProjectContentProps } from "./projectData";
import ProjectLink from "../components/ProjectLink";

const FlashstakeProject = ({ color }: ProjectContentProps) => {
  return ( 
    <div className="text-start space-y-6 font-medium">
      <div>
        <h4 style={{ color }} className="box-section-title">
          Instant Upfront Yield
        </h4>
        <p>
          Flashstake is a staking protocol that lets you &quot;time
          travel&quot; your yield, instantly earning rewards upfront with fixed
          yield
        </p>
        <p>
          Reached over <b>$40M market cap</b> and <b>$20M TVL</b>
        </p>
        <p>
          Offered up to <b>90% staking APY</b>
        </p>
      </div>
      <div>
        <h4 style={{ color }} className="box-section-title">
          Flashstack
        </h4>
        <ul className="list-disc list-inside">
          <li>
            Frontend:{" "}
            <span className="font-bold">React.js + MaterialUI + Web3Auth</span>
          </li>
          <li>
            Backend: <span className="font-bold">GraphQL</span>
          </li>
          <li>
            Smart contracts:{" "}
            <span className="font-bold">Solidity + Hardhat</span>
          </li>
        </ul>
      </div>
      <div className="text-center">
        <ProjectLink
          href="https://flashstake.io"
          label="Visit Flashstake.io"
          color={color}
        />
      </div>
    </div>
  );
};
export default FlashstakeProject;
