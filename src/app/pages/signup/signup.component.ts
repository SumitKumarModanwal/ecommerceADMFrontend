import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private userService:UserService,
    private snack:MatSnackBar,
    private router:Router
  ) { }

  public emp = {
    "userName":'',
    "firstName":'',
    "lastName":'',
    "address":'',
    "password":'',
    "email":'',
    "phone":'',
  }

  ngOnInit(): void {
  }

  formSubmit(){
    
    if(this.emp.userName==""){
      this.snack.open("Username Required!!",'',{
        duration:3000,

      })
      
    }
    console.log(this.emp);
    //addUser: userservice
  this.userService.addEmployee(this.emp).subscribe(
    (data: any)=>{
      //success
      console.log("success");

      this.snack.open("Employee Registerd",'',{
        duration:3000,
        
      })
      this.router.navigate(['/login'])
     
    },
    (error:any)=>{
      //error
      this.snack.open("Username "+this.emp.userName+ "  already exist !!",'',{
        duration:2000,
        
      })
    }
  )
  }

  
}
