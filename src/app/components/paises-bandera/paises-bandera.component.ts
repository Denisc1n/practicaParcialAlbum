import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pais } from '../../classes/pais';

@Component({
  selector: 'app-paises-bandera',
  templateUrl: './paises-bandera.component.html',
  styleUrls: ['./paises-bandera.component.css'],
})
export class PaisesBanderaComponent implements OnInit {
  @Input() filteredCountriesInput: [];
  @Output() selectedCountry: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  selectCountryForEdit(pais: any): void {
    pais.isEditing = true;
    this.selectedCountry.emit(pais);
  }
  selectCountryForView(pais: any): void {
    pais.isEditing = false;
    this.selectedCountry.emit(pais);
  }
}
