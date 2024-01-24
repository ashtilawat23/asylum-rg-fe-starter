import {
  FILTER_SEARCH,
  RESET_CASE_DATA,
  GET_DEFAULT_COMPARISONS,
  GET_FILTERED_DATA,
  GET_MOCK_FILTERED_DATA,
  PERFORM_ADVANCED_SEARCH,
  TOGGLE_ADVANCED_SEARCH,
} from '../actionTypes';

export const initialState = {
  cases: [],
  comparisonData: {
    //This will hold keys and values for default displays on the site landing page, similar to TRAC
  },
  filterCount: 0,
  filteredCases: [],
  displayAdvancedSearch: false,
};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DEFAULT_COMPARISONS: {
      //When memoized comparison data is fetched from the server to display on the site landing page
      return {
        ...state,
        comparisonData: action.payload,
      };
    }
    //When a filter querystring is passed to the server and case data is returned
    case GET_FILTERED_DATA: {
      return {
        ...state,
        cases: action.payload,
      };
    }
    case GET_MOCK_FILTERED_DATA: {
      return {
        ...state,
        cases: action.payload,
      };
    }
    case FILTER_SEARCH: {
      return {
        ...state,
        filteredCases: action.payload,
        filterCount: state.count + 1,
      };
    }
    case PERFORM_ADVANCED_SEARCH: {
      return {
        ...state,
        filteredCases: action.payload,
        filterCount: state.count + 1,
      };
    }
    case TOGGLE_ADVANCED_SEARCH: {
      return { ...state, displayAdvancedSearch: action.payload };
    }
    case RESET_CASE_DATA: {
      return { ...state, filterCount: 0, filteredCases: [] };
    }
    default: {
      return state;
    }
  }
}

export default dataReducer;
