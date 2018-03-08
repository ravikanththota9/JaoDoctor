import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [
      RouterModule.forRoot(appRoutes, {
          preloadingStrategy: PreloadAllModules,
          useHash: true
      })
  ],
  exports: [RouterModule],
  providers: [],
  declarations: []
})

export class AppRoutingModule { }
