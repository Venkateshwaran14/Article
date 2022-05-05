import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.css']
})
export class QueriesComponent implements OnInit {

  url:string ="https://localhost:7197/Query/GetAll"
  constructor() { }

 ngOnInit(): void {
   this.ngOnInit
 }
}
