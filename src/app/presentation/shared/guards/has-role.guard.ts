import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HasRoleGuard implements CanActivate, CanLoad {
  canLoad(route: Route): boolean | Observable<boolean> {
    return this.allowedRoles(route);
  }
  canActivate(route: ActivatedRouteSnapshot): boolean | Observable<boolean> {
    return this.allowedRoles(route);
  }

  private allowedRoles(route: Route | ActivatedRouteSnapshot) {
    const allowedRoles = route.data?.['allowedRoles'];
    const userRole = localStorage.getItem('role');
    return Boolean(userRole && allowedRoles.includes(userRole === 'Vendor'));
  }
}

export function allowedRoles(allowedRoles: string[]) {
  return () => {
    const userRole = localStorage.getItem('role');
    return (
      userRole &&
      (userRole === 'Vendor'
        ? allowedRoles.includes('Vendor')
        : allowedRoles.includes('Customer'))
    );
  };
}
