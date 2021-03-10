import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>{{title}}</h1>
      <trainerPage></trainerPage>
    </div>
  `
})
export class AppComponent {
  title = 'pokemon-trainer';
}
