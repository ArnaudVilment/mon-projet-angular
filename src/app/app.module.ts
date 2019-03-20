import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import {EnseignantService} from './services/enseignant.service';
import {FormsModule} from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { EnseignantViewComponent } from './enseignant-view/enseignant-view.component';
import { Routes } from '@angular/router';
import {AuthService} from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'enseignants', component: EnseignantViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: EnseignantViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EnseignantComponent,
    AuthComponent,
    EnseignantViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [EnseignantService, AuthService, EnseignantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
