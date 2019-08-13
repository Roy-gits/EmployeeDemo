import { Component, OnInit } from '@angular/core';
import { EmployeedataService } from '../employeedata.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  status = ['offline','online'];
model = {Id:'',Name:'',Department:'',Status:'pending'};
  constructor(private _empkdata:EmployeedataService,private _router:Router,
    private _dialog:MatDialog) { }

  ngOnInit() {
  }
addemp(){
  this._empkdata.addEmployee(this.model);
  alert("Data Added!");
  this._dialog.closeAll();
  //this._router.navigate(['']);
}

OnCancel(){
  alert("Are you Sure want to Cancel??");
  this._dialog.closeAll();
  //this._router.navigate(['']);
}

}
