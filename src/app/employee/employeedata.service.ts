import { Injectable } from '@angular/core';
import { EmpData } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeedataService {

  constructor() { }

  emp:EmpData[] = [
    new EmpData('1','John','Production', 'online'),
    new EmpData('2','Henry','Quality Control', 'online'),
    new EmpData('3','Margareta','Marketing', 'Offline'),
    new EmpData('4','Ella','Business Dev', 'online'),
    new EmpData('5','Morsh','Design', 'online'),
  ];
  newItem:any={};

  getemp(){
    return this.emp;
  }

  deleteemp(item:EmpData){

    this.emp.splice(this.emp.indexOf(item),1);
    }

    editemp(i){
      this.newItem.id = this.emp[i].Id;
      this.newItem.name = this.emp[i].Department;
      this.newItem.department = this.emp[i].Department;
      this.newItem.status = this.emp[i].Status;
    }

    addEmployee(item:EmpData)
    {
    this.emp.push(item);
    }


    updateEmployee(olditem:EmpData,newitem:EmpData){
      this.emp[this.emp.indexOf(olditem)]=newitem;
    }
}
