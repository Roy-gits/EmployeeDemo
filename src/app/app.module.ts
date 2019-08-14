import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { routing } from './app.rote';
import { EditemployeeComponent } from './employee/editemployee/editemployee.component';
import {MatDialogModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import { FilterPipe } from './recruitment/filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    EditemployeeComponent,
    MenuComponent,
    RecruitmentComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    MatDialogModule,
    BrowserAnimationsModule,
    MatCardModule,
    DragDropModule,
    MatButtonModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
