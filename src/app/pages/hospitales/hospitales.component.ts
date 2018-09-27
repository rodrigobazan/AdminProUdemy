import {Component, OnInit} from '@angular/core';
import {Hospital} from '../../models/hospital.model';
import {ModalUploadService} from '../../components/modal-upload/modal-upload.service';
import {HospitalService} from '../../services/service.index';

declare var swal: any;

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {
  hospitales: Hospital[] = [];
  cargando: boolean = true;
  totalRegistros: number = 0;
  desde: number = 0;

  constructor(public _hospitalService: HospitalService,
              public _modalUploadService: ModalUploadService) {
  }

  ngOnInit() {
    this.cargarHospitales();
    this._modalUploadService.notificacion
      .subscribe(() => this.cargarHospitales());
  }

  buscarHospital(termino: string) {
    if (termino.length <= 0) {
      this.cargarHospitales();
      return;
    }
    this.cargando = true;
    this._hospitalService.buscarHospital(termino)
      .subscribe((hospitales: Hospital[]) => {
        this.hospitales = hospitales;
        this.cargando = false;
      });
  }

  obtenerHospital(id: string) {}

  crearHospital() {
    swal({
      title: 'Crear hospital',
      text: 'Ingrese el nombre del hospital',
      content: 'input',
      icon: 'info',
      buttons: true,
      dangerMode: true
    }).then( (valor: string) => {
      if (!valor || valor.length === 0) {
        return;
      }
      this._hospitalService.crearHospital(valor)
        .subscribe(() => {
          this.cargando = true;
          this.cargarHospitales();
        });
    });

  }

  cargarHospitales() {
    this.cargando = true;
    this._hospitalService.cargarHospitales(this.desde)
      .subscribe((resp: any) => {
        this.hospitales = resp;
        this.cargando = false;
      });
  }

  guardarHospital(hospital: Hospital) {
    this._hospitalService.actualizarHospital(hospital)
      .subscribe();
  }

  borrarHospital(hospital: Hospital) {
    swal({
      title: 'Esta Seguro?',
      text: 'Esta a punto de borrar a ' + hospital.nombre,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then(borrar => {
        if (borrar) {
          this._hospitalService.borrarHospital(hospital._id)
            .subscribe(borrado => {
              this.cargarHospitales();
            });
        }
      });
  }

  actualizarImagen(hospital: Hospital) {
    this._modalUploadService.mostrarModal('hospitales', hospital._id);
  }
}
