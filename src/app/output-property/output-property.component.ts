import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent {

  @Input()
  valor: number = 0;

  @Output()
  mudouValor = new EventEmitter<{ novoValor: number }>();

  @ViewChild('campoInput') campoValorInput: ElementRef | undefined;

  incrementa() {
    // Verifica se campoValorInput e campoValorInput.nativeElement são definidos
    if (this.campoValorInput && this.campoValorInput.nativeElement) {
      // Obtém o valor atual do campo de input
      const value = this.campoValorInput.nativeElement.value;
      // Incrementa o valor em 1
      this.campoValorInput.nativeElement.value = +value + 1;
    }
    // Emite um evento mudouValor com o novo valor
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa() {
    // Verifica se campoValorInput e campoValorInput.nativeElement são definidoss
    if (this.campoValorInput && this.campoValorInput.nativeElement) {
      // Obtém o valor atual do campo de input
      const value = this.campoValorInput.nativeElement.value;
      // Decrementa o valor em 1
      this.campoValorInput.nativeElement.value = +value - 1;
    }
    // Emite um evento mudouValor com o novo valor
    this.mudouValor.emit({ novoValor: this.valor });
  }
}
