import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Step1Component } from './step1/step1.component';
=======
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Step1Component } from './step1/step1.component';
import { AppRoutingModule } from './app.routes'; // Importar o módulo de roteamento
>>>>>>> 1ff193256465b222410b73878f9af831bfe302a1
import { WizardComponent } from './wizard/wizard.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
<<<<<<< HEAD
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    Step1Component, // Componente standalone
    WizardComponent // Componente standalone
  ],
  providers: []
=======
  declarations: [
         // Declare o AppComponent aqui
    //Step1Component,    // Outros componentes necessários
    
  ],

  imports: [
    RouterModule.forRoot(routes), // Importar RouterModule com as rotas
    BrowserModule,
    FormsModule,       // Outros módulos que o projeto necessita
    Step1Component, // Adicione os componentes independentes diretamente aqui
    WizardComponent,
    AppComponent, 
    AppRoutingModule
    
  ],
  providers: [],
  //bootstrap: [AppComponent] // O AppComponent é inicializado aqui
>>>>>>> 1ff193256465b222410b73878f9af831bfe302a1
})
export class AppModule { }
