import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
//import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule  } from '@angular/material/table';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

//import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { AppComponent } from './app.component';
//import { HomeComponent } from './home/home.component';

//import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import PatientListComponent from './patient-list/patient-list.component';
import PatientInfoEditComponent from './patient-info-edit/patient-info-edit.component';
import PatientInfoService from './shared/api/PatientInfoService';

const appRoutes: Routes = [
  { path: '', redirectTo: '/patient-list', pathMatch: 'full' },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  {
    path: 'patient-list',
    component: PatientListComponent
  },
  {
    path: 'patient-add',
    component: PatientInfoEditComponent
  },
  {
    path: 'patient-edit/:id',
    component: PatientInfoEditComponent
  },
  // {
  //   path: 'implicit/callback',
  //   component: OktaCallbackComponent
  // }
];

// const config = {
//   issuer: 'https://{yourOktaDomain}/oauth2/default',
//   redirectUri: 'http://localhost:4200/implicit/callback',
//   clientId: '{clientId}'
// };

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    PatientInfoEditComponent,
    //HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
   // OktaAuthModule.initAuth(config)
  ],
  providers: [
    PatientInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
