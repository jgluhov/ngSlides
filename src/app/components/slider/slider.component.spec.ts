import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderComponent } from './slider.component';
import { SlideSelectorComponent } from '../slide-selector/slide-selector.component';
import { ISlide } from '../../interfaces/slide';
import { FormsModule } from '@angular/forms';
import { SlideModeComponent } from '../slide-mode/slide-mode.component';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        SliderComponent,
        SlideSelectorComponent,
        SlideModeComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
    component.presentation = {
      slides: [{} as ISlide]
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
