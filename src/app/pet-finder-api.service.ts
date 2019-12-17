import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetFinderApiService {

  constructor(private http:HttpClient) { }

  getPets() {
    return this.http.get("http://localhost:8080/pets");
  }

}
