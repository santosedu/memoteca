import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent {
  listaPensamentos = [
      {
        conteudo: 'Minha função é passar informações para o componente filho',
        autoria: 'Componente Pai',
        modelo: 'modelo1'
      },
      {
        conteudo: 'Minha propriedade é decorada com @Input()',
        autoria: 'Componente filho',
        modelo: 'modelo3'
      }
  ];
}
