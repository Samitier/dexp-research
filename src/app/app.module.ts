import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { QueryBuilderComponent } from './query-builder/query-builder.component';
import { VisualAdapterComponent } from './visual-adapter/visual-adapter.component';
import { SettingsComponent } from './settings/settings.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule } from '@angular/forms';
import { queryReducer } from './query-builder/state/query.reducer';
import { QueryBuilderFormComponent } from './query-builder/components/query-builder-form/query-builder-form.component';
import { FieldVisibilityToggleComponent } from './query-builder/components/field-visibility-toggle/field-visibility-toggle.component';
import { HttpClientModule } from '@angular/common/http';
import { DtIconModule } from '@dynatrace/barista-components/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    QueryBuilderComponent,
    VisualAdapterComponent,
    SettingsComponent,
    QueryBuilderFormComponent,
    FieldVisibilityToggleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ query: queryReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
    DtIconModule.forRoot({ svgIconLocation: '/assets/icons/{{name}}.svg' }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
