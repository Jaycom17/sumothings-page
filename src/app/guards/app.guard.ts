import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../services/Auth/auth-service.service';


/**
 * Función de guardia para la autenticación del cliente.
 * Comprueba si el cliente está autenticado antes de permitir el acceso a una ruta.
 * Si el cliente no está autenticado, redirige a la página de inicio de sesión.
 * @param route - La ruta activada.
 * @param state - El estado actual de la aplicación.
 * @returns Un valor booleano que indica si se permite el acceso a la ruta.
 */
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

/**
 * Función de guardia para la autenticación de administradores.
 * Comprueba si el usuario actual está autenticado como administrador.
 * Si el usuario no está autenticado como administrador, redirige a la página de inicio de sesión de administrador.
 * @returns Un valor booleano que indica si el usuario está autenticado como administrador.
 */
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