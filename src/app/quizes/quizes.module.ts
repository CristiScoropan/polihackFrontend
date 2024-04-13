import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { QuizesComponent } from './quizes.component';

@NgModule({
  declarations: [QuizesComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButton
  ]
})
export class QuizesModule { }
