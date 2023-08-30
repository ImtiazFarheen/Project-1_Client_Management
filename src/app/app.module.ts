import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ViewClientComponent } from './view-client/view-client.component';
import { ViewScheduleComponent } from './view-schedule/view-schedule.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AddClientComponent,
    ViewClientComponent,
    ViewScheduleComponent,
    AddScheduleComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path:'addClient', component:AddClientComponent},
      { path:'viewClient', component:ViewClientComponent},
      { path:'addSchedule', component:AddScheduleComponent},
      { path:'viewSchedule', component:ViewScheduleComponent},
      { path:'welcome', component:WelcomeComponent},
      { path:'', redirectTo:'home', pathMatch:'full'},
      { path:'**', redirectTo:'home', pathMatch:'full'}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
