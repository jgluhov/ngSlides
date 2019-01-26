import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './components/slider/slider.component';
import { SlideSelectorComponent } from './components/slide-selector/slide-selector.component';
import { FormsModule } from '@angular/forms';
import { SlideTextComponent } from './components/slide-text/slide-text.component';
import { SlideModeComponent } from './components/slide-mode/slide-mode.component';

@NgModule({
  entryComponents: [
    SlideTextComponent
  ],
  declarations: [
    AppComponent,
    SliderComponent,
    SlideSelectorComponent,
    SlideTextComponent,
    SlideModeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
