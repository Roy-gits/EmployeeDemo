import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css']
})
export class RecruitmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  activeList = ["Walk Dog"]
  emplist = [
    {id: '1', name: 'Sudhansu Bhattacharyya', age: '23', education: 'BE(CSE)', exp: '1yr', place: 'Bijapur' },

    {id: '2', name: 'Ramesh Yadav', age: '24', education: 'BE(IS)', exp: '2yr', place: 'Bellari' },

    {id: '3', name: 'Kulprit singh', age: '26', education: 'BE(CSE)', exp: '3yr', place: 'Punjab' },

    {id: '4', name: 'Suryaprakash', age: '23', education: 'BE(E&C)', exp: 'fresher', place: 'Beagavi' },

    {id: '5', name: 'Gowrish', age: '27', education: 'BE(CSE)', exp: '3yr', place: 'Bangalore' }];


   Hyderabad = ['Dr. Amit Maydeo', 'Dr. Ashok Seth', 'Dr.Ramachandra'];
   Delhi  = ['Dr.Vikramaditya', 'Dr.Vikram', 'Dr.Rajiv'];

}
