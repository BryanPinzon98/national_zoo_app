import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Animal } from 'src/app/interfaces/animal.interface';
import { AnimalService } from 'src/app/service/animal.service';


@Component({
  selector: 'animal-register-create-animal',
  templateUrl: './create-animal.component.html',
  styles: [
  ]
})
export class CreateAnimalComponent {

  @ViewChild('txtNombreInput')
  public nombreInput?: ElementRef<HTMLInputElement>;

  @ViewChild('txtReinoInput')
  public reinoInput?: ElementRef<HTMLInputElement>;

  @ViewChild('txtFiloInput')
  public filoInput?: ElementRef<HTMLInputElement>;

  @ViewChild('txtClaseInput')
  public claseInput?: ElementRef<HTMLInputElement>;

  @ViewChild('txtOrdenInput')
  public ordenInput?: ElementRef<HTMLInputElement>;



  @Output()
  public onNewAnimal: EventEmitter<Animal> = new EventEmitter();

  constructor(private animalService: AnimalService) { }


  public animal: Animal = {
    nombre: '',
    reino: '',
    filo: '',
    clase: '',
    orden: ''
  }

  saveAnimal(): void {

    if (
      this.nombreInput?.nativeElement.value === '' ||
      this.reinoInput?.nativeElement.value === '' ||
      this.filoInput?.nativeElement.value === '' ||
      this.claseInput?.nativeElement.value === '' ||
      this.ordenInput?.nativeElement.value === ''
    ) {
      return;
    }

    this.animalService.addAnimal(this.animal);
    this.cleanInputs();
  }

  cleanInputs(): void {
    this.animal = {
      nombre: '',
      reino: '',
      filo: '',
      clase: '',
      orden: ''
    }
  }

}
