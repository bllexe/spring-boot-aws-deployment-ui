import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../Service/http-provider.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrl: './add-meal.component.scss'
})
export class AddMealComponent implements OnInit {

addMealForm: mealForm = new mealForm();

  @ViewChild("mealForm")
  mealForm!:NgForm;
  isSubmitted:boolean = false;

  constructor(private router:Router,private httpProvider: HttpProviderService,private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  addMeal(isValid:any) {
    this.isSubmitted = true;
    if(isValid){
      this.httpProvider.saveMeal(this.addMealForm).subscribe((data: any) => {
        this.toastr.success(data.message, 'Success');
        this.router.navigate(['/Home']);
      }, error => {
        this.toastr.error(error.error.message, 'Error');
        this.router.navigate(['/Home']);
      });
    }
  }
}


export class mealForm {
  title?: string;
  content?: string;
  author?: string;
  created_at?: string;
  updated_at?: string;
}