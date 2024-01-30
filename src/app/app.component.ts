import { Component, OnInit } from '@angular/core';
import { BackendService } from './backend.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  all:any;

  constructor(private backendService : BackendService){}

  ngOnInit(): void {
    this.backendService.getMessage().subscribe(response =>{
      this.all = response;
    })
  }
  title = 'template-angular';

}
