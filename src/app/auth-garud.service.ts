
import { CanActivate, 
    ActivatedRouteSnapshot, 
    RouterStateSnapshot, 
    Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGarudService implements CanActivate{

  constructor(private authService: AuthService, private route: Router) {}
  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.isAuthenticate()
        .then(
          (authenticated: boolean) => {
            if (authenticated) {
              return true;
            } else {
              this.route.navigate(['/']);
            }
          }
        )
    }
  
}
