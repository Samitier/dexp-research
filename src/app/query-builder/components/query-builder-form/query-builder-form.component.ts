import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { QueryRow } from '../../state/query-row.model';
import {
  addQueryRow,
  removeQueryRow,
  updateQueryRow,
} from '../../state/query.actions';
import { selectQueryById } from '../../state/query.selector';

@Component({
  selector: 'app-query-builder-form',
  templateUrl: './query-builder-form.component.html',
  styleUrls: ['./query-builder-form.component.css'],
})
export class QueryBuilderFormComponent {
  @Input() isDeleteEnabled = true;
  @Input() isBuildMode = true;

  private queryRow?: Readonly<QueryRow>;
  @Input() set queryRowId(value: string) {
    this.store.select(selectQueryById(value)).subscribe((row) => {
      this.queryRow = row;
    });
  }

  get metric() {
    return this.queryRow?.metric;
  }

  set metric(value) {
    this.store.dispatch(
      updateQueryRow({
        id: this.queryRow?.id ?? '',
        key: 'metric',
        value,
      })
    );
  }

  get id() {
    return this.queryRow?.id;
  }

  get isActive() {
    return this.queryRow?.isActive;
  }

  set isActive(value) {
    this.store.dispatch(
      updateQueryRow({
        id: this.queryRow?.id ?? '',
        key: 'isActive',
        value,
      })
    );
  }

  get aggregationType() {
    return this.queryRow?.aggregationType;
  }

  set aggregationType(value) {
    this.store.dispatch(
      updateQueryRow({
        id: this.queryRow?.id ?? '',
        key: 'aggregationType',
        value,
      })
    );
  }

  get splitBy() {
    return this.queryRow?.splitBy;
  }

  set splitBy(value) {
    this.store.dispatch(
      updateQueryRow({
        id: this.queryRow?.id ?? '',
        key: 'splitBy',
        value,
      })
    );
  }

  get filterBy() {
    return this.queryRow?.filterBy;
  }

  set filterBy(value) {
    this.store.dispatch(
      updateQueryRow({
        id: this.queryRow?.id ?? '',
        key: 'filterBy',
        value,
      })
    );
  }

  get sortBy() {
    return this.queryRow?.filterBy;
  }

  set sortBy(value) {
    this.store.dispatch(
      updateQueryRow({
        id: this.queryRow?.id ?? '',
        key: 'sortBy',
        value,
      })
    );
  }

  get limitBy() {
    return this.queryRow?.filterBy;
  }

  set limitBy(value) {
    this.store.dispatch(
      updateQueryRow({
        id: this.queryRow?.id ?? '',
        key: 'limitBy',
        value,
      })
    );
  }

  get visibility() {
    return this.queryRow?.queryRowFieldsVisibility;
  }

  set visibility(value) {
    this.store.dispatch(
      updateQueryRow({
        id: this.queryRow?.id ?? '',
        key: 'queryRowFieldsVisibility',
        value,
      })
    );
  }

  get code() {
    return this.queryRow?.code;
  }

  set code(value) {
    this.store.dispatch(
      updateQueryRow({
        id: this.queryRow?.id ?? '',
        key: 'code',
        value,
      })
    );
  }

  duplicateRow() {
    this.store.dispatch(
      addQueryRow({
        queryRow: this.queryRow,
      })
    );
  }

  deleteRow() {
    if (!this.queryRow) return;
    this.store.dispatch(
      removeQueryRow({
        queryRow: this.queryRow,
      })
    );
  }

  constructor(private store: Store) {}
}
