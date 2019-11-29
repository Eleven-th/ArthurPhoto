import { TestBed, inject } from '@angular/core/testing';

import { Service1Service } from './service1.service';

describe('Service1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:[Service1Service]
  }));

  it('should be created', () => {
    const service: Service1Service = TestBed.get(Service1Service);
    expect(service).toBeTruthy();
  });
});



