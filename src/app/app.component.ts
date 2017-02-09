import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  leftList: any[] = [
    { id: 1, name: 'Moscow' },
    { id: 2, name: 'Saint Petersburg' },
    { id: 3, name: 'Novosibirsk' },
    { id: 4, name: 'Vladivostok' },
    { id: 5, name: 'Krasnodar' },
    { id: 6, name: 'Kaliningrad' },
  ];

  rightList: any[] = [
    { id: 7, name: 'Krasnoyarsk' }
  ];

  title = 'It\'s simple dual-list component!';
}
