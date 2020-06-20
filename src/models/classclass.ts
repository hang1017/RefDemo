import { Reducer } from 'redux';
import { query } from '@/services/api';
import { Effect } from '@/models/connect';

export interface ClassclassModelState {
  name: string;
}

export interface ClassclassModelType {
  namespace: 'classclass';
  state: ClassclassModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<ClassclassModelState>;
  };
}

const ClassclassModel: ClassclassModelType = {
  namespace: 'classclass',

  state: {
    name: '',
  },

  effects: {
    *query({ payload }, { call, put }) {
      const data = yield call(query, payload);
      console.log(data)
      yield put({
        type: 'save',
        payload: { name: data.text },
      });
    },
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

export default ClassclassModel;
