import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TaskComponent } from './components/task/task.component';
import { NavBarOptionComponent } from './components/nav-bar-option/nav-bar-option.component';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { PanelComponent } from './components/panel/panel.component';
import { NewPanelComponent } from './components/new-panel/new-panel.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { UserTypePickerComponent } from './components/user-type-picker/user-type-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    TaskComponent,
    NavBarOptionComponent,
    MainPanelComponent,
    PanelComponent,
    NewPanelComponent,
    NewTaskComponent,
    UserTypePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
