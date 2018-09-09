import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UsuarioService} from '../usuario/usuario.service';


@Injectable()
export class LoginGuardGuard implements CanActivate {


  constructor(public _usurioServices: UsuarioService, public router: Router) {
  }

  canActivate(): boolean {
    if (this._usurioServices.estaLogueado()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
