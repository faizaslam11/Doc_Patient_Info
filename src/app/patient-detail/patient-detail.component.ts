import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HospitalService } from '../hospital.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
  patient : any
  x: any
  constructor(private http : HospitalService) { }

  ngOnInit(): void {

  }

  onSubmit(data : NgForm): void
  {
    this.x=1;
    this.patient= this.http.getPatient(data.value.id).subscribe(data=> this.patient=data);
  }
}
