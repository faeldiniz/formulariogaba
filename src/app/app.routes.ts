//import { Routes } from '@angular/router';

//export const routes: Routes = [];


// app-routing.module.ts
import { NgModule } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';
import {Routes } from '@angular/router';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { WizardComponent } from './wizard/wizard.component';

//const routes: Routes = [
   export const routes: Routes = [
  { path: 'step1', component: Step1Component },
  { path: 'step2', component: Step2Component },
  { path: 'step3', component: Step3Component },
  { path: 'wizard', component: WizardComponent },
  { path: '', redirectTo: '/step1', pathMatch: 'full' } // Redireciona para step1 por padrão
];

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  //exports: [RouterModule]
})
export class AppRoutingModule { }

