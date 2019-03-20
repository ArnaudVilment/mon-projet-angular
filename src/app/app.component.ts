import { Component } from '@angular/core';
import {EnseignantService} from './services/enseignant.service';
import { Observable, Subject } from 'rxjs/Observable';

import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Universite Front';

  isAuth = false;

  constructor(private enseignantService: EnseignantService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer() {
    console.log('On allume tout !');
  }

  onFetch() {
    this.enseignantService.getAppareilsFromServer();
  }
}
