import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PathLocationStrategy } from '@angular/common';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { MatieresComponent } from './matieres/matieres.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  {path:'', redirectTo:'accueil', pathMatch:'full'},
  {path:'accueil', component:AccueilComponent},
  {path:'etudiant', component:EtudiantComponent},
  {path:'matieres', component:MatieresComponent},
  {path:'notes', component:NotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
