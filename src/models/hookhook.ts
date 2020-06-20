import { Reducer } from 'redux';
import { query } from '@/services/api';
import { Effect } from '@/models/connect';

export interface HookhookModelState {
  name: string;
}

export interface HookhookModelType {
  namespace: 'hookhook';
  state: HookhookModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<HookhookModelState>;
  };
}

const HookhookModel: HookhookModelType = {
  namespace: 'hookhook',

  state: {
    name: '',
  },

  effects: {
    *query({ payload }, { call, put }) {},
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default HookhookModel;
