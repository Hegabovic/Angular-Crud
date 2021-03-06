import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DepartmentComponent} from "./departmentCrud/department.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations:[
    DepartmentComponent,
  ]
  ,
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    DepartmentComponent,
  ]
})
export class DepartmentModule { }
