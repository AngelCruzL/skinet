import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestErrorComponent } from '@core/pages/test-error/test-error.component';
import { NotFoundComponent } from '@core/pages/not-found/not-found.component';
import { ServerErrorComponent } from '@core/pages/server-error/server-error.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./modules/shop/shop.module').then(m => m.ShopModule),
  },
  {
    path: 'test-error',
    component: TestErrorComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: 'server-error',
    component: ServerErrorComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
