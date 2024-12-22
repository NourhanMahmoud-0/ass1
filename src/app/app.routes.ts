import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"about",
    component: AboutComponent
  },
  {
    path:"contact",
    component: ContactComponent
  },
  {
    path:"portfolio",
    component: PortfolioComponent
  },


  {
    path:"**",
    component: NotfoundComponent
  }
];
