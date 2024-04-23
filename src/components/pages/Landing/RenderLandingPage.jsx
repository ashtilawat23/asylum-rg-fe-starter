import React from 'react';
// ADD IMPORTS BACK FOR GRAPHS SECTION

// SR - imported styling images
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

// for the purposes of testing PageNav
//import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  // declare function for scroll back to top
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  // declare history function for navigation
  const history = useHistory();

  return (
    <div className="main">
      {/* Header Section */}
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>

      {/* Graphs Section (SR 3/3)*/}
      <div className="graphs-section">
        <div className="grant-rates-by-office-container">
          <img
            src={GrantRatesByOfficeImg}
            alt="Grant rates by office"
            className="gr-office-img"
          />
          <p>Search Grant Rates By Office</p>
        </div>
        <div className="grant-rates-by-nationality-container">
          <img
            src={GrantRatesByNationalityImg}
            alt="Grant rates by nationality"
            className="gr-nationality-img"
          />
          <p>Search Grant Rates By Nationality</p>
        </div>
        <div className="grant-rates-over-time-container">
          <img
            src={GrantRatesOverTimeImg}
            alt="Grant rates over time"
            className="gr-overtime-img"
          />
          <p>Search Grant Rates Over Time</p>
        </div>
      </div>

      {/* Button container and buttons */}
      <div className="view-more-data-btn-container">
        <Button
          type="default"
          className="ant-btn ant-btn-default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={() => {
            // navigates to "GraphsContainer component"
            history.push('/graphs');
          }}
        >
          View the Data
        </Button>

        {/* Download Data Button (SR 3/3) */}
        <Button
          type="default"
          className="ant-btn ant-btn-default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          // downloads csv file
          onClick={() =>
            (window.location.href =
              'https://humanrightsfirst.org/wp-content/uploads/2022/10/COW2021001887-I589Data.csv')
          }
        >
          Download the Data
        </Button>
      </div>

      {/* Middle Section (SR 3/3)*/}
      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set.
          </h3>
        </div>
      </div>
      <div>
        {/* Bottom Section (SR 3/3) */}
        <div className="bottom-section">
          <h1>Systemic Disparity Insights</h1>
          <div className="data-container">
            <div className="first-data-point-container data-point-container">
              <h2>36%</h2>
              <h3>
                By the end of the Trump administration, the average asylum
                office grant rate had fallen 36 percent from an average of 44
                percent in fiscal year 2016 to 28 percent in fiscal year 2020.
              </h3>
            </div>
            <div className="second-data-point-container data-point-container">
              <h2>5%</h2>
              <h3>
                The New York asylum office grant rate dropped to 5 percent in
                fiscal year 2020.
              </h3>
            </div>
            <div className="third-data-point-container data-point-container">
              <h2>6x Lower</h2>
              <h3>
                Between fiscal year 2017 and 2020, the New York asylum office’s
                average grant rate was six times lower than the San Francisco
                asylum office.
              </h3>
            </div>
          </div>

          {/* Read More button takes user to article on humanrightsfirst.org (SR 3/3) */}
          <Button
            type="default"
            className="ant-btn ant-btn-default"
            style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
            onClick={() =>
              (window.location.href =
                'https://humanrightsfirst.org/library/uscis-records-reveal-systemic-disparities-in-asylum-decisions/')
            }
          >
            Read More
          </Button>
        </div>
        <p onClick={() => scrollToTop()} className="back-to-top">
          Back To Top ^
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;
