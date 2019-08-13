import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { Routes, RouterModule } from '@angular/router';
import { EditemployeeComponent } from './employee/editemployee/editemployee.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';

const router:Routes=[
  {path: '', redirectTo: '/employees', pathMatch: 'full'},
  {path: 'employees', component: EmployeeComponent},
  {path: 'addemployee', component: AddEmployeeComponent},
  {path: 'editemployee/:id', component: EditemployeeComponent},
  {path: 'recruit', component: RecruitmentComponent}

];

export const routing=RouterModule.forRoot(router);
