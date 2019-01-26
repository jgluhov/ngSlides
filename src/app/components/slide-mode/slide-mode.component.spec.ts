import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideModeComponent } from './slide-mode.component';

describe('SlideModeComponent', () => {
  let component: SlideModeComponent;
  let fixture: ComponentFixture<SlideModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
