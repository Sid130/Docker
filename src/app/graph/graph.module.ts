import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphDashboardComponent } from './graph-dashboard/graph-dashboard.component';

import { ServiceService  } from "../service.service";


@NgModule({
  declarations: [GraphDashboardComponent],
  imports: [
    CommonModule
  ],
  providers:[ServiceService],
  exports:[
    GraphDashboardComponent
  ]
})
export class GraphModule { }
