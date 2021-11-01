import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { GachyiLandComponent } from './gachyi-land/gachyi-land.component';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { CapsulesSectionComponent } from './capsules-section/capsules-section.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { RoadMapComponent } from './road-map/road-map.component';
import { GetItKnowComponent } from './get-it-know/get-it-know.component';
import { SocialComponent } from './social/social.component';
import { MatIconModule } from '@angular/material/icon';
import { TeamComponent } from './team/team.component';


@NgModule({
  declarations: [HomeComponent, GachyiLandComponent, CapsulesSectionComponent, HowItWorkComponent, RoadMapComponent, GetItKnowComponent, SocialComponent, TeamComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatButtonModule,
    MatGridListModule,
    CarouselModule,
    MatIconModule
  ]
})
export class HomeModule { }
