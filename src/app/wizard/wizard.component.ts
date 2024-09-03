import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importação necessária
import { Step1Component } from '../step1/step1.component';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
=======
>>>>>>> 1ff193256465b222410b73878f9af831bfe302a1

@Component({
  selector: 'app-wizard',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, Step1Component, ReactiveFormsModule], // Inclua o CommonModule para usar as diretivas do Angular
=======
  imports: [CommonModule, Step1Component], // Inclua o CommonModule para usar as diretivas do Angular
>>>>>>> 1ff193256465b222410b73878f9af831bfe302a1
  templateUrl: './wizard.component.html',
  styleUrl: './wizard.component.scss'
  
})
export class WizardComponent {

  currentStep = 1; // Exemplo para controle do switch

  goToNextStep() {
    this.currentStep++;
  }

  goToPreviousStep() {
    this.currentStep--;
  }

  finish() {
    // Finalizar o formulário e enviar os dados
    console.log('Formulário finalizado');
  }

}
