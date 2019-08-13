import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpData } from '../employee';
import { EmployeedataService } from '../employeedata.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  arr:EmpData[]=[];
  id:string="";
   name:string="";
   department:string="";
   status:string="";


   newItem: any = {};
   updatedItem;

  constructor(private _act:ActivatedRoute, private _data:EmployeedataService) { }

  ngOnInit() {

   this._data.editemp(this.newItem);
  }

}
