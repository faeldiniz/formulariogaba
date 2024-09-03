import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Step1Component } from './step1/step1.component';
import { AppRoutingModule } from './app.routes'; // Importar o módulo de roteamento
import { WizardComponent } from './wizard/wizard.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
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
})
export class AppModule { }
