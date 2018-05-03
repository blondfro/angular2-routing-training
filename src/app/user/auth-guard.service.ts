import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad,
        Route, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()

export class AuthGuard implements CanActivate, CanLoad {

    constructor(private authService: AuthService,
                private route: Router) {}

    canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkLoggedIn(state.url);
    }
    canLoad(route: Route): boolean {
        return this.checkLoggedIn(route.path);
    }
    checkLoggedIn(url: string): boolean {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.authService.redirectUrl = url;
        this.route.navigate(['/login']);
        return false;
    }
}