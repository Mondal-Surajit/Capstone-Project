import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  imports: [
  ],
  declarations: [ SearchFilterPipe ],
  exports: [
    CommonModule,
    FormsModule,
    SearchFilterPipe
  ]

})
export class SharedModule { }
