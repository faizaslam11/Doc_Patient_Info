import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients!: any;
  constructor(private http: HospitalService) { }
  ngOnInit() {
    this.patients= this.http.getPatients().subscribe(data=> this.patients=data);
  }


}
