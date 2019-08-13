import { Component, OnInit, TemplateRef } from '@angular/core';
import { EmpData } from './employee';
import { EmployeedataService } from './employeedata.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/';
import { AddEmployeeComponent } from './add-employee/add-employee.component';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  emp: EmpData[] = []; // new Array();
  newItem: any = {};
  updatedItem;
  IsForUpdate = false;

  status = ['offline', 'online'];
  constructor(private _empdata: EmployeedataService, private _route: Router,
              private _dialog: MatDialog) { }

  ngOnInit() {

    this.emp = this._empdata.getemp();
  }
delTask(item: EmpData) {
  this._empdata.deleteemp(item);
}

onAddEmp() {
// this._route.navigate(['/addemployee'])
this._dialog.open(AddEmployeeComponent);
}

// @ViewChild('secondDialog', { static: true }) secondDialog: TemplateRef<any>;
// openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
//   this.dialog.open(templateRef);
// }



onEditClick(i, templateRef: TemplateRef<any>) {
  // this._route.navigate(['editemployee',item.Id])
  this.newItem.id = this.emp[i].Id;
  this.newItem.name = this.emp[i].Name;
  this.newItem.department = this.emp[i].Department;
  this.newItem.status = this.emp[i].Status;
  this.updatedItem = i;
  this.IsForUpdate = !this.IsForUpdate;
  let DialogConfig = new MatDialogConfig;
  DialogConfig.disableClose = true;
  this._dialog.open(templateRef,DialogConfig);
}

updateemp() {

  const data = this.updatedItem;
  for (let i = 0; i < this.emp.length; i++) {
      if (i == data) {
        this.emp[i].Id = this.newItem.id;
        this.emp[i].Name = this.newItem.name;
        this.emp[i].Department = this.newItem.department;
        this.emp[i].Status = this.newItem.Status;
      }
    }
  this.IsForUpdate = false;
  this.newItem = {};
  let DialogConfig = new MatDialogConfig;
DialogConfig.disableClose = true;
  alert('Data Uploaded Successfully!');
  this._dialog.closeAll();

}

OnCancel(){
  this.ngOnInit();
  this._dialog.closeAll();

  this._route.navigate(["/employees"]);

}




}
