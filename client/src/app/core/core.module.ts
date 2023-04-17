import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestErrorComponent } from '@core/pages/test-error/test-error.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ServerErrorComponent } from './pages/server-error/server-error.component';

@NgModule({
  declarations: [TestErrorComponent, NotFoundComponent, ServerErrorComponent],
  imports: [CommonModule],
  exports: [TestErrorComponent],
})
export class CoreModule {}
