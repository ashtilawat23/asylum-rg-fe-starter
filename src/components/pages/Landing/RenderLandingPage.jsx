import React from 'react';
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/LessRenders/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
// for the purposes of testing PageNav
// import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  return (
    <div className="landing-container">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <p>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </p>
        </div>
      </div>

      <div className="graphs-section">
        <div>
          <img src={GrantRatesByOfficeImg} alt="bar graph" />
          <p>Search Grant Rates By Office</p>
        </div>

        <div>
          <img src={GrantRatesByNationalityImg} alt="pie chart" />
          <p>Search Grant Rates By Nationality</p>
        </div>

        <div>
          <img src={GrantRatesOverTimeImg} alt="line graph" />
          <p>Search Grant Rates Over Time</p>
        </div>
      </div>

      <div className="view-more-data-btn-container">
        <Button type="default" onClick={() => history.push('/graphs')}>
          View the Data
        </Button>

        <Button type="default" onClick={e => e.preventDefault()}>
          Download the Data
        </Button>
      </div>

      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>

        <div className="middle-section-text-container">
          <p>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </p>
        </div>
      </div>

      <div className="bottom-section">
        <h1 className="insights">Systemic Disparity Insights</h1>

        <div className="div-container">
          <div className="insights">
            <h1>36%</h1>
            <p>
              By the end of the Trump administration, the average asylum office
              grant rate had fallen 36 percent from an average of 44 percent in
              fiscal year 2016 to 28 percent in fiscal year 2020.
            </p>
          </div>

          <div className="insights">
            <h1>5%</h1>
            <p>
              The New York asylum office grant rate dropped to 5 percent in
              fiscal year 2020.
            </p>
          </div>

          <div className="insights">
            <h1>6x Lower</h1>
            <p>
              Between fiscal year 2017 and 2020, the New York asylum office's
              average grant rate was six times lower than the San Francisco
              asylum office.
            </p>
          </div>
        </div>

        <Button type="default" onClick={e => e.preventDefault()}>
          Read More
        </Button>
      </div>

      <p className="back-to-top" onClick={() => scrollToTop()}>
        Back To Top ^
      </p>
    </div>
  );
}
export default RenderLandingPage;
