import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewMealComponent } from './view-meal/view-meal.component';
import { AddMealComponent } from './add-meal/add-meal.component';
import { EditMealComponent } from './edit-meal/edit-meal.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{ path: '', redirectTo: 'Home' ,pathMatch: 'full'},
{ path: 'Home', component: HomeComponent },
{ path: 'ViewMeal/:mealId', component: ViewMealComponent },
{ path: 'AddMeal', component: AddMealComponent},
{ path: 'EditMeal/:mealId',component:EditMealComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
