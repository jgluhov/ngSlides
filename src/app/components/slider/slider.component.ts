import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewContainerRef, ViewChild, AfterViewInit, ComponentFactory, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ISlide } from '../../interfaces/slide';
import { SlideTypesEnum } from 'src/app/enums/slide-types.enum';
import { SlideTextComponent } from '../slide-text/slide-text.component';
import { SlideMode } from '../../enums/slide-mode';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() presentation;
  @ViewChild('container', { read: ViewContainerRef }) _vcr;

  constructor(
    private dataService: DataService,
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
  }

  handleChangeSlide(slide: ISlide) {
    this.renderSlide(slide);
  }

  handleChangeMode(mode: SlideMode) {
    console.log(mode);
  }

  renderSlide({elements}: ISlide) {
    if (!elements) {
      return;
    }

    this._vcr.clear();

    elements
      .filter(el => el.type === SlideTypesEnum.TEXT)
      .map(textElement => {
        const factory = this.resolver.resolveComponentFactory(SlideTextComponent);
        const slideTextComponent: ComponentRef<SlideTextComponent> = this._vcr.createComponent(factory);
        slideTextComponent.instance.element = textElement;
      });
  }
}
