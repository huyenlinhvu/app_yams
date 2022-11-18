import { NgModule, PACKAGE_ROOT_URL } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PastrieDetailsComponent } from './pastrie-details/pastrie-details.component';
import { PastriesComponent } from './pastries/pastries.component';
import { PastrieTagColorPipe } from './pastrie-tag-color.pipe';

@NgModule({
  declarations: [   
    PastrieDetailsComponent, 
    PastriesComponent,
    PastrieTagColorPipe
  ],
  imports: [
    CommonModule,
  ]
})
export class PastrieModule { }
