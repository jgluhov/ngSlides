import { TestBed } from '@angular/core/testing';
import { CompaignService } from './compaign.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CompaignService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', () => {
    const service: CompaignService = TestBed.get(CompaignService);
    expect(service).toBeTruthy();
  });
});
