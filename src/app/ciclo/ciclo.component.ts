import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked, AfterViewInit,
  Component,
  DoCheck, Input, OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.scss']
})

//A partir do Angular 9, o Angular CLI (Command Line Interface) não inclui mais a implementação explícita da interface
// OnInit e o método ngOnInit() no arquivo do componente gerado automaticamente. Isso foi feito para reduzir a
// quantidade de código gerado e simplificar a estrutura do componente. Embora a implementação explícita da
// interface OnInit e do método ngOnInit() não sejam mais gerados automaticamente pelo Angular CLI, eles
// ainda são amplamente usados e recomendados para executar lógica de inicialização em um componente.

export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  @Input()
  valorInicial: number = 10;
  constructor() {
    this.log('ngOnChanges');}
  ngOnChanges(){
    this.log('ngOnChanges');}
  ngOnInit() {
    this.log('ngOnInit');}
  ngDoCheck(){
    this.log('ngDoCheck');}
  ngAfterContentInit(){
    this.log('ngAfterContentInit');}
  ngAfterContentChecked(){
    this.log('ngAfterContentChecked')}
  ngAfterViewChecked(){
    this.log('ngAfterViewChecked')}
  ngAfterViewInit(){
    this.log('ngAfterViewInit')}
  ngOnDestroy(){
    this.log('ngOnDestroy');}
  private log(hook: string){
    console.log(hook);
  }

}
