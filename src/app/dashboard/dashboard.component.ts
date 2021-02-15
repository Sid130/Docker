import { Identifiers } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private myservice:ServiceService) { }

  user:string=''
  fname:string=''

  Popultionapidimensions={
    xparameter:[],
    yparameter:[],
    id:"PopulationChart",
    label:"Year"
  }

  Temperaturedimensions={
    xparameter:[],
    yparameter:[],
    id:"TemperatureChart",
    label:"Temperature"

  }

  colors=[];
  
  
  ngOnInit(){

    this.user=this.myservice.username
    this.fname=this.myservice.fullname
    console.log(this.user)
    console.log(this.fname)

    this.getData('https://datausa.io/api/data?drilldowns=Nation&measures=Population','data','Year','Population',this.Popultionapidimensions)
    this.getData('http://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0','dataseries','timepoint','transparency',this.Temperaturedimensions)
    
  }

  getData(apiurl,responsedata,xaxisvalue,yaxisvalue,dimensions)
  {
    this.myservice.getData(apiurl).subscribe(data =>{
      console.warn(data)
      dimensions.xparameter=data[responsedata].map(data => data[xaxisvalue])
      dimensions.yparameter=data[responsedata].map(data => data[yaxisvalue])
      console.log(this.Popultionapidimensions.xparameter)
      console.log(this.Popultionapidimensions.yparameter)
      this.applycolor(dimensions.xparameter.length)
      
    })
  }

  dynamicColor()
  {
    let r=Math.floor(Math.random() *255);
    let g=Math.floor(Math.random() *255);
    let b=Math.floor(Math.random() *255);
    return "rgb(" + r + "," + g + "," + b + ")";

  }

  applycolor(xlength)
  {
    
    for(let i=0;i<xlength;i++)
    {
      this.colors.push(this.dynamicColor())
      
    }
  }

  get username()
  {
    return this.myservice.username
  }

  get fullname()
  {
    return this.myservice.fullname
  }

}
