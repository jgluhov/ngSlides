import { Component, OnInit, Input } from '@angular/core';
import { ISlideElement } from '../../interfaces/slide-element';

@Component({
  selector: 'app-slide-text',
  templateUrl: './slide-text.component.html',
  styleUrls: ['./slide-text.component.scss']
})
export class SlideTextComponent implements OnInit {
  @Input() element: ISlideElement;
  constructor() { }

  ngOnInit() {
  }

}
