import { Component, OnInit } from '@angular/core';
import { BackendService, Student } from '../backend.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {
  constructor(
    private backendService : BackendService,
    private http : HttpClient,
    private activatedRoute : ActivatedRoute
    ){}

  //Méthodes

  all:any;
  addStudent:FormGroup = new FormGroup({});
  addMessage:string = '';
  arror:any;
  formData = {
    numeroEtudiant : '',
    nomEtudiant : '',
    niveauEtudiant : ''
  }

  submitForm(){
    this.http.post('http://localhost/GESTION_NOTE/add-etudiant.php', this.formData).subscribe(response => console.log(response));
  }

  refresh(){
    window.location.reload();
  }
  ngOnInit(): void {
    this.backendService.getMessage().subscribe(response =>{
      this.all = response;
    });

    let studentId = this.activatedRoute.snapshot.params['studentId'];

    console.log('studentId', studentId);

  }

}
