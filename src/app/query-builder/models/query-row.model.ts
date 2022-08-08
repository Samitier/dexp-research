import {
  defaultQueryRowFieldsVisibility,
  QueryRowFieldsVisibility,
} from './query-row-fields-visibility.model';
import { SpaceAggregation } from './space-aggregation.model';

export interface QueryRow {
  id: string;
  isActive: boolean;
  metric: string;

  // Would be cool to have this calculated
  code: string;

  spaceAggregation: SpaceAggregation;
  splitBy: string;
  filterBy: string;
  sortBy: string;
  limitBy: number;

  queryRowFieldsVisibility: QueryRowFieldsVisibility;
}

export const defaultQueryRow: QueryRow = {
  id: 'A',
  isActive: true,
  metric: '',
  spaceAggregation: SpaceAggregation.NONE,
  code: '',
  splitBy: '',
  filterBy: '',
  sortBy: '',
  limitBy: 100,

  queryRowFieldsVisibility: defaultQueryRowFieldsVisibility,
};
