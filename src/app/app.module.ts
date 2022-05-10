import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/departmentCrud/department.component';
import {StudentComponent} from "./student/StudentCrud/student.component";
import {CoreModule} from "./core/core.module";
import {FormsModule} from "@angular/forms";
import {StudentModule} from "./student/student.module";
import {DepartmentModule} from "./department/department.module";

@NgModule({
  declarations: [
    AppComponent,
    // DepartmentComponent,
    // StudentComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    StudentModule,
    DepartmentModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
