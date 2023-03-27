import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nameParent = 'Angular 5';
  showArea = 0;
  onClick(number: number) {
    switch (number) {
      case 1:
        this.showArea = 1;
        break;
      case 2:
        this.showArea = 2;
        break;
      case 3:
        this.showArea = 3;
        break;
      default:
        this.showArea = 0;
        break;
    }
  }
}
