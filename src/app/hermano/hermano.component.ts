import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  standalone: false,

  templateUrl: './hermano.component.html',
  styleUrl: './hermano.component.css',
})
export class HermanoComponent implements OnInit {
  constructor(private _servicioFamiliar: ServicioFamiliarService) {}
  nombre?: string;
  ngOnInit(): void {
    this._servicioFamiliar.setHermanoPequeno('pedro');
    this.nombre = this._servicioFamiliar.getHermanoPequeno();
  }

  saludar() {
    this._servicioFamiliar.saludar(
      this._servicioFamiliar.getHermanoGrande() || ''
    );
  }
  preguntar() {
    console.log(this._servicioFamiliar.preguntaPorHijo());
  }
}
