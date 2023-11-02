import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import CitizenshipMapAll from './Graphs/CitizenshipMapAll';
import CitizenshipMapSingleOffice from './Graphs/CitizenshipMapSingleOffice';
import TimeSeriesAll from './Graphs/TimeSeriesAll';
import OfficeHeatMap from './Graphs/OfficeHeatMap';
import TimeSeriesSingleOffice from './Graphs/TimeSeriesSingleOffice';
import YearLimitsSelect from './YearLimitsSelect';
import ViewSelect from './ViewSelect';
import axios from 'axios';
import {
  resetVisualizationQuery,
  setDataToUse,
} from '../../../state/actionCreators';
import { colors } from '../../../styles/data_vis_colors';
import ScrollToTopOnMount from '../../../utils/scrollToTopOnMount';

const { background_color } = colors;

// API url for the data
const url = 'https://hrf-asylum-be-b.herokuapp.com/cases';

function GraphWrapper(props) {
  const { set_view, dispatch, data } = props;
  let { office, view } = useParams();
  if (!view) {
    set_view('time-series');
    view = 'time-series';
  }
  let map_to_render;
  if (!office) {
    switch (view) {
      case 'time-series':
        map_to_render = <TimeSeriesAll />;
        break;
      case 'office-heat-map':
        map_to_render = <OfficeHeatMap />;
        break;
      case 'citizenship':
        map_to_render = <CitizenshipMapAll />;
        break;
      default:
        break;
    }
  } else {
    switch (view) {
      case 'time-series':
        map_to_render = <TimeSeriesSingleOffice office={office} />;
        break;
      case 'citizenship':
        map_to_render = <CitizenshipMapSingleOffice office={office} />;
        break;
      default:
        break;
    }
  }

  // function updateStateWithNewData(years, view, office, stateSettingCallback) {
  //   // We will initialize a "dataToUse" array that will mimic the old dummy data structure
  //   /*
  //         _                                                                             _
  //       |                                                                                 |
  //       |   Example request for once the `/summary` endpoint is up and running:           |
  //       |                                                                                 |
  //       |     `${url}/summary?to=2022&from=2015&office=ZLA`                               |
  //       |                                                                                 |
  //       |     so in axios we will say:                                                    |
  //       |                                                                                 |
  //       |       axios.get(`${url}/summary`, {                                             |
  //       |         params: {                                                               |
  //       |           from: <year_start>,                                                   |
  //       |           to: <year_end>,                                                       |
  //       |           office: <office>,       [ <-- this one is optional! when    ]         |
  //       |         },                        [ querying by `all offices` there's ]         |
  //       |       })                          [ no `office` param in the query    ]         |
  //       |                                                                                 |
  //         _                                                                             _
  //                                  -- Mack

  //   */

  //   // function that will set the state with new data
  //   // according to the params passed in
  //   function setData() {
  //     // We will initialize a "dataToUse" array that will mimic the initialized state
  //     const dataToUse = [
  //       {
  //         fiscalSummary: {
  //           yearResult: []
  //         },
  //       },
  //       {
  //         citizenshipSummary: {},
  //       },
  //     ];

  //     axios.get(`${url}/fiscalSummary`)
  //       .then((fiscalResult) => {
  //         console.log('fetching fiscal summary');
  //         dataToUse[0].fiscalSummary = fiscalResult.data;
  //         console.log(dataToUse[0]);
  //         return axios.get(`${url}/citizenshipSummary`);
  //       })
  //       .then((citizenResult) => {
  //         console.log('fetching citizenship summary');
  //         dataToUse[1].citizenshipSummary = citizenResult.data;
  //         dispatch(setDataToUse(dataToUse));
  //         stateSettingCallback(view, office, dataToUse);
  //         console.log(data);
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   }

  //   setData();
  // }

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching data');
      const fiscalResult = await axios
        .get(`${url}/fiscalSummary`)
        .catch(err => console.error(err));
      const citizenResult = await axios
        .get(`${url}/citizenshipSummary`)
        .catch(err => console.error(err));
      const dataToUse = [
        {
          fiscalSummary: fiscalResult.data,
        },
        {
          citizenshipSummary: citizenResult.data,
        },
      ];
      dispatch(setDataToUse(dataToUse));
    };

    if (
      data[0].fiscalSummary.yearResults.length < 2 ||
      data[1].citizenshipSummary.length < 2
    ) {
      fetchData();
    }
  }, [dispatch, data]);

  function updateStateWithNewData(years, view, office, stateSettingCallback) {
    stateSettingCallback(view, office, data);
  }
  const clearQuery = (view, office) => {
    dispatch(resetVisualizationQuery(view, office));
  };
  return (
    <div
      className="map-wrapper-container"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        minHeight: '50px',
        backgroundColor: background_color,
      }}
    >
      <ScrollToTopOnMount />
      {map_to_render}
      <div
        className="user-input-sidebar-container"
        style={{
          width: '300px',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <ViewSelect set_view={set_view} />
        <YearLimitsSelect
          view={view}
          office={office}
          clearQuery={clearQuery}
          updateStateWithNewData={updateStateWithNewData}
        />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.persistReducer.data,
  };
};

export default connect(mapStateToProps)(GraphWrapper);
