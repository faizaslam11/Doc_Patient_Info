import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientListComponent } from './patient-list/patient-list.component';

const routes: Routes = [
  { path: 'doctors', component : DoctorListComponent},
  { path: 'patients', component : PatientListComponent},
  { path: 'addDoctor', component : AddDoctorComponent},
  { path : 'addPatient', component : AddPatientComponent},
  { path : 'search', component : PatientDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponet= [
  DoctorListComponent, 
  PatientListComponent, 
  AddDoctorComponent, 
  AddPatientComponent,
  PatientDetailComponent

]
