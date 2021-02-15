import { Component, OnInit,Input } from '@angular/core';

import { Chart } from "../../../../node_modules/chart.js"
import { ServiceService } from "../../service.service";


@Component({
  selector: 'app-graph-dashboard',
  templateUrl: './graph-dashboard.component.html',
  styleUrls: ['./graph-dashboard.component.css']
})
export class GraphDashboardComponent implements OnInit {


  constructor( private stockservice:ServiceService ) { 
    
  }

  user:string=''
  fname:string=''

  @Input() public xparameter;
  @Input() public yparameter;
  @Input() public colors;
  @Input() public chartid;
  @Input() public label;



  graphs=['radar','line','pie','doughnut','polarArea','bar']
  graphtype:string='bar'
  
  myChart:any

  ngOnInit(): void {
    this.displaygraph(this.xparameter,this.yparameter,this.label,this.colors)
  }

  

  displaygraph(xparameter,yparameter,label,colors)
  {
     this.myChart = new Chart(this.chartid, {
      type: this.graphtype,
      data: {
          labels: xparameter,
          datasets: [{
              label: label,
              data: yparameter,
              borderColor:"#3cba9f",
              backgroundColor:colors,
              borderWidth: 1
          }]
      },
      options: {
        scales: {
          xAxes: [{
             gridLines: {
                display: false
             }
          }],
          yAxes: [{
          }]
       }
      }
  });
  }


  
  setgraphtype(graph:any,chartid)
  {
    console.log(chartid)
    let chart=document.getElementById(chartid)
    console.log(chart)
    if (chart!=null)
    { 
      this.myChart.destroy()
    }
    this.graphtype=graph;
    this.displaygraph(this.xparameter,this.yparameter,this.label,this.colors)
  }


}
