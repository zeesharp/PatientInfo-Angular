import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import PatientInfo from '../models/PatientInfo';

@Injectable()
export default class PatientInfoService {
  public PATIENTINFO_API = 'http://localhost:8080/api/PatientInfo';
 // public PATIENTINFO_API = '${this.API}/PatientInfo';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<PatientInfo>> {
    return this.http.get<Array<PatientInfo>>(this.PATIENTINFO_API);
  }

  get(id: string) {
    return this.http.get(`${this.PATIENTINFO_API}/${id}`);
  }

  save(patientInfo: PatientInfo): Observable<PatientInfo> {
    let result: Observable<PatientInfo>;
    if (patientInfo.id) {
      result = this.http.put<PatientInfo>(
        `${this.PATIENTINFO_API}/${patientInfo.id}`,
        patientInfo
      );
    } else {
      result = this.http.post<PatientInfo>(this.PATIENTINFO_API, patientInfo);
    }
    return result;
  }

  remove(id: number) {
    return this.http.delete(`${this.PATIENTINFO_API}/${id.toString()}`);
  }
}