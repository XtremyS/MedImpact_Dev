import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailogBoxesRoutingModule } from './dailog-boxes-routing.module';
import { FormModalComponent } from './form-modal/form-modal.component';
import { MaterialModuleModule } from '../material-module/material-module.module';

@NgModule({
  declarations: [FormModalComponent],
  imports: [CommonModule, DailogBoxesRoutingModule, MaterialModuleModule],
})
export class DailogBoxesModule {}
