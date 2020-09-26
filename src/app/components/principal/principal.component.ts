import { Component, OnInit } from '@angular/core';
import { ObjectLiteralElement } from 'typescript';
import { Pais } from '../../classes/pais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  public countries = new Array();
  public filteredCountries = new Array();
  public selectedCountry: object;
  constructor(private countryService: PaisService) {}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService.getCountries().subscribe((countries: any) => {
      this.countries = countries;
      // console.log(countries);
    });
  }

  filtrarRegion(region) {
    this.filteredCountries = this.countries.filter(
      (pais) => pais.region == region
    );
  }

  handleCountryDetail(dataReceived): void {
    this.selectedCountry = dataReceived;
    console.log(this.selectedCountry);
  }

  editCountry(edition): void {
    console.log(edition);
    this.filteredCountries.forEach((country) => {
      if (country.numericCode == edition.numericCode) {
        country.alpha2Code = edition.alpha2Code;
        country.capital = edition.capital;
      }
    });
    console.log(
      this.filteredCountries.find(
        (country) => country.numericCode == edition.numericCode
      )
    );
  }
}
