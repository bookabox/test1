import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-it-works-component',
  templateUrl: './how-it-works-component.component.html',
  styleUrls: ['./how-it-works-component.component.css']
})
export class HowItWorksComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  public tab: number = 0;

  setTab(num: number) {
    this.tab = num;
  }

  isSelected(num: number) {
    return this.tab === num;
  }  
}