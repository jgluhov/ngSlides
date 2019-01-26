import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideTextComponent } from './slide-text.component';
import { ISlideElement } from 'src/app/interfaces/slide-element';

describe('SlideTextComponent', () => {
  let component: SlideTextComponent;
  let fixture: ComponentFixture<SlideTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideTextComponent);
    component = fixture.componentInstance;
    component.element = {
      layout: {},
      html: {}
    } as ISlideElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
