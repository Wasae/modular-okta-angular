import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './directives/footer/footer.component';
import { NavBarComponent } from './directives/nav-bar/nav-bar.component';
import { HomeContentComponent } from './directives/home-content/home-content.component';
import { LoaderComponent } from './directives/loader/loader.component';
import { HeroComponent } from './directives/hero/hero.component';
import { SideBarComponent } from './directives/side-bar/side-bar.component';
import { CrudspaService } from './services/crudspa.service';


@NgModule({
  declarations: [
    FooterComponent,
    NavBarComponent,
    HomeContentComponent,
    LoaderComponent,
    HeroComponent,
    SideBarComponent,
  ],
  exports:[
    FooterComponent,
    NavBarComponent,
    HomeContentComponent,
    LoaderComponent,
    HeroComponent,
    SideBarComponent
  ],
  providers:[
    CrudspaService
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
