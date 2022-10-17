import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailogBoxesRoutingModule } from './dailog-boxes-routing.module';
import { FormModalComponent } from './form-modal/form-modal.component';

@NgModule({
  declarations: [FormModalComponent],
  imports: [CommonModule, DailogBoxesRoutingModule],
})
export class DailogBoxesModule {}
