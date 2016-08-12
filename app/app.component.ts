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

@Component({
  selector: 'my-input',
  template: `
  <div class="ui raised segment">
    <h2 class="ui header">Enter Details:</h2>
    <form #f="ngForm"(ngSumbit)="onSubmit(f.value)" class="ui form">
    <div class="field">
      <label for="mealName">Name:</label>
      <input type="text" id="mealName" placeholder="name" ngModel>
    </div>
    <button type="submit" class="ui button">Submit</button>
  </div>
  `
})

export class MyInput {
  onClick(value) {
    console.log(value);
  }
}



// export class MealInput {
//   title:string = "";
//   calories:string = "";
//   details:string = "";
// }
