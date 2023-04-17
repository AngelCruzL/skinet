import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestErrorComponent } from '@core/components/test-error/test-error.component';

@NgModule({
  declarations: [TestErrorComponent],
  imports: [CommonModule],
  exports: [TestErrorComponent],
})
export class CoreModule {}
