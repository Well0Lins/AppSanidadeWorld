import { Component } from '@angular/core';
import { HomePageComponent } from "./features/home-page/home-page.component";

@Component({
  selector: 'app-root',
  imports: [ HomePageComponent],
  template: `
  <app-home-page></app-home-page>
  `,
})
export class AppComponent {}
