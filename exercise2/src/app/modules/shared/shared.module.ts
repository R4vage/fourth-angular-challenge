import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './navbar/navbar.component';



@NgModule({
  declarations: [
    Navbar
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Navbar
  ]
})
export class SharedModule { }
