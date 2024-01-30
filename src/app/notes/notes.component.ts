import { BackendService } from '../backend.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {

  all_notes:any;

  constructor(private backendService : BackendService){}

  ngOnInit(): void {
    this.backendService.get_all_notes().subscribe(response =>{
      this.all_notes = response;
    })
  }

}
