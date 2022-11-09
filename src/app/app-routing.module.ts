import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckBalanceComponent } from './check-balance/check-balance.component';
import { EventsComponent } from './events/events.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { OpenFdComponent } from './open-fd/open-fd.component';

const routes: Routes = [
  { path: 'fundTransfer', component: FundTransferComponent },
  { path: 'checkBalance', component: CheckBalanceComponent },
  { path: 'events', component: EventsComponent },
  { path: 'openNewFd', component: OpenFdComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
