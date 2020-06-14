import { Component, OnInit } from '@angular/core';
import PatientInfoService from '../shared/api/PatientInfoService';
import PatientInfo from '../shared/models/PatientInfo';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']

})
export default class PatientListComponent implements OnInit {
  patienLists: Array<PatientInfo>;
  displayedColumns: string[] = ['fullName', 'email', 'dateOfBirth', 'address','edit'];
  dataSource = this.patienLists;

  constructor(private patientInfoService: PatientInfoService) {}

  ngOnInit() {
    this.patientInfoService.getAll().subscribe(data => {
      this.patienLists = data;
      
    });
  }
}