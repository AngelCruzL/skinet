import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { ShopRoutingModule } from './shop-routing.module';

import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './components/product-item/product-item.component';

@NgModule({
  declarations: [ShopComponent, ProductItemComponent],
  imports: [CommonModule, ShopRoutingModule, SharedModule],
  exports: [ShopComponent],
})
export class ShopModule {}
