import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact/contact-us/contact-us.component';
import { CarersComponent } from './Carers/carers/carers.component';
import { ClientsComponent } from './Clients/clients/clients.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {path:'About',component:AboutComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Services',component:ServicesComponent},
  {path:'Contact',component:ContactUsComponent},
  {path:'Carers/Helpers',component:CarersComponent},
  {path:'Clients',component:ClientsComponent},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
