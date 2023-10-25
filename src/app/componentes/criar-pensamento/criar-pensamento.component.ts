import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit{

pensamento = {
  id: '1',
  conteudo: 'Aprendendo Angular',
  autoria: 'Dev',
  modelo: ''
}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
