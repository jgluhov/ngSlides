import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SliderComponent } from './components/slider/slider.component';
import { SlideSelectorComponent } from './components/slide-selector/slide-selector.component';
import { FormsModule } from '@angular/forms';
import { SlideModeComponent } from './components/slide-mode/slide-mode.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        SliderComponent,
        SlideSelectorComponent,
        SlideModeComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
