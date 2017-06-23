import { Routes, RouterModule } from '@angular/router';

import { ClientNewComponent } from './client-new.component';

const routes: Routes = [
  {
    path: '',
    component: ClientNewComponent
  }
];

export const routing = RouterModule.forChild(routes);