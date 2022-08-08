export interface QueryRowFieldsVisibility {
  isFilterByVisible: boolean;
  isSplitByVisible: boolean;
  isLimitByVisible: boolean;
  isSortByVisible: boolean;
}

export const defaultQueryRowFieldsVisibility: QueryRowFieldsVisibility = {
  isFilterByVisible: true,
  isSplitByVisible: true,
  isLimitByVisible: false,
  isSortByVisible: false,
};
