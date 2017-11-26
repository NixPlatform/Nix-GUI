import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatExpansionModule, MatGridListModule, MatIconModule, MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatSnackBarModule, MatTabsModule, MatToolbarModule, MatRadioModule, MatInputModule,
  MatTooltipModule,
  MatSelectModule, MatPaginatorModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* A unified module that will simply manage all our Material imports (and export them again) */

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule, /* Flex layout here too */
    FormsModule, /* forms */
    ReactiveFormsModule, /* forms */
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatExpansionModule,
    MatTooltipModule,
    MatTabsModule,
    MatSnackBarModule,
    MatMenuModule,
    MatProgressBarModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatPaginatorModule,
  ],
  exports: [
    FlexLayoutModule, /* Flex layout here too */
    FormsModule, /* forms */
    ReactiveFormsModule, /* forms */
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatExpansionModule,
    MatTooltipModule,
    MatTabsModule,
    MatSnackBarModule,
    MatMenuModule,
    MatProgressBarModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatPaginatorModule
  ],
  declarations: []
})
export class MaterialModule { }
