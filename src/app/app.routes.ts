<<<<<<< HEAD
// app.routes.ts
import { Routes } from '@angular/router';
=======
//import { Routes } from '@angular/router';

//export const routes: Routes = [];


// app-routing.module.ts
import { NgModule } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';
import {Routes } from '@angular/router';
>>>>>>> 1ff193256465b222410b73878f9af831bfe302a1
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { WizardComponent } from './wizard/wizard.component';

<<<<<<< HEAD
export const routes: Routes = [
=======
//const routes: Routes = [
   export const routes: Routes = [
>>>>>>> 1ff193256465b222410b73878f9af831bfe302a1
  { path: 'step1', component: Step1Component },
  { path: 'step2', component: Step2Component },
  { path: 'step3', component: Step3Component },
  { path: 'wizard', component: WizardComponent },
<<<<<<< HEAD
  { path: '', redirectTo: '/step1', pathMatch: 'full' }
];
=======
  { path: '', redirectTo: '/step1', pathMatch: 'full' } // Redireciona para step1 por padrão
];

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  //exports: [RouterModule]
})
export class AppRoutingModule { }

>>>>>>> 1ff193256465b222410b73878f9af831bfe302a1
