import { createSelector, createFeatureSelector, select } from '@ngrx/store';
import { QueryRow } from '../models/query-row.model';

export const selectQuery =
  createFeatureSelector<ReadonlyArray<QueryRow>>('query');

export const selectQueryIds = createSelector(selectQuery, (query) =>
  query.map((row) => row.id)
);

export const selectQueryById = (id: string) =>
  createSelector(selectQuery, (query) => query.find((row) => row.id === id));
