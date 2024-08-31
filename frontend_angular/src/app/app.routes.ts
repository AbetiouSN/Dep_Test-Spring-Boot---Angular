import { Routes } from '@angular/router';
import {UserComponentComponent} from "./user-component/user-component.component";
import {AjouterComponent} from "./ajouter/ajouter.component";
import {ListeComponent} from "./liste/liste.component";

export const routes: Routes = [
  { path: '', redirectTo: 'ab', pathMatch: 'full' },
  { path: 'home', component: UserComponentComponent },
  { path: 'ajouter', component: AjouterComponent},
  { path: 'liste', component: ListeComponent},

];
