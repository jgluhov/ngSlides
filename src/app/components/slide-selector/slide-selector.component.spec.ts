import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideSelectorComponent } from './slide-selector.component';
import { ISlide } from '../../interfaces/slide';
import { FormsModule } from '@angular/forms';

describe('SlideSelectorComponent', () => {
  let component: SlideSelectorComponent;
  let fixture: ComponentFixture<SlideSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        SlideSelectorComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideSelectorComponent);
    component = fixture.componentInstance;
    component.slides = [{} as ISlide];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
