import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  // view='H1';
  lists=['XYZ','ABC','NVC','jhg','PRIYA'];
  ngOnInit(): void {
  }

}
