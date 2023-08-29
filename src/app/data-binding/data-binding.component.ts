import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  url = 'http://rodrigo.com';
  cursoAngular: boolean = true;
  urlImagem = 'https://www.meutimao.com.br/fotos-do-corinthians/w941/2023/08/23/yuri_alberto_lamenta_chance_perdida_no_jogo_3f7w.jpg';

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';


  getValor(){
    return 1
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert("salve o Corinthians");
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;

  }

  salvarValor(valor: any){
    this.valorSalvo = valor;

  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

}
