import { Enseignant } from '../models/enseignant.model';
import { Subject } from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import {OnInit} from '@angular/core';

export class EnseignantService  implements  OnInit {
  private enseignants: Enseignant[];
  enseignantSubject = new Subject<Enseignant[]>();

  constructor(private http:HttpClient) {}

  emitEnseignants() {
    this.enseignantSubject.next(this.enseignants.slice());
  }

  addEnseignant(enseignant: Enseignant) {
    this.enseignants.push(enseignant);
    this.emitEnseignants();
  }

  getEnseignantsFromServer() {
    this.httpClient
      .get<Enseignant[]>('https://"http://localhost:8080/listEnseignant')
      .subscribe(
        (response) => {
          this.enseignants = response;
          this.emitEnseignants();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}
