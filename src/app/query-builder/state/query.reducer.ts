import { createReducer, on } from '@ngrx/store';
import { QueryRow, defaultQueryRow } from '../models/query-row.model';
import { SpaceAggregation } from '../models/space-aggregation.model';
import {
  addQueryRow,
  removeQueryRow,
  translateToBuildMode,
  translateToCodeMode,
  updateQueryRow,
} from './query.actions';

export const initialState: ReadonlyArray<QueryRow> = [{ ...defaultQueryRow }];

export const queryReducer = createReducer(
  initialState,
  on(removeQueryRow, (state, { queryRow }) => {
    return state.filter((row) => row.id !== queryRow.id);
  }),
  on(addQueryRow, (state, { queryRow }) => {
    const row = { ...(queryRow ?? defaultQueryRow) };
    row.id = String.fromCharCode(state[state.length - 1].id.charCodeAt(0) + 1);
    if (state.find((r) => r.id === row.id)) return state;
    return [...state, row];
  }),
  on(updateQueryRow, (state, { id, key, value }) => {
    return state.map((row) => {
      if (row.id === id) {
        return {
          ...row,
          [key]: value,
        };
      } else {
        return row;
      }
    });
  }),
  on(translateToCodeMode, (state) => {
    return state.map((row) => ({
      ...row,
      code: `${row.metric}:${row.spaceAggregation}:${row.splitBy}:${row.filterBy}`,
    }));
  }),
  on(translateToBuildMode, (state) => {
    return state.map((row) => {
      const [metric, spaceAggregation, splitBy, filterBy] = row.code.split(':');
      return {
        ...row,
        metric,
        spaceAggregation: spaceAggregation as SpaceAggregation,
        splitBy,
        filterBy,
      };
    });
  })
);
