import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';

const googleMapsParams = {
  apiKey: 'AIzaSyB2_PEkwGTS1sAVOdzvXXp9KKSHRGKTidk',
  libraries: ['places'],
};

@NgModule({
  imports : [
    CommonModule,
    FormsModule,
    SearchRoutingModule,
    AgmCoreModule.forRoot(googleMapsParams)
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
