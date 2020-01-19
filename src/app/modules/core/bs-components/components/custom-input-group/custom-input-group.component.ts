import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CustomData} from './interfaces/custom-data';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {TipoOpcion} from './enums/tipo-opcion.enum';
import {InputGroupConfig} from './interfaces/input-group-config';
import {FiltroSalida} from './interfaces/filtro-salida';

@Component({
  selector: 'app-custom-input-group',
  templateUrl: './custom-input-group.component.html',
  styleUrls: ['./custom-input-group.component.css']
})
export class CustomInputGroupComponent implements OnInit {

  constructor() {
    this.iniciarConfiguracion();
  }

  @Output() busquedaSimpleEvent = new EventEmitter();
  @Output() mostrarBusquedaAvanzadaEvent = new EventEmitter();

  @Input() textButton: string = '';
  @Input() customDataList: Array<CustomData>;
  @Input() icon: any = faSearch;
  @Input() busquedaAvanzada: boolean = true;
  @Input() customConfig: InputGroupConfig;

  opcionSeleccionada: CustomData = {descripcion: 'Filtro 1', placeholder: 'Seleccione Filtro 1', tipoOpcion: TipoOpcion.TEXTO};
  enabledButton: boolean = true;
  valorCombo: any = null;
  textoIngresado: string;
  filtroSalida: FiltroSalida;

  private static validaParametro(parametro: any): boolean {
    return (parametro !== null && parametro !== undefined);
  }

  ngOnInit() {
    this.opcionSeleccionada = this.customDataList[0];
  }

  private iniciarConfiguracion(): void {
    if (this.customConfig !== null && this.customConfig !== undefined) {
      this.textButton = CustomInputGroupComponent.validaParametro(this.customConfig.textButton) ? this.customConfig.textButton : '';
      this.customDataList = CustomInputGroupComponent.validaParametro(this.customConfig.customDataList)
        ? this.customConfig.customDataList : [];
      this.busquedaAvanzada = CustomInputGroupComponent.validaParametro(this.customConfig.busquedaAvanzada)
        ? this.customConfig.busquedaAvanzada : false;
      this.icon = CustomInputGroupComponent.validaParametro(this.customConfig.icon) ? this.customConfig.icon : faSearch;
    }
  }

  public onBuscar(): void {
    if (this.opcionSeleccionada.tipoOpcion === TipoOpcion.TEXTO) {
      this.filtroSalida = {
        value: this.textoIngresado,
        tipoFiltro: this.opcionSeleccionada.descripcion
      };
    } else if (this.opcionSeleccionada.tipoOpcion === TipoOpcion.COMBO) {
      this.filtroSalida = {
        value: this.valorCombo,
        tipoFiltro: this.opcionSeleccionada.descripcion
      };
    }
    console.log(this.filtroSalida);
    this.busquedaSimpleEvent.emit(this.filtroSalida);
  }

  public onChangeCombo(): void {
    this.validarBotonBuscar();
  }

  public onChangeTextoIngresado(): void {
    this.validarBotonBuscar();
  }

  public onMostrarBusquedaAvanzada(): void {
    console.log('Mostrar busqueda avanzada');
    this.mostrarBusquedaAvanzadaEvent.emit();
  }

  public onSeleccionarOpcion(opcion: CustomData, nroOpcion: number): void {
    this.enabledButton = true;
    this.textoIngresado = null;
    this.valorCombo = null;
    this.filtroSalida = null;
    this.opcionSeleccionada = opcion;
  }

  private validarBotonBuscar(): void {
    if (this.opcionSeleccionada.tipoOpcion === TipoOpcion.TEXTO) {
      this.enabledButton = !(this.textoIngresado !== null && this.textoIngresado !== undefined && this.textoIngresado !== '');
    } else if (this.opcionSeleccionada.tipoOpcion === TipoOpcion.COMBO) {
      this.enabledButton = !(this.valorCombo !== null && this.valorCombo !== undefined);
    }
  }

}
