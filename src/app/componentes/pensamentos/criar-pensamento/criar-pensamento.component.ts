import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit{
ngOnInit(): void {
  throw new Error('Method not implemented.');
}

pensamento : Pensamento = {
  id: 1,
  conteudo: 'Aprendendo Angular',
  autoria: 'Dev',
  modelo: ''
}


  criarPensamento() {
    alert('Criando pensamento. Uau!');
  }

  cancelar() {
    this.pensamento.conteudo = '';
    this.pensamento.autoria = '';
    console.log('Cancelado.');
  }
}
