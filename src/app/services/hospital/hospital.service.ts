import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URL_SERVICIOS} from '../../config/config';
import {Hospital} from '../../models/hospital.model';
import {UsuarioService} from '../usuario/usuario.service';
import {ModalUploadService} from '../../components/modal-upload/modal-upload.service';

@Injectable()
export class HospitalService {
  totalHospital: number = 0;

  constructor(public http: HttpClient, public _usuarioService: UsuarioService,
              public _modalUploadService: ModalUploadService) {
  }

  cargarHospitales(desde: number = 0) {
    let url = URL_SERVICIOS + '/hospital?desde=' + desde;
    return this.http.get(url)
      .map((resp: any) => {
        this.totalHospital = resp.total;
        return resp.hospitales;
      });
  }

  obtenerHospital(id: string) {
    let url = URL_SERVICIOS + '/hospital/' + id;
    return this.http.get(url)
      .map((resp: any) => resp.hospital);
  }

  buscarHospital(termino: string) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/hospitales/' + termino;
    return this.http.get(url)
      .map((resp: any) => resp.hospitales);
  }

  actualizarHospital(hospital: Hospital) {
    let url = URL_SERVICIOS + '/hospital/' + hospital._id;
    url += '?token=' + this._usuarioService.token;
    return this.http.put(url, hospital)
      .map((resp: any) => {
        swal('Hospital actualizado', hospital.nombre, 'success');
        return resp.hospital;
      });
  }

  borrarHospital(id: string) {
    let url = URL_SERVICIOS + '/hospital/' + id;
    url += '?token=' + this._usuarioService.token;
    return this.http.delete(url)
      .map( resp => {
        swal('Hospital borrado', 'El hospital fue eliminado correctamente', 'success');
        return true;
      });
  }

  crearHospital(nombre: string) {
    let url = URL_SERVICIOS + '/hospital';
    url += '?token=' + this._usuarioService.token;
    return this.http.post(url, {nombre})
      .map( (resp: any) =>  resp.hospital);
  }
}
