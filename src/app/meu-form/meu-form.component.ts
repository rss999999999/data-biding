import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.scss']
})


export class MeuFormComponent {
  nome: string = 'abc'; // Declare and initialize the nome variable

  pessoa: any = {
    nome: 'def',
    idade: 20,
    end: {

    }
  }

}
