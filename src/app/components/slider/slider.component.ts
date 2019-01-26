import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ISlide } from '../../interfaces/slide';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() presentation;
  curretSlide: ISlide;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  handleChangeSlide(slide: ISlide) {
    this.curretSlide = slide;
  }
}
