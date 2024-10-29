import { NgFor } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../Service/http-provider.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrl: './edit-meal.component.scss'
})
export class EditMealComponent implements OnInit {

  editMealForm: mealForm = new mealForm();

  @ViewChild("mealForm")
  mealForm!:NgForm
  isSubmitted:boolean = false
  mealId:any;  

  constructor(private router:Router,private route:ActivatedRoute,private httpProvider: HttpProviderService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.mealId = this.route.snapshot.params['mealId'];
   this.getMealDeteailById(this.mealId);

  }


  getMealDeteailById(mealId: any) {
  
    this.httpProvider.getMealDeteailById(mealId).subscribe((data: any) => {
      var resultData=data.body;
      this.editMealForm.id=resultData.id;
      this.editMealForm.title=resultData.title;
      this.editMealForm.content=resultData.content;
      this.editMealForm.author=resultData.author;
      
    },error=>{
      this.toastr.error(error.error.message, 'Error');
      this.router.navigate(['/Home']);
    })
  }

  editMeal(isValid:any) {
    this.isSubmitted = true;
    if(isValid){
      this.httpProvider.updateMeal(this.mealId,this.editMealForm).subscribe((data: any) => {
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
  id:number=0;
  title?: string
  content?: string
  author?: string
}