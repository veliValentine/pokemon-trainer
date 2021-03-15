import { Component } from '@angular/core';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-root',
  template: `
    <navBar></navBar>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
