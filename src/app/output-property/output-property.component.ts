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
    if (this.campoValorInput && this.campoValorInput.nativeElement) {
      const value = this.campoValorInput.nativeElement.value;
      this.campoValorInput.nativeElement.value = +value + 1;
    }
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa() {
    if (this.campoValorInput && this.campoValorInput.nativeElement) {
      const value = this.campoValorInput.nativeElement.value;
      this.campoValorInput.nativeElement.value = +value - 1;
    }
    this.mudouValor.emit({ novoValor: this.valor });
  }
}
