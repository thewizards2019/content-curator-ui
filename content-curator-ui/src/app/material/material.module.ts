import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule, MatSliderModule, MatRadioModule, MatButtonModule, MatDividerModule } from '@angular/material'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatSliderModule,
    MatRadioModule,
    MatButtonModule,
    MatDividerModule
  ],  
  exports: [
    MatTabsModule,
    MatSliderModule,
    MatRadioModule,
    MatButtonModule,
    MatDividerModule
  ],
})
export class MaterialModule { }
