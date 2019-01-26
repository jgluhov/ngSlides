import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-slide-mode',
  templateUrl: './slide-mode.component.html',
  styleUrls: ['./slide-mode.component.scss']
})
export class SlideModeComponent implements OnInit {
  // @Output() changeMode = new EventEmitter();
  modes = [
    'edit',
    'view'
  ];
  constructor() { }

  ngOnInit() {
  }

}
