import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Para o uso de ngModel

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
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