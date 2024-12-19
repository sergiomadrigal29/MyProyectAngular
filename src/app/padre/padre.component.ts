import { ServicioFamiliarService } from './../servicio-familiar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  standalone: false,

  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css',
})
export class PadreComponent implements OnInit {
  hermanoGrande?: string;

  constructor(private _servicioFamiliar: ServicioFamiliarService) {}

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoGrande('juan');
    this.hermanoGrande = this._servicioFamiliar.getHermanoGrande();
  }

  saludar() {
    this._servicioFamiliar.saludar(
      this._servicioFamiliar.getHermanoPequeno() || ''
    );
  }

  preguntar() {
    console.log(this._servicioFamiliar.preguntaPorHijo());
  }

  numero: number = 0;

  incrementar() {
    this.numero++;
  }

  descrementar() {
    this.numero--;
  }
}
