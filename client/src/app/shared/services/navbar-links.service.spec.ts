import { TestBed } from '@angular/core/testing';

import { NavbarLinksService } from './navbar-links.service';

describe('NavbarLinksService', () => {
  let service: NavbarLinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarLinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
