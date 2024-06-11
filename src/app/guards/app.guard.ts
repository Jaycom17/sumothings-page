import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../services/Auth/auth-service.service';
import { HttpResponse } from '@angular/common/http';
import { lastValueFrom, firstValueFrom } from 'rxjs'; 

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
    let valueBol=false;
    let responseStatus:any= null;
    let res:any = await lastValueFrom(authService.isLoggedInAdmin()).catch((response: HttpResponse<any>) => {
      responseStatus=response;
    })

    if (res === undefined){
      if(responseStatus.status === 401){
        router.navigate(['/admin-login']);
        valueBol = false;
      }
    }else if (res.isLoggedIn) {
      valueBol = true;
    }

  return valueBol; 

  };