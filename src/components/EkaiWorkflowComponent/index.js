import "./style.scss";
import ekaiWorkFlow from "../../assets/ekai-work-flow.svg";

const EkaiWorkflowComponent = () => {
  return (
    <div className="workflow-wrapper">
      <h4>See how it works!</h4>
      <div className="gif-container">
        <img src={ekaiWorkFlow} alt="Ekai Work Flow" />
      </div>
    </div>
  );
};

export default EkaiWorkflowComponent;
