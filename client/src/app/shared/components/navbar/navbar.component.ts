import { Component, inject } from '@angular/core';

import { NavbarLinksService } from '../../services/navbar-links.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  #navbarLinksService = inject(NavbarLinksService);
  navbarLinks = this.#navbarLinksService.navbarLinks;
}
