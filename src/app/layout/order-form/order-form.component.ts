import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  public orderForm!: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      phoneNumber:[''],
      house:[''],
      barangay:[''],
      city:[''],
      province:[''],
      type:[''],
      amount:['']
    })
  }

  orderUp(){
    this.http.post<any>("http://localhost:3000/order",this.orderForm.value)
    .subscribe(res=>{
      alert("Order Successfull");
      this.orderForm.reset();
      this.router.navigate(['dashboard']);
    },err=>{
      console.error(err);
      alert("Something went wrong")
    })
  }
}
