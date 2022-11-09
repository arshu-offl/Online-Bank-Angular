import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChequebookRequestComponent } from './chequebook-request/chequebook-request.component';
import { ChangeAtmpinComponent } from './change-atmpin/change-atmpin.component';


const routes: Routes = [
  { path: 'chequebookRequest', component: ChequebookRequestComponent},
  { path: 'changeAtmpin', component: ChangeAtmpinComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
