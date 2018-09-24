import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SidebarService,
  SharedService,
  SettingsService,
  UsuarioService,
  LoginGuardGuard,
  SubirArchivoService
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
    SubirArchivoService, ModalUploadService
  ],
  declarations: []
})
export class ServiceModule { }
