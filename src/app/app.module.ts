import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './components/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';
import { WarningAlertComponent } from './components/warning-alert/warning-alert.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { CockpitComponent } from './components/cockpit/cockpit.component';
import { ServerElementComponent } from './components/server-element/server-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    AssignmentComponent,
    CockpitComponent,
    ServerElementComponent    
  ],
  
  imports: [ BrowserModule, FormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
