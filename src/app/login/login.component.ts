import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private myservice:ServiceService) { }
  // username=this.myservice.username
  password:string
  fullname:string
  address:string
  email:string
  pass:string
  dob:string

  lg:boolean=true
  sup:boolean=false

  
  get user():string
  {
    return this.myservice.username
  }

  get fname():string
  {
    return  this.myservice.fullname
  }

  set user(value:string)
  {
    this.myservice.username=value
  }

  set fname(value:string)
  {
    this.myservice.fullname=value
  }


  login(){

    if(this.user==='Sid' && this.password=='12345')
    {
      this.router.navigateByUrl("/dashboard")
    }
    else{
      alert("Invalid Credentials")
    }
  }

  Signup()
  {
    console.log(this.fname)
    console.log(this.address)
    console.log(this.dob)
    console.log(this.email)
    this.router.navigateByUrl("/dashboard")

  }

  credentials()
  {
    alert("Please Enter all the Credentials")
  }

  setClasses()
  {
    this.lg=!this.lg
    this.sup=!this.sup
  }

  ngOnInit(): void {
  }

}
