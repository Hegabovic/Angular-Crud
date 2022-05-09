import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { StudentComponent } from './Student/student.component';
import {core} from "@angular/compiler";
import {CoreModule} from "./core/core.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    StudentComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
