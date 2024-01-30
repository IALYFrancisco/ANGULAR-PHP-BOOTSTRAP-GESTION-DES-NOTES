import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private backendUrl = 'http://localhost/GESTION_NOTE/liste-etudiant.php';
  private liste_matiere_url = 'http://localhost/GESTION_NOTE/liste-matieres.php';
  private liste_note_url = 'http://localhost/GESTION_NOTE/liste-notes.php';
  private deleteStudentUrl = 'http://localhost/GESTION_NOTE/student/delete_student.php';
  

  constructor( private http : HttpClient) { }

  getMessage() : Observable<any[]> {
    return this.http.get<any[]>(this.backendUrl);
  }

  
  get_all_matiere() : Observable<any[]> {
    return this.http.get<any[]>(this.liste_matiere_url);
  }

  get_all_notes() : Observable<any[]> {
    return this.http.get<any[]>(this.liste_note_url);
  }


  addStudent(employee: Student): Observable<Student>{
    return this.http.post<Student>(this.backendUrl, employee, {
        headers: new HttpHeaders({
          'Accept': 'text/html, application/xhtml+xml, */*',
          'Content-Type': 'application/x-www-form-urlencoded'
        }),
        
      })
    }
    
  
}

export interface Student {
  num_et:string;
  nom:string;
  niveau:string;
}