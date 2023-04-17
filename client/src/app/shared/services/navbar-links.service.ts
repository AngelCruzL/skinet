import { Injectable } from '@angular/core';

import { NavbarLink } from '@shared/types';

@Injectable({
  providedIn: 'root',
})
export class NavbarLinksService {
  #navbarLinks: NavbarLink[] = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/test-error', label: 'Errors' },
  ];

  constructor() {}

  get navbarLinks(): NavbarLink[] {
    return this.#navbarLinks;
  }
}
