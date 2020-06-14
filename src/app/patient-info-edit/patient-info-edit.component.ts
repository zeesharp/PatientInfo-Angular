import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import PatientInfoService from '../shared/api/PatientInfoService';
import PatientInfo from '../shared/models/PatientInfo';


@Component({
  selector: 'app-patient-info-edit',
  templateUrl: './patient-info-edit.component.html',
  styleUrls: ['./patient-info-edit.component.scss']
})
export default class PatientInfoEditComponent implements OnInit, OnDestroy {
  patientInfo: PatientInfo = new PatientInfo();

  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientInfoService: PatientInfoService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.patientInfoService.get(id).subscribe((patientInfo: any) => {
          if (patientInfo) {
            this.patientInfo = patientInfo;
            this.patientInfo.dateOfBirth = new Date(
              this.patientInfo.dateOfBirth
            ).toISOString();
          } else {
            console.log(
              `patient info with id '${id}' not found, returning to list`
            );
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/patient-list']);
  }

  save(form: any) {
    this.patientInfoService.save(form).subscribe(
      result => {
        this.gotoList();
      },
      error => console.error(error)
    );
  }

  remove(id: number) {
    this.patientInfoService.remove(id).subscribe(
      result => {
        this.gotoList();
      },
      error => console.error(error)
    );
  }
}