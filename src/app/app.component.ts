import { Component } from '@angular/core';
import { PetFinderApiService } from './pet-finder-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  mPets: Array<any>;
  title = 'petfinder-app';

  constructor(private petfinderapi:PetFinderApiService){ 
    console.log('component constructor called'); 
  }

  ngOnInit() {
    //load pets
    this.petfinderapi.getPets().subscribe(data => this.mPets = data['animals']);
  }
}
