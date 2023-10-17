import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>{{ title }}</h1>
      <p>Welcome to my Angular web page!</p>
    </div>
  `,
  styles: [`
    .container {  
      text-align: center;
      margin-top: 100px;
    }

    h1 {
      color: #007bff;
    }

    p {
      font-size: 18px;
    }
  `]
})
export class AppComponent {
  title = 'My Angular Web Page';
}
