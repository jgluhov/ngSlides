import { Component, OnInit } from '@angular/core';
import { CompaignService } from './services/compaign.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private compaignService: CompaignService) {
  }

  ngOnInit() {
    this.compaignService.getCompaign().subscribe(console.log);
  }
}
