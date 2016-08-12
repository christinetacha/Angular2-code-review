import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <div class="container">
      <form>
      <h3>Input your meal:</h3>
      </form>
    </div>
  </div>
  `
})

export class AppComponent {
}

export class Model {
  title:string = "";
  calories:string = "";
  details:string = "";
}
