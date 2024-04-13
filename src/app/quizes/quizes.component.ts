import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrl: './quizes.component.css'
})
export class QuizesComponent {
  private breakpointObserver = inject(BreakpointObserver);

  cards = [
        { name: 'Card 1', description: "bla bla", id: 1,  cols: 1, rows: 1 },
        { name: 'Card 1', description: "bla bla", id: 2,  cols: 1, rows: 1 },
        { name: 'Card 1', description: "bla bla", id: 3,  cols: 1, rows: 1 },
        { name: 'Card 1', description: "bla bla", id: 4,  cols: 1, rows: 1 },
      ];
}
