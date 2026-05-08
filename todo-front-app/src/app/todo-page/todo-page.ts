import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-todo-page',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './todo-page.html',
  styleUrl: './todo-page.scss',
})
export class TodoPage {}





// import {ChangeDetectionStrategy, Component} from '@angular/core';
// // import {MatButtonModule} from '@angular/material/button';
// // import {MatCardModule} from '@angular/material/card';

// /**
//  * @title Card overview
//  */
// @Component({
//   selector: 'card-overview-example',
//   templateUrl: './todo-page.html',
//   styleUrl: './todo-page.scss',
//   imports: [],
//   // changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class CardOverviewExample {}
