import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChequebookRequestComponent } from './chequebook-request/chequebook-request.component';

const routes: Routes = [
  { path: 'chequebookRequest', component: ChequebookRequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
