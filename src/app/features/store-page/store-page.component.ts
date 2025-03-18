import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-store-page',
  imports: [CommonModule, ],
  templateUrl: './store-page.component.html',
  styleUrl: './store-page.component.scss'
})
export class StorePageComponent implements OnInit{
  produtos = [
    {
      imagemPrincipal: 'https://via.placeholder.com/300x200?text=Produto+1',
      imagemSecundaria: 'https://via.placeholder.com/300x200?text=Produto+1+Detalhe',
      lojaLink: 'https://www.exemplo.com/loja/produto1'
    },
    {
      imagemPrincipal: 'https://via.placeholder.com/300x200?text=Produto+2',
      imagemSecundaria: 'https://via.placeholder.com/300x200?text=Produto+2+Detalhe',
      lojaLink: 'https://www.exemplo.com/loja/produto2'
    },
    {
      imagemPrincipal: 'https://via.placeholder.com/300x200?text=Produto+3',
      imagemSecundaria: 'https://via.placeholder.com/300x200?text=Produto+3+Detalhe',
      lojaLink: 'https://www.exemplo.com/loja/produto3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
