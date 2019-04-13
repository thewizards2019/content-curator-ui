import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule, MatSliderModule, MatRadioModule, MatButtonModule, MatDividerModule, MatCardModule } from '@angular/material'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatSliderModule,
    MatRadioModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule
  ],  
  exports: [
    MatTabsModule,
    MatSliderModule,
    MatRadioModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule
  ],
})
export class MaterialModule { }