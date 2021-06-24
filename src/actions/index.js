import { GET_OKRS, UPDATE_LOADER_INDICATOR, UPDATE_OKRS } from './types';

export const getOkrs = () => {
  return { type: GET_OKRS };
};

export const updateOkrs = okrResults => {
  return { type: UPDATE_OKRS, okrResults };
};

export const updateLoaderIndicator = status => {
  return { type: UPDATE_LOADER_INDICATOR, status };
};
