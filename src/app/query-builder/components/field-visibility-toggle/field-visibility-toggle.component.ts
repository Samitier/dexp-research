import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {
  defaultQueryRowFieldsVisibility,
  QueryRowFieldsVisibility,
} from '../../models/query-row-fields-visibility.model';

@Component({
  selector: 'app-field-visibility-toggle',
  templateUrl: './field-visibility-toggle.component.html',
  styleUrls: ['./field-visibility-toggle.component.css'],
})
export class FieldVisibilityToggleComponent {
  visibilityFields = defaultQueryRowFieldsVisibility;

  @Input() set visibility(value: QueryRowFieldsVisibility) {
    this.visibilityFields = { ...value };
  }

  @Output() visibilityChange = new EventEmitter<QueryRowFieldsVisibility>();
  @ViewChild('fieldVisibilityElement') fieldVisibilityElement?: ElementRef;

  isOpen = false;

  openTooltip() {
    this.isOpen = true;
  }

  closeTooltip() {
    this.isOpen = false;
  }

  onChange(key: keyof QueryRowFieldsVisibility, value: boolean) {
    this.visibilityFields[key] = !value;
    this.visibilityChange.emit(this.visibilityFields);
  }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: MouseEvent): void {
    if (!this.isOpen) return;
    const isClickInside = this.fieldVisibilityElement?.nativeElement.contains(
      event.target
    );
    if (!isClickInside) this.closeTooltip();
  }
}
