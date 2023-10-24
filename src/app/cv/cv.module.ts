import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProfilComponent } from '../components/card-profil/card-profil.component';
import { AddCvComponent } from './add-cv/add-cv.component';
import { CvCardComponent } from './cv-card/cv-card.component';
import { CvComponent } from './cv/cv.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { MasterDetailsComponent } from './master-details/master-details.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CvRoutingModule } from './cv-routing.module';

@NgModule({
  // Composants, Pipes et Directives associés au Module
  declarations: [
    AddCvComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailsCvComponent,
    CvCardComponent,
    EmbaucheComponent,
    DefaultImagePipe,
    MasterDetailsComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule, CvRoutingModule],
})
export class CvModule {}
