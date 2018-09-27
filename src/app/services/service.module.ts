import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SidebarService,
  SharedService,
  SettingsService,
  UsuarioService,
  LoginGuardGuard,
  SubirArchivoService, HospitalService, MedicoService
} from './service.index';
import {HttpClientModule} from '@angular/common/http';
import {ModalUploadService} from '../components/modal-upload/modal-upload.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SidebarService, SharedService, SettingsService, UsuarioService, LoginGuardGuard,
    SubirArchivoService, ModalUploadService, HospitalService, MedicoService
  ],
  declarations: []
})
export class ServiceModule { }
