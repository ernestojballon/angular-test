import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularJestSetup';
  sum(a: number, b: number) {
    return a + b;
  }
  rest(c:number, b: number) {
    return c - b;
  }
}
