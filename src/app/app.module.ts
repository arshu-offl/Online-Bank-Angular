import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { EventsComponent } from './components/events/events.component';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { OpenFDComponent } from './components/open-fd/open-fd.component';
import { FundTransferComponent } from './components/fund-transfer/fund-transfer.component';
import { ToastrModule } from 'ngx-toastr';
import { ChequebookRequestComponent } from './chequebook-request/chequebook-request.component';
import { ChangeAtmpinComponent } from './change-atmpin/change-atmpin.component';
import { CheckBalanceComponent } from './components/check-balance/check-balance.component';

const routes: Routes = [
  { path: 'fundTransfer', component: FundTransferComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'events', component: EventsComponent },
  { path : 'openfd', component : OpenFDComponent },
  { path: 'chequeBook', component: ChequebookRequestComponent },
  { path: 'changeAtmPin', component: ChangeAtmpinComponent },
  { path: 'checkBalance', component: CheckBalanceComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EventsComponent,
    OpenFDComponent,
    FundTransferComponent,
    ChequebookRequestComponent,
    ChangeAtmpinComponent,
    CheckBalanceComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatInputModule,
    HttpClientModule,
    SocialLoginModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '75210115977-h7mnaj5qjcv8jul6568hggjnc2fvul6e.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
