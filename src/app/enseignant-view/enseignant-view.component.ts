import { Component, OnInit } from '@angular/core';
import {EnseignantService} from '../services/enseignant.service';

@Component({
  selector: 'app-enseignant-view',
  templateUrl: './enseignant-view.component.html',
  styleUrls: ['./enseignant-view.component.scss']
})
export class EnseignantViewComponent implements OnInit {



  constructor(private enseignantService: EnseignantService) { }

  ngOnInit() {

  }

}
