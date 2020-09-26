import { ThrowStmt } from '@angular/compiler';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChange,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css'],
})
export class DetallePaisComponent implements OnInit {
  @Input() country: any;
  @Output() emitEditCountry: EventEmitter<any> = new EventEmitter<any>();

  public code: string;
  public capital: string;
  public show: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.country) {
      this.show = true;
      this.code = this.country.alpha2Code;
      this.capital = this.country.capital;
    }
  }

  guardarPais(): void {
    this.emitEditCountry.emit({
      alpha2Code: this.code,
      capital: this.capital,
      numericCode: this.country.numericCode,
    });
    this.country.isEditing = false;
  }

  cancelar(): void {
    this.country.isEditing = false;
  }
}
