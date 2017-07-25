import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  imports : [
    CommonModule,
    FormsModule,
    SearchRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB2_PEkwGTS1sAVOdzvXXp9KKSHRGKTidk'
    })
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
