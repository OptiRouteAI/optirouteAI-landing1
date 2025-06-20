import { Routes } from '@angular/router';


// Asegúrate de que apunte a login.component.ts
import { LandingPage  } from './landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPage},
  { path: 'landing-page', component: LandingPage}, // <--- Revisa la coma al final y que 'component' apunte a LoginComponent
  
  { path: '**', redirectTo: '' } // Esto es opcional, redirecciona a /login por defecto
  // Si tienes otras rutas, asegúrate de que cada objeto de ruta termine en coma (excepto el último)
  // { path: 'dashboard', component: DashboardComponent },
];