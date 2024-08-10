import React from 'react';
import './styles.scss';
import illustration from "../../assets/Slack-color.svg";


function AddToSlack() {
  return (
    <section className="add-to-slack-section">
      <div className="content-wrapper">
        <img src={illustration} alt="Illustration" className="illustration" />
        <div className="text-content">
          <h2 className="section-title">Add Ekai to Your Slack</h2>
          <p className="description">
            Enhance your workflow by integrating our app with Slack. Get started quickly and seamlessly!
          </p>
          <a
            href="https://slack.com/oauth/v2/authorize?client_id=7053055605876.7036441336423&scope=app_mentions:read,channels:history,channels:read,chat:write,commands,files:read,groups:history,groups:read,im:history,im:read,im:write,links:read,team:read,users.profile:read,users:read,users:read.email,users:write&user_scope=channels:read,chat:write,groups:read,im:history,im:read,im:write,search:read,team:read,users:read,users:read.email"
            className="add-to-slack-button"
          >
            <img
              alt="Add to Slack"
              height="40"
              width="140"
              src="https://platform.slack-edge.com/img/add_to_slack.png"
              srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default AddToSlack;