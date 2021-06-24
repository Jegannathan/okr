import {UPDATE_OKRS, UPDATE_LOADER_INDICATOR} from '../actions/types';

const initialState = {
  parentIds: [],
  parentChildRef: {},
  okrRef: {},
  showLoader: true,
  filterValues: []
};

function okrReducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_OKRS: {
      const okrs = action.okrResults;
      const parentIds = [];
      const parentChildRef = {};
      const okrRef = {};
      const filterValues = new Set();
      if (okrs) {
        for (let i =0; i<okrs.length; i++ ) {
          okrRef[okrs[i].id] = okrs[i];
          if (okrs[i].parent_objective_id === '') {
            parentIds.push(okrs[i].id);
            filterValues.add(okrs[i].category);
          } else {
            parentChildRef[okrs[i].parent_objective_id] =
              parentChildRef[okrs[i].parent_objective_id]
                ? [...parentChildRef[okrs[i].parent_objective_id], okrs[i].id] : [okrs[i].id]
          }
        }
      }
      return {
        ...state,
        parentIds,
        parentChildRef,
        okrRef,
        filterValues: [...filterValues]
      }
    }
    case UPDATE_LOADER_INDICATOR: {
      return {...state, showLoader: action.status}
    }
    default:
      return state;
  }
}
export {okrReducer}