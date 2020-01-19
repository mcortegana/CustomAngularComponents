import {Component, OnInit} from '@angular/core';
import {setTheme} from 'ngx-bootstrap';
import {CustomData} from './components/custom-input-group/interfaces/custom-data';
import {TipoOpcion} from './components/custom-input-group/enums/tipo-opcion.enum';

@Component({
  selector: 'app-bs-components',
  templateUrl: './bs-components.component.html',
  styles: []
})
export class BsComponentsComponent implements OnInit {

  customData: CustomData[] = [
    {
      descripcion: 'DNI',
      placeholder: 'Seleccione DNI',
      tipoOpcion: TipoOpcion.TEXTO
    },
    {
      descripcion: 'Nombres',
      placeholder: 'Ingrese el nombre',
      tipoOpcion: TipoOpcion.TEXTO
    },
    {
      descripcion: 'Correo',
      placeholder: 'Ingrese correo',
      tipoOpcion: TipoOpcion.TEXTO
    },
    {
      descripcion: 'Estado',
      tipoOpcion: TipoOpcion.COMBO,
      placeholder: '',
      data: [
        {codigo: '001', descripcion: 'PENDIENTE'},
        {codigo: '002', descripcion: 'EN PROCESO'},
        {codigo: '003', descripcion: 'FINALIZADO'}
      ]
    }
  ];

  constructor() {
    BsComponentsComponent.setBsTheme();
  }

  private static setBsTheme(): void {
    setTheme('bs4');
  }

  ngOnInit() {
  }

}
