import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Step1Component } from './step1/step1.component';
import { WizardComponent } from './wizard/wizard.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    Step1Component, // Componente standalone
    WizardComponent // Componente standalone
  ],
  providers: []
})
export class AppModule { }
