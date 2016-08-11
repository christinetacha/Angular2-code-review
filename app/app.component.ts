import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Jackpot Record Inventory</h1>
    <h3 *ngFor="#album of albums"> {{ album.name }} </h3>
  </div>
  `
})

export class AppComponent {
  public album: Album[];
  constructor() {
    this.albums = [
      new Album("Red", 0),
      new Album("Blue", 1),
      new Album("Yellow", 2)
    ];
  }
}

export class Album {
  public album: boolean = false;
  constructor(public name: string, public artist: string, public price: number, public genre: string) {

  }
}
