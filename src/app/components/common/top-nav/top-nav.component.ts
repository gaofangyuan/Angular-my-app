import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  @ViewChild('nav') nav:any;
  constructor() { }

  ngOnInit(): void {
  }

  run() {
    console.log(this.nav.nativeElement)
  }

}
