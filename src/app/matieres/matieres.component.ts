import { Component } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.component.html',
  styleUrls: ['./matieres.component.scss']
})
export class MatieresComponent {

  all_matiere:any;

  constructor(private backendService : BackendService){}

  ngOnInit(): void {
    this.backendService.get_all_matiere().subscribe(response =>{
      this.all_matiere = response;
      console.log(this.all_matiere);
    })
  }

}
