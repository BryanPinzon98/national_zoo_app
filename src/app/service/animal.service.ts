import { Injectable } from "@angular/core";

import { v4 as uuid } from 'uuid';

import { Animal } from "../interfaces/animal.interface";

@Injectable({ providedIn: 'root' })
export class AnimalService {


  public animalsList: Animal[] = [];


  addAnimal(animal: Animal): void {

    const newAnimal: Animal = { id: uuid(), ...animal }
    this.animalsList.push(newAnimal);

    localStorage.setItem('animalsList', JSON.stringify(this.animalsList));
  }

  getAnimalsList(): Animal[] {

    this.animalsList = JSON.parse(localStorage.getItem('animalsList')!);
    return this.animalsList;
  }

}
