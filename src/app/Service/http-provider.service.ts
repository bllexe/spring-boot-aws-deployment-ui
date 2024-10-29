import { Injectable } from '@angular/core';
import { WebApiService } from './web-api.service';
import { Observable } from 'rxjs';

var apiUrl='aws_host'; //this place will be replaced by the server url

var httpLink = {
  getAllMeal: apiUrl +"/api/meals/getAllMeals",
  deleteMealById: apiUrl +"/api/meals/deleteMealById/",
  getMealDeteailById: apiUrl +"/api/meals/getMealDetailById/",
  saveMeal: apiUrl +"/api/meals/saveMeal",
  updateMeal: apiUrl +"/api/meals/updateMeal/"
}

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor(private webApiService: WebApiService) { }

  public getAllMeal(): Observable<any> {
    return this.webApiService.get(httpLink.getAllMeal);
  }

  public deleteMealById(mealId : any): Observable<any> {
    return this.webApiService.delete(httpLink.deleteMealById + `${mealId}`);
  }

  public getMealDeteailById(mealId : any): Observable<any> {
    return this.webApiService.get(httpLink.getMealDeteailById + `${mealId}`);
  }

  public saveMeal(model : any): Observable<any> {
    return this.webApiService.post(httpLink.saveMeal,model);
  }

  public updateMeal(mealId: any,model : any): Observable<any> {
    return this.webApiService.post(httpLink.updateMeal + `${mealId}`,model);
  }

}
