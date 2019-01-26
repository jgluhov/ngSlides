import { Component, OnInit } from '@angular/core';
import { CompaignService } from './services/compaign.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  compaign$: Observable<any>;
  constructor(private compaignService: CompaignService) {
  }

  ngOnInit() {
    this.compaign$ = this.compaignService.getCompaign();
  }
}
