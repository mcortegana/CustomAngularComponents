import {DataArray} from './data-array';
import {TipoOpcion} from '../enums/tipo-opcion.enum';

export interface CustomData {
  tipoOpcion: TipoOpcion;
  descripcion: string;
  placeholder: string;
  codigo?: any;
  data?: Array<DataArray>;
}
