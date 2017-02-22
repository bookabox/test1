import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-component',
  templateUrl: './faq-component.component.html',
  styleUrls: ['./faq-component.component.css']
})
export class FaqComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public tab: number = 0;

  setTab(num: number) {
    console.log("I am called");
    this.tab = num;
  }

  isSelected(num: number) {
    return this.tab === num;
  }
}
