import React from 'react';
import './styles.scss'; 

const Pricing = () => {
  return (
    <div className="pricing-section">
      <h2>Pricing</h2>
      <div className="pricing-cards">
        <div className="card pilot">
          <h4>For individuals</h4>
          <h3>Pilot</h3>
          <p>Ekai hosted plan ensures data protection and security on our cloud, not shared with other organizations.</p>
          <div className="price">
            <span className="original-price">$25</span>
            <span className="discount-price">$15</span>
            <span className="price-info">/user per month</span>
          </div>
          <p className="trial-info">30 days free trial</p>
          <button className="get-started-btn">Get started →</button>
        </div>

        <div className="card pro">
          <h4>For individuals</h4>
          <h3>Pro</h3>
          <p>Self-hosted plan with one-click installation, freedom to choose cloud provider, and preferred LLM.</p>
          <div className="price">
            <span className="original-price">$250</span>
            <span className="discount-price">$100</span>
            <span className="price-info">/user per month</span>
          </div>
          <button className="get-started-btn">Get started →</button>
        </div>

        <div className="card enterprise">
          <h4>For big companies</h4>
          <h3>Enterprise</h3>
          <p>Includes all features from Pilot and Pro, with additional benefits:</p>
          <ul>
            <li>Ability to upload company-level documents from webpages, Wiki, or PDFs to train Ekai with basic knowledge.</li>
            <li>Employee directory mapping</li>
          </ul>
          <button className="contact-btn">Contact us →</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
