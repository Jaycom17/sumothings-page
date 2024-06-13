import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../services/Auth/auth-service.service';

export const authGuardClient: CanActivateFn = async (route, state) => {

  const authService = inject(AuthServiceService);
  const router = inject(Router);

  let res = await authService.isLoggedInCLient().toPromise();
  if (res.isLoggedIn) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};

export const authGuardAdmin: CanActivateFn = async () => {

    const authService = inject(AuthServiceService);
    const router = inject(Router);

    let res = await authService.isLoggedInAdmin().toPromise().catch(() => {
      router.navigate(['/admin-login']);
      return false;
    });
    
    if (res.isLoggedIn) {
      return true;
    }

    router.navigate(['/admin-login']);
    return false;
  };