import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent {
  listaPensamentos: Pensamento[] = [
      {
        id: 1,
        conteudo: 'Minha função é passar informações para o componente filho',
        autoria: 'Componente Pai',
        modelo: 'modelo1'
      },
      {
        id: 2,
        conteudo: 'Minha propriedade é decorada com @Input()',
        autoria: 'Componente filho',
        modelo: 'modelo3'
      },
      {
        id: 3,
        conteudo: 'Estou testando um conteudo com mais de 256 caracteres. Esperto que realmente eu consiga fazer isso, já que não tenho a menor idéia do tamanho desse comentário. Na verdade estou achando bem mais simples e intuitivo aprender Angular come essa professora arretada, a Nay.',
        autoria: 'Eduardo Santos',
        modelo: 'modelo2'
      },
  ];
}
