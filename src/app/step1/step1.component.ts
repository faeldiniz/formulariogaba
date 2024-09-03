<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

=======
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Para o uso de ngModel
>>>>>>> 1ff193256465b222410b73878f9af831bfe302a1

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
<<<<<<< HEAD
  standalone: true, // Tornando o componente standalone
  styleUrls: ['./step1.component.scss'],
  imports: [[CommonModule, ReactiveFormsModule]], // Inclua os módulos necessários
})
export class Step1Component implements OnInit {
  discountForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.discountForm = this.fb.group({
      interview: ['', Validators.required],
      sibling: ['', Validators.required],
      responsavel: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
      nome1: ['', Validators.required],
      serie1: ['', Validators.required],
      dn1: ['', Validators.required],
      colegio1: ['', Validators.required],
      nome2: ['', Validators.required],
      serie2: ['', Validators.required],
      dn2: ['', Validators.required],
      colegio2: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.discountForm.valid) {
      console.log(this.discountForm.value);
      // Implementar lógica para enviar o formulário
    } else {
      console.log('Formulário inválido');
    }
  }
}
=======
  styleUrls: ['./step1.component.scss'] ,
  standalone: true, // Tornando o componente standalone
  imports: [CommonModule, FormsModule], // Inclua os módulos necessários
})
export class Step1Component {
  parentName: string = '';

  // Definindo um EventEmitter para a ação de 'next'
  @Output() nextStep = new EventEmitter<void>();

  // Método para emitir o evento de próxima etapa
  next(): void {
    this.nextStep.emit(); // Emitindo o evento
  }
}
>>>>>>> 1ff193256465b222410b73878f9af831bfe302a1
