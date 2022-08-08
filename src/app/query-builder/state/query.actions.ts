import { createAction, props } from '@ngrx/store';
import { QueryRow } from '../models/query-row.model';

export const addQueryRow = createAction(
  '[Query] Add query row',
  props<{ queryRow?: QueryRow }>()
);

export const removeQueryRow = createAction(
  '[Query] Remove query row',
  props<{ queryRow: QueryRow }>()
);

export const updateQueryRow = createAction(
  '[Query] Update query row',
  props<{ id: string; key: keyof QueryRow; value: any }>()
);

export const translateToCodeMode = createAction(
  '[Query] Translate to code mode'
);

export const translateToBuildMode = createAction(
  '[Query] Translate to build mode'
);
