import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HospitalService } from '../hospital.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
 doctors : any
  constructor(private http: HospitalService) {
    this.doctors= this.http.getDoctors().subscribe(data=> this.doctors=data) }

  ngOnInit(): void {
  }

  onSubmit(data : NgForm)
  {
    this.http.addPatient(data.value).subscribe();
    alert(data.value.patientName+" details Added");
  }
}