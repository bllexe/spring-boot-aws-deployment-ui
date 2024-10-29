import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpProviderService } from '../Service/http-provider.service';
import { WebApiService } from '../Service/web-api.service';
import { error } from 'console';

@Component({
  selector: 'app-view-meal',
  templateUrl: './view-meal.component.html',
  styleUrl: './view-meal.component.scss'
})
export class ViewMealComponent implements OnInit {

  mealId: any;
  mealDetail: any=[];

  constructor(public webApiService: WebApiService,private route:ActivatedRoute,private httpProvider: HttpProviderService) { }
  ngOnInit(): void {

    this.mealId = this.route.snapshot.params['mealId'];
    this.getMealDeteailById(this.mealId);
  }

  getMealDeteailById(mealId: any) {
    this.httpProvider.getMealDeteailById(mealId).subscribe((data: any) => {
      var resultData=data.body;
      this.mealDetail=resultData;
    },error=>{
      console.log(error);
    })
  }

}
