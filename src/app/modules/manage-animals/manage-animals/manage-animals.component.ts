import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/animal.interface';
import { AnimalService } from 'src/app/service/animal.service';

@Component({
  selector: 'manage-animals',
  templateUrl: './manage-animals.component.html',
  styleUrls: ['./manage-animals.component.css']
})
export class ManageAnimalsComponent implements OnInit {

  public animalsList: Animal[] = [];

  constructor( private animalService: AnimalService ) {}


  ngOnInit(): void {
    this.animalsList = this.animalService.getAnimalsList();
  }
}
