import { TestBed } from '@angular/core/testing';

import { ServiceContactService } from './service-contact.service';

describe('ServiceContactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceContactService = TestBed.get(ServiceContactService);
    expect(service).toBeTruthy();
  });
});
