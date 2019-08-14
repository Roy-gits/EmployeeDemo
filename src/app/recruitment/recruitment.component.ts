import { Component, OnInit, TemplateRef } from '@angular/core';
import { Candidates } from './candidates';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css']
})
export class RecruitmentComponent implements OnInit {
  newItem: any = {};

  updatedItem;
  IsForUpdate = false;
  status = ['initial', 'gd','tech','hr','final'];



  constructor(private _dialog:MatDialog) { }

  ngOnInit() {
  }



  activeList = ["Walk Dog"];

  emplist : Candidates[] = [

    {id: '1', name: 'Sudhansu Bhattacharyya', age: '23', education: 'BE(CSE)', exp: '1yr', place: 'Bijapur', status:'gd' },
    {id: '2', name: 'Ramesh Yadav', age: '24', education: 'BE(IS)', exp: '2yr', place: 'Bellari', status:'tech' },
    {id: '3', name: 'Kulprit singh', age: '26', education: 'BE(CSE)', exp: '3yr', place: 'Punjab', status:'hr' },
    {id: '4', name: 'Suryaprakash', age: '23', education: 'BE(E&C)', exp: 'fresher', place: 'Beagavi', status:'final' },
    {id: '5', name: 'Gowrish', age: '27', education: 'BE(CSE)', exp: '3yr', place: 'Bangalore', status:'initial' }

  ];


   gdround = [{}];
   technical  = [{}];
   hr  = [{ }];
   final  = [{ }];


   //group = this.emplist[].status;

   onEditClick(i, templateRef: TemplateRef<any>) {
    // this._route.navigate(['editemployee',item.Id])
    this.newItem.name = this.emplist[i].name;
    this.newItem.age = this.emplist[i].age;
    this.newItem.education = this.emplist[i].education;
    this.newItem.exp = this.emplist[i].exp;
    this.newItem.place = this.emplist[i].place;
    this.newItem.status = this.emplist[i].status;
    this.updatedItem = i;
    this.IsForUpdate = !this.IsForUpdate;
    let DialogConfig = new MatDialogConfig;
    DialogConfig.disableClose = true;
    this._dialog.open(templateRef,DialogConfig);
  }


  OnCancel(){
    this._dialog.closeAll();

    //this._route.navigate(["/employees"]);

  }
}
