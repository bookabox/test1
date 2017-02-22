import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-header-component',
  templateUrl: './nav-header-component.component.html',
  styleUrls: ['./nav-header-component.component.css']
})
export class NavHeaderComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public isCollapsed:boolean = true;
}
