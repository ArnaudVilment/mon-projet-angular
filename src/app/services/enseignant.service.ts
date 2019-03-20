import { Enseignant } from '../models/enseignant.model';
import { Subject } from 'rxjs/Subject';

export class EnseignantService {
  private enseignants: Enseignant[];
  enseignantSubject = new Subject<Enseignant[]>();

  emitEnseignants() {
    this.enseignantSubject.next(this.enseignants.slice());
  }

  addEnseignant(enseignant: Enseignant) {
    this.enseignants.push(enseignant);
    this.emitEnseignants();
  }

  getEnseignantsFromServer() {
    this.httpClient
      .get<any[]>('https://"http://localhost:8080/listEnseignant/enseignants.json')
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
