import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { ShopRoutingModule } from './shop-routing.module';

import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

@NgModule({
  declarations: [ShopComponent, ProductItemComponent, ProductDetailComponent],
  imports: [CommonModule, ShopRoutingModule, SharedModule],
  exports: [ShopComponent],
})
export class ShopModule {}
