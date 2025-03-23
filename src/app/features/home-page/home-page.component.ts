import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/componentes/footer/footer.component";
import { NavbarComponent } from "../../shared/componentes/navbar/navbar.component";
import { StorePageComponent } from "../store-page/store-page.component";
import { CardComponent } from "../../shared/componentes/card/card.component";
import { ModalEventsComponent } from "../modal-events/modal-events.component";

@Component({
  selector: 'app-home-page',
  imports: [
    CommonModule,
    FooterComponent,
    NavbarComponent,
    StorePageComponent,
    CardComponent,
    ModalEventsComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
