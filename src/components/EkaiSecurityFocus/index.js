import "./style.scss";
import { securityListData } from "../../utils/constant";

const EkaiSecurityFocus = () => {
  return (
    <div className="SecurityCom-wrapper">
      <h4>Data security is top priority</h4>
      {securityListData.map((listData) => {
        return (
          <div className="List-Container">
            <div dangerouslySetInnerHTML={{ __html: listData.svg }}></div>
            <div className="title-dis-cont">
              <h5>{listData.title}</h5>
              <p dangerouslySetInnerHTML={{ __html: listData.description }}></p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EkaiSecurityFocus;
