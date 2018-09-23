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

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SidebarService, SharedService, SettingsService, UsuarioService, LoginGuardGuard,
    SubirArchivoService
  ],
  declarations: []
})
export class ServiceModule { }
