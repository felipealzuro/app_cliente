import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ClientsComponent } from './clients/clients.component';
import { MenuComponent } from './menu/menu.component';



@Component({
  selector: 'app-root',
  imports: [ MenuComponent,ClientsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app_client';
}
