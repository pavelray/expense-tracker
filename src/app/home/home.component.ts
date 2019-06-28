import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  element: any;

  ngAfterViewInit(): void {
    this.element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  constructor() { }

  ngOnInit() {
  }

  scrollToElement($element): void {
    console.log($element);
    this.element = $element;
  }


}
