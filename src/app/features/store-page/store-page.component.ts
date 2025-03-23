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
      imagemPrincipal: 'https://img.freepik.com/fotos-premium/um-manequim-com-uma-camiseta-branca_886336-1346.jpg',
      lojaLink: 'https://www.exemplo.com/loja/produto1'
    },
    {
      imagemPrincipal: 'https://img.freepik.com/fotos-premium/um-manequim-com-uma-camiseta-branca_886336-1346.jpg',
      lojaLink: 'https://www.exemplo.com/loja/produto2'
    },
    {
      imagemPrincipal: 'https://img.freepik.com/fotos-premium/um-manequim-com-uma-camiseta-branca_886336-1346.jpg',
      lojaLink: 'https://www.exemplo.com/loja/produto3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
