import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { RequestsComponent } from './requests/requests.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpModule } from '@angular/http';
import { ElevatorService } from './elevator.service';




@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    RequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    MatSnackBarModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [ElevatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
