import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      user:[''],
      password:['']
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/login")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.user === this.loginForm.value.user && a.password === this.loginForm.value.password
    });
    if(user){
      alert("Login Success!");
      this.loginForm.reset();
      this.router.navigate(['dashboard'])
    }
    else{
      alert("user not found!");
    }
    },err=>{
      alert("something went wrong!")
    })
  }
  

}
