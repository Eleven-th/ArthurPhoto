import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatStepperModule, MatFormFieldModule, MatInputModule, } from '@angular/material';
import { MatListModule, MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import { MatCardModule, MatCheckboxModule, MatGridListModule, MatMenuModule, } from '@angular/material';
import { MatAutocompleteModule, } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
  ],
})
export class SharedMaterialModule { }
