import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {UsuarioService} from '../usuario/usuario.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(public _usuarioServices: UsuarioService) {
  }

  canActivate() {
    if (this._usuarioServices.usuario.role === 'ADMIN_ROLE') {
      return true;
    } else {
      console.log('Bloqueado por el admin guard');
      this._usuarioServices.logout();
      return false;
    }
  }
}
