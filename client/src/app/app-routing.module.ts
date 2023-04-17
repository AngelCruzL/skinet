import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestErrorComponent } from '@core/components/test-error/test-error.component';

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
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
