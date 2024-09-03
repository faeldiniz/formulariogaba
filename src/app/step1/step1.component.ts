import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
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
