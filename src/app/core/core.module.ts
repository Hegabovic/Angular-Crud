import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedTieHeaderComponent} from "./red-tie-header/red-tie-header.component";
import {RedTieSidebarComponent} from "./red-tie-sidebar/red-tie-sidebar.component";
import {RedTieFooterComponent} from "./red-tie-footer/red-tie-footer.component";

@NgModule({
  declarations: [
    RedTieHeaderComponent,
    RedTieSidebarComponent,
    RedTieFooterComponent
  ],
  imports: [
    CommonModule,


  ],
  exports:[
    RedTieHeaderComponent,
    RedTieSidebarComponent,
    RedTieFooterComponent
  ]
})
export class CoreModule { }
