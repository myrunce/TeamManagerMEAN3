import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  gameNum: Number = 1;

  constructor() { }

  ngOnInit() {
  }

  setGameNum(num) {
    this.gameNum = num;
  }
}
