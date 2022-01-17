import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  url= "http://localhost:8080";
  constructor(private http:HttpClient) { }

  getDoctors(){
    return this.http.get(this.url+"/getDoctors");
    //returns List of all Doctor;
  }
  getDoctor(id: string){
    return this.http.get(this.url+"/getDoctor/?id="+id);
    //returd doctor by Id;
  }
  
  getPatients(){
    return this.http.get(this.url+"/getPatients");
  }

  getPatient(id: string){
    //return doctor by Id;
    return this.http.get(this.url+"/getPatient/?id="+id);
  }

  addDoctor(data: any){
    return this.http.post(this.url+'/addDoctor', data);
  }

  addPatient(data: any){
    return this.http.post(this.url+'/addPatient', data);
  }
  

}
