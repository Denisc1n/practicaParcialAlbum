import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.component.html',
  styleUrls: ['./regiones.component.css'],
})
export class RegionesComponent implements OnInit {
  @Output() emitRegion: EventEmitter<any> = new EventEmitter<any>();
  region: string = '';
  constructor() {}

  ngOnInit(): void {}

  emitir(region: string) {
    this.region = region;
    this.emitRegion.emit(region);
  }
}
