import { NgModule, ModuleWithProviders } from '@angular/core';

import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';

import { FirstTimeModalComponent } from './firsttime/firsttime.modal.component';
import { SyncingModalComponent } from './syncing/syncing.modal.component';

@NgModule({
  declarations: [
    ModalComponent,
    FirstTimeModalComponent,
    SyncingModalComponent
  ],
  exports: [
    ModalComponent,
  ],
  providers: [ModalService]
})

export class ModalModule { }
