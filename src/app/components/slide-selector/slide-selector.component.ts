import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { ISlide } from '../../interfaces/slide';

@Component({
  selector: 'app-slide-selector',
  templateUrl: './slide-selector.component.html',
  styleUrls: ['./slide-selector.component.scss']
})
export class SlideSelectorComponent implements OnInit, OnChanges, OnDestroy {
  @Output() changeSlide = new EventEmitter<ISlide>();
  @Input() slides: ISlide[];
  @Input() startIndex = 0;
  timeoutId: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.slides && changes.slides.currentValue) {
      this.stopAnimation();
      this.animate(changes.slides.currentValue);
    }
  }

  animate = (slides: ISlide[]) => {
    const slide = slides[this.startIndex];

    this.changeSlide.next(slide);
    this.startIndex = ++this.startIndex % slides.length;

    this.timeoutId = setTimeout(this.animate.bind(null, slides), slide.delay * 100);
  }

  stopAnimation() {
    clearTimeout(this.timeoutId);
  }

  ngOnDestroy(): void {
    this.stopAnimation();
  }

}
